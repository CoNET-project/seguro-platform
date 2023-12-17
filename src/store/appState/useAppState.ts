import {useTypedSelector} from '../store'
import {useDispatch} from 'react-redux'
import {
    createClientProfile as createClientProfileActionCreator,
    deleteClientDevice as deleteClientDeviceActionCreator,
    setActiveProfile as setActiveProfileActionCreator,
    setClientDevices as setClientDevicesActionCreator,
    setClientProfiles as setClientProfilesActionCreator,
    setHasContainer as setHasContainerActionCreator,
    setHasNotification as setHasNoticationActionCreator,
    setHasUpdateAvailable as setHasUpdateAvailableActionCreator,
    setIsDrawerOpen as setIsDrawerOpenActionCreator,
    setIsModalOpen as setIsModalOpenActionCreator,
    setIsPlatformLoading as setIsPlatformLoadingActionCreator,
    setIsTouchDevice as setIsTouchDeviceActionCreator,
    setIsUnlocked as setIsUnlockedActionCreator,
    setLocale as setLocaleActionCreator,
    setNetworkState as setNetworkStateActionCreator,
    setNetworkStrength as setNetworkStrengthActionCreator,
    setShowOverlay as setShowOverlayActionCreator,
    setTheme as setThemeActionCreator,
    setWindowInnerSize as setWindowInnerSizeActionCreator,
    setWorkerServiceIsInitialized,
    updateClientDevice as updateClientDeviceActionCreator,
    updateClientProfile as updateClientProfileActionCreator,
	setShowGuide as _setShowGuide,
    setShowJoinUS as _setShowJoinUS,
	setShowAppStore as _setShowAppStore,
    setShowBlockScan as _setShowBlockScan,
    setLocalDaemon as _setLocalDaemon,
    setShowMiner as _setShowMiner,
    setShowDePINing as _setShowDePINing,
    setPendingRewards as _setPendingRewards,
	setCurrentProfileCONET as _setCurrentProfileCONET,
    setIsProxyStart as _setIsProxyStart,
    setProxyUploadSpeed as _setProxyUploadSpeed,
	setCurrentProfileCNTP as _setCurrentProfileCNTP

} from './appStateActions'


import {
    createProfile,
    getWorkerService,
    initializeWorkerService,
    saveProfiles
} from '../../services/workerService/workerService'

import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'

import {
    ClientProfiles,
    DeviceData,
    ModalNames,
    NetworkStates,
    NetworkStrength,
    PlatformLoadingTypes,
    ProfileData
} from "./appStateReducer"

export type WindowInnerSize = {
    width: number,
    height: number
}

const useAppState = () => {
    const dispatch = useDispatch()
	const currentProfileCONET = useTypedSelector(state => state.appState.currentProfileCONET)

	const setCurrentProfileCONET = (conet: string ) => {
        dispatch (_setCurrentProfileCONET(conet))
    }
	const currentProfileCNTP =  useTypedSelector(state => state.appState.currentProfileCNTP)

	const setCurrentProfileCNTP = (cntp: string ) => {
        dispatch (_setCurrentProfileCNTP(cntp))
    }
    const showDePINing =  useTypedSelector(state => state.appState.showDePINing)

    const pendingRewards = useTypedSelector(state => state.appState.pendingRewards)

    const setPendingRewards = (pendingRewards: number ) => {
        dispatch (_setPendingRewards(pendingRewards))
    }

    const setShowDePINing = (showDePINing: boolean ) => {
        dispatch (_setShowDePINing(showDePINing))
    }

    const dAPPInitialize = async () => {
        await initializeWorkerService()
    }

    const localDaemon = useTypedSelector(state => state.appState.localDaemon)

    const setlocalDaemon = (localDaemon: boolean ) => {
		dispatch (_setLocalDaemon(localDaemon))
	}

    const showMiner = useTypedSelector(state => state.appState.showMiner)

    const setShowMiner = (showMiner: boolean ) => {
		dispatch (_setShowMiner(showMiner))
	}

	const showGuide = useTypedSelector(state => state.appState.showGuide)


	const setShowGuide = (showguide: boolean ) => {
		dispatch (_setShowGuide(showguide))
	}

    const isProxyStart = useTypedSelector(state => state.appState.isProxyStart)
    
    const proxyUploadSpeed = useTypedSelector(state => state.appState.proxyUploadSpeed)

    const setProxyUploadSpeed = (proxyUploadSpeed: number ) => {
		dispatch (_setProxyUploadSpeed(proxyUploadSpeed))
	}

	const setIsProxyStart = (isProxyStart: boolean ) => {
		dispatch (_setIsProxyStart(isProxyStart))
	}

    const showBlockScan = useTypedSelector(state => state.appState.showBlockScan)
    
	const setShowBlockScan = (showBlockScan: boolean ) => {
		dispatch (_setShowBlockScan(showBlockScan))
	}

	const showAppStore = useTypedSelector(state => state.appState.showAppStore)
    
	const setShowAppStore = (showAppStore: boolean ) => {
		dispatch (_setShowAppStore(showAppStore))
	}

    const showJoinUS = useTypedSelector(state => state.appState.showJoinUS)
    
	const setShowJoinUS = (showJoinUS: boolean ) => {
		dispatch (_setShowJoinUS(showJoinUS))
	}

    const isInitialized = useTypedSelector(state => state.appState.workerServiceIsInitialized)
    const isInitializing = !isInitialized

    const isPlatformLoading = useTypedSelector(state => state.appState.isPlatformLoading)
    const setIsPlatformLoading = (type: PlatformLoadingTypes) => {
        dispatch(setIsPlatformLoadingActionCreator(type))
    }

    const isUnlocked = useTypedSelector(state => state.appState.isUnlocked)
    const isLocked = !isUnlocked

    const setIsUnlocked = (isUnlocked: boolean) => {
        dispatch(setIsUnlockedActionCreator(isUnlocked))
    }

    const hasContainer = useTypedSelector(state => state.appState.hasContainer)
    const noContainer = !hasContainer

    const setHasContainer = (hasContainer: boolean) => {
        dispatch(setHasContainerActionCreator(hasContainer))
    }


    const hasNotification = useTypedSelector(state => state.appState.hasNotification)
    const setHasNotification = (hasNotification: boolean) => {
        dispatch(setHasNoticationActionCreator(hasNotification))
    }


    const theme = useTypedSelector(state => state.appState.theme)

    // TESTING PURPOSES ONLY
    const setInitialized = (initialized: boolean) => {
        dispatch(setWorkerServiceIsInitialized(initialized))
    }

    // TESTING PURPOSES ONLY

    const setTheme = (theme: Theme) => {
        dispatch(setThemeActionCreator(theme))
    }

    const networkState = useTypedSelector(state => state.appState.networkState)
    const setNetworkState = (networkState: NetworkStates) => {
        dispatch(setNetworkStateActionCreator(networkState))
    }

    const networkStrength = useTypedSelector(state => state.appState.networkStrength)
    const setNetworkStrength = (networkStrength: NetworkStrength) => {
        dispatch(setNetworkStrengthActionCreator(networkStrength))
    }

    const setProfilesToNonPrimary = () => {
        let profiles = getWorkerService().data.profiles
        profiles = profiles.map((pro: any) => {
            return {
                ...pro,
                isPrimary: false
            }
        })
        getWorkerService().data.profiles = profiles
        return saveProfiles()
    }

    const createClientProfile = (profile: ProfileData) => {
        setIsPlatformLoading('createProfile')

        if (profile.isPrimary) {
            return setProfilesToNonPrimary().then((status) => {
                if (status === 'SUCCESS') {
                    return createProfile(profile).then((status) => {
                        if (status === 'SUCCESS') {
                            setIsPlatformLoading(null)
                            return dispatch(createClientProfileActionCreator(profile))
                        }
                        return
                    })
                }
            })
        }
		return createProfile(profile).then((status) => {
			if (status === 'SUCCESS') {
				setIsPlatformLoading(null)
				return dispatch(createClientProfileActionCreator(profile))
			}
			return
		})
        

        // createProfile(profile).then((status) => {
        //     if (status === 'SUCCESS') {
        //         if (profile.isPrimary) {
        //             const updatedProfiles = getWorkerService().profile.profiles
        //             for (let i = 0; i < updatedProfiles.length - 1; i++) {
        //                 updatedProfiles[i].isPrimary = false
        //             }
        //             getWorkerService().profile.profiles = updatedProfiles
        //             if (getWorkerService().profile.storeProfile) {
        //                 saveProfiles().then((status) => {
        //                     console.log(status)
        //                     return dispatch(createClientProfileActionCreator(profile))
        //                 })
        //             }
        //         } else {
        //             console.log(getWorkerService().profile.profiles)
        //             return dispatch(createClientProfileActionCreator(profile))
        //         }
        //     }
        //     return
        // })
    }

    const updateClientProfiles = (updatedProfile: ProfileData) => {
        let currentClientProfiles = {
            ...clientProfiles
        }
        let updatedClientProfiles: Array<ProfileData>
        if (!clientProfiles[updatedProfile.keyID].isPrimary && updatedProfile.isPrimary) {
            updatedClientProfiles = Object.values(currentClientProfiles).map(profile => {
                if (profile.keyID === updatedProfile.keyID) {
                    return {
                        ...updatedProfile
                    }
                }
                return {
                    ...profile,
                    isPrimary: false
                }
            })
        } else {
            currentClientProfiles[updatedProfile.keyID] = updatedProfile
            updatedClientProfiles = Object.values(currentClientProfiles)
        }
		console.log (getWorkerService().data)
        getWorkerService().data.profiles = updatedClientProfiles
        saveProfiles().then((status) => {
            console.log(getWorkerService().data.profiles)
            if (status === 'SUCCESS') {
                dispatch(updateClientProfileActionCreator(updatedProfile))
            }
            return
        })
    }

    const deleteClientProfile = (keyId: string) => {
        const profiles = getWorkerService().data.profiles
        profiles.shift()
        saveProfiles().then((status) => {
            console.log('SAVED WORKER SERVICE', getWorkerService())
        })
        // const updatedClientProfiles = {
        //     ...clientProfiles
        // }
        //
        // console.log('Original length', Object.keys(updatedClientProfiles).length)
        //
        // if (updatedClientProfiles[keyId].isPrimary) {
        //     delete updatedClientProfiles[keyId]
        //     updatedClientProfiles[Object.keys(updatedClientProfiles)[0]].isPrimary = true
        // } else {
        //     delete updatedClientProfiles[keyId]
        // }
        //
        // console.log('Modified length', Object.keys(updatedClientProfiles).length)
        //
        // getWorkerService().profile.profiles = Object.values(updatedClientProfiles)
        // saveProfiles().then((status) => {
        //     if (status === 'SUCCESS') {
        //         console.log(getWorkerService().profile.profiles)
        //         return dispatch(deleteClientProfileActionCreator(keyId))
        //     }
        //     return
        // })

    }

    const activeProfile = useTypedSelector(state => state.appState.activeProfile)
	
    const setActiveProfile = (profile: ProfileData) => {
        dispatch(setActiveProfileActionCreator(profile))
    }

    const clientProfiles = useTypedSelector(state => state.appState.clientProfiles)
	
    const setClientProfiles = (clientProfiles: ClientProfiles) => {
        const primaryProfile = Object.values(clientProfiles).filter(profile => profile.isPrimary)
        if (primaryProfile.length) {
            setActiveProfile(primaryProfile[0])
        }
        dispatch(setClientProfilesActionCreator(clientProfiles))
    }

    const clientDevices = useTypedSelector(state => state.appState.clientDevices)
    const setClientDevices = (clientDevices: { [deviceId: string]: DeviceData }) => {
        dispatch(setClientDevicesActionCreator(clientDevices))
    }

    const updateClientDevice = (deviceId: string, deviceData: DeviceData) => {
        dispatch(updateClientDeviceActionCreator(deviceId, deviceData))
    }

    const deleteClientDevice = (deviceId: string) => {
        dispatch(deleteClientDeviceActionCreator(deviceId))
    }


    const locale = useTypedSelector(state => state.appState.locale)
    const setLocale = (locale: Locale) => {
        dispatch(setLocaleActionCreator(locale))
    }

    const isTouchDevice = useTypedSelector(state => state.appState.isTouchDevice)
    const setIsTouchDevice = (isTouchDevice: boolean) => {
        dispatch(setIsTouchDeviceActionCreator(isTouchDevice))
    }

    const isModalOpen = useTypedSelector(state => state.appState.isModalOpen)
    const setIsModalOpen = (modal: ModalNames) => {
        setIsShowOverlay(!!modal || false)
        setIsDrawerOpen(false)
        dispatch(setIsModalOpenActionCreator(modal))
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

    const hasUpdateAvailable = useTypedSelector(state => state.appState.hasUpdateAvailable)
    const setHasUpdateAvailable = (hasUpdateAvailable: boolean) => {
        dispatch(setHasUpdateAvailableActionCreator(hasUpdateAvailable))
    }

    return {
		showGuide,
		showAppStore,
        showJoinUS,
        showBlockScan,
        isInitialized,
        isInitializing,
        isPlatformLoading,
        setIsPlatformLoading,
        hasContainer,
        noContainer,
        setHasContainer,
        hasNotification,
        setHasNotification,
        networkStrength,
        setNetworkStrength,
        setInitialized,
        isUnlocked,
        isLocked,
        setIsUnlocked,
        theme,
        setTheme,
        networkState,
        setNetworkState,
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
        isModalOpen,
        setIsModalOpen,
        clientProfiles,
        setClientProfiles,
        activeProfile,
        setActiveProfile,
        updateClientProfiles,
        deleteClientProfile,
        createClientProfile,
        clientDevices,
        setClientDevices,
        updateClientDevice,
        deleteClientDevice,
		setShowGuide,
		setShowAppStore,
        setShowBlockScan,
        setShowJoinUS,
        dAPPInitialize,
        localDaemon,
        setlocalDaemon,
        setShowMiner,
        showMiner,
        showDePINing,
        setShowDePINing,
        setPendingRewards,
        pendingRewards,
        setIsProxyStart,
        isProxyStart,
        proxyUploadSpeed,
        setProxyUploadSpeed,
		currentProfileCONET,
		setCurrentProfileCONET,
		currentProfileCNTP,
		setCurrentProfileCNTP
    }
}

export default useAppState
