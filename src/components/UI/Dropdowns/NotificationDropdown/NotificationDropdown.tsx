import styled from "styled-components";
import ListItem from "./ListItem/ListItem";

const StyledNotificationDropdown = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  max-width: 40rem;
  max-height: 20rem;
  overflow: scroll;
  padding: 5px;
  border-radius: 10px;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
`


const NotificationDropdown = () => {
    return (
        <StyledNotificationDropdown>
            {
                Array.from({length: 10}).map(() => {
                    return (
                        <ListItem/>
                    )
                })
            }
        </StyledNotificationDropdown>
    )
}

export default NotificationDropdown
