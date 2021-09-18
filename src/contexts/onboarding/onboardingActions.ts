import {
    NavigatePageAction,
    SetOnboardingDataAction,
    SetVerificationCode,
    VerificationStates,
    SetVerificationStatus, PageIds
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
    setVerificationStatus: (status: VerificationStates | ''): SetVerificationStatus => {
        logger.log('onboardingActions.ts', 'setVerificationStatus: ', status)
        return {
            type: 'setVerificationStatus',
            payload: status
        }
    }
}

export default onboardingActions