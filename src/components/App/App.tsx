import {useEffect} from 'react'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import LaunchScreen from './LaunchScreen/LaunchScreen'
import MainScreen from './MainScreen/MainScreen'
import UnlockScreen from './UnlockScreen/UnlockScreen'
import {detectTouchDevice, detectWindowInnerSize} from "../../utilities/utilities";
import OnboardingScreen from "./OnboardingScreen/OnboardingScreen";
import GlobalStyle from '../UI/Global/Styles'
import {OnboardingPageProvider} from "../Providers/OnboardingPageProvider";
import Overlay from "../UI/Common/Overlay/Overlay";

const StyledContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  justify-content: center;
  color: black;
`

const App = () => {
    const appState = useAppState()

    const windowResizeHandler = () => {
        appState.setWindowInnerSize(detectWindowInnerSize())
    }

    useEffect(() => {

        setTimeout(() => {
            appState.initialize().then()
        }, 2000)

        appState.setIsTouchDevice(detectTouchDevice())
        window.addEventListener('resize', windowResizeHandler)
        return () => {
            window.removeEventListener('resize', windowResizeHandler)
        }
    }, [])

    // let content = (
    //     // <LaunchScreen/>
    //     // <OnboardingPageProvider
    //     //     existingPages={['language', 'setPasscode', 'confirmPasscode', 'verification', 'verificationProcess']}>
    //     //     <OnboardingScreen/>
    //     // </OnboardingPageProvider>
    // )

    const getContent = () => {
        let content = <MainScreen/>

        // // launch screen
        // if (appState.isInitializing) {
        //     content = (
        //         <LaunchScreen/>
        //     )
        // } else if (appState.isInitialized && appState.noContainer) {
        //     content = (
        //         <OnboardingPageProvider
        //             existingPages={['language', 'setPasscode', 'confirmPasscode', 'verification', 'verificationProcess']}>
        //             <OnboardingScreen/>
        //         </OnboardingPageProvider>
        //     )
        // } else if (appState.isInitialized && appState.hasContainer && appState.isLocked) {
        //     content = (
        //         <UnlockScreen/>
        //     )
        // }
        return content
    }

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
            <Overlay show={appState.showOverlay}/>
            <StyledContainer>
                {getContent()}
            </StyledContainer>
        </>
    )
}

export default App
