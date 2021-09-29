import {useTypedSelector} from '../store'
import {useDispatch} from 'react-redux'
import {
    setCurrentFocusPanel as setCurrentFocusPanelActionCreator,
    setHasUpdateAvailable as setHasUpdateAvailableActionCreator,
    setIsDrawerOpen as setIsDrawerOpenActionCreator,
    setIsTouchDevice as setIsTouchDeviceActionCreator,
    setLocale as setLocaleActionCreator,
    setShowOverlay as setShowOverlayActionCreator,
    setTheme as setThemeActionCreator,
    setWindowInnerSize as setWindowInnerSizeActionCreator,
    setWorkerServiceIsInitialized
} from './appStateActions'
import {initializeWorkerService} from '../../services/workerService/workerService'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {CurrentFocusPanel} from "./appStateReducer";

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

    // TESTING PURPOSES ONLY

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
    const setWindowInnerSize = (windowInnerSize: WindowInnerSize) => {
        dispatch(setWindowInnerSizeActionCreator(windowInnerSize))
    }

    const showOverlay = useTypedSelector(state => state.appState.showOverlay)
    const setIsShowOverlay = (showOverlay: boolean) => {
        dispatch(setShowOverlayActionCreator(showOverlay))
    }

    const isDrawerOpen = useTypedSelector(state => state.appState.isDrawerOpen)
    const setIsDrawerOpen = (openDrawer: boolean) => {
        dispatch(setIsDrawerOpenActionCreator(openDrawer))
    }

    const currentFocusPanel = useTypedSelector(state => state.appState.currentFocusPanel)
    const setCurrentFocusPanel = (panel: CurrentFocusPanel) => {
        dispatch(setCurrentFocusPanelActionCreator(panel))
    }

    const hasUpdateAvailable = useTypedSelector(state => state.appState.hasUpdateAvailable)
    const setHasUpdateAvailable = (hasUpdateAvailable: boolean) => {
        dispatch(setHasUpdateAvailableActionCreator(hasUpdateAvailable))
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
        setIsShowOverlay,
        isDrawerOpen,
        setIsDrawerOpen,
        hasUpdateAvailable,
        setHasUpdateAvailable,
        currentFocusPanel,
        setCurrentFocusPanel
    }
}

export default useAppState
