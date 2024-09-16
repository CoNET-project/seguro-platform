import Stack from '@mui/material/Stack'
import React, {HTMLAttributes, useState, useEffect, SyntheticEvent, ReactNode, forwardRef} from "react"
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import { useIntl } from "react-intl"
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ErrorIcon from '@mui/icons-material/Error'
import CircularProgress from '@mui/material/CircularProgress'
import DirectionsIcon from '@mui/icons-material/Directions'
import Box from '@mui/material/Box'
import Button from '@mui/material-next/Button'
import Dialog from '@mui/material/Dialog'
import DialogContentText from '@mui/material/DialogContentText'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import { styled } from '@mui/material/styles'
import {unlockPasscode} from '../../../../services/workerService/workerService'
import useAppState from "../../../../store/appState/useAppState"
import {encrypt_deletePasscode} from '../../../../API/index'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
        
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
        
    },
    '& .MuiDialog-paper': {
        padding: theme.spacing(3),
    }
}))
const UnLockWallet = () => {
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState('')
    const [passwordError, setPasswordError] = useState(false)
    const [open, setOpen] = React.useState(false)
    const [fruitsInBasket, setFruitsInBasket] = useState<null | HTMLElement>(null)
    const [loadingDelete, setLoadingDelete] = useState(false)
    const {
        locale, 
        setLocale,
        showAppStore,
        localDaemon,
        hasContainer,
        isInitializing,
        setlocalDaemon,
        isUnlocked,
        theme,
        setTheme,
        showMiner,
        dAPPInitialize
    } = useAppState()
    const intl = useIntl()

    const processUnlockPassword = () => {
        if (password.length < 6) {
            setTimeout (() => {
                setPasswordError (false)
            }, 2000)
            return setPasswordError (true)
        }
        setLoading(true)
        const passcode = password
        unlockPasscode({
            passcode, locale, progress: (progress) => {
				//	get process 
            }
        }).then (status => {
            setLoading(false)
            if (status === 'SUCCESS') {
                const kkk = isUnlocked
                const lll = hasContainer
                return console.log (`Passcord Success!`)
            }
            return setPasswordError (true)
        })
    }

    const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key
        if (key == 'Enter') {
            return processUnlockPassword()
        }
    }
    const handleClose = () => {
        setOpen(false)
    }


    const handleAddFruit = () => {
        setOpen(true)
    }

    return (

        <Stack alignItems="center" justifyContent='center' sx={{width: '100%', height: '100%', marginTop:'-5rem'}}>

            <Stack direction="column" alignItems="center" justifyContent='center' sx={{maxWidth: '25rem'}}>
                <Slide direction="right" in={true} mountOnEnter >
                    <Typography variant="h5" sx={{paddingBottom: '2rem'}}>
                        { intl.formatMessage({id:'platform.overlay.unlocking'})}
                    </Typography>
                </Slide>
                <Slide direction="left" in={true} mountOnEnter >

                    <Paper sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: '100%', marginBottom: '2rem' , borderRadius: '2rem'}} elevation={1}>
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
                                        onClick={processUnlockPassword}
                                        color='success'
                                        sx={{ p: '10px' }} aria-label="directions">
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
                </Slide>

                <Box sx={{height: '5rem', width: '100%'}}>
                {

                    (password.length === 0 || passwordError ) &&
                    <Slide direction="left" in={true} mountOnEnter >

                        <Button
                            variant='elevated'
                            color='primary'
                            size="large"
                            sx={{ fontSize: '1.2rem', borderRadius: '2rem', width: '100%', padding: '0.9rem 2rem 0.9rem 2rem', fontFamily: "inherit"}}
                            onClick={handleAddFruit}
                        >
                            {intl.formatMessage({id:'platform.unlock.button.forgot'})}
                        </Button>
                        
                    </Slide>

                    }
                </Box>
                
                <BootstrapDialog
                    open={open}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    sx={{'& .MuiDialog-paper': { borderRadius: '2rem' }, }}
                >
                    
                    <DialogContent sx={{borderRadius: '4rem', padding: '1rem'}}>
                        
                        <DialogContentText id="alert-dialog-slide-description">
                            {intl.formatMessage({id:'platform.dialog.delete.message'})}
                        </DialogContentText>
                    </DialogContent>
                    {
                        !loadingDelete && 
                        <DialogActions>
                            <Button
                                color='primary'
                                size="large"
                                variant="filledTonal"
                                onClick={handleClose}
                                sx={{ fontFamily: "inherit"}}
                            >
                                {intl.formatMessage({id:'platform.dialog.delete.button.cancel'})}
                            </Button>
                            <Button
                                color='secondary'
                                size="large"
                                variant="outlined"
                                onClick={
                                    async ()=> {
                                        setLoadingDelete(true)
                                        const [yy] = await encrypt_deletePasscode()
                                        setLoadingDelete(false)
                                        location.reload()
                                    }
                                }
                                sx={{ fontFamily: "inherit"}}
                            >
                                {intl.formatMessage({id:'platform.dialog.delete.button.confirm'})}
                            </Button>
                        </DialogActions>
                    }
                    {
                        loadingDelete &&
                        <Stack alignItems="center" justifyContent='center'>
                            <CircularProgress color="success"/>
                        </Stack>
                        
                    }
                    
                </BootstrapDialog>
            </Stack>

        </Stack>
    )
}

export default UnLockWallet