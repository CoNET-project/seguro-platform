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
    let firstChar = ''
    let previous
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

            if (action.payload.nickname) {
                firstChar = action.payload.nickname[0]
            } else if (action.payload.alias) {
                firstChar = action.payload.alias[0]
            }
            previous = contacts.get(firstChar)
            contacts.set(firstChar.toUpperCase(), {...previous, [action.payload.keyId]: action.payload})

            return {
                ...state,
                contacts: contacts
            }
        case "updateContact":
            contacts = new Map(state.contacts)
            if (action.payload.previous.nickname) {
                firstChar = action.payload.previous.nickname[0]
            } else if (action.payload.previous.alias) {
                firstChar = action.payload.previous.alias[0]
            }

            const contactGroup = contacts.get(firstChar)

            if (contactGroup) {
                delete contactGroup[action.payload.previous.keyId]
                contacts.set(firstChar, contactGroup)
            }

            if (action.payload.updated.nickname) {
                firstChar = action.payload.updated.nickname[0]
            } else if (action.payload.updated.alias) {
                firstChar = action.payload.updated.alias[0]
            }

            previous = contacts.get(firstChar)
            contacts.set(firstChar.toUpperCase(), {...previous, [action.payload.updated.keyId]: action.payload.updated})

            return {
                ...state,
                selectedContact: action.payload.updated,
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