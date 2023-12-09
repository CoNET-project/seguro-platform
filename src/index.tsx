import React from 'react'

import { createRoot } from "react-dom/client"
import 'modern-normalize'
import RootProvider from './components/Providers/RootProvider'
import GlobalStyle from './components/UI/Global/Styles'
import './index.css'
import '../src/font/font.css'
import APP from './components/App/App'
import Dashboard from './components/App/Apps/dashboard/index-next'


const rootElement = document.getElementById('root')



if (rootElement) {
	
	const root = createRoot(rootElement)

	root.render(
		
		<RootProvider>
			<GlobalStyle/>
			<APP/>
		</RootProvider>
		
	)
	// navigator.serviceWorker.register("/sw.js")

} else {
	console.log (`CoNET Platform Loader Error: can't find rootElement`)
}
