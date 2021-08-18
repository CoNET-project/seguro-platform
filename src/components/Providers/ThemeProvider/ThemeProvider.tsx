import { useState } from 'react'
import ProviderProps from '../ProviderProps'
import { DefaultTheme, ThemeProvider as StyledComponentsThemeProvider } from 'styled-components'
import useAppState from '../../../store/appState/useAppState'
import usePreferredTheme from './usePreferredTheme'
import lightTheme from '../../../theme/light'
import darkTheme from '../../../theme/dark'

type ActiveTheme = 'Light' | 'Dark'

const themeToConfig: Record<ActiveTheme, DefaultTheme> = {
    'Light': lightTheme,
    'Dark': darkTheme
}

const ThemeProvider = ({
    children
}: ProviderProps) => {
    const [activeTheme, setActiveTheme] = useState<ActiveTheme>('Light')

    const appState = useAppState()
    const preferredTheme = usePreferredTheme()

    if (appState.theme === 'Auto' && preferredTheme !== activeTheme) {
        setActiveTheme(preferredTheme)
    }
    else if (appState.theme !== 'Auto' && appState.theme !== activeTheme) {
        setActiveTheme(appState.theme)
    }

    return (
        <StyledComponentsThemeProvider theme={themeToConfig[activeTheme]}>
            {children}
        </StyledComponentsThemeProvider>
    )
}

export default ThemeProvider
