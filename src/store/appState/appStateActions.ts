import { createAction } from '@reduxjs/toolkit'
import { Theme } from '../../theme/types'
import { Locale } from '../../localization/types'
import { WindowInnerSize } from './useAppState'

export const setBridgeServiceIsInitialized = createAction(
    'appState/setBridgeServiceIsInitialized',
    (bridgeServiceIsInitialized: boolean) => {
        return {
            payload: {
                bridgeServiceIsInitialized
            }
        }
    }
)

export const setTheme = createAction(
    'appState/setTheme',
    (theme: Theme) => {
        return {
            payload: {
                theme
            }
        }
    }
)

export const setLocale = createAction(
    'appState/setLocale',
    (locale: Locale) => {
        return {
            payload: {
                locale
            }
        }
    }
)

export const setIsTouchDevice = createAction(
    'appState/setIsTouchDevice',
    (isTouchDevice: boolean) => {
        return {
            payload: {
                isTouchDevice: isTouchDevice
            }
        }
    }
)

export const setWindowInnerSize = createAction(
    'appState/setWindowInnerSize',
    (windowInnerSize: WindowInnerSize | null) => {
        return {
            payload: {
                windowInnerSize
            }
        }
    }
)
