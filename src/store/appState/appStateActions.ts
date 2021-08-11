import { createAction } from '@reduxjs/toolkit'

export const setBridgeServiceIsInitialized = createAction(
    'appState/set-bridge-service-is-initialized',
    (bridgeServiceIsInitialized: boolean) => {
        return {
            payload: {
                bridgeServiceIsInitialized
            }
        }
    }
)

export const setTheme = createAction(
    'appState/set-theme',
    (theme: 'Auto' | 'Light' | 'Dark') => {
        return {
            payload: {
                theme
            }
        }
    }
)
