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
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

const rootElement = document.getElementById('root')

if (rootElement) {
	const root = createRoot(rootElement)
	root.render(
		
		<RootProvider>
			<GlobalStyle/>
			<App/>
		</RootProvider>
		
	)
	// If you want your app to work offline and load faster, you can change
	// unregister() to register() below. Note this comes with some pitfalls.
	// Learn more about service workers: https://cra.link/PWA
	serviceWorkerRegistration.unregister()

	// If you want to start measuring performance in your app, pass a function
	// to log results (for example: reportWebVitals(console.log))
	// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
	reportWebVitals()
} else {
	console.log (`CoNET Platform Loader Error: can't find rootElement`)
}

// if (process.env.NODE_ENV === 'development') {
//     enableDebugCommands()
// }
