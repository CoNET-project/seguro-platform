import {createAction} from '@reduxjs/toolkit'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {WindowInnerSize} from './useAppState'

export const setWorkerServiceIsInitialized = createAction(
    'appState/workerServiceIsInitialized',
    (workerServiceIsInitialized: boolean) => {
        return {
            payload: {
                workerServiceIsInitialized
            }
        }
    }
)

export const setHasContainer = createAction(
    'appState/hasContainer',
    (hasContainer: boolean) => {
        return {
            payload: {
                hasContainer
            }
        }
    }
)

export const setTheme = createAction(
    'appState/setTheme',
    (theme: Theme) => {
        return {
            payload: {
                theme
            }
        }
    }
)

export const setLocale = createAction(
    'appState/setLocale',
    (locale: Locale) => {
        return {
            payload: {
                locale
            }
        }
    }
)

export const setIsTouchDevice = createAction(
    'appState/setIsTouchDevice',
    (isTouchDevice: boolean) => {
        return {
            payload: {
                isTouchDevice: isTouchDevice
            }
        }
    }
)

export const setWindowInnerSize = createAction(
    'appState/setWindowInnerSize',
    (windowInnerSize: WindowInnerSize) => {
        return {
            payload: {
                windowInnerSize
            }
        }
    }
)

export const setShowOverlay = createAction(
    'appState/toggleOverlay',
    (toggleOverlay: boolean) => {
        return {
            payload: {
                toggleOverlay
            }
        }
    }
)

export const setIsDrawerOpen = createAction(
    'appState/toggleDrawer',
    (isDrawerOpen: boolean) => {
        return {
            payload: {
                isDrawerOpen
            }
        }
    }
)

export const setHasUpdateAvailable = createAction(
    'appState/setHasUpdateAvailable',
    (hasUpdateAvailable: boolean) => {
        return {
            payload: {
                hasUpdateAvailable
            }
        }
    }
)
