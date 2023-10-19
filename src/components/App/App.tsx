import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import {detectTouchDevice, detectWindowInnerSize} from "../../utilities/utilities"
import GlobalStyle from '../UI/Global/Styles'
import MainScreen from './MainScreen/MainScreen'
import {OnboardingPageProvider} from '../Providers/OnboardingPageProvider'
import OnboardingScreen from "./OnboardingScreen/OnboardingScreen"
import UnlockScreen from "./UnlockScreen/UnlockScreen"
import LaunchScreen from "./LaunchScreen/LaunchScreen"

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

	const [reload, setReload] = useState(false)
    useEffect(() => {

		
        dAPPInitialize().then(() => {
			if (!isInitializing) {
				setReload (true)
			}
			
			

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
		
        switch (true) {
            case isInitializing:
                return (
                    <LaunchScreen reload = {reload}/>
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
            default:
                return (
                   <MainScreen/>
                )
        }
        
    }


    return (
        <>
            <GlobalStyle/>
            <StyledContainer>
                {/* <Overlay 
					show={ showOverlay } 
					onClick={
						() => {
							setIsModalOpen(null)
							setIsShowOverlay(false)
						}}/> */}
                {/* <OverlayWithLoaderText show={isPlatformLoading !== null} type={isPlatformLoading}/> */}
                {getContent()}
            </StyledContainer>
        </>
    )
}

export default App