import store from '../store/store'
import { setTheme } from '../store/appState/appStateActions'

export const enableDebugCommands = () => {

    // @ts-ignore
    window._seguro = {

        debug: {

            getStoreState () {
                return store.getState()
            },

            setTheme (theme: 'Auto' | 'Light' | 'Dark') {
                store.dispatch(setTheme(theme))
            }
        }
    }
}
