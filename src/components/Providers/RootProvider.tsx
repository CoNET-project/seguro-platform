import ProviderProps from './ProviderProps'
import StoreProvider from './StoreProvider/StoreProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'
import LocalizationProvider from './LocalizationProvider/LocalizationProvider'
import DocumentMeta from "react-document-meta"
import React from 'react'
const meta = {
    title: 'CoNET Platform',
    description: 'Infrastructure for Web3',
    canonical: 'https://getseguro.com/',
    meta: {
        charset: 'utf-8',
        name: {
            keywords: 'web3, conet project, conet platform, web3 browser, ',
			referrer: 'no-referrer'
        },

    }
}
const RootProvider = ({
    children
}: ProviderProps) => {
    return (
        <StoreProvider>
			<DocumentMeta {...meta}/>
            <ThemeProvider>
                <LocalizationProvider>
                    {children}
                </LocalizationProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default RootProvider
