import styled from "styled-components";
import Header from "../Header";
import {Contact} from "../../../../../../../contexts/messenger/messengerActions";
import ContactList from "../Contacts/ContactList/ContactList";
import {useMessengerContext} from "../../../../../../../contexts/messenger/MessengerContext";

const StyledAddChat = styled.div`
  height: 100%;
  width: 100%;
`

const StyledAddChatContent = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  overflow: auto;
`

const AddChat = () => {
    const {setSelectedContact, setCurrentFocusPanel} = useMessengerContext()
    const onClickContact = (contact: Contact) => {
        setCurrentFocusPanel("main")
        setSelectedContact(contact)
    }
    return (
        <StyledAddChat>
            <Header/>
            <StyledAddChatContent>
                <ContactList onClick={onClickContact}/>
            </StyledAddChatContent>
        </StyledAddChat>
    )
}

export default AddChat