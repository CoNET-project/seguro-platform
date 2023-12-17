import {useEffect, useState} from 'react'
import useAppState from '../../store/appState/useAppState'
import {testLocalServer} from '../../API/index'
import CssBaseline from "@mui/material/CssBaseline"
import { CssVarsProvider, useColorScheme, extendTheme, useTheme } from "@mui/material-next/styles"
import {argbFromHex,hexFromArgb,themeFromSourceColor} from "@material/material-color-utilities"
import Dashboard from './Apps/dashboard/index-next'

const createCssVarsTheme = (palette: any) => {
    const theme = extendTheme({
        colorSchemes: {
            light: {
                ref: {
                    palette
                },
                palette: {
                    background: {
                        default: '#fdfdf6',
                        paper: '#f0f3e8'
                    }
                }
                
            },
            dark: {
                ref: {
                    palette
                },
                palette: {
                    background: {
                        default: '#1a1c18',
                        paper: '#232820'
                    }
                }
            }
        }
    })
    return theme
}

const generateThemeScheme = async () => {
    const theme = themeFromSourceColor(argbFromHex('#386a20'))
    const palette = {}
  
    for (const [key, tonalPalette] of Object.entries(theme.palettes)) {
        const tones = {}
        for (const tone of [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 99, 100]) {
            const color = hexFromArgb(tonalPalette.tone(tone))
            //@ts-ignore
            tones[tone] = color
        }
        //@ts-ignore
        palette[key] = tones
    }
  
    return palette
}

const App = () => {
    const {
        setlocalDaemon,
        dAPPInitialize
    } = useAppState()

    const [palette, setPalette] = useState<any>(null)


    useEffect(() => {
		const fetchData = async ()=> {
			if (!active) {
				return
			}
			const _palette = await generateThemeScheme()
			setPalette(_palette)
			const test = await testLocalServer ()

			if (test === true) {
				setlocalDaemon(true)
			}
			await dAPPInitialize()
		}
        
		let active = true
        fetchData()
        return () => { active = false }
    }, [])


    return (
        <CssVarsProvider theme={createCssVarsTheme(palette)}>
            <CssBaseline />
            <Dashboard/>
        </CssVarsProvider>
    )
}

export default App