import {useTypedSelector} from '../store'
import {useDispatch} from 'react-redux'
import {
    setIsTouchDevice as setIsTouchDeviceActionCreator,
    setLocale as setLocaleActionCreator,
    setTheme as setThemeActionCreator,
    setWindowInnerSize as setWindowInnerSizeActionCreator
} from './appStateActions'
import {initializeBridgeService} from '../../services/bridgeService/bridgeService'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'

export type WindowInnerSize = {
    width: number,
    height: number
}

const useAppState = () => {
    const dispatch = useDispatch()

    const initialize = async () => {
        await initializeBridgeService()
    }

    const isInitialized = useTypedSelector(state => state.appState.bridgeServiceIsInitialized)
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

    const isTouchDevice = useTypedSelector(state => state.appState.isTouchDevice)
    const setIsTouchDevice = (isTouchDevice: boolean) => {
        dispatch(setIsTouchDeviceActionCreator(isTouchDevice))
    }

    const windowInnerSize = useTypedSelector(state => state.appState.windowInnerSize)
    const setWindowInnerSize = (windowInnerSize: WindowInnerSize | null) => {
        dispatch(setWindowInnerSizeActionCreator(windowInnerSize))
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
        setLocale,
        isTouchDevice,
        setIsTouchDevice,
        windowInnerSize,
        setWindowInnerSize
    }
}

export default useAppState
