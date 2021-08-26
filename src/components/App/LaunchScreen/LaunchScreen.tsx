import styled from 'styled-components'
import useAppState from "../../../store/appState/useAppState";

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledMessage = styled.div`
    font-size: 20px;
`

const LaunchScreen = () => {
    const appState = useAppState()
    return (
        <StyledContainer>
            <StyledMessage>
                Is touch device: {appState.isTouchDevice.toString()}
            </StyledMessage>
            <StyledMessage>
                Window innerWidth: {appState.windowInnerSize?.width}<br/>
                Window innerHeight: {appState.windowInnerSize?.height}
            </StyledMessage>
        </StyledContainer>
    )
}

export default LaunchScreen
