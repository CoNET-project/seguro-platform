import { useSelector, TypedUseSelectorHook } from 'react-redux'
import uiReducer from './ui/uiReducer'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
    ui: uiReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true
})

type RootReducerState = ReturnType<typeof store.getState>

export const useTypedSelector: TypedUseSelectorHook<RootReducerState> = useSelector

export default store
