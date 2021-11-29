import styled from "styled-components";
import ListItem from "./ListItem/ListItem";

export type Notifications = {
    [id: string]: Notification
}

export type Notification = {
    type: string,
    title: string,
    text: string
}

const StyledNotificationDropdown = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 20rem;
  max-width: 40rem;
  max-height: 20rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 15px;
  border-radius: 10px;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
`

const NotificationDropdown = () => {
    const ExampleNotifications: Notifications = {}
    return (
        <StyledNotificationDropdown>
            {
                Array.from({length: 10}).map(() => {
                    return (
                        <ListItem isOpen={false}/>
                    )
                })
            }
        </StyledNotificationDropdown>
    )
}

export default NotificationDropdown
