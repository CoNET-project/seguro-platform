import React from "react"
import {Contact, Dispatch, messengerActions} from "./messengerActions"
import {Chat, MessengerState} from "./messengerReducer"

export const MessengerContext = React.createContext<{ state: MessengerState; dispatch: Dispatch } | undefined>(undefined)

export const useMessengerContext = () => {
    const context = React.useContext(MessengerContext)
    if (context === undefined) {
        throw new Error('useMessengerContext must be used within a MessengerProvider')
    }

    const {state, dispatch} = context
    return {
        ...state,
        setCurrentFocusPanel: (panel: 'left' | 'main' | 'right') => {
            dispatch(messengerActions.setCurrentFocusPanel(panel))
        },
        setInitialContacts: (contacts: Contact[]) => {
            dispatch(messengerActions.setInitialContacts(contacts))
        },
        setNewContact: (contact: Contact) => {
            dispatch(messengerActions.setNewContact(contact))
        },
        updateContact: (previousContact: Contact, updatedContact: Contact) => {
            dispatch(messengerActions.updateContact(previousContact, updatedContact))
        },
        setCurrentChat: (chat: Chat) => {
            dispatch(messengerActions.setCurrentChat(chat))
        },
        setSelectedContact: (contact: Contact) => {
            dispatch(messengerActions.setSelectedContact(contact))
        },
        clearSelectedContact: () => {
            dispatch(messengerActions.clearSelectedContact())
        }
    }
}