import {useTypedSelector} from '../store'
import {useDispatch} from 'react-redux'
import {
    createClientProfile as createClientProfileActionCreator,
    deleteClientDevice as deleteClientDeviceActionCreator,
    setActiveProfile as setActiveProfileActionCreator,
    setClientDevices as setClientDevicesActionCreator,
    setClientProfiles as setClientProfilesActionCreator,
    setCurrentFocusPanel as setCurrentFocusPanelActionCreator,
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
    setShowOverlay as setShowOverlayActionCreator,
    setTheme as setThemeActionCreator,
    setWindowInnerSize as setWindowInnerSizeActionCreator,
    setWorkerServiceIsInitialized,
    updateClientDevice as updateClientDeviceActionCreator,
    updateClientProfile as updateClientProfileActionCreator
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
    CurrentFocusPanel,
    DeviceData,
    ModalNames,
    NetworkStates,
    PlatformLoadingTypes,
    ProfileData
} from "./appStateReducer";

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

    const setProfilesToNonPrimary = () => {
        let profiles = getWorkerService().profile.profiles
        profiles = profiles.map(profile => {
            return {
                ...profile,
                isPrimary: false
            }
        })
        getWorkerService().profile.profiles = profiles
        return saveProfiles()
    }

    const createClientProfile = (profile: ProfileData) => {
        setIsPlatformLoading('createProfile')

        if (profile.isPrimary) {
            setProfilesToNonPrimary().then((status) => {
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
        } else {
            return createProfile(profile).then((status) => {
                if (status === 'SUCCESS') {
                    setIsPlatformLoading(null)
                    return dispatch(createClientProfileActionCreator(profile))
                }
                return
            })
        }

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
        getWorkerService().profile.profiles = updatedClientProfiles
        saveProfiles().then((status) => {
            console.log(getWorkerService().profile.profiles)
            if (status === 'SUCCESS') {
                dispatch(updateClientProfileActionCreator(updatedProfile))
            }
            return
        })
    }

    const deleteClientProfile = (keyId: string) => {
        const profiles = getWorkerService().profile.profiles
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
        isPlatformLoading,
        setIsPlatformLoading,
        hasContainer,
        noContainer,
        setHasContainer,
        hasNotification,
        setHasNotification,
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
        currentFocusPanel,
        setCurrentFocusPanel,
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
        deleteClientDevice
    }
}

export default useAppState
