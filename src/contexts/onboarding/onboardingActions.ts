import {
    NavigatePageAction,
    PageIds,
    SetOnboardingDataAction,
    SetVerificationCode, SetVerificationCodeError,
    SetVerificationStatus,
    VerificationStates
} from "./OnboardingContext";
import logger from '../../utilities/logger/logger'

const onboardingActions = {
    nextPage: (): NavigatePageAction => {
        logger.log('onboardingActions.ts', 'nextPage')
        return {
            type: 'nextPage'
        }
    },
    previousPage: (): NavigatePageAction => {
        logger.log('onboardingActions.ts', 'previousPage')
        return {
            type: 'previousPage'
        }
    },
    navigateToPage: (pageId: PageIds): NavigatePageAction => {
        return {
            type: 'navigateToPage',
            payload: {
                pageId: pageId
            }
        }
    },
    setPasscode: (passcode: string): SetOnboardingDataAction => {
        // logger.log('onboardingActions.ts', 'setPasscode: ', passcode)
        return {
            type: 'setPasscode',
            payload: passcode
        }
    },
    setConfirmPasscode: (passcode: string): SetOnboardingDataAction => {
        // logger.log('onboardingActions.ts', 'setConfirmPasscode: ', passcode)
        return {
            type: 'setConfirmPasscode',
            payload: passcode
        }
    },
    setVerificationCode: (code: string): SetVerificationCode => {
        // logger.log('onboardingActions.ts', 'setVerificationCode: ', code)
        return {
            type: 'setVerificationCode',
            payload: code
        }
    },
    setVerificationStatus: (status: VerificationStates | 'FAILURE'): SetVerificationStatus => {
        return {
            type: 'setVerificationStatus',
            payload: status
        }
    },
    setVerificationCodeError: (isError: boolean): SetVerificationCodeError => {
        return {
            type: 'setVerificationCodeError',
            payload: isError
        }
    }
}

export default onboardingActions
