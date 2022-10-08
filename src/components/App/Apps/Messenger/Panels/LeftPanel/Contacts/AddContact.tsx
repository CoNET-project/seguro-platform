import styled from "styled-components"
import Header from "../Header"
import Input from "../../../../../../UI/Inputs/Input/Input"
import Textarea from "../../../../../../UI/Inputs/Textarea/TextArea"
import Button from "../../../../../../UI/Common/Button/Button"
import React, {useState} from "react"
import {Contact} from "../../../../../../../contexts/messenger/messengerActions"
import {useMessengerContext} from "../../../../../../../contexts/messenger/MessengerContext"
import {usePageNavigator} from "../../../../../../../contexts/pageNavigator/PageNavigatorContext"
import {pageNavigator} from "../../../../../../../contexts/pageNavigator/pageNavigatorActions"

const StyledAddContact = styled.div`
  width: 100%;
  height: 100%;
  content: ''
`

const StyledAddContactContent = styled.div`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

const StyledAddContactDesc = styled.p`
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm});
  margin-bottom: 15px;
`

const AddContact = () => {
    const {dispatch} = usePageNavigator()
    const {setNewContact} = useMessengerContext()
    const [contactID, setContactID] = useState('')
    const [nickname, setNickname] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const onChangeId = (value: string) => {
        setContactID(value)
    }

    const onChangeNickname = (value: string) => {
        setNickname(value)
    }

    const onChangeMessage = (value: string) => {
        onChangeMessage(value)
    }

    const addContact = () => {
        // Do something??
        if (contactID.length < 16) {
            return setError('Your Key ID length should be 16 characters')
        }
        // Check key ID is correct

        const newContact: Contact = {
            keyId: contactID,
            alias: '',
            nickname: nickname,
            bio: '',
            profileSrc: ''
        }

        setNewContact(newContact)
        dispatch(pageNavigator.navigateToPage('Contacts'))
    }


    return (
        <StyledAddContact>
            <Header/>
            <StyledAddContactContent>
                <StyledAddContactDesc>
                    You can add a contact by their ID below, their ID is not case-sensitive.
                </StyledAddContactDesc>
                <Input id="keyId" labelText="Contact Key ID" onChange={onChangeId} required/>
                <StyledAddContactDesc>
                    Additionally, you may set a nickname for this contact. Send them a custom greeting to let them know
                    who you are!
                </StyledAddContactDesc>
                <Input id="nickname" labelText="Nickname" onChange={onChangeNickname}/>
                <Textarea id="greetingMessage" labelText="Greeting Message" onChange={onChangeMessage}/>
                <Button onClick={addContact}>Add Contact</Button>
            </StyledAddContactContent>
        </StyledAddContact>
    )
}

export default AddContact