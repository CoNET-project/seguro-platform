import {NavigatePageAction} from "./pageNavigatorReducer"

export const pageNavigator = {
    navigateToPage: (pageName: string): NavigatePageAction => {
        return {
            type: 'navigateToPage',
            payload: pageName
        }
    }
}