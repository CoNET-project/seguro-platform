import React, {useState, useContext, useEffect, useCallback} from 'react'
import ToDoContext, {Todo} from './TodoContext'
import {todo} from './index'
import Grid from '@mui/material/Grid'
import TabArea, {StyledTab} from './TabArea'
import Tabs from '@mui/material/Tabs'
import { Box} from '@mui/system'
import SearchPage from './searchPage'

function a11yProps(index: number) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	  key: `simple-tab-${index}`
	}
}

const ShowSearchTextInput = () => {
	const todoContext = useContext(ToDoContext)
	const [currectTodo, setCurrentTodo] = useState<Todo>(todoContext.todos[0])
	const [currentTab, setCurrentTab] = useState(0)
	
	useEffect(() => {
		
		if (currentTab >= todoContext.todos.length) {
			const current = todoContext.todos.length -1
			const todo = todoContext.todos[current]
			setCurrentTodo(todo)
			setCurrentTab(current)
		}
		console.log (todoContext.todos)
	}, [todoContext.todos])

	const addContent = useCallback( () => {
		const _todo = todo()
		todoContext.addOrChangTodo(_todo)
		setCurrentTodo (_todo)
	}, [todoContext.todos])

	const handleChange = useCallback(
		(event: React.SyntheticEvent, newValue: number) => {

		//		check current change


		const index = todoContext.todos.findIndex (n => n.keyID === currectTodo.keyID)
		if (index > -1) {
			const todo = todoContext.todos[index]
			if ( currectTodo.searchText != todo.searchText) {
				todoContext.addOrChangTodo (currectTodo)
			}

		}
		setCurrentTab(newValue)
		setCurrentTodo (todoContext.todos[newValue])
	}, [todoContext.todos]) 

	const plusTab = () => {

		return (
			//	@ts-ignore
			<StyledTab
				label='+' {...a11yProps(todoContext.todos.length+1)}
				sx={{minWidth: '2rem', borderRadius: '1rem', minHeight: '2rem', fontSize:'larger'}}

				onClick={addContent}
			>
			</StyledTab>
		)
	}

	return (
		<Grid container item xs={12} width="100%" sx={{backgroundColor:'#969696', paddingTop: '0.2rem'}}>
	
			<Box sx={{ width: '100%' }}>
				<Box>
					<Tabs variant="scrollable" value={currentTab} 
						allowScrollButtonsMobile  
						aria-label="CoNET Browser Tabs Bar" 
						scrollButtons="auto" sx={{minHeight: '32px'}} 
						onChange={handleChange}
					>
						{
							todoContext.todos.length &&
							todoContext.todos.map( (todo: Todo, index: number) => 
								TabArea (todo, index, currectTodo)
							)
						}
						{
							plusTab()
						}
					</Tabs>

				</Box>
				<Box sx={{ borderBottom: 0,backgroundColor: 'white' }}>
				{
					todoContext.todos.length &&
						todoContext.todos.map((todo, index) => SearchPage(todo, index, currentTab, setCurrentTodo))
						
				}
				</Box>
			</Box>

		</Grid>
	)
}

export default ShowSearchTextInput