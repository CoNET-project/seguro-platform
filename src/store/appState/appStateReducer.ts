import {createReducer} from '@reduxjs/toolkit'
import {
    setBridgeServiceIsInitialized,
    setTheme,
    setLocale,
    setIsTouchDevice,
    setWindowInnerSize
} from './appStateActions'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {getPreferredLocale} from '../../localization/localization'
import {detectWindowInnerSize} from "../../utilities/utilities";
import {WindowInnerSize} from './useAppState'

type AppStateReducerState = {
    isTouchDevice: boolean,
    isUnlocked: boolean,
    windowInnerSize: WindowInnerSize | null,
    bridgeServiceIsInitialized: boolean,
    theme: Theme,
    locale: Locale
}

const initialState: AppStateReducerState = {
    isTouchDevice: false,
    isUnlocked: true,
    windowInnerSize: detectWindowInnerSize(),
    bridgeServiceIsInitialized: false,
    theme: 'Light',
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

        .addCase(setIsTouchDevice, (state, action) => {
            state.isTouchDevice = action.payload.isTouchDevice
        })

        .addCase(setWindowInnerSize, (state, action) => {
            state.windowInnerSize = action.payload.windowInnerSize
        })

})

export default appStateReducer
