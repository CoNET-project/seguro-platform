import {createReducer} from '@reduxjs/toolkit'
import {
    setWorkerServiceIsInitialized,
    setTheme,
    setLocale,
    setIsTouchDevice,
    setWindowInnerSize,
    setShowOverlay,
    setHasContainer,
    setIsDrawerOpen,
    setHasUpdateAvailable,
    setCurrentFocusPanel,
    setIsModalOpen
} from './appStateActions'
import {Theme} from '../../theme/types'
import {Locale} from '../../localization/types'
import {getPreferredLocale} from '../../localization/localization'
import {detectWindowInnerSize} from "../../utilities/utilities";
import {WindowInnerSize} from './useAppState'

export type CurrentFocusPanel = 'left' | 'main' | 'right'

type AppStateReducerState = {
    isTouchDevice: boolean,
    isUnlocked: boolean,
    isDrawerOpen: boolean,
    isModalOpen: boolean,
    hasContainer: boolean,
    showOverlay: boolean,
    currentFocusPanel: CurrentFocusPanel,
    windowInnerSize: WindowInnerSize,
    workerServiceIsInitialized: boolean,
    theme: Theme,
    locale: Locale,
    hasUpdateAvailable: boolean,

}

const initialState: AppStateReducerState = {
    isTouchDevice: false,
    isUnlocked: false,
    isDrawerOpen: false,
    isModalOpen: false,
    hasContainer: false,
    showOverlay: false,
    currentFocusPanel: 'left',
    windowInnerSize: detectWindowInnerSize(),
    workerServiceIsInitialized: false,
    theme: 'Auto',
    locale: getPreferredLocale(),
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

        .addCase(setCurrentFocusPanel, (state, action) => {
            state.currentFocusPanel = action.payload.panel
        })

        .addCase(setIsModalOpen, (state, action) => {
            state.isModalOpen = action.payload.isOpen || !state.isModalOpen
        })
})

export default appStateReducer
