import { useIntl } from "react-intl"
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import React, {HTMLAttributes, useState, useEffect, SyntheticEvent, ReactNode} from "react"
import Slide from '@mui/material/Slide'
import InputBase from '@mui/material/InputBase'
import Paper from '@mui/material/Paper'
import Divider from '@mui/material/Divider'
import DirectionsIcon from '@mui/icons-material/Directions'
import ErrorIcon from '@mui/icons-material/Error'
import LoadingButton from '@mui/lab/LoadingButton'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import useAppState from "../../../../store/appState/useAppState"
import {createPasscode} from '../../../../API/index'

const CreateWallet = () => {
    const {
        locale, 
        setLocale,
        isUnlocked
        //setTheme,
        //theme
    } = useAppState()
    const intl = useIntl()
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key
        if (key == 'Enter') {
            return processCreatePassword()
        }
    }

    const processCreatePassword = async () => {
        if (password.length < 6) {
            setTimeout (() => {
                setPasswordError (false)
            }, 3000)
            return setPasswordError (true)
        }
        setLoading(true)
        const [yyy, rrr] = await createPasscode(password, locale)
        location.reload()
    }



    return (
        <Stack alignItems="center" justifyContent='center' sx={{width: '100%', height: '100%'}}>
             <Stack direction="column">
                <Slide direction="right" in={true} mountOnEnter>
                    <Typography variant="h5" >
                        { intl.formatMessage({id:'tabnavigator.guide.title'})}
                    </Typography>
                </Slide>
                <Slide direction="left" in={true} mountOnEnter>
                    <Typography variant="h4" >
                        { intl.formatMessage({id:'tabnavigator.guide.createWallet'})}
                    </Typography>
                </Slide>
                <Slide direction="left" in={true} mountOnEnter>
                    <Typography variant="h6" sx={{padding: '2rem 0 2rem 0 '}}>
                        { intl.formatMessage({id:'onboarding.setPasscodeTitle'})}
                    </Typography>
                </Slide>
                <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '80%', borderRadius: '2rem', padding: '0 1rem' }} elevation={2}>
                    <InputBase
                        sx={{width: '100%', ml: 1, flex: 1, fontSize: '1rem' , padding:'0.7rem 0.5rem 0.5rem 1rem'}}
                        disabled={loading}
                        id="outlined-password-input"
                        placeholder={ intl.formatMessage({id:'onboarding.setPasscodeSubtitle'})}
                        type="password"
                        onChange={e => {
                            setPasswordError(false)
                            setPassword(e.target.value)
                        }}
                        error={passwordError}
                        onKeyUp={keyUpHandler}
                    />
                    {
                        password.length > 5 && !loading &&
                        <>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            {
                                passwordError && 
                                <IconButton
                                    color="error" sx={{ p: '10px' }}>
                                    <ErrorIcon />
                                </IconButton>
                            }
                            {
                                !passwordError &&
                                <IconButton
                                    onClick={processCreatePassword}
                                    color="success" sx={{ p: '10px' }} aria-label="directions">
                                    <DirectionsIcon />
                                </IconButton>
                            }
                            
                        </>
                    }
                    {
                        loading &&
                        <>
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                            <Box sx={{width: '2.7rem', textAlign: 'center'}}>
                                <CircularProgress size={24} color="success"/>
                            </Box>
                            
                        </>
                    }
                    
                </Paper>
            </Stack>
            
            
        </Stack>
    )
}

export default CreateWallet