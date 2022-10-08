import React from 'react'
import ReactDOM from 'react-dom'
import { createRoot } from "react-dom/client"
import 'modern-normalize'
import App from './components/App/App'
import RootProvider from './components/Providers/RootProvider'
import GlobalStyle from './components/UI/Global/Styles'
import {enableDebugCommands} from './debug/debug'
import './index.css'
import '../src/font/font.css'



// ReactDOM.render(
//     <React.StrictMode>
//         <RootProvider>
//             <GlobalStyle/>
//             <App/>
//         </RootProvider>
//     </React.StrictMode>,
//     document.getElementById('root')
// )

// if (process.env.NODE_ENV === 'development') {
//     enableDebugCommands()
// }

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
const rootElement = document.getElementById("root")
if (!rootElement) {
	
} else {
	const root = createRoot(rootElement)
	root.render(
		
			<RootProvider>
				<GlobalStyle/>
				<App/>
			</RootProvider>
		
	)
}



// if (process.env.NODE_ENV === 'development') {
//     enableDebugCommands()
// }
