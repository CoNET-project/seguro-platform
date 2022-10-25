import styled from "styled-components"
import ListItem from "./ListItem/ListItem"
import React from "react"
import {LayoutGroup} from "framer-motion"

export type Notifications = {
    [id: string]: Notification
}

export type NotificationAction = {
    text: React.ReactNode | string,
    onClick: () => void
}

export type Notification = {
    id: string,
    type: string,
    title: string,
    text: string,
    action?: NotificationAction
}

const StyledNotificationDropdown = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 20rem;
	max-width: 40rem;
	max-height: 30rem;
	overflow-y: scroll;
	overflow-x: hidden;
	padding: 15px 15px 30px 15px;
	border-radius: 10px;
	background-color: ${props => props.theme.ui.colors.background.elevationOne};
`

const StyledNotificationTitle = styled.p`
	margin-bottom: 10px;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	font-weight: 700;
`

const NotificationDropdown = () => {
	
    const exampleNotifications: Notifications = {
        '1': {
            id: '1',
            type: 'Something',
            title: 'Platform Settings',
            text: 'Please view your preferences and change your language.',
            action: {
                text: 'Open settings',
                onClick: () => {
                }
            }
        },
        '2': {
            id: '2',
            type: 'Something',
            title: 'Platform Settings',
            text: 'Please view your preferences and change your passcode.',
            action: {
                text: 'Open settings',
                onClick: () => {
                }
            }
        },
        '3': {
            id: '3',
            type: 'Something',
            title: 'Network',
            text: 'Your connection to IMAP servers is currently having high latency. Please check your internet connection.',
            action: {
                text: 'Open network',
                onClick: () => {
                }
            }
        }
    }

    const [expandNotificationId, setExpandNotificationId] = React.useState<string | null>(null)

    const onNotificationExpand = (id: string) => {
        if (expandNotificationId === id) {
            return setExpandNotificationId(null)
        }
        setExpandNotificationId(id)
    }

    return (
        <StyledNotificationDropdown
            className='hideScrollbar'
        >
            <StyledNotificationTitle>Your Notifications</StyledNotificationTitle>
            <LayoutGroup>
                {
                    Object.keys(exampleNotifications).map(id => {
                        return (
                            <ListItem
                                key={id}
                                notification={exampleNotifications[id]}
                                isOpen={expandNotificationId === id}
                                onExpand={onNotificationExpand}
                            />
                        )
                    })
                }
            </LayoutGroup>
        </StyledNotificationDropdown>
    )
}

export default NotificationDropdown
