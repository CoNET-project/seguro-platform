import { createReducer } from '@reduxjs/toolkit'
import { setBridgeServiceIsInitialized, setTheme, setLocale } from './appStateActions'
import { Theme } from '../../theme/types'
import { Locale } from '../../localization/types'
import { getPreferredLocale } from '../../localization/localization'

type AppStateReducerState = {
    isUnlocked: boolean,
    bridgeServiceIsInitialized: boolean,
    theme: Theme,
    locale: Locale
}

const initialState: AppStateReducerState = {
    isUnlocked: true,
    bridgeServiceIsInitialized: false,
    theme: 'Auto',
    locale: getPreferredLocale()
}

const appStateReducer = createReducer(initialState, builder => {
    return builder
        .addCase(setBridgeServiceIsInitialized, (state, action) => {
            state.bridgeServiceIsInitialized = action.payload.bridgeServiceIsInitialized
        })

        .addCase(setTheme, (state, action) => {
            state.theme = action.payload.theme
        })

        .addCase(setLocale, (state, action) => {
            state.locale = action.payload.locale
        })
})

export default appStateReducer
