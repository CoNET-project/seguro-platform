import store from '../store/store'
import {
    setHasNotification,
    setHasUpdateAvailable,
    setIsDrawerOpen,
    setIsTouchDevice,
    setLocale,
    setTheme
} from '../store/appState/appStateActions'
import {Locale} from '../localization/types'
import {Theme} from '../theme/types'
import {getWorkerService} from "../services/workerService/workerService";

export const enableDebugCommands = () => {

    // @ts-ignore
    window._seguro = {

        debug: {

            getStoreState() {
                return store.getState()
            },

            getSeguroObject() {
                return getWorkerService().SeguroNetwork
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
            },

            setUpdateAvailable(available: boolean) {
                store.dispatch(setHasUpdateAvailable(available))
            },

            setNotification(hasNotification: boolean) {
                store.dispatch(setHasNotification(hasNotification))
            }
        }
    }
}
