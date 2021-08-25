import { useEffect } from 'react'
import useAppState from '../../../../src/store/appState/useAppState'

const ThemeSwitcherControl = () => {
    const appState = useAppState()
    const options = ['Auto', 'Light', 'Dark']

    const onChange = (event: any) => {
        appState.setTheme(event.target.value)

        localStorage.setItem('_seguro.theme', event.target.value)
    }

    useEffect(() => {
        const theme = localStorage.getItem('_seguro.theme')

        if (theme === 'Auto' || theme === 'Light' || theme === 'Dark') {
            appState.setTheme(theme)
        }
    }, [])

    return (
        <div>
            <label
                htmlFor="theme-switcher-control"
                style={{ marginRight: 8 }}
            >
                Theme:
            </label>
            <select
                value={appState.theme}
                onChange={onChange}
                id="theme-switcher-control"
            >
                {options.map(option => (
                    <option
                        key={option}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ThemeSwitcherControl
