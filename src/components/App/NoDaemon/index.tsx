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
import Grid from '@mui/material/Grid'


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
        <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12}}>
            <Grid item  md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
                <BottomNavigation
                showLabels
                onChange = {downloadConet}
                sx={{borderRadius: '2rem', padding: '2rem'}}
                >
                    <BottomNavigationAction label="Windows" icon={<WindowSharpIcon />} />
                    <BottomNavigationAction label="Apple M" icon={<AppleIcon />} />
                    <BottomNavigationAction label="Apple" icon={<AppleIcon />} />
                    <BottomNavigationAction label="More" icon={<GitHubIcon/>} />
                </BottomNavigation>
            </Grid>
        </Grid>
    )
    
}

const deamon = () => {
    const intl = useIntl()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const {
        setlocalDaemon
    } = useAppState()

    const testClisk = () => {
        setLoading (true)
        setTimeout(async() => {
            const test = await testLocalServer()
            setLoading (false)
            if (test !== true) {
                setError (true)
                return setTimeout(() => setError(false), 3000)
            }
            setlocalDaemon(true)
        }, 1000)
        
    }


    return (
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{width: '100%', height: '100vh'}}>

            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12}} sx={{margin: {xs: '-5rem 0 0 0'}}}>
                <Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <Typography variant="h5" sx={{textAlign: 'center'}}>
                        { intl.formatMessage({id: 'platform.api.daemon.title'})}
                    </Typography> 
                </Grid>
                <Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <Typography variant="h6" sx={{textAlign: 'center', fontSize: '0.8rem'}}>
                        { intl.formatMessage({id: 'platform.api.daemon.detail'})}
                    </Typography>
                </Grid>
                <Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <Typography variant="h6" sx={{textAlign: 'center', fontSize: '0.8rem'}}>
                        { intl.formatMessage({id: 'platform.api.daemon.mobileNotSupport'})}
                    </Typography>
                </Grid>
                    
                <Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <LoadingButton onClick={testClisk}
                        variant="outlined" size="large" 
                        sx={{fontSize: '1.5rem', borderRadius: '2rem'}}
                        loading={loading}
                        color={error ? "error": 'success'}
                    >
                        
                        { intl.formatMessage ({id: 'platform.api.daemon.testButton'})}
                    </LoadingButton>
                </Grid>
                    
                <Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <DownloadArea />
                </Grid>
                    
                
            </Grid>
        </Stack>

    )
}

export default deamon