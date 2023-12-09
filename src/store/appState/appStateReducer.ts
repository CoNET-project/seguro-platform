import {createReducer} from '@reduxjs/toolkit'
import {
    createClientProfile,
    deleteClientDevice,
    deleteClientProfile,
    setActiveProfile,
    setClientDevices,
    setClientProfiles,
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
    updateClientProfile,
	setShowGuide,
	setShowAppStore,
    setShowJoinUS,
    setShowBlockScan,
    setLocalDaemon,
    setShowMiner,
    setShowDePINing,
    setPendingRewards,
    setIsProxyStart,
    setProxyUploadSpeed

} from './appStateActions'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {getPreferredLocale} from '../../localization/localization'
import {detectWindowInnerSize} from "../../utilities/utilities";
import {WindowInnerSize} from './useAppState'
import {getWorkerService} from "../../services/workerService/workerService";
import { profile } from '@conet.project/seguro-worker-lib/build/workerBridge'

export type ModalNames = 'settings' | 'manageProfile' | 'addProfile' | 'profilesList' | null

export type NetworkStates = 'connected' | 'connecting' | 'disconnected' | 'reconnecting'

type CryptoAssetHistory = {
	status: 'Pending'|'Confirmed'
	amount: number
	Nonce: number
	to: string
	transactionFee: number
	gasLimit: number
	gasUsed: number
	baseFee: number
	priorityFee: number
	totalGasFee: number
	maxFeePerGas: number
	total: number
}


export type CryptoAsset = {
	balance: number
	history: CryptoAssetHistory[]
	networkName: string						//
	RpcURL: string							//		Token Contract Address
	chainID: number							//		Token Decimal
	currencySymbol: string					//		Token Symbol
	blockExplorerURL: string
}

export type nodes_info = {
	country: string
	customs_review_total: number
	ip_addr: string
	last_online: string
	lat: number
	lon: number 
	nft_tokenid: string
	outbound_fee: number
	outbound_total: number
	pgp_publickey_id: string
	region: string
	registration_date: string
	storage_fee: number
	storage_total: number
	total_online: number
	wallet_addr: string
	entryChecked?: boolean
	recipientChecked?: boolean
	disable?: boolean
}
export type paymentAuthorization = {
	amount: number
	balance: number
	history: any []
	
}
export type ProfileData = {
    bio: string
    nickName: string
    keyID: string
    tags: string[]
	profileImg: string
    alias: string
    isPrimary: boolean
	assets?: CryptoAsset[]
	shortID: string
	changed?: boolean
	publicKeyArmor?: string
	privateKeyArmor?: string
	si_nodes?: nodes_info[]
	network?: {
		entrys: nodes_info[]
		recipients: nodes_info[]
		payment: paymentAuthorization[]
	}
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
    isTouchDevice: boolean
    isUnlocked: boolean
    isDrawerOpen: boolean
    isModalOpen: ModalNames
    isPlatformLoading: PlatformLoadingTypes
    hasContainer: boolean
    networkStrength: NetworkStrength
    hasNotification: boolean
    showOverlay: boolean
    windowInnerSize: WindowInnerSize
    workerServiceIsInitialized: boolean
    theme: Theme
    locale: Locale
    hasUpdateAvailable: boolean
    clientProfiles: ClientProfiles
    activeProfile: ProfileData | null
    clientDevices: Devices
    networkState: NetworkStates
	showGuide: boolean
	showAppStore: boolean
    showBlockScan: boolean
    isProxyStart: boolean
    showJoinUS: boolean
    localDaemon: boolean
    showMiner: boolean
    showDePINing: boolean
    pendingRewards: number
    proxyUploadSpeed: number
}

const initialState: AppStateReducerState = {
    showMiner: true,
    isProxyStart: false,
    isTouchDevice: false,
    isUnlocked: false,
    isDrawerOpen: false,
    isModalOpen: null,
	showGuide: false,
	showAppStore: false,
    showJoinUS: true,
    showBlockScan: false,
    isPlatformLoading: null,
    hasContainer: false,
    networkStrength: 3,
    hasNotification: false,
    showOverlay: false,
    windowInnerSize: detectWindowInnerSize(),
    workerServiceIsInitialized: false,
    theme: 'Auto',
    locale: getPreferredLocale(),
    hasUpdateAvailable: false,
    clientProfiles: {},
    activeProfile: null,
    clientDevices: {},
    networkState: 'disconnected',
    localDaemon: false,
	showDePINing: false,
    pendingRewards: 0,
    proxyUploadSpeed: 0
}

const appStateReducer = createReducer(initialState, builder => {
    return builder

        .addCase(setShowDePINing, (state, action) => {
            state.showDePINing = action.payload.showDePINing
        })

        .addCase(setProxyUploadSpeed, (state, action) => {
            state.proxyUploadSpeed = action.payload.proxyUploadSpeed
        })

        .addCase(setLocalDaemon, (state, action) => {
            state.localDaemon = action.payload.localDaemon
        })

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

        .addCase(setIsProxyStart, (state, action) => {
            state.isProxyStart = action.payload.isProxyStart
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

		.addCase(setShowGuide, (state, action) => {
            state.showGuide = action.payload.showGuide
        })

		.addCase(setShowBlockScan, (state, action) => {
            state.showBlockScan = action.payload.showBlockScan
        })

        .addCase(setShowJoinUS, (state, action) => {
            state.showJoinUS = action.payload.showJoinUS
        })

        .addCase(setShowAppStore, (state, action) => {
            state.showAppStore = action.payload.showAppStore
        })

        .addCase(setShowMiner, (state, action) => {
            state.showMiner = action.payload.showMiner
        })

        .addCase(setHasUpdateAvailable, (state, action) => {
            state.hasUpdateAvailable = action.payload.hasUpdateAvailable
        })

        .addCase(setIsModalOpen, (state, action) => {
            state.isModalOpen = action.payload.isOpen
        })

        .addCase(setClientProfiles, (state, action) => {
            state.clientProfiles = action.payload.profiles
        })

        .addCase(createClientProfile, (state, action) => {
            const profiles = [
                ...getWorkerService().data.profiles
            ]
            state.clientProfiles = profiles.reduce((clientProfiles: ClientProfiles, profile) => {
                if (profile.keyID) {
					const keyID = profile.keyID
                    clientProfiles[keyID] = profile
					profile['shortID'] = keyID.substring(0,2) + keyID.substring(2,6).toUpperCase() + '....' + keyID.substring(keyID.length-4,keyID.length).toUpperCase()
                }
                return clientProfiles
            }, {})
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
