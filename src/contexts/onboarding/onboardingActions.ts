import {NavigatePageAction, SetOnboardingDataAction, SetVerificationCode} from "./OnboardingContext";

const onboardingActions = {
    nextPage: (): NavigatePageAction => {
        return {
            type: 'nextPage'
        }
    },
    previousPage: (): NavigatePageAction => {
        return {
            type: 'previousPage'
        }
    },
    setPasscode: (passcode: string): SetOnboardingDataAction => {
        return {
            type: 'setPasscode',
            payload: passcode
        }
    },
    setConfirmPasscode: (passcode: string): SetOnboardingDataAction => {
        return {
            type: 'setConfirmPasscode',
            payload: passcode
        }
    },
    setVerificationCode: (code: string): SetVerificationCode => {
        return {
            type: 'setVerificationCode',
            payload: code
        }
    }
}

export default onboardingActions