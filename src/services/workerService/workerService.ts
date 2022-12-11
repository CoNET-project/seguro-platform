import {startWorker} from '@conet.project/seguro-worker-lib/build'
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
import { ContainerData } from "@conet.project/seguro-worker-lib/build/workerBridge"
import logger from "../../utilities/logger/logger"
import {Theme} from "../../theme/types"
import {Locale} from "../../localization/types"
import {ClientProfiles, ProfileData} from "../../store/appState/appStateReducer"

let workerService: ContainerData

type PasscodeFunctionParams = {
    passcode: string,
	locale: string,
    progress: (progress: any) => void
}

type WorkerServiceResolve = 'SUCCESS' | 'FAILURE'

type PasscodeResolves = 'SUCCESS' | 'FAILURE'

export const getWorkerService = () => {
    return workerService
}

export const setUserPreferences = () => {
    if ( workerService?.preferences?.preferences) {
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

	//return store.dispatch(setWorkerServiceIsInitialized(false))

    if (status === 'NOT_READY' || !container || status ==='TIME_OUT') {
		store.dispatch(setWorkerServiceIsInitialized(false))
        return logger.log (`workerService.ts`,'initializeWorkerService',`status === 'NOT_READY' || !container` )
    }


	logger.log('workerService.ts', 'container:', container)
	workerService = container
	switch (true) {
		case container.status === 'NOT_SET':
			store.dispatch(setHasContainer(false))
			store.dispatch(setIsUnlocked(false))
			break;
		case container.status === 'LOCKED':
			store.dispatch(setHasContainer(true))
			store.dispatch(setIsUnlocked(false))
			break;
		case container.status === 'UNLOCKED':
			store.dispatch(setHasContainer(true))
			store.dispatch(setIsUnlocked(true))
			break
		default:
			break
	}
	setUserPreferences()
	store.dispatch(setWorkerServiceIsInitialized(true))
}

export const lockPlatform = () => {
    if (workerService.method.lock) {
        workerService.method.lock().then(() => {
            store.dispatch(setShowOverlay(false))
            store.dispatch(setHasContainer(true))
            store.dispatch(setIsUnlocked(false))
        })
    }
}

export const hasPasscode = () => workerService.status === 'LOCKED' || workerService.status === 'UNLOCKED'

export const checkIsVerified = true

export const createPasscode = ({passcode, locale, progress}: PasscodeFunctionParams): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        if (workerService.method.createPasscode) {
            const [status, data] = await workerService.method.createPasscode(passcode, (progressInteger: any) => {
                progress(progressInteger)
            })

            if (status === 'SUCCESS') {
				if (!data) {
					return resolve('FAILURE')
				}
				workerService = data
                resolve( status )
            }
            
			resolve('FAILURE')
            
            logger.log('workerService.ts', 'createPasscode', status, workerService)
        }
    })
)

export const unlockPasscode = ({passcode, progress}: PasscodeFunctionParams): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        store.dispatch(setIsPlatformLoading('unlockPasscode'))
        if (workerService.method.testPasscode) {
            const [status, container] = await workerService.method.testPasscode(passcode, progress)

            switch (status) {
                case 'SUCCESS':
					if ( container ) {
						workerService = container
					}
					console.log (workerService)
                    resolve(status)
                    break
                case 'FAILURE':
                    resolve(status)
                    break
            }
        }
        store.dispatch(setIsPlatformLoading(null))
    })
)

export const deletePasscode = (): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        if (workerService.method.deletePasscode) {
            const [status] = await workerService.method.deletePasscode()

            if (status === 'SUCCESS') {
                return resolve('SUCCESS')
            }
            return resolve('FAILURE')
        }
    })
)

// export const verifyInvitation = (code: string): Promise<SeguroNetworkStatus | 'FAILURE'> => (
//     new Promise<SeguroNetworkStatus | 'FAILURE'>((resolve) => {
//         setTimeout(() => {
//             return resolve('SUCCESS')
//         }, 2000)
//         // if (workerService.SeguroNetwork.invitation) {
//         //     return resolve(workerService.SeguroNetwork.invitation(code))
//         // }
//         // return resolve('FAILURE')
//     })
// )

export type Preferences = {
    theme?: Theme,
    language?: Locale,
    extras?: {
        [key: string]: {}
    }
}

export const savePreferences = ({theme, language, extras}: Preferences): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
		if ( !workerService || !workerService.method.storePreferences ) {
			throw new Error (`savePreferences Error: Empty workerService!`)
		}
        if (workerService && workerService.preferences.preferences && workerService.preferences.storePreferences) {
            const updatedPreferences: Preferences = {
                ...workerService.preferences
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

            workerService.preferences = updatedPreferences

            workerService.method.storePreferences()
			.then(([ status, container] )=> {
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
        if (workerService.method) {
			const kk = workerService
        }
    })
)

export const createProfile = (profile: ProfileData): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {

        if (workerService.method.newProfile) {
            // workerService.profiles.newProfile(profile).then(([status]) => {
            //     if (status === 'SUCCESS') {
            //         return resolve('SUCCESS')
            //     }
            //     return resolve('FAILURE')
            // })
        }
    })
)

export const saveProfiles = (): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
        if (workerService.method.storeProfile) {
            workerService.method.storeProfile().then(([status]) => {
                if (status === "SUCCESS") {
                    return resolve(status)
                }
                return resolve('FAILURE')
            })
        }
    })
)
