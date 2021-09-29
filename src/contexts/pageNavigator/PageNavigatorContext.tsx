import React from "react";
import {ActionTypes} from "./pageNavigatorReducer";

export type Dispatch = (action: ActionTypes) => void

type CurrentPage = [string, number]

export type PageNavigatorState = {
    current: CurrentPage,
    existing: Array<string>
}

export const PageNavigatorContext = React.createContext<{ state: PageNavigatorState; dispatch: Dispatch } | undefined>(undefined)

export const usePageNavigator = () => {
    const context = React.useContext(PageNavigatorContext)
    if (context === undefined) {
        throw new Error('usePageNavigator must be used within a PageNavigatorProvider')
    }
    return context
}