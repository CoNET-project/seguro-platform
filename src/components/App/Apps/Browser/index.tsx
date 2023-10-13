import {useState, useRef, useEffect, useCallback} from 'react'
import TodoContext, {Todo} from './TodoContext'
import TodoList from './showTodoList'
import {v4} from 'uuid'
import TippyDropdownTab from './TippyDropdown'

export const todo = () => {
	return {
		searchText: '',
		keyID: v4()
	}
}

const TodoMain = () => {
	const [todos, setTodos] = useState<Todo[]>([todo()])

	const addOrChangTodo = useCallback((_todo: Todo) => {
		setTodos( oldValue => {
			const index = oldValue.findIndex(n => n.keyID === _todo.keyID)
			if ( index < 0) {
				return [...oldValue, _todo]
			}
			const data = oldValue[index]
			data.searchText = _todo.searchText
			data.proxyEntryUrl = _todo.proxyEntryUrl
			return [...oldValue]
		})
	}, [todos])

	const deleteTodo = useCallback((_todo: Todo) => {
		const index = todos.findIndex(n => n.keyID === _todo.keyID)
		if ( index < 0 ) {
			return
		}
		setTodos( oldValue => oldValue.filter(t => t.keyID !== _todo.keyID))
	}, [todos])

	const showIFrame = useCallback((_todo: Todo, proxyurl: string) => {
		setTodos( oldValue => {
			const index = oldValue.findIndex(n => n.keyID === _todo.keyID)
			if ( index > -1) {
				const data = oldValue[index]
				data.proxyEntryUrl = proxyurl
			}
			return [...oldValue]
		})

	}, [todos])

	return (
		<TodoContext.Provider value={{
			showIFrame,
			todos,
			addOrChangTodo,
			deleteTodo
		}}>
			<TodoList />
			<TippyDropdownTab />
		</TodoContext.Provider>
	)
}

export default TodoMain