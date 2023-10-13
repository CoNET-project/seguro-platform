import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from "styled-components"
import {logger} from '../../logger'

type pref = (children: any, props: any ) => ReactJSXElement

const IFRAME = styled.iframe`
    border: none;
	width: 100%;
	min-height: 95vh;
	margin: 0; 
	padding: 0;
`
const replaceUrl = (url: string, remoteSite: URL ) => {
	const remote = new URL(url)
	if (!remote.origin) {
		return url
	}

	const matchedUrl = new RegExp('^' + location.origin + '/api', 'i')
	if (matchedUrl.test(url)) {
		return url
	}

	const _url = location.origin + '/api' + remote.pathname + '_/CoNET_proxyUrl/' + url
	return _url
	
}

const checkLinkedUrl = (e: React.SyntheticEvent<HTMLIFrameElement, Event>) => {
	const ifram = e.currentTarget.contentDocument
	const remoteSite = new URL (e.currentTarget.src.split('_/CoNET_proxyUrl/')[1])
	if (!ifram) {
		return logger('searchPage.tsx', 'checkLinkedUrl ifram is NULL' )
	}
	const aTag: any = ifram.getElementsByTagName("a")
	
	logger('searchPage.tsx','checkLinkedUrl Fire!', ifram )

	for (var _aTag of aTag) {
		_aTag.target = '_self'
		if (/^http/.test(_aTag.href)) {
			const aTagUrl = new URL(_aTag.href)
			if (aTagUrl.origin !== location.origin) {
				//	location.origin + '/api' + remotePath + '_/CoNET_proxyUrl/' + text
				let remotepath = aTagUrl.pathname
				if ( /\.\w+$/.test(aTagUrl.pathname)) {
					const kk = remotepath.split('/')
					kk.pop()
					remotepath = kk.join('/')
				}
				 
				_aTag.href = location.origin + '/api' + remotepath + '_/CoNET_proxyUrl/' + _aTag.href
			}
		} else {
			let remotepath = _aTag.href
			if ( /\.\w+$/.test(remotepath.pathname)) {
				const kk = remotepath.split('/')
				kk.pop()
				remotepath = kk.join('/')
			}
			_aTag.href = location.origin + '/api' + remotepath + '_/CoNET_proxyUrl/' + remoteSite.origin + _aTag.href
		}
		
		// if (aTagUrl.origin !== location.origin) {
		// 	_aTag.href = replaceUrl(_aTag.href, remoteSite)
		// }
		
		logger (_aTag)
	}
}

const CustomIframe: pref = ({
	children,
	...props
}) => {
	const [contentRef, setContentRef] = useState<HTMLIFrameElement|null>(null)

	useEffect(() => {
		logger ('CustomIframe',checkLinkedUrl)
	})
	
	const mountNode =
		contentRef?.contentWindow?.document?.body

	return (
		<IFRAME {...props} ref={setContentRef}
			onLoad={ checkLinkedUrl }
		>
			{mountNode && createPortal(children, mountNode)}
		</IFRAME>
	)
}

export default CustomIframe