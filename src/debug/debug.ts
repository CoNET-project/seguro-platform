import store from '../store/store'
import {setIsTouchDevice, setLocale, setTheme, setIsDrawerOpen} from '../store/appState/appStateActions'
import {Locale} from '../localization/types'
import {Theme} from '../theme/types'

export const enableDebugCommands = () => {

    // @ts-ignore
    window._seguro = {

        debug: {

            getStoreState() {
                return store.getState()
            },

            setTheme(theme: Theme) {
                store.dispatch(setTheme(theme))
            },

            setLocale(locale: Locale) {
                store.dispatch(setLocale(locale))
            },

            setTouch(isTouch: boolean) {
                store.dispatch(setIsTouchDevice(isTouch))
            },

            toggleDrawer(isOpen: boolean) {
                store.dispatch(setIsDrawerOpen(isOpen))
            }
        }
    }
}
