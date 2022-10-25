import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import {ChevronLeft, ChevronRight} from "../../../../UI/Icons/Icons";
import ProfileImage from "../../../../UI/Common/Profile/Image/Image";
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext";
import {trimToLength} from "../../../../../utilities/utilities";
import ChatMessages from "./MainPanel/ChatMessages";
import BottomBar from "./MainPanel/BottomBar/BottomBar";
import React from "react"


const StyledMainPanel = styled.div`
	height: 100%;
	width: 100%;
	content: '';

`

const StyledMainContent = styled.div`
	width: 100%;
	height: calc(100% - 50px);
	content: '';
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const MainPanel = () => {
    const {selectedContact, currentFocusPanel, setCurrentFocusPanel} = useMessengerContext()

    const closeActionHandler = () => {
        const nextFocusPanel = currentFocusPanel === 'left' ? 'main' : 'left';
        setCurrentFocusPanel(nextFocusPanel)
    }

    return (
        <StyledMainPanel>
            <HeaderBar
                closeAction={{
                    action: closeActionHandler,
                    icon: currentFocusPanel === 'left' ? <ChevronLeft/> : <ChevronRight/>
                }}
                headerContent={{
                    title: selectedContact && (trimToLength(selectedContact.nickname, 20) || trimToLength(selectedContact.alias, 20) || selectedContact.keyId),
                    subtitle: selectedContact && (selectedContact.nickname || selectedContact.alias) ? selectedContact.keyId : null
                }}
                headerComponents={{
                    headerLeft: selectedContact && <ProfileImage src={selectedContact.profileSrc} size={36}
                                                                 onClick={() => setCurrentFocusPanel('right')}/>
                }}
            />
            <StyledMainContent>
                {
                    selectedContact && (
                        <>
                            <ChatMessages/>
                            <BottomBar/>
                        </>
                    )
                }
            </StyledMainContent>
        </StyledMainPanel>
    )
}

export default MainPanel
