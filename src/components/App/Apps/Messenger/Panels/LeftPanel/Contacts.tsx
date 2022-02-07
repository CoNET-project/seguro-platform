import styled from "styled-components";
import Header from "./Header";
import {useMessengerContext} from "../../../../../../contexts/messenger/MessengerContext";
import ListItem from "../../../../../UI/Messenger/Contact/ListItem";

const StyledContacts = styled.div`
  height: 100%;
  width: 100%;
`

const Contacts = () => {
    const {state} = useMessengerContext()

    console.log(state)
    return (
        <StyledContacts>
            <Header/>
            {
                Object.values(state.contacts).map((contact) => <ListItem contact={contact} key={contact.keyId}/>)
            }
        </StyledContacts>
    )
}

export default Contacts