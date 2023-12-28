import ToDoContext, {Todo} from './TodoContext'
import { useContext, useRef, useEffect, useState, useCallback } from 'react'
import { Box} from '@mui/material'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchInput from './SearchInput'
import styled from "styled-components"
import Paper from '@mui/material/Paper'
import mainImage from '../../../../assets/logo/conetBrowser.svg'
import useAppState from '../../../../store/appState/useAppState'
import CustomIframe from './customsIframe'
import {logger} from '../../logger'
import {v4} from 'uuid'


interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}


const StyledMainIMG = styled.img`
	width:100%;
	height: auto;
`



const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props
  
	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
			<Box sx={{padding:'0.2rem'}}>
					<Typography component='span'>{children}</Typography>
			</Box>
			)}
		</div>
	)
}

const Item = styled(Paper)(({ theme }) => ({
	textAlign: 'center'
}))


const InjetDom = () => {
    return (
        <div>
            <p style={{color: 'red'}}>Testing to see if my component renders!</p>
        </div>
    )
}

const urlRegExp = /^(?!.*?_.*?)(?!(?:[\d\w]+?\.)?\-[\w\d\.\-]*?)(?![\w\d]+?\-\.(?:[\d\w\.\-]+?))(?=[\w\d])(?=[\w\d\.\-]*?\.+[\w\d\.\-]*?)(?![\w\d\.\-]{254})(?!(?:\.?[\w\d\-\.]*?[\w\d\-]{64,}\.)+?)[\w\d\.\-]+?(?<![\w\d\-\.]*?\.[\d]+?)(?<=[\w\d\-]{2,})(?<![\w\d\-]{25})$/
const localIpAddress = /^(?:127\.|0?10\.|172\.0?1[6-9]\.|172\.0?2[0-9]\.|172\.0?3[01]\.|192\.168\.|169\.254\.|::1|[fF][cCdD][0-9a-fA-F]{2}:|[fF][eE][89aAbB][0-9a-fA-F]:)/
const ipV6Check = /^(?=\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$)(?:(?:25[0-5]|[12][0-4][0-9]|1[5-9][0-9]|[1-9]?[0-9])\.?){4}$|(?=^(?:[0-9a-f]{0,4}:){2,7}[0-9a-f]{0,4}$)(?![^:]*::.+::[^:]*$)(?:(?=.*::.*)|(?=\w+:\w+:\w+:\w+:\w+:\w+:\w+:\w+))(?:(?:^|:)(?:[0-9a-f]{4}|[1-9a-f][0-9a-f]{0,3})){0,8}(?:::(?:[0-9a-f]{1,4}(?:$|:)){0,6})?$/

const SearchPage = (todo: Todo, index: number, currentTab: number, setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>) => {
	const [currectUrl, setCurrectUrl] = useState('')
	const todoContext = useContext(ToDoContext)
	const {isTouchDevice} = useAppState()
	const onUpdate = ( text: string ) => {

		//		Search input
		const spaceSplit = text.split(/ /)
		const dotSplit = text.split(/\./)
		if (spaceSplit.length < 2 || dotSplit.length > 1) {
			logger(`urlRegExp.test(text) = [${urlRegExp.test(text)}]`)
			logger(`!localIpAddress.test(text) = [${!localIpAddress.test(text)}]`)
			logger(`!ipV6Check.test(text) = [${!ipV6Check.test(text)}]`)
			if (urlRegExp.test(text) || !localIpAddress.test(text) || !ipV6Check.test(text)) {
				
				if (!/^https?\:\/\//.test(text)) {
					text = `https://${text}`
				}
			}
		}

		let remote = new URL(text)
		
		if (remote.origin === location.origin && todo.searchText) {
			const _remote = new URL(todo.searchText)
			text = text.replace(location.origin, _remote.origin)
		}
		const remotePath = /\/$/.test(remote.pathname) ? remote.pathname : remote.pathname + '/'
		const __url = location.origin + '/api' + remotePath + '_/CoNET_proxyUrl/' + text

		setCurrentTodo( oldValue => {
			oldValue.searchText = text
			oldValue.proxyEntryUrl = __url
			return oldValue
		})

		todoContext.addOrChangTodo (todo)
		setCurrectUrl (__url)
	}

	const iframeURLChange = (e: React.SyntheticEvent<HTMLIFrameElement, Event>, callback: (str: string) => void) => {

		const ifrm = e.currentTarget.contentWindow || e.currentTarget.contentDocument || 
			//	@ts-ignore
			e.currentTarget.contentDocument.document 
	
		var unloadHandler = () => {
			// Timeout needed because the URL changes immediately after
			// the `unload` event is dispatched.
			
				
				if (ifrm.location.href === todo.proxyEntryUrl) {
					return
				}

				const remote = new URL(ifrm.location.href)
				ifrm.removeEventListener("unload", unloadHandler)

				if (remote.origin === location.origin) {
					console.log (` ############################## beforeunload STOP location ##############################`)
					console.log (ifrm.location.href)
					console.log (` ############################## beforeunload STOP location ##############################`)
					callback(ifrm.location.href)
				}
			
		   
		}
		//ifrm.addEventListener("beforeunload", unloadHandler)
		ifrm.addEventListener("unload", () => {setTimeout (unloadHandler, 0)})
		console.log (` ############################## addEventListener beforeunload  ##############################`)
		
	}

	return (
		<TabPanel value={currentTab} index={index} key={`TabPanel-item-${index}`}>				
			<Grid container direction="column" >
				<Grid item xs>
					<SearchInput defaultTodo={todo} onUpdate={onUpdate} onChanged= {(test: string)=> {
						setCurrentTodo(oldValue => {
							oldValue.searchText = test
							return oldValue
						})
					}}/>
				</Grid>
				<Grid item xs justifyContent="center" alignItems="center" >
					<Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '90vh'}}>
						{
							!currectUrl &&
							<Item elevation={0} >
								<StyledMainIMG src={mainImage} />
							</Item>
						}
						{
							currectUrl &&

							<CustomIframe id={todo.keyID} src={currectUrl} no-referrer
								

							/>

						}
					</Grid>
				</Grid>
			</Grid>
		</TabPanel>
	)
}

export default SearchPage



