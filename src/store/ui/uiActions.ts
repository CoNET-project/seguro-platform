import { createAction } from '@reduxjs/toolkit'

export const setTheme = createAction(
    'ui/set-theme',
    (theme: 'Auto' | 'Light' | 'Dark') => {
        return {
            payload: {
                theme
            }
        }
    }
)
