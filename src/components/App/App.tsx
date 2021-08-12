import { useEffect } from 'react'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import UnlockScreen from './UnlockScreen/UnlockScreen'
import LaunchScreen from './LaunchScreen/LaunchScreen'

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

    if (!appState.isInitialized) {
        content = (
            <LaunchScreen />
        )
    }
    else if (appState.isInitialized) {
        content = (
            <UnlockScreen />
        )
    }

    return (
        <StyledContainer>
            {content}
        </StyledContainer>
    )
}

export default App
