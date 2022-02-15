import React from "react";
import {Dispatch} from "./onboardingActions";
import {State} from "./onboardingPageReducer";

export const OnboardingContext = React.createContext<{ state: State; dispatch: Dispatch } | undefined>(undefined)

export const useOnboardingPageNavigator = () => {
    const context = React.useContext(OnboardingContext)
    if (context === undefined) {
        throw new Error('usePage must be used within a PageProvider')
    }
    return context
}
