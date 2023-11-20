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

        isInitializing,

        setWindowInnerSize,
        hasContainer,
        isUnlocked
    } = useAppState()
	




    const getContent = () => {
		
        switch (true) {
            // case isInitializing:
            //     return (
            //         <LaunchScreen reload = {reload}/>
            //     )
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
                        existingPages={['setPasscode', 'confirmPasscode', 'settingUp']}>
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
        <StyledContainer>
            {getContent()}
        </StyledContainer>
    )
}

export default App