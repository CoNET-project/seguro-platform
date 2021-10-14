import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-normalize'
import App from './components/App/App'
import RootProvider from './components/Providers/RootProvider'
import GlobalStyle from './components/UI/Global/Styles'
import {enableDebugCommands} from './debug/debug'
import './index.css'
import '../src/font/font.css'

ReactDOM.render(
    <React.StrictMode>
        <RootProvider>
            <GlobalStyle/>
            <App/>
        </RootProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
    enableDebugCommands()
}
