import { createAction } from '@reduxjs/toolkit'

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
    (theme: 'Auto' | 'Light' | 'Dark') => {
        return {
            payload: {
                theme
            }
        }
    }
)
