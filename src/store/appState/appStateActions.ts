import {createAction} from '@reduxjs/toolkit'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {WindowInnerSize} from './useAppState'
import {
    ClientProfiles,
    DeviceData,
    ModalNames,
    NetworkStates,
    NetworkStrength,
    PlatformLoadingTypes,
    ProfileData
} from "./appStateReducer";

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

export const setIsPlatformLoading = createAction(
    'appState/isPlatformLoading',
    (type: PlatformLoadingTypes) => {
        return {
            payload: {
                type
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

export const setShowGuide = createAction(
    'appState/showGuide',
    (showGuide: boolean) => {
        return {
            payload: {
                showGuide
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

export const setNetworkStrength = createAction(
    'appState/setNetworkStrength',
    (networkStrength: NetworkStrength) => {
        return {
            payload: {
                networkStrength
            }
        }
    }
)

export const setHasNotification = createAction(
    'appState/hasNotification',
    (hasNotification: boolean) => {
        return {
            payload: {
                hasNotification
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
    (profiles: ClientProfiles) => {
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
    (profile: ProfileData) => {
        return {
            payload: {
                profile: profile
            }
        }
    }
)

export const deleteClientProfile = createAction(
    'appState/deleteClientProfile',
    (keyId: string, setAsPrimaryKeyId?: string) => {
        return {
            payload: {
                keyId,
                setAsPrimaryKeyId
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
