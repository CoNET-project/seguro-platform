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

export type SetVerificationCode = {
    type: 'setVerificationCode',
    payload: string
}

export type SetVerificationStatus = {
    type: 'setVerificationStatus',
    payload: VerificationStates
}

export type OnboardingActions =
    NavigatePageAction
    | SetOnboardingDataAction
    | SetVerificationCode
    | SetVerificationStatus

export type Dispatch = (action: OnboardingActions) => void

export type PageIds = 'language' | 'setPasscode' | 'confirmPasscode' | 'verification' | 'verificationProcess'

type AnimateDirection = -1 | 1

type CurrentPage = [PageIds, AnimateDirection]

export type VerificationStates =
    'SUCCESS'
    | 'INCORRECT_CODE'
    | 'NOT_INTERNET'
    | 'NOT_STRIPE' // Cannot connect to STRIPE gateway
    | 'ALL_EMAIL_SERVER_CAN_NOT_CONNECTING'
    | 'LOCALSERVER_ERROR'
    | 'WAITING_SEGURO_RESPONSE_TIMEOUT'
    | 'EMAIL_ACCOUNT_AUTH_ERROR' // Needs to update Seguro Platform software
    | ''

export
type State = {
    currentPage: CurrentPage,
    existingPages: Array<PageIds>,
    onboardingPageData: {
        passcode: string,
        confirmPasscode: string,
        verificationCode?: string,
        verificationStatus?: VerificationStates
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
