import { useEffect } from 'react'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import LaunchScreen from './LaunchScreen/LaunchScreen'
import MainScreen from './MainScreen/MainScreen'
import UnlockScreen from './UnlockScreen/UnlockScreen'

const StyledContainer = styled.div`
    height: 100vh;
    background-color: white;
    color: black;
`

const App = () => {
    const appState = useAppState()

    useEffect(() => {
        appState.initialize()
    }, [])

    let content = null

    // launch screen
    if (appState.isInitializing) {
        content = (
            <LaunchScreen />
        )
    }
    // unlock screen
    else if (appState.isInitialized && appState.isLocked) {
        content = (
            <UnlockScreen />
        )
    }
    // main screen
    else if (appState.isInitialized && appState.isUnlocked) {
        content = (
            <MainScreen />
        )
    }

    return (
        <StyledContainer>
            {content}
        </StyledContainer>
    )
}

export default App
