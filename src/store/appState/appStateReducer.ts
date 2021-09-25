import {createReducer} from '@reduxjs/toolkit'
import {
    setWorkerServiceIsInitialized,
    setTheme,
    setLocale,
    setIsTouchDevice,
    setWindowInnerSize, setShowOverlay, setHasContainer, setIsDrawerOpen, setHasUpdateAvailable
} from './appStateActions'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {getPreferredLocale} from '../../localization/localization'
import {detectWindowInnerSize} from "../../utilities/utilities";
import {WindowInnerSize} from './useAppState'

type AppStateReducerState = {
    isTouchDevice: boolean,
    isUnlocked: boolean,
    hasContainer: boolean,
    windowInnerSize: WindowInnerSize,
    workerServiceIsInitialized: boolean,
    theme: Theme,
    locale: Locale,
    showOverlay: boolean,
    isDrawerOpen: boolean,
    hasUpdateAvailable: boolean,
    
}

const initialState: AppStateReducerState = {
    isTouchDevice: false,
    isUnlocked: false,
    hasContainer: false,
    windowInnerSize: detectWindowInnerSize(),
    workerServiceIsInitialized: false,
    theme: 'Auto',
    locale: getPreferredLocale(),
    showOverlay: false,
    isDrawerOpen: false,
    hasUpdateAvailable: false
}

const appStateReducer = createReducer(initialState, builder => {
    return builder
        .addCase(setWorkerServiceIsInitialized, (state, action) => {
            state.workerServiceIsInitialized = action.payload.workerServiceIsInitialized
        })

        .addCase(setHasContainer, (state, action) => {
            state.hasContainer = action.payload.hasContainer
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

        .addCase(setShowOverlay, (state, action) => {
            state.showOverlay = action.payload.toggleOverlay
        })

        .addCase(setIsDrawerOpen, (state, action) => {
            state.isDrawerOpen = action.payload.isDrawerOpen
        })

        .addCase(setHasUpdateAvailable, (state, action) => {
            state.hasUpdateAvailable = action.payload.hasUpdateAvailable
        })
})

export default appStateReducer
