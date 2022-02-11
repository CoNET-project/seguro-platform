export type Dispatch = (action: any) => void

export type Contact = {
    keyId: string,
    bio: string,
    profileSrc: string,
    alias: string,
    nickname: string
}

export type MessengerActions =
    SetCurrentFocusPanel
    | SetInitialContacts
    | SetNewContact
    | SetSelectedContact
    | ClearSelectedContact

type SetCurrentFocusPanel = {
    type: "setCurrentFocusPanel",
    payload: 'left' | 'main' | 'right'
}


type SetInitialContacts = {
    type: "setInitialContacts",
    payload: Contact[]
}

type SetNewContact = {
    type: "setNewContact",
    payload: Contact
}

type SetSelectedContact = {
    type: "setSelectedContact",
    payload: Contact
}

type ClearSelectedContact = {
    type: "clearSelectedContact"
}

export const messengerActions = {
    setCurrentFocusPanel: (panel: 'left' | 'main' | 'right'): SetCurrentFocusPanel => {
        return {
            type: 'setCurrentFocusPanel',
            payload: panel
        }
    },
    setInitialContacts: (contacts: Contact[]): SetInitialContacts => {
        return {
            type: 'setInitialContacts',
            payload: contacts
        }
    },
    setNewContact: (contact: Contact): SetNewContact => {
        return {
            type: 'setNewContact',
            payload: contact
        }
    },
    setSelectedContact: (contact: Contact): SetSelectedContact => {
        return {
            type: 'setSelectedContact',
            payload: contact
        }
    },
    clearSelectedContact: (): ClearSelectedContact => {
        return {
            type: 'clearSelectedContact'
        }
    }
}