import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-normalize'
import App from './components/App/App'
import RootProvider from './components/Providers/RootProvider'
import { enableDebugCommands } from './debug/debug'

ReactDOM.render(
    <React.StrictMode>
        <RootProvider>
            <App />
        </RootProvider>
    </React.StrictMode>,
    document.getElementById('root')
)

if (process.env.NODE_ENV === 'development') {
    enableDebugCommands()
}
