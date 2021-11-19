import {createAction} from '@reduxjs/toolkit'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {WindowInnerSize} from './useAppState'
import {CurrentFocusPanel, DeviceData, ModalNames, NetworkStates, ProfileData} from "./appStateReducer";

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

export const setIsUnlocked = createAction(
    'appState/isUnlocked',
    (isUnlocked: boolean) => {
        return {
            payload: {
                isUnlocked
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

export const setNetworkState = createAction(
    'appState/setNetworkState',
    (networkState: NetworkStates) => {
        return {
            payload: {
                networkState: networkState
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

export const createClientProfile = createAction(
    'appState/createClientProfile',
    (profile: ProfileData) => {
        return {
            payload: {
                profile
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

export const deleteClientProfile = createAction(
    'appState/deleteClientProfile',
    (keyId: string) => {
        return {
            payload: {
                keyId
            }
        }
    }
)

export const setClientDevices = createAction(
    'appState/setClientDevices',
    (clientDevices: { [deviceId: string]: DeviceData }) => {
        return {
            payload: clientDevices
        }
    }
)

export const deleteClientDevice = createAction(
    'appState/deleteClientDevice',
    (deviceId: string) => {
        return {
            payload: deviceId
        }
    }
)

export const updateClientDevice = createAction(
    'appState/updateClientDevice',
    (deviceId: string, deviceData: DeviceData) => {
        return {
            payload: {
                deviceId,
                deviceData
            }
        }
    }
)
