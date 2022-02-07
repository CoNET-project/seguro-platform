import {Contact, MessengerActions} from "./messengerActions";

export type MessengerState = {
    contacts: Map<string, { [keyId: string]: Contact }>
}

export const messengerReducer = (state: MessengerState, action: MessengerActions): MessengerState => {
    switch (action.type) {
        case "setInitialContacts":
            const contacts: Map<string, { [keyId: string]: Contact }> = new Map<string, { [p: string]: Contact }>()

            action.payload.map(contact => {
                let firstLetter = ''
                if (contact.nickname) {
                    firstLetter = contact.nickname[0]
                } else if (contact.alias) {
                    firstLetter = contact.alias[0]
                }
                if (!firstLetter) {
                    contacts.has("")
                }
            })
            return state
        default:
            return state
    }
}