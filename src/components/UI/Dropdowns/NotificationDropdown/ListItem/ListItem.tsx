import styled from "styled-components"
import {CloseCircle} from "../../../Icons/Icons"
import {FaBell} from "react-icons/fa";
import {AnimatePresence, motion} from "framer-motion"
import React from "react"
import {Notification} from "../NotificationDropdown"

export type NotificationAction = {
    text: React.ReactNode | string,
    onClick: () => void
}

type ListItemProps = {
    isOpen: boolean,
    notification: Notification,
    onExpand: (id: string) => void
}

type StyleProps = {
    isOpen: boolean
}

const StyledListItemWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:not(:first-of-type) {
    margin-top: 20px;
  }
`

const StyledListItem = styled(motion.div)`
  transition: height 100ms ease-in-out;
  //min-width: 100%;
  width: 100%;
  // When open should adjust height
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  box-shadow: 0 2.5px 5px ${props => props.theme.ui.colors.border.light};
  overflow: hidden;
`;

const StyledNotificationDetails = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  word-break: break-all;
`

const StyledNotificationHeader = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const StyledNotificationTitle = styled(motion.p)`
  color: ${props => props.theme.ui.colors.text.primary};
  font-weight: bolder;
  margin-left: 5px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const StyledNotificationContent = styled(motion.div)`
  transition: height 0ms ease-in-out;
`

const StyledNotificationText = styled(motion.p)`
  margin: 0;
  width: 16rem;
  word-break: break-word;
  color: ${props => props.theme.ui.colors.text.primary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const StyledNotificationActions = styled.div`
  width: 16rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const StyledNotificationActionButton = styled.button`
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border: 1px solid ${props => props.theme.ui.colors.border.medium};
  color: ${props => props.theme.ui.colors.text.primary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  border-radius: 2px;
  padding: 5px 10px;
`

const StyledClearIcon = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: -10px;
  font-size: 22px;
  cursor: pointer;
  padding: 1px;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  opacity: 0.9;
`


const ListItem = ({isOpen, onExpand, notification}: ListItemProps) => {
    const getContent = () => {
        if (isOpen) {
            return (
                <>
                    <StyledNotificationText>{notification.text}</StyledNotificationText>
                    {
                        notification.action && (
                            <StyledNotificationActions>
                                {
                                    notification.action && (
                                        <StyledNotificationActionButton onClick={notification.action.onClick}>
                                            {notification.action.text}
                                        </StyledNotificationActionButton>
                                    )
                                }
                            </StyledNotificationActions>
                        )
                    }
                </>
            )
        }
        return (
            <StyledNotificationText>{notification.text.length > 88 ? notification.text.slice(0, 88) + '...' : notification.text}</StyledNotificationText>
        )
    }

    return (
        <StyledListItemWrapper onClick={() => onExpand(notification.id)}>
            <StyledListItem layout>
                <StyledNotificationDetails>
                    <StyledNotificationHeader
                        layout="position"
                    >
                        <FaBell size={12}/>
                        <StyledNotificationTitle>{notification.title}</StyledNotificationTitle>
                    </StyledNotificationHeader>
                    <AnimatePresence>
                        <StyledNotificationContent
                            layout="position"
                            initial={false}
                            animate={{height: 'initial'}}
                            exit={{height: 40}}
                            transition={{type: 'just'}}
                        >
                            {getContent()}
                        </StyledNotificationContent>
                    </AnimatePresence>
                </StyledNotificationDetails>
            </StyledListItem>
            <StyledClearIcon>
                <CloseCircle/>
            </StyledClearIcon>
        </StyledListItemWrapper>
    )
}

export default ListItem
