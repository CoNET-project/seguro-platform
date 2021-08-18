import store from '../store/store'
import { setLocale, setTheme } from '../store/appState/appStateActions'
import { Locale } from '../localization/types'
import { Theme } from '../theme/types'

export const enableDebugCommands = () => {

    // @ts-ignore
    window._seguro = {

        debug: {

            getStoreState () {
                return store.getState()
            },

            setTheme (theme: Theme) {
                store.dispatch(setTheme(theme))
            },

            setLocale (locale: Locale) {
                store.dispatch(setLocale(locale))
            }
        }
    }
}
