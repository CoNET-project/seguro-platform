import styled from "styled-components";
import Header from "./Header";
import {useMessengerContext} from "../../../../../../contexts/messenger/MessengerContext";
import ListItem from "../../../../../UI/Messenger/Contact/ListItem";
import {ReactNode} from "react";
import {Contact} from "../../../../../../contexts/messenger/messengerActions";

const StyledContacts = styled.div`
  height: 100%;
  width: 100%;
`

const StyledContactContent = styled.div`
  overflow: auto;
  height: calc(100% - 50px);
  min-width: 100%;
`

const StyledSectionTitle = styled.p`
  width: 100%;
  text-align: left;
  padding: 7.5px 15px;
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} - 2px);
  opacity: 0.5;
  border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
  font-family: 'Lato Bold', sans-serif;
`

const StyledSection = styled.div`
  &:not(:last-of-type) {
    margin-bottom: 5px;
  }
`

const Contacts = () => {
    const {contacts, setSelectedContact, setCurrentFocusPanel} = useMessengerContext()

    const contactOnClick = (contact: Contact) => {
        setCurrentFocusPanel('main')
        setSelectedContact(contact)
    }

    const renderList = () => {
        const list: ReactNode[] = []
        contacts.forEach((contacts, key) => {
            const contactArr = Object.values(contacts)

            if (contactArr.length > 0) {
                if (!key) {
                    list.push(<StyledSectionTitle key={'#'}>#</StyledSectionTitle>)
                } else {
                    list.push(<StyledSectionTitle key={key}>{key}</StyledSectionTitle>)
                }
                Object.values(contacts).map(contact => list.push(<ListItem key={contact.keyId} contact={contact}
                                                                           onClick={contactOnClick}/>))
            }
        })

        return list
    }

    renderList()
    return (
        <StyledContacts>
            <Header/>
            <StyledContactContent>
                {
                    renderList().map((item, index) => <StyledSection
                        key={`contactSection${index}`}>{item}</StyledSection>)
                }
            </StyledContactContent>
        </StyledContacts>
    )
}

export default Contacts