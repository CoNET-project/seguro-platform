import ToDoContext, {Todo} from './TodoContext'
import { useContext, useRef } from 'react'
import { Box} from '@mui/system'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchInput from './SearchInput'
import styled from "styled-components"
import Paper from '@mui/material/Paper'
import mainImage from '../../../../assets/logo/conetBrowser.svg'
import useAppState from '../../../../store/appState/useAppState'
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

const IFRAME = styled.iframe`
    border: none;
	width: 100%;
	min-height: 95vh;
	margin: 0; 
	padding: 0;
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



const SearchPage = (todo: Todo, index: number, currentTab: number, setCurrentTodo: React.Dispatch<React.SetStateAction<Todo>>) => {

	const todoContext = useContext(ToDoContext)
	const {isTouchDevice} = useAppState()
	const iFrameRef = useRef<HTMLIFrameElement> (null)

	const onUpdate = ( text: string ) => {

		//		Search input
		if (!/^http/.test(text)) {
			text = `https://search.brave.com/search?q=${text}&source=${isTouchDevice ? 'mobile': 'desktop'}`
		}

		let remote = new URL(text)
		if (remote.origin === location.origin && todo.searchText) {
			const _remote = new URL(todo.searchText)
			text = text.replace(location.origin, _remote.origin)
		}
		const remotePath = /\/$/.test(remote.pathname) ? remote.pathname : remote.pathname + '/'
		const __url = location.origin + remotePath + '_/CoNET_proxyUrl/' + text

		setCurrentTodo( oldValue => {
			oldValue.searchText = text
			oldValue.proxyEntryUrl = __url
			return oldValue
		})
		if (iFrameRef.current) {
			iFrameRef.current.src = __url
		}
		
		todoContext.addOrChangTodo (todo)
		
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
							!todo.proxyEntryUrl &&
							<Item elevation={0} >
								<StyledMainIMG src={mainImage} />
							</Item>
						}
						{
							todo.proxyEntryUrl &&
							<IFRAME id={todo.keyID} src={todo.proxyEntryUrl}
								onLoad={
									e=> iframeURLChange(e, onUpdate)
								}
							/>
						}
					</Grid>
				</Grid>
			</Grid>
		</TabPanel>
	)
}

export default SearchPage



