import React from "react";
import {Dispatch} from "./messengerActions";
import {MessengerState} from "./messengerReducer";

export const MessengerContext = React.createContext<{ state: MessengerState; dispatch: Dispatch } | undefined>(undefined)

export const useMessengerContext = () => {
    const context = React.useContext(MessengerContext)
    if (context === undefined) {
        throw new Error('useMessengerContext must be used within a MessengerProvider')
    }
    return context
}