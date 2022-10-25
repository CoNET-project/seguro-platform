import styled from "styled-components"
import Header from "../Header"
import {useMessengerContext} from "../../../../../../../contexts/messenger/MessengerContext"
import {Contact} from "../../../../../../../contexts/messenger/messengerActions"
import {usePageNavigator} from "../../../../../../../contexts/pageNavigator/PageNavigatorContext"
import {pageNavigator} from "../../../../../../../contexts/pageNavigator/pageNavigatorActions"
import ContactList from "./ContactList/ContactList"
import React from 'react'

const StyledContacts = styled.div`
	height: 100%;
	width: 100%;
`

const StyledContactsContent = styled.div`
	height: calc(100% - 50px);
`

const Contacts = () => {
    const {contacts, setSelectedContact, setCurrentFocusPanel} = useMessengerContext()
    const {dispatch} = usePageNavigator()


    const contactOnClick = (contact: Contact) => {
        setCurrentFocusPanel('main')
        setSelectedContact(contact)
    }



    return (
        <StyledContacts>
            <Header onClick={() => dispatch(pageNavigator.navigateToPage('Contacts/Add Contact'))}/>
            <StyledContactsContent>
                <ContactList onClick={contactOnClick}/>
            </StyledContactsContent>
        </StyledContacts>
    )
}

export default Contacts