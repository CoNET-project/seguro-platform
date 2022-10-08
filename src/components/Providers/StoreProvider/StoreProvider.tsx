import { Provider as ReactReduxProvider } from 'react-redux'
import ProviderProps from '../ProviderProps'
import store from '../../../store/store'
import React from 'react'

const StoreProvider = ({
   children
}: ProviderProps) => {
    return (
        <ReactReduxProvider store={store}>
            {children}
        </ReactReduxProvider>
    )
}

export default StoreProvider
