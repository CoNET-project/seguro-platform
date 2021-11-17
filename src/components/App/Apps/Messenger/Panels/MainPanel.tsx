import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import useAppState from "../../../../../store/appState/useAppState";
import {ChevronLeft, ChevronRight} from "../../../../UI/Icons/Icons";
import ExampleProfile from "../../../../../assets/examples/profile-example.jpeg";
import ProfileImage from "../../../../UI/Common/Profile/Image/Image";

const StyledMainPanel = styled.div`
  height: 100%;
  width: 100%;
  content: '';
`

const MainPanel = () => {
    const {currentFocusPanel, setCurrentFocusPanel} = useAppState()

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
                    title: 'Jennifer K',
                    subtitle: '4E1F799AA4FF2279'
                }}
                headerComponents={{
                    headerLeft: <ProfileImage src={ExampleProfile} size={36}
                                              onClick={() => setCurrentFocusPanel('right')}/>
                }}
            />
        </StyledMainPanel>
    )
}

export default MainPanel
