import { getSeguroBridge, SeguroBridge } from '@conet-project/seguro-bridge-lib'
import store from '../../store/store'

let bridgeService: null | SeguroBridge = null

export const getBridgeService = () => {
    return bridgeService
}

export const initializeBridgeService = async () => {
    const [status, bridge] = await getSeguroBridge({
        onReady () {
            store.dispatch({
                type: 'appState/set-bridge-service-is-initialized',
                payload: {
                    bridgeServiceIsInitialized: true
                }
            })
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
