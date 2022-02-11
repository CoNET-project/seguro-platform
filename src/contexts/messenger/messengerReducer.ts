import {Contact, MessengerActions} from "./messengerActions";

export type Contacts = Map<string, { [keyId: string]: Contact }>

export type MessengerState = {
    contacts: Contacts,
    selectedContact: Contact | null,
    currentFocusPanel: 'left' | 'main' | 'right'
}

export const generateDefaultContactsMap = () => {
    const contacts: Contacts = new Map<string, { [p: string]: Contact }>()

    for (let i = 65; i <= 90; i++) {
        contacts.set(String.fromCharCode(i), {})
    }

    contacts.set("", {})
    return contacts
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
            contacts = new Map(state.contacts)

            action.payload.map(contact => {
                let firstChar = ''
                let previous
                if (contact.nickname) {
                    firstChar = contact.nickname[0]
                } else if (contact.alias) {
                    firstChar = contact.alias[0]
                } else {
                    firstChar = ''
                }
                previous = contacts.get(firstChar)
                contacts.set(firstChar.toUpperCase(), {...previous, [contact.keyId]: contact})
            })

            return {
                ...state,
                contacts: contacts
            }
        case "setNewContact":
            contacts = new Map(state.contacts)

            let firstChar = ''
            if (action.payload.nickname) {
                firstChar = action.payload.nickname[0]
            } else if (action.payload.alias) {
                firstChar = action.payload.alias[0]
            }
            const previous = contacts.get(firstChar)
            contacts.set(firstChar.toUpperCase(), {...previous, [action.payload.keyId]: action.payload})

            return {
                ...state,
                contacts: contacts
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