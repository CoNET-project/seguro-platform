import {startWorker} from '@conet-project/seguro-worker-lib'
import store from '../../store/store'
import {setHasContainer, setWorkerServiceIsInitialized} from '../../store/appState/appStateActions'
import {ContainerData} from "@conet-project/seguro-worker-lib/build/workerBridge";
import logger from "../../utilities/logger/logger";

let workerService: ContainerData;

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
        const hasContainer = container?.passcode.status !== 'NOT_SET'
        if (hasContainer) {
            store.dispatch(setHasContainer(true))
        }
    }
}

export const createPasscode = async (passcode: string, progress: (progress: any) => void) => {
    if (workerService.passcode.createPasscode) {
        const [status, container] = await workerService.passcode.createPasscode(passcode, (progressInteger) => {
            progress(progressInteger)
        })

        if (status === 'SUCCESS' && container) {
            workerService = container
        }

        logger.log('workerService.ts', 'createPasscode', status, container)
    }
}
