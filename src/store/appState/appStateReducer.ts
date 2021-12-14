import {createReducer} from '@reduxjs/toolkit'
import {
    createClientProfile,
    deleteClientDevice,
    deleteClientProfile,
    setActiveProfile,
    setClientDevices,
    setClientProfiles,
    setCurrentFocusPanel,
    setHasContainer,
    setHasNotification,
    setHasUpdateAvailable,
    setIsDrawerOpen,
    setIsModalOpen,
    setIsPlatformLoading,
    setIsTouchDevice,
    setIsUnlocked,
    setLocale,
    setNetworkState,
    setShowOverlay,
    setTheme,
    setWindowInnerSize,
    setWorkerServiceIsInitialized,
    updateClientDevice,
    updateClientProfile
} from './appStateActions'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {getPreferredLocale} from '../../localization/localization'
import {detectWindowInnerSize} from "../../utilities/utilities";
import {WindowInnerSize} from './useAppState'

export type CurrentFocusPanel = 'left' | 'main' | 'right'

export type ModalNames = 'settings' | 'manageProfile' | 'addProfile' | null

export type NetworkStates = 'connected' | 'connecting' | 'disconnected' | 'reconnecting'

export type ProfileData = {
    imageSrc?: string,
    keyid: string,
    nickname?: string,
    primary: boolean
}

export type Devices = {
    [deviceId: string]: DeviceData
}

export type DeviceData = {
    id: string,
    type: 'desktop' | 'laptop' | 'tablet' | 'mobile' | 'unknown',
    name: string,
}

export type ClientProfiles = {
    [keyId: string]: ProfileData
}

export type PlatformLoadingTypes = 'unlockPasscode' | null

type AppStateReducerState = {
    isTouchDevice: boolean,
    isUnlocked: boolean,
    isDrawerOpen: boolean,
    isModalOpen: ModalNames,
    isPlatformLoading: PlatformLoadingTypes,
    hasContainer: boolean,
    hasNotification: boolean,
    showOverlay: boolean,
    currentFocusPanel: CurrentFocusPanel,
    windowInnerSize: WindowInnerSize,
    workerServiceIsInitialized: boolean,
    theme: Theme,
    locale: Locale,
    hasUpdateAvailable: boolean,
    clientProfiles: ClientProfiles,
    activeProfile: ProfileData | null,
    clientDevices: Devices,
    networkState: NetworkStates
}

const initialState: AppStateReducerState = {
    isTouchDevice: false,
    isUnlocked: false,
    isDrawerOpen: false,
    isModalOpen: null,
    isPlatformLoading: null,
    hasContainer: false,
    hasNotification: false,
    showOverlay: false,
    currentFocusPanel: 'left',
    windowInnerSize: detectWindowInnerSize(),
    workerServiceIsInitialized: false,
    theme: 'Auto',
    locale: getPreferredLocale(),
    hasUpdateAvailable: false,
    clientProfiles: {},
    activeProfile: null,
    clientDevices: {},
    networkState: 'disconnected'
}

const appStateReducer = createReducer(initialState, builder => {
    return builder
        .addCase(setWorkerServiceIsInitialized, (state, action) => {
            state.workerServiceIsInitialized = action.payload.workerServiceIsInitialized
        })

        .addCase(setIsPlatformLoading, (state, action) => {
            state.isPlatformLoading = action.payload.type
        })

        .addCase(setNetworkState, (state, action) => {
            state.networkState = action.payload.networkState
        })

        .addCase(setHasContainer, (state, action) => {
            state.hasContainer = action.payload.hasContainer
        })

        .addCase(setHasNotification, (state, action) => {
            state.hasNotification = action.payload.hasNotification
        })

        .addCase(setTheme, (state, action) => {
            state.theme = action.payload.theme
        })

        .addCase(setLocale, (state, action) => {
            state.locale = action.payload.locale
        })

        .addCase(setIsTouchDevice, (state, action) => {
            state.isTouchDevice = action.payload.isTouchDevice
        })

        .addCase(setWindowInnerSize, (state, action) => {
            state.windowInnerSize = action.payload.windowInnerSize
        })

        .addCase(setShowOverlay, (state, action) => {
            state.showOverlay = action.payload.toggleOverlay
        })

        .addCase(setIsDrawerOpen, (state, action) => {
            state.isDrawerOpen = action.payload.isDrawerOpen
        })

        .addCase(setIsUnlocked, (state, action) => {
            state.isUnlocked = action.payload.isUnlocked
        })

        .addCase(setHasUpdateAvailable, (state, action) => {
            state.hasUpdateAvailable = action.payload.hasUpdateAvailable
        })

        .addCase(setCurrentFocusPanel, (state, action) => {
            state.currentFocusPanel = action.payload.panel
        })

        .addCase(setIsModalOpen, (state, action) => {
            state.isModalOpen = action.payload.isOpen
        })

        .addCase(setClientProfiles, (state, action) => {
            state.clientProfiles = action.payload.profiles
        })

        .addCase(createClientProfile, (state, action) => {
            let updatedProfiles = {
                ...state.clientProfiles
            }

            updatedProfiles[action.payload.profile.keyid] = action.payload.profile

            if (action.payload.profile.primary) {
                Object.values(state.clientProfiles).map((profile) => {
                    if (profile.primary) {
                        updatedProfiles[profile.keyid].primary = false
                    }
                })
            }
            state.clientProfiles = updatedProfiles
        })

        .addCase(updateClientProfile, (state, action) => {
            const updatedProfiles = {
                ...state.clientProfiles
            }
            updatedProfiles[action.payload.profile.keyid] = action.payload.profile
            state.clientProfiles = updatedProfiles
        })

        .addCase(setActiveProfile, (state, action) => {
            state.activeProfile = action.payload.profile
        })

        .addCase(deleteClientProfile, (state, action) => {
            const updatedClientProfiles = {
                ...state.clientProfiles
            }

            delete updatedClientProfiles[action.payload.keyId]

            state.clientProfiles = updatedClientProfiles
        })

        .addCase(setClientDevices, (state, action) => {
            state.clientDevices = action.payload
        })

        .addCase(deleteClientDevice, (state, action) => {
            const updatedDevices = state.clientDevices
            delete updatedDevices[action.payload]

            state.clientDevices = updatedDevices
        })

        .addCase(updateClientDevice, (state, action) => {
            state.clientDevices[action.payload.deviceId] = action.payload.deviceData
        })
})

export default appStateReducer
