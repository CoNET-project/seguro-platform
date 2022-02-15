import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import {ChevronLeft, ChevronRight} from "../../../../UI/Icons/Icons";
import ProfileImage from "../../../../UI/Common/Profile/Image/Image";
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext";
import {trimToLength} from "../../../../../utilities/utilities";

const StyledMainPanel = styled.div`
  height: 100%;
  width: 100%;
  content: '';
`

const StyledMainContent = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  content: '';
  //background: #E0EAFC; /* fallback for old browsers */
  //background: -webkit-linear-gradient(to right, #CFDEF3, #E0EAFC); /* Chrome 10-25, Safari 5.1-6 */
  //background: linear-gradient(to right, #CFDEF3, #E0EAFC); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  //opacity: 0.3;
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
            </StyledMainContent>
        </StyledMainPanel>
    )
}

export default MainPanel
