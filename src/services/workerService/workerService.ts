import {startWorker} from '@conet-project/seguro-worker-lib'
import store from '../../store/store'
import {setHasContainer, setIsUnlocked, setWorkerServiceIsInitialized} from '../../store/appState/appStateActions'
import {ContainerData} from "@conet-project/seguro-worker-lib/build/workerBridge";
import logger from "../../utilities/logger/logger";
import {Theme} from "../../theme/types";
import {Languages} from "../../components/App/OnboardingScreen/SelectLanguagePage/SelectLanguagePage";
import {Locale} from "../../localization/types";

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

export const initializeWorkerService = async () => {
    const [status, container] = await startWorker()

    if (status === 'NOT_READY') {
        return
    }

    if (status === 'SUCCESS' && container) {
        logger.log('workerService.ts', 'container:', container)
        store.dispatch(setWorkerServiceIsInitialized(true))
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
                return
        }
    }
}

export const createPasscode = ({passcode, progress}: PasscodeFunctionParams): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        if (workerService.passcode.createPasscode) {
            const [status, container] = await workerService.passcode.createPasscode(passcode, (progressInteger) => {
                progress(progressInteger)
            })

            if (status === 'SUCCESS' && container) {
                workerService = container
                resolve(status)
            } else {
                resolve('FAILURE')
            }

            logger.log('workerService.ts', 'createPasscode', status, container)
        }
    })
)

export const unlockPasscode = ({passcode, progress}: PasscodeFunctionParams): Promise<PasscodeResolves> => (
    new Promise<PasscodeResolves>(async (resolve) => {
        if (workerService.passcode.testPasscode) {
            const [status] = await workerService.passcode.testPasscode(passcode, progress)

            switch (status) {
                case 'SUCCESS':
                    return resolve(status)
                case 'FAILURE':
                    return resolve(status)
            }
        }
    })
)

export type Preferences = {
    theme?: Theme,
    language?: Locale,
    primaryProfile?: string
}

export const savePreferences = ({theme, language, primaryProfile}: Preferences): Promise<WorkerServiceResolve> => (
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

            if (primaryProfile) {
                updatedPreferences.primaryProfile = primaryProfile
            }

            workerService?.preferences?.storePreferences(updatedPreferences)?.then(([status, container]) => {
                if (status === 'SUCCESS') {
                    return resolve('SUCCESS')
                }
            })
        }
        return resolve('FAILURE')
    })
)

export const createProfile = (): Promise<WorkerServiceResolve> => (
    new Promise<WorkerServiceResolve>((resolve) => {
        // if (workerService && workerService.profile && workerService.profile.newProfile) {
        //     workerService.profile.newProfile({
        //         nickname: '',
        //         nicknameMark: '',
        //         alias: '',
        //         tags: []
        //     }).then(([status]) => {
        //
        //     })
        // }
    })
)
