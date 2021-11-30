import styled from "styled-components";
import {Close, CloseCircle} from "../../../Icons/Icons";
import {FaBell} from "react-icons/all";
import {motion, AnimatePresence} from "framer-motion";

type ListItemProps = {
    isOpen: boolean,
    notificationIndex: number,
    onClick: (index: number) => void
}

type StyleProps = {
    isOpen: boolean
}

const StyledListItemWrapper = styled.div`
  position: relative;

  &:not(:first-child) {
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
  border-radius: 10px;
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

const StyledNotificationText = styled(motion.p)`
  margin: 0;
  width: 16rem;
  color: ${props => props.theme.ui.colors.text.primary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const StyledNotificationShortText = styled(StyledNotificationText)`
  white-space: nowrap;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
`

const StyledClearIcon = styled.div`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -11px;
  right: -11px;
  font-size: 22px;
  cursor: pointer;
`


const ListItem = ({isOpen, notificationIndex, onClick}: ListItemProps) => {

    const exampleNotif = {
        text: 'Bobby sent you a new message - "Sure, lets meet up for coffee soon!"'
    }
    const getContent = () => {
        if (isOpen) {
            return exampleNotif.text
        }
        return exampleNotif.text.slice(0, 40) + '...'
    }

    return (
        <StyledListItemWrapper onClick={() => onClick(notificationIndex)}>
            <StyledListItem layout>
                <StyledNotificationDetails>
                    <StyledNotificationHeader layout>
                        <FaBell size={12}/>
                        <StyledNotificationTitle>Hello</StyledNotificationTitle>
                    </StyledNotificationHeader>
                    <AnimatePresence>
                        <StyledNotificationText
                            layout="position"
                            initial={false}
                            animate={{height: isOpen ? 'initial' : 20}}
                            transition={{type: "spring", stiffness: 300, damping: 20}}
                        >
                            {getContent()}
                        </StyledNotificationText>
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
