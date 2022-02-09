import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext";

const StyledRightPanel = styled.div`
  height: 100%;
  width: 100%;
  content: '';
`

const RightPanel = () => {
    const {setCurrentFocusPanel} = useMessengerContext()
    return (
        <StyledRightPanel>
            <HeaderBar
                closeAction={{
                    action: () => setCurrentFocusPanel('main'),
                    alwaysVisible: true
                }}
                headerContent={{
                    title: 'Jennifer Work',
                    subtitle: '4E1F799AA4FF2279'
                }}
            />
        </StyledRightPanel>
    )
}

export default RightPanel