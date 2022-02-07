export type Dispatch = (action: any) => void

export type Contact = {
    keyId: string,
    bio: string,
    profileSrc: string,
    alias: string,
    nickname: string
}

export type MessengerActions = SetInitialContacts

export type MessengerActionTypes = "setInitialContacts"

type SetInitialContacts = {
    type: MessengerActionTypes,
    payload: Contact[]
}

export const messengerActions = {
    setInitialContacts: (contacts: Contact[]): SetInitialContacts => {
        return {
            type: 'setInitialContacts',
            payload: contacts
        }
    }
}