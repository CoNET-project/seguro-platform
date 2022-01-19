import React from "react";
import {SeguroNetworkStatus} from "@conet-project/seguro-worker-lib/build/workerBridge";

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

export type SetVerificationCodeError = {
    type: 'setVerificationCodeError',
    payload: boolean
}

export type SetVerificationStatus = {
    type: 'setVerificationStatus',
    payload: VerificationStates
}

export type OnboardingActions =
    NavigatePageAction
    | SetOnboardingDataAction
    | SetVerificationCode
    | SetVerificationCodeError
    | SetVerificationStatus

export type Dispatch = (action: OnboardingActions) => void

export type PageIds = 'language' | 'setPasscode' | 'confirmPasscode' | 'verification' | 'settingUp'

type AnimateDirection = -1 | 1

type CurrentPage = [PageIds, AnimateDirection]

export type VerificationStates = SeguroNetworkStatus | 'FAILURE' | null

export
type State = {
    currentPage: CurrentPage,
    existingPages: Array<PageIds>,
    onboardingPageData: {
        passcode: string,
        confirmPasscode: string,
        verificationCode?: string,
        verificationCodeError?: boolean,
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
