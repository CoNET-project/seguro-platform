import { useSelector, TypedUseSelectorHook } from 'react-redux'
import appStateReducer from './appState/appStateReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    appState: appStateReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

type RootReducerState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootReducerState> = useSelector

export default store
