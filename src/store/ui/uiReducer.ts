import { createReducer } from '@reduxjs/toolkit'
import { setTheme } from './uiActions'

type UIReducerState = {
    theme: 'Auto' | 'Light' | 'Dark'
}

const initialState: UIReducerState = {
    theme: 'Auto'
}

const uiReducer = createReducer(initialState, builder => {
    return builder
        .addCase(setTheme, (state, action) => {
            state.theme = action.payload.theme
        })
})

export default uiReducer
