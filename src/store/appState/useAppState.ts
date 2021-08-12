import { useTypedSelector } from '../store'
import { initializeBridgeService } from '../../services/bridgeService/bridgeService'

const useAppState = () => {

    const initialize = async () => {
        await initializeBridgeService()
    }

    const bridgeServiceIsInitialized = useTypedSelector(state => state.appState.bridgeServiceIsInitialized)

    const isInitialized = bridgeServiceIsInitialized

    const theme = useTypedSelector(state => state.appState.theme)

    return {
        initialize,
        isInitialized,
        theme
    }
}

export default useAppState
