import {createContext} from 'react'

export interface Todo {
	searchText: string
	keyID: string
	proxyEntryUrl?: string
}


interface TodosContextProps {
	todos: Todo[]
	addOrChangTodo: (todo: Todo) => void
	deleteTodo: (todo: Todo) => void
	showIFrame: (todo: Todo, proxyEntryUrl: string) => void
}

const TodoContext = createContext<TodosContextProps> ({

	todos:[],
	addOrChangTodo: () => {},
	deleteTodo: () => {},
	showIFrame: () => {}

})

export default TodoContext