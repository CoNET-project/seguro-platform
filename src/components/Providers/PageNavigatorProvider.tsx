import React, {ReactNode} from "react";
import {pageNavigatorReducer} from '../../contexts/pageNavigator/pageNavigatorReducer'
import {PageNavigatorContext} from '../../contexts/pageNavigator/PageNavigatorContext'

type PageNavigatorProviderProps = {
    children: ReactNode,
    existingPages: Array<string>
}

export const PageNavigatorProvider = ({children, existingPages}: PageNavigatorProviderProps) => {
    const [state, dispatch] = React.useReducer(pageNavigatorReducer, {
        current: [existingPages[0], 1],
        existing: existingPages
    })
    const value = {state, dispatch}
    return (
        <PageNavigatorContext.Provider value={value}>
            {children}
        </PageNavigatorContext.Provider>
    )
}