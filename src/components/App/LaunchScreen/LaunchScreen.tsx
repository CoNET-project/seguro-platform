import styled from 'styled-components'
import useAppState from "../../../store/appState/useAppState";
import Keypad from "../../UI/Keypad/Keypad/Keypad";

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.ui.backgroundColor};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledMessage = styled.div`
    font-size: 20px;
`

const LaunchScreen = () => {
    const appState = useAppState()
    const keypadClickHandlers = {
        numberKeyOnClick: () => {},
        deleteKeyOnClick: () => {},
        cancelKeyOnClick: () => {},
        unlockKeyOnClick: () => {}
    }
    return (
        <StyledContainer>
            <Keypad clickActionHandlers={keypadClickHandlers}/>
            {/*<StyledMessage>*/}
            {/*    Is touch device: {appState.isTouchDevice.toString()}*/}
            {/*</StyledMessage>*/}
            {/*<StyledMessage>*/}
            {/*    Window innerWidth: {appState.windowInnerSize?.width}<br/>*/}
            {/*    Window innerHeight: {appState.windowInnerSize?.height}*/}
            {/*</StyledMessage>*/}
        </StyledContainer>
    )
}

export default LaunchScreen
