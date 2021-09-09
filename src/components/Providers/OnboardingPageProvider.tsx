import React, {ReactNode} from "react";
import {onboardingPageReducer} from "../../contexts/onboarding/onboardingPageReducer";
import {OnboardingContext, PageIds} from "../../contexts/onboarding/OnboardingContext";

type PageProviderProps = {
    children: ReactNode,
    existingPages: Array<PageIds>
}

export const OnboardingPageProvider = ({children, existingPages}: PageProviderProps) => {
    const [state, dispatch] = React.useReducer(onboardingPageReducer, {
        currentPage: ['language', 1],
        existingPages: existingPages
    })
    const value = {state, dispatch}
    return (
        <OnboardingContext.Provider value={value}>
            {children}
        </OnboardingContext.Provider>
    )
}