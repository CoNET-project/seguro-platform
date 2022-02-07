import styled from "styled-components";
import Image from "../../Common/Profile/Image/Image";
import {Contact} from "../../../../contexts/messenger/messengerActions";

type ListItemProps = {
    contact: Contact
}

const StyledListItem = styled.div`
  width: 100%;
  max-height: 55px;
  height: 100%;
  content: '';
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;

  & > * {
    text-align: left;
    color: ${props => props.theme.ui.colors.text.primary}
  }
`

const StyledListDetails = styled.div`
  content: '';
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

const StyledListName = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  font-family: 'Lato Bold', sans-serif;
`

const StyledListStatus = styled.p`
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} - 2px);
  opacity: 0.6;
  margin-top: 4px;
`


const ListItem = ({contact}: ListItemProps) => {
    console.log(contact)
    return (
        <StyledListItem>
            <Image size={36} src={contact.profileSrc}/>
            <StyledListDetails>
                <StyledListName>
                    {contact.nickname || contact.alias || contact.keyId}
                </StyledListName>
                <StyledListStatus>
                    Last seen at 9:01 am
                </StyledListStatus>
            </StyledListDetails>
        </StyledListItem>
    )
}

export default ListItem