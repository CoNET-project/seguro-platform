import { useEffect } from 'react'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import LaunchScreen from './LaunchScreen/LaunchScreen'
import MainScreen from './MainScreen/MainScreen'
import UnlockScreen from './UnlockScreen/UnlockScreen'
import {detectTouchDevice, detectWindowInnerSize} from "../../utilities/utilities";
import OnboardingScreen from "./OnboardingScreen/OnboardingScreen";
import GlobalStyle from '../UI/Global/Styles'

const StyledContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    color: black;
`

const App = () => {
    const appState = useAppState()

    const windowResizeHandler = () => {
        appState.setWindowInnerSize(detectWindowInnerSize())
    }

    useEffect(() => {
        appState.setIsTouchDevice(detectTouchDevice())
        window.addEventListener('resize', windowResizeHandler)
        return () => {
            window.removeEventListener('resize', windowResizeHandler)
        }
    }, [])

    let content = (
        <OnboardingScreen/>
    )

    // let content = null
    //
    // // launch screen
    // if (appState.isInitializing) {
    //     content = (
    //         <LaunchScreen />
    //     )
    // }
    // // unlock screen
    // else if (appState.isInitialized && appState.isLocked) {
    //     content = (
    //         <UnlockScreen />
    //     )
    // }
    // // main screen
    // else if (appState.isInitialized && appState.isUnlocked) {
    //     content = (
    //         <MainScreen />
    //     )
    // }

    return (
        <>
            <GlobalStyle/>
            <StyledContainer>
                {content}
            </StyledContainer>
        </>
    )
}

export default App
