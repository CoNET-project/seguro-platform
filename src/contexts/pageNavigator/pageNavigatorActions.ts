import {ActionTypes, NavigatePageAction} from "./pageNavigatorReducer"

export type Dispatch = (action: ActionTypes) => void

export const pageNavigator = {
    navigateToPage: (pageName: string): NavigatePageAction => {
        return {
            type: 'navigateToPage',
            payload: pageName
        }
    }
}