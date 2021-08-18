import { useTypedSelector } from '../store'
import { useDispatch } from 'react-redux'
import { setTheme as setThemeActionCreator, setLocale as setLocaleActionCreator } from './appStateActions'
import { initializeBridgeService } from '../../services/bridgeService/bridgeService'
import { Theme } from '../../theme/types'
import { Locale } from '../../localization/types'

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
    const setTheme = (theme: Theme) => {
        dispatch(setThemeActionCreator(theme))
    }

    const locale = useTypedSelector(state => state.appState.locale)
    const setLocale = (locale: Locale) => {
        dispatch(setLocaleActionCreator(locale))
    }

    return {
        initialize,
        isInitialized,
        isInitializing,
        isUnlocked,
        isLocked,
        theme,
        setTheme,
        locale,
        setLocale
    }
}

export default useAppState
