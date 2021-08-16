import { useTypedSelector } from '../store'
import { useDispatch } from 'react-redux'
import { setTheme as setThemeActionCreator } from './appStateActions'
import { initializeBridgeService } from '../../services/bridgeService/bridgeService'

const useAppState = () => {
    const dispatch = useDispatch()

    const initialize = async () => {
        await initializeBridgeService()
    }

    const bridgeServiceIsInitialized = useTypedSelector(state => state.appState.bridgeServiceIsInitialized)

    const isInitialized = bridgeServiceIsInitialized
    const isInitializing = !isInitialized

    const isUnlocked = useTypedSelector(state => state.appState.isUnlocked)
    const isLocked = !isUnlocked

    const theme = useTypedSelector(state => state.appState.theme)
    const setTheme = (
        theme: 'Auto' | 'Light' | 'Dark'
    ) => {
        dispatch(setThemeActionCreator(theme))
    }

    return {
        initialize,
        isInitialized,
        isInitializing,
        isUnlocked,
        isLocked,
        theme,
        setTheme
    }
}

export default useAppState
