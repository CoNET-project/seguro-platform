import {startWorker} from '@conet-project/seguro-worker-lib'
import store from '../../store/store'
import {setHasContainer, setIsUnlocked, setWorkerServiceIsInitialized} from '../../store/appState/appStateActions'
import {ContainerData} from "@conet-project/seguro-worker-lib/build/workerBridge";
import logger from "../../utilities/logger/logger";

let workerService: ContainerData;

type PasscodeFunctionParams = {
    passcode: string,
    progress: (progress: any) => void
}

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
                    store.dispatch(setIsUnlocked(true))
                    return resolve(status)
                case 'FAILURE':
                    return resolve(status)
            }
        }
    })
)
