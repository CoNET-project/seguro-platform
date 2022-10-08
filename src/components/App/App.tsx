import {useEffect} from 'react'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import {detectTouchDevice, detectWindowInnerSize} from "../../utilities/utilities";
import GlobalStyle from '../UI/Global/Styles'
import MainScreen from './MainScreen/MainScreen';
import {OnboardingPageProvider} from '../Providers/OnboardingPageProvider';
import OnboardingScreen from "./OnboardingScreen/OnboardingScreen";
import UnlockScreen from "./UnlockScreen/UnlockScreen";
import LaunchScreen from "./LaunchScreen/LaunchScreen";
import {Overlay, OverlayWithLoaderText} from '../UI/Common/Overlay/Overlay';

const StyledContainer = styled.div`
  height: 100vh;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  color: black;
`

const App = () => {
    const {
        dAPPInitialize,
        isInitializing,
        isPlatformLoading,
        setNetworkStrength,
        setWindowInnerSize,
        setClientDevices,
        setIsTouchDevice,
        setIsModalOpen,
        setIsShowOverlay,
        showOverlay,
        hasContainer,
        isUnlocked
    } = useAppState()

    const windowResizeHandler = () => {
        setWindowInnerSize(detectWindowInnerSize())
    }

    useEffect(() => {

		
        dAPPInitialize().then(() => {
			
        })

        const randomDeviceIds = Array.from({length: 3}, (_, i) => (Date.now() + Math.round(Math.random() * 100)).toString())

        setClientDevices({
            [randomDeviceIds[0]]: {
                id: randomDeviceIds[0],
                type: 'mobile',
                name: 'iPhone-S4GD0S'
            },
            [randomDeviceIds[1]]: {
                id: randomDeviceIds[1],
                type: 'desktop',
                name: 'Mac Mini-C0S3M8VN'
            },
            [randomDeviceIds[2]]: {
                id: randomDeviceIds[2],
                type: 'tablet',
                name: 'Samsung TAB-LX30SMA'
            },
        })

        setIsTouchDevice(detectTouchDevice())

        // Test network connection icon
        const rndInt = Math.floor(Math.random() * 4) + 1;
        // @ts-ignore
        setNetworkStrength(rndInt)

        window.addEventListener('resize', windowResizeHandler)
        return () => {
            window.removeEventListener('resize', windowResizeHandler)
        }

    }, [])

    const getContent = () => {

        // return (
        //     <MainScreen/>
        // )

        switch (true) {
            case isInitializing:
                return (
                    <LaunchScreen/>
                )
            case hasContainer && isUnlocked:
                return (
                    <MainScreen/>
                )
            case hasContainer && !isUnlocked:
                return (
                    <UnlockScreen/>
                )
            case !hasContainer && !isUnlocked:
                return (
                    <OnboardingPageProvider
                        existingPages={['language', 'setPasscode', 'confirmPasscode', 'settingUp']}>
                        <OnboardingScreen/>
                    </OnboardingPageProvider>
                )
            // default:
            //     return (
            //         <MainScreen/>
            //     )
        }
        // let content = <MainScreen/>
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
            <StyledContainer>
                <Overlay show={showOverlay} onClick={() => {
                    setIsModalOpen(null)
                    setIsShowOverlay(false)
                }}/>
                <OverlayWithLoaderText show={isPlatformLoading !== null} type={isPlatformLoading}/>
                {getContent()}
            </StyledContainer>
        </>
    )
}

export default App
