import {createAction} from '@reduxjs/toolkit'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {WindowInnerSize} from './useAppState'
import {CurrentFocusPanel, ModalNames, ProfileData} from "./appStateReducer";

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

export const setCurrentFocusPanel = createAction(
    'appState/setCurrentFocusPanel',
    (panel: CurrentFocusPanel) => {
        return {
            payload: {
                panel
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

export const setIsModalOpen = createAction(
    'appState/setIsModalOpen',
    (modal: ModalNames) => {
        return {
            payload: {
                isOpen: modal
            }
        }
    }
)

export const setClientProfiles = createAction(
    'appState/setClientProfiles',
    (profiles: Array<ProfileData>) => {
        return {
            payload: {
                profiles: profiles
            }
        }
    }
)

export const setActiveProfile = createAction(
    'appState/setActiveProfile',
    (profile: ProfileData) => {
        return {
            payload: {
                profile: profile
            }
        }
    }
)

export const updateClientProfile = createAction(
    'appState/updateClientProfile',
    (index: number, profile: ProfileData) => {
        return {
            payload: {
                index: index,
                profile: profile
            }
        }
    }
)
