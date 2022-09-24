import {startWorker} from '@conet.project/seguro-worker-lib'
import store from '../../store/store'
import {
    setHasContainer,
    setIsPlatformLoading,
    setIsUnlocked,
    setLocale,
    setShowOverlay,
    setTheme,
    setWorkerServiceIsInitialized
} from '../../store/appState/appStateActions'
import {ContainerData, SeguroNetworkStatus} from "@conet.project/seguro-worker-lib/build/workerBridge";
import logger from "../../utilities/logger/logger";
import {Theme} from "../../theme/types";
import {Locale} from "../../localization/types";
import {ClientProfiles, ProfileData} from "../../store/appState/appStateReducer";

let workerService: ContainerData;

type PasscodeFunctionParams = {
    passcode: string,
    progress: (progress: any) => void
}

type WorkerServiceResolve = 'SUCCESS' | 'FAILURE'

type PasscodeResolves = 'SUCCESS' | 'FAILURE'

export const getWorkerService = () => {
    return workerService
}

export const setUserPreferences = () => {
    if (workerService && workerService.preferences && workerService.preferences.preferences) {
        const {theme, language}: Preferences = workerService.preferences.preferences

        if (theme) {
            store.dispatch(setTheme(theme))
        }

        if (language) {
            store.dispatch(setLocale(language))
        }
    }
}

export const initializeWorkerService = async () => {
    const [status, container] = await startWorker()

    if (status === 'NOT_READY') {
        return
    }

    if (status === 'SUCCESS' && container) {
        logger.log('workerService.ts', 'container:', container)
        workerService = container
        switch (true) {
            case container?.passcode.status === 'NOT_SET':
                store.dispatch(setHasContainer(false))
                store.dispatch(setIsUnlocked(false))
                break;
            case container?.passcode.status === 'LOCKED':
                store.dispatch(setHasContainer(true))
                store.dispatch(setIsUnlocked(false))
                break;
            case container?.passcode.status === 'UNLOCKED':
                store.dispatch(setHasContainer(true))
                store.dispatch(setIsUnlocked(true))
                break;
            default:
                break;
        }
        setUserPreferences()
        setTimeout(() => {
            store.dispatch(setWorkerServiceIsInitialized(true))
        }, 1000)
    }
}

export const lockPlatform = () => {
    if (workerService && workerService.passcode && workerService.passcode.lock) {
        workerService.passcode.lock().then(() => {
            store.dispatch(setShowOverlay(false))
            store.dispatch(setHasContainer(true))
            store.dispatch(setIsUnlocked(false))
        })
    }
}

export const hasPasscode = () => workerService.passcode.status === 'LOCKED' || workerService.passcode.status === 'UNLOCKED'

export const checkIsVerified = () => workerService.SeguroNetwork.SeguroStatus !== 'INIT'

export const createPasscode = ({passcode, progress}: PasscodeFunctionParams): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        if (workerService.passcode.createPasscode) {
            const [status] = await workerService.passcode.createPasscode(passcode, (progressInteger) => {
                progress(progressInteger)
            })

            if (status === 'SUCCESS') {
                resolve(status)
            } else {
                resolve('FAILURE')
            }
            logger.log('workerService.ts', 'createPasscode', status, workerService)
        }
    })
)

export const unlockPasscode = ({passcode, progress}: PasscodeFunctionParams): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        store.dispatch(setIsPlatformLoading('unlockPasscode'))
        if (workerService.passcode.testPasscode) {
            const [status] = await workerService.passcode.testPasscode(passcode, progress)

            switch (status) {
                case 'SUCCESS':
                    resolve(status)
                    break;
                case 'FAILURE':
                    resolve(status)
                    break;
            }
        }
        store.dispatch(setIsPlatformLoading(null))
    })
)

export const deletePasscode = (): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        if (workerService.passcode.deletePasscode) {
            const [status] = await workerService.passcode.deletePasscode()

            if (status === 'SUCCESS') {
                return resolve('SUCCESS')
            }
            return resolve('FAILURE')
        }
    })
)

export const verifyInvitation = (code: string): Promise<SeguroNetworkStatus | 'FAILURE'> => (
    new Promise<SeguroNetworkStatus | 'FAILURE'>((resolve) => {
        setTimeout(() => {
            return resolve('SUCCESS')
        }, 2000)
        // if (workerService.SeguroNetwork.invitation) {
        //     return resolve(workerService.SeguroNetwork.invitation(code))
        // }
        // return resolve('FAILURE')
    })
)

export type Preferences = {
    theme?: Theme,
    language?: Locale,
    extras?: {
        [key: string]: {}
    }
}

export const savePreferences = ({theme, language, extras}: Preferences): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
        if (workerService && workerService.preferences && workerService.preferences.storePreferences) {
            const updatedPreferences: Preferences = {
                ...workerService.preferences.preferences
            }

            if (theme) {
                updatedPreferences.theme = theme
            }

            if (language) {
                updatedPreferences.language = language
            }

            if (extras) {
                updatedPreferences.extras = extras
            }

            workerService.preferences.preferences = updatedPreferences

            workerService?.preferences?.storePreferences().then(([status, container]) => {
                if (status === 'SUCCESS') {
                    return resolve('SUCCESS')
                }
            })
        }
        return resolve('FAILURE')
    })
)

export const updateProfiles = (clientProfiles: ClientProfiles): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
        if (workerService && workerService.profile && workerService.profile.profiles) {

        }
    })
)

export const createProfile = (profile: ProfileData): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
        if (workerService && workerService.profile && workerService.profile.newProfile) {
            workerService.profile.newProfile(profile).then(([status]) => {
                if (status === 'SUCCESS') {
                    return resolve('SUCCESS')
                }
                return resolve('FAILURE')
            })
        }
    })
)

export const saveProfiles = (): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
        if (workerService && workerService.profile && workerService.profile.storeProfile) {
            workerService.profile.storeProfile().then(([status]) => {
                if (status === "SUCCESS") {
                    return resolve(status)
                }
                return resolve('FAILURE')
            })
        }
    })
)
