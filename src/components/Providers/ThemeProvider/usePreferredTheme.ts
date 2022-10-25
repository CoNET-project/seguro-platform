import { useEffect, useState } from 'react'


const usePreferredTheme = () => {

	const queryPrefersLight = '(prefers-color-scheme: light)'
	const queryPrefersDark = '(prefers-color-scheme: dark)'
    const [theme, setTheme] = useState<'Light' | 'Dark'>('Light')

    useEffect(() => {
        if (window.matchMedia(queryPrefersLight).matches) {
            setTheme('Light')
        }
        else if (window.matchMedia(queryPrefersDark).matches) {
            setTheme('Dark')
        }
    }, [])

    useEffect(() => {
        const onChangeToPreferLight = (event: any) => {
            if (event.matches) {
                setTheme('Light')
            }
        }
        const onChangeToPreferDark = (event: any) => {
            if (event.matches) {
                setTheme('Dark')
            }
        }

        window.matchMedia(queryPrefersLight).addEventListener('change', onChangeToPreferLight)
        window.matchMedia(queryPrefersDark).addEventListener('change', onChangeToPreferDark)

        return () => {
            window.matchMedia(queryPrefersLight).removeEventListener('change', onChangeToPreferLight)
            window.matchMedia(queryPrefersDark).removeEventListener('change', onChangeToPreferDark)
        }
    }, [])

    return theme
}

export default usePreferredTheme
