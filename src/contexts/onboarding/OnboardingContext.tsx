import React from "react";

export type NavigatePageAction = {
    type: 'navigateToPage' | 'nextPage' | 'previousPage',
    payload?: {
        pageId: PageIds
    }
}

export type SetOnboardingDataAction = {
    type: 'setPasscode' | 'setConfirmPasscode',
    payload: string
}

export type Dispatch = (action: NavigatePageAction | SetOnboardingDataAction) => void

export type PageIds = 'language' | 'setPasscode' | 'confirmPasscode' | 'verification'

type AnimateDirection = -1 | 1

type CurrentPage = [PageIds, AnimateDirection]

export type State = {
    currentPage: CurrentPage,
    existingPages: Array<PageIds>,
    onboardingPageData?: {
        passcode?: string,
        confirmPasscode?: string,
        verificationCode?: string
    }
}

export const OnboardingContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

export const useOnboardingPageNavigator = () => {
    const context = React.useContext(OnboardingContext)
    if (context === undefined) {
        throw new Error('usePage must be used within a PageProvider')
    }
    return context
}
