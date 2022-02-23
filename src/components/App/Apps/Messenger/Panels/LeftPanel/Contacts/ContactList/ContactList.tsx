import styled from "styled-components";
import {isObjectEmpty} from "../../../../../../../../utilities/utilities";
import ListItem from "../../../../../../../UI/Messenger/Contact/ListItem";
import {useMessengerContext} from "../../../../../../../../contexts/messenger/MessengerContext";
import {useCategorizeContact} from "../../../../../../../../utilities/hooks";
import {Contact} from "../../../../../../../../contexts/messenger/messengerActions";

const StyledContactList = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  overflow: auto;
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

type ContactListProps = {
    onClick?: (contact: Contact) => void
}

const ContactList = ({onClick}: ContactListProps) => {
    const {contacts} = useMessengerContext()

    const [categorizedContact] = useCategorizeContact(contacts)

    const renderList = () => {
        const componentList: JSX.Element[] = []
        console.log(categorizedContact)
        for (let key in categorizedContact) {
            if (!isObjectEmpty(categorizedContact[key])) {
                componentList.push(<StyledSectionTitle key={`contact-list-${key}`}>{key}</StyledSectionTitle>)
                Object.values(categorizedContact[key]).map((contact) => {
                    componentList.push(
                        <ListItem key={contact.keyId}
                                  contact={contact}
                                  onClick={() => onClick && onClick(contact)}/>
                    )
                })
            }
        }
        console.log(componentList)
        return componentList
    }


    return (
        <StyledContactList>
            {
                renderList().map(item => item)
            }
        </StyledContactList>
    )
}

export default ContactList