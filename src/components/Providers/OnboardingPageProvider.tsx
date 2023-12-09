import React, {ReactNode} from "react"
import {onboardingPageReducer, PageIds} from "../../contexts/onboarding/onboardingPageReducer"
import {OnboardingContext} from "../../contexts/onboarding/OnboardingContext"

type PageProviderProps = {
    children: ReactNode,
    existingPages: Array<PageIds>
}

export const OnboardingPageProvider = ({children, existingPages}: PageProviderProps) => {
    const [state, dispatch] = React.useReducer(onboardingPageReducer, {
        currentPage: ['setPasscode', 1],
        existingPages: existingPages,
        onboardingPageData: {
            passcode: '',
            confirmPasscode: '',
			locale: '',
        }
    })
    const value = {state, dispatch}
    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    )
}