import React from 'react'

import { createRoot } from "react-dom/client"
import 'modern-normalize'
import App from './components/App/App'
import RootProvider from './components/Providers/RootProvider'
import GlobalStyle from './components/UI/Global/Styles'
import './index.css'
import '../src/font/font.css'
import {register} from './serviceWorkerRegistration'
const rootElement = document.getElementById('root')


if (rootElement) {
	
	const root = createRoot(rootElement)
	root.render(
		
		<RootProvider>
			<GlobalStyle/>
			<App/>
		</RootProvider>
		
	)
	register()
	
} else {
	console.log (`CoNET Platform Loader Error: can't find rootElement`)
}