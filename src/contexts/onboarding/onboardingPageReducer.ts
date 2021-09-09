import {NavigatePageAction, SetOnboardingDataAction, State} from "./OnboardingContext";

export const onboardingPageReducer = (state: State, action: NavigatePageAction | SetOnboardingDataAction): State => {

    const getPage = (direction: 'next' | 'previous'): State => {
        const [currentPageId] = state.currentPage
        const pageIndex = state.existingPages.indexOf(currentPageId)
        if (direction === 'next') {
            if (pageIndex === state.existingPages.length - 1) {
                return state
            }
            const nextPageId = state.existingPages[pageIndex + 1]
            return {
                ...state,
                currentPage: [nextPageId, 1]
            }
        }
        if (direction === 'previous') {
            if (pageIndex === 0) {
                return state
            }
            const previousPageId = state.existingPages[pageIndex - 1]
            return {
                ...state,
                currentPage: [previousPageId, -1]
            }
        }
        return state;
    }

    switch (action.type) {
        case 'nextPage':
            return getPage('next')
        case 'previousPage':
            return getPage('previous')
        case 'navigateToPage':
            const [currentPageId] = state.currentPage
            const newPage = action.payload?.pageId
            if (newPage) {
                const direction = state.existingPages.indexOf(currentPageId) < state.existingPages.indexOf(newPage) ? 1 : -1
                return {
                    ...state,
                    currentPage: [newPage, direction]
                }
            }
            return state
        case 'setPasscode':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    passcode: action.payload
                }
            }
        case 'setConfirmPasscode':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    confirmPasscode: action.payload
                }
            }
        default:
            return state;
    }
}