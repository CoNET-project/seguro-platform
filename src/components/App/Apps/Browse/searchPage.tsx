import ToDoContext, {Todo} from './TodoContext'
import {useState, useContext, useCallback, useEffect} from 'react'
import { Box} from '@mui/system'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import SearchInput from './SearchInput'
import styled from "styled-components"
import Paper from '@mui/material/Paper'
import mainImage from '../../../../assets/logo/conetBrowser.svg'


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
	min-height: 99vh;
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

	const onUpdate = ( text: string ) => {
		const remote = new URL(text)
		if (!remote.origin ) {
			return
		}
		const __url = location.origin + remote.pathname + '/_/CoNET_proxyUrl/' + text
		// const _url = new URL(__url)
		// const remoteUrl = new URL(text)
		// const uu = remoteUrl.href.replace(remoteUrl.origin, _url.origin)
		// const newUrl = new URL(uu)
		// newUrl.searchParams.set('CoNET_proxyUrl', text)

		setCurrentTodo(oldValue => {
			oldValue.searchText = text
			oldValue.proxyEntryUrl = __url
			return oldValue
		})
		todoContext.addOrChangTodo (todo)
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
				<Grid item xs justifyContent="center" alignItems="center">
					<Grid container justifyContent="center" alignItems="center" sx={{ minHeight: '90vh'}}>
						{
							!todo?.proxyEntryUrl &&
							<Item elevation={0} >
								<StyledMainIMG src={mainImage} />
							</Item>
						}
						{
							todo?.proxyEntryUrl &&
							<IFRAME src={todo?.proxyEntryUrl} />
						}
					</Grid>
				</Grid>
			</Grid>
		</TabPanel>
	)
}

export default SearchPage



