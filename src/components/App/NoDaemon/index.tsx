import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography, {TypographyProps} from '@mui/material/Typography'
import { useIntl } from "react-intl"
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import React, {HTMLAttributes, useState, useEffect} from "react"
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import LoadingButton from '@mui/lab/LoadingButton'
import {testLocalServer} from '../../../API/index'
import useAppState from '../../../store/appState/useAppState'
import BottomNavigation from '@mui/material/BottomNavigation'
import WindowSharpIcon from '@mui/icons-material/WindowSharp'
import AppleIcon from '@mui/icons-material/Apple'
import Paper from '@mui/material/Paper'
import Link from '@mui/material/Link'
import GitHubIcon from '@mui/icons-material/GitHub'
const themeTopArea1 = createTheme ({
    typography: {
        h3: {
            'fontWeight': '600'
        },
        h4: {
            'fontWeight': '600'
        },
        h6: {
            color: 'rgba(0,0,0,0.6)'
        },
        fontFamily: [
            'Inter',
            '"Inter Placeholder"',
            'sans-serif',
        ].join(','),
    },
})

const StackContainer = styled(Stack)(() => ({
    height: '100vh'
}))

const RootContainer = styled(Container)(() => ({
    height: '100vh'
}))

const downloadConet = ((event: React.SyntheticEvent<Element, Event>, newValue: any) =>{

    switch (newValue) {
        default:
        case 0: {
            return window.open(`https://github.com/CoNET-project/seguro-platform/releases/download/0.0.1/CONET-0.61.0.exe`)
        }
        case 1: {
            return window.open(`https://github.com/CoNET-project/seguro-platform/releases/download/0.0.1/CONET-0.61.0-Apple-M-Series-cpu.dmg`)
        }
        case 2: {
            return window.open(`https://github.com/CoNET-project/seguro-platform/releases/download/0.0.1/CONET-0.61.0-Inter-CPU.dmg`)
        }
        case 3: {
            return window.open(`https://github.com/CoNET-project/seguro-platform/releases/tag/0.0.1`)
        }
    }
})
const DownloadArea = () => {
    const intl = useIntl()
    return (
        <Paper sx={{ borderRadius: '20px', textAlign: 'center', width: '30rem' }} elevation={10} >
            <Link underline="hover" component="button" onClick={() => window.open(`https://github.com/CoNET-project/CONET-Proxy`)} >
                <Typography variant="h6" sx={{color: '#448aff', textAlign: 'center'}}>
                    { intl.formatMessage({id: 'platform.api.daemon.openSource'})}
                </Typography>
            </Link>
            
            <BottomNavigation
            showLabels
            onChange = {downloadConet}
            >
                <BottomNavigationAction label="Windows" icon={<WindowSharpIcon />} />
                <BottomNavigationAction label="Apple M" icon={<AppleIcon />} />
                <BottomNavigationAction label="Apple" icon={<AppleIcon />} />
                <BottomNavigationAction label="More" icon={<GitHubIcon/>} />
            </BottomNavigation>

        </Paper>
    )
    
}

const deamon = () => {
    const intl = useIntl()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {
        setlocalDaemon
    } = useAppState()

    const testClisk = async () => {
        setLoading (true)
        const test = await testLocalServer()
        setLoading(false)
        if (test !== true) {
            setError (true)
            return setTimeout(() => setError(false), 1000)
        }
        setlocalDaemon(true)
    }


    return (
        <ThemeProvider theme={themeTopArea1}>
            <RootContainer maxWidth="md">
                <StackContainer direction="column" justifyContent="center" alignItems="center">
                    
                    <Typography variant="h4" sx={{color: '#448aff', textAlign: 'center'}}>
                        { intl.formatMessage({id: 'platform.api.daemon.title'})}
                    </Typography> 
                    <Typography variant="h6" sx={{textAlign: 'center'}}>
                        { intl.formatMessage({id: 'platform.api.daemon.detail'})}
                    </Typography>

                    <Box sx={{padding: '2rem 0 4rem 0'}}>
                        
                        <LoadingButton onClick={testClisk}
                            variant="outlined" size="large" 
                            sx={{fontSize: '1.5rem'}}
                            loading={loading}
                            color={error ? "error": 'info'}
                            >
                            
                            { intl.formatMessage({id: 'platform.api.daemon.testButton'})}
                        </LoadingButton>
                        
                    </Box>

                    <DownloadArea />
                    
                </StackContainer>
            </RootContainer>
        </ThemeProvider>
    )
}

export default deamon