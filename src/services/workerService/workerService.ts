import {startWorker} from '@conet-project/seguro-worker-lib'
import store from '../../store/store'
import {setWorkerServiceIsInitialized} from '../../store/appState/appStateActions'
import {ContainerData} from "@conet-project/seguro-worker-lib/build/workerBridge";

let workerService: ContainerData;

export const getWorkerService = () => {
    return workerService
}

export const initializeWorkerService = async () => {
    const [status, containerData] = await startWorker()

    if (status === 'NOT_READY') {
        return
    }

    if (status === 'SUCCESS' && containerData) {
        console.log(containerData)
        setWorkerServiceIsInitialized(true)
        workerService = containerData
    }
}
