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
    setNetworkStrength,
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
import {getWorkerService} from "../../services/workerService/workerService";

export type CurrentFocusPanel = 'left' | 'main' | 'right'

export type ModalNames = 'settings' | 'manageProfile' | 'addProfile' | null

export type NetworkStates = 'connected' | 'connecting' | 'disconnected' | 'reconnecting'

export type ProfileData = {
    bio: string;
    nickname: string;
    keyID: string;
    tags: string[];
    alias: string;
    isPrimary: boolean;
    profileImg: string;
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

export type PlatformLoadingTypes = 'unlockPasscode' | 'createProfile' | null

export type NetworkStrength = 1 | 2 | 3

type AppStateReducerState = {
    isTouchDevice: boolean,
    isUnlocked: boolean,
    isDrawerOpen: boolean,
    isModalOpen: ModalNames,
    isPlatformLoading: PlatformLoadingTypes,
    hasContainer: boolean,
    networkStrength: NetworkStrength,
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
    networkStrength: 3,
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

        .addCase(setNetworkStrength, (state, action) => {
            state.networkStrength = action.payload.networkStrength
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
            const profiles = [
                ...getWorkerService().profile.profiles
            ]
            const updatedClientProfiles = profiles.reduce((clientProfiles: ClientProfiles, profile) => {
                console.log(profile)
                if (profile.keyID) {
                    // @ts-ignore
                    clientProfiles[profile.keyID] = profile
                }
                return clientProfiles
            }, {})
            state.clientProfiles = updatedClientProfiles
        })

        .addCase(updateClientProfile, (state, action) => {
            const updatedProfiles = {
                ...state.clientProfiles
            }

            if (action.payload.profile.keyID) {
                updatedProfiles[action.payload.profile.keyID] = action.payload.profile
            }

            if (state.activeProfile?.keyID === action.payload.profile.keyID) {
                state.activeProfile = action.payload.profile
            }

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

            if (action.payload.setAsPrimaryKeyId) {
                updatedClientProfiles[action.payload.setAsPrimaryKeyId].isPrimary = true
            }

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
