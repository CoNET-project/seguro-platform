import logger from "../../utilities/logger/logger";
import {PageNavigatorState} from "./PageNavigatorContext";

interface IPageNavigatorAction {
    type: string,
    payload: any
}

export interface NavigatePageAction extends IPageNavigatorAction {
    type: 'navigateToPage',
    payload: string
}

export type ActionTypes = NavigatePageAction

export const pageNavigatorReducer = (state: PageNavigatorState, action: ActionTypes): PageNavigatorState => {
    switch (action.type) {
        case 'navigateToPage':
            const currentPage = state.current[0]
            const nextPage = action.payload
            const direction = state.existing.indexOf(nextPage) < state.existing.indexOf(currentPage) ? -1 : 1
            logger.log('pageNavigatorReducer.ts', 'navigateToPage:', nextPage)
            return {
                ...state,
                current: [nextPage, direction]
            }
        default:
            return state;
    }
}