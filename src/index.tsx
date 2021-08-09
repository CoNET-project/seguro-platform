import React from 'react'
import ReactDOM from 'react-dom'
import 'modern-normalize'
import App from './components/App/App'
import { Provider } from 'react-redux'
import store from './store/store'

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)
