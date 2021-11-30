import styled from "styled-components";
import ListItem from "./ListItem/ListItem";
import {useState} from "react";
import {AnimateSharedLayout} from "framer-motion";

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
  max-height: 30rem;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 15px;
  border-radius: 10px;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
`

const NotificationDropdown = () => {
    const ExampleNotifications: Notifications = {}

    const [expandNotificationIndex, setExpandNotificationIndex] = useState<number | null>(null)

    const onNotificationClick = (index: number) => {
        if (expandNotificationIndex === index) {
            return setExpandNotificationIndex(null)
        }
        setExpandNotificationIndex(index)
    }

    return (
        <StyledNotificationDropdown>
            <AnimateSharedLayout>
                {
                    Array.from({length: 10}).map((_, idx) => {
                        return (
                            <ListItem
                                isOpen={expandNotificationIndex === idx}
                                onClick={onNotificationClick}
                                notificationIndex={idx}
                            />
                        )
                    })
                }
            </AnimateSharedLayout>
        </StyledNotificationDropdown>
    )
}

export default NotificationDropdown
