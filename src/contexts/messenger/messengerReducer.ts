import {Contact, MessengerActions} from "./messengerActions"

export type ChatMessage = {
    id: string,
    fromKeyId: string,
    toKeyId: string,
    data: any
}

export type Chat = {
    chatId: string,
    contactId: string,
    messageHistory: ChatMessage[]
}


export type Contacts = { [keyId: string]: Contact }

export type Chats = {
    [contactId: string]: Chat
}

export type MessengerState = {
    contacts: Contacts,
    selectedContact: Contact | null,
    currentChat: Chat | null,
    currentFocusPanel: 'left' | 'main' | 'right'
}


export const messengerReducer = (state: MessengerState, action: MessengerActions): MessengerState => {
    let contacts: Contacts
    switch (action.type) {
        case "setCurrentFocusPanel":
            return {
                ...state,
                currentFocusPanel: action.payload
            }
        case "setInitialContacts":
            contacts = {}
            action.payload.map(contact => {
                contacts[contact.keyId] = contact
            })
            return {
                ...state,
                contacts: contacts
            }
        case "setNewContact":
            contacts = {...state.contacts}
            contacts[action.payload.keyId] = action.payload
            return {
                ...state,
                contacts: contacts
            }
        case "updateContact":
            contacts = {...state.contacts}
            contacts[action.payload.updated.keyId] = action.payload.updated
            return {
                ...state,
                selectedContact: action.payload.updated,
                contacts: contacts
            }
        case "setCurrentChat":
            return {
                ...state,
                currentChat: action.payload
            }
        case "setSelectedContact":
            return {
                ...state,
                selectedContact: action.payload
            }
        case "clearSelectedContact":
            return {
                ...state,
                selectedContact: null
            }
        default:
            return state
    }
}