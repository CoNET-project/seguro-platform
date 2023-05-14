import React, {useEffect} from 'react'
import {logger} from '../../logger'

const InjectDom = () => {
	useEffect(() => {
		logger ('InjectDom')
	})
	
	return (
		<div>
		</div>
	)
}

export default InjectDom