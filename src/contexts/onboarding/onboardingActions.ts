import {NavigatePageAction, SetOnboardingDataAction} from "./OnboardingContext";

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
    }
}

export default onboardingActions