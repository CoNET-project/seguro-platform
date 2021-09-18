import {useTypedSelector} from '../store'
import {useDispatch} from 'react-redux'
import {
    setIsTouchDevice as setIsTouchDeviceActionCreator,
    setLocale as setLocaleActionCreator, setShowOverlay,
    setTheme as setThemeActionCreator,
    setWindowInnerSize as setWindowInnerSizeActionCreator,
    setWorkerServiceIsInitialized
} from './appStateActions'
import {initializeWorkerService} from '../../services/workerService/workerService'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'

export type WindowInnerSize = {
    width: number,
    height: number
}

const useAppState = () => {
    const dispatch = useDispatch()

    const initialize = async () => {
        await initializeWorkerService()
    }

    const isInitialized = useTypedSelector(state => state.appState.workerServiceIsInitialized)
    const isInitializing = !isInitialized

    const isUnlocked = useTypedSelector(state => state.appState.isUnlocked)
    const isLocked = !isUnlocked

    const hasContainer = useTypedSelector(state => state.appState.hasContainer)
    const noContainer = !hasContainer

    const theme = useTypedSelector(state => state.appState.theme)

    // TESTING PURPOSES ONLY
    const setInitialized = (initialized: boolean) => {
        dispatch(setWorkerServiceIsInitialized(initialized))
    }

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

    const showOverlay = useTypedSelector(state => state.appState.showOverlay)
    const toggleOverlay = (showOverlay: boolean) => {
        dispatch(setShowOverlay(showOverlay))
    }

    return {
        initialize,
        isInitialized,
        isInitializing,
        hasContainer,
        noContainer,
        setInitialized,
        isUnlocked,
        isLocked,
        theme,
        setTheme,
        locale,
        setLocale,
        isTouchDevice,
        setIsTouchDevice,
        windowInnerSize,
        setWindowInnerSize,
        showOverlay,
        toggleOverlay
    }
}

export default useAppState
