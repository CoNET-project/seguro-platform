import { getSeguroBridge, SeguroBridge } from '@conet-project/seguro-bridge-lib'
import store from '../../store/store'
import { setBridgeServiceIsInitialized } from '../../store/appState/appStateActions'

let bridgeService: null | SeguroBridge = null

export const getBridgeService = () => {
    return bridgeService
}

export const initializeBridgeService = async () => {
    const [status, bridge] = await getSeguroBridge({
        onReady () {
            store.dispatch(setBridgeServiceIsInitialized(true))
        },
        onError () {},
        onMessage () {}
    })

    if (status === 'Failure') {
        return
    }

    if (status === 'Success' && bridge) {
        bridgeService = bridge
    }
}
