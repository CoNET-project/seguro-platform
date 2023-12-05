import { CssVarsProvider, useColorScheme, extendTheme, styled, useTheme } from "@mui/material-next/styles"

import {HTMLAttributes, useState, useEffect, SyntheticEvent, ReactNode, useMemo, useRef} from "react"
import Stack from "@mui/material/Stack"
import {Tabs, Tab, } from '@mui/material-next'
import AppBar from '@mui/material/AppBar'
import type {SxProps, Theme, createTheme} from '@mui/material/'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import {Locale} from "../../../../localization/types"
import Menu from '@mui/material/Menu'
import Box from '@mui/material/Box'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import useAppState from "../../../../store/appState/useAppState"
import UnLockWallet from './UnLockWallet'
import CreateWallet from './CreateWallet'
import Dialog from '@mui/material/Dialog'
import SvgIcon from '@mui/material/SvgIcon'
import {LogoImage} from "../../../UI/Logo/Logo"
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import DarkIcon from "@mui/icons-material/DarkModeOutlined"
import LightIcon from "@mui/icons-material/LightModeOutlined"
import {US, CN,JP, TW } from 'country-flag-icons/react/3x2'
import NoDaemon from '../../NoDaemon/index'
import Proxy from '../CONET-Proxy/index'
import Miner from '../miner/index'

import ProfileDropdown from '../../../UI/Dropdowns/ProfileDropdown/ProfileDropdown'
import Container from '@mui/material/Container'
interface StyledTabsProps {
    children?: React.ReactNode
    value?: number
    onChange?: (event: React.SyntheticEvent, newValue: number) => void
}

const StackContainer = styled(Stack)(() => ({
    height: '100vh',
    overflowY: 'auto',
    overflowX: 'hidden',
    width: '100%'
}))

interface StyledTabProps {
    label?: string
    icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    sx?:SxProps<Theme>
    id?: string
}

const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs orientation="vertical"
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
    },
    '& .MuiTabs-indicatorSpan': {
        width: '100%'
    },
})

const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`
    }
}

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        '&.Mui-selected': {
            
        },
        '&.Mui-focusVisible': {
            
        },
}))

type action = {
    icon: JSX.Element
    name: Locale
}

const actions: action[] = [
    { icon: <SvgIcon component={JP} inheritViewBox/>, name: 'ja-JP' },
    { icon: <SvgIcon component={CN} inheritViewBox/>, name: 'zh-CN' },
    { icon: <SvgIcon component={TW} inheritViewBox/>, name: 'zh-TW' },
    { icon: <SvgIcon component={US} inheritViewBox/>, name: 'en-US' }
]

const showLocationIcon = (locale: Locale) => {
    switch(locale) {
        default:
        case 'en-US': {
            return (
                <SvgIcon component={US} inheritViewBox/>
            )
        }
        case 'ja-JP': {
            return (
                <SvgIcon component={JP} inheritViewBox/>
            )
        }
        case 'zh-CN': {
            return (
                <SvgIcon component={CN} inheritViewBox/>
            )
        }
        case 'zh-TW': {
            return (
                <SvgIcon component={TW} inheritViewBox/>
            )
        }
    }
}

const languageMenuClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>, setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | Element | null | undefined>>) => {
    const kk = e.currentTarget.children[0]
    setAnchorEl(kk)           
}

const LanguageFireButton = (setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | Element | null | undefined>>, locale: Locale) => {
    return (
        <IconButton
            onClick={e => languageMenuClick(e, setAnchorEl)}
            size='large' 
            sx={{ width: '3.5rem', height: '3.5rem' }} 
        >
            {showLocationIcon(locale)}
        </IconButton>
    )
}

const DashBoard = () => {
    const {
        hasContainer,
        isUnlocked,
        showMiner,
        showAppStore,
        setShowMiner,
        localDaemon,
        isInitializing,
        setShowAppStore,
        locale,
        setLocale
    } = useAppState()

    const [menuValue, setMenuValue] = useState(1)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement|Element>()
    const openMenu = Boolean(anchorEl)
    const { mode, setMode } = useColorScheme()
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const StyledTabsMobile = () => {
        const [ready, setReady] = useState(false)
        const [scrollDir, setScrollDir] = useState(1)
        const theme = useTheme()
    
        return (
            
                <AppBar position="fixed" enableColorOnDark id='conet_AppBar'
                    
                    sx={{
                        top: 'auto', bottom: 0, color: mode === 'light' ? '#48473a': '#e5e2d9',
                        display: {xs: 'flex', sm: 'none', md: 'none', xm: 'none', lg: 'none', xl: 'none'},
                        opacity: scrollDir,
                        backgroundColor: mode === 'light' ? '#f0eddd': '#2d2d1e'
                    }}>
    
                    <Toolbar>
                        {
                            isUnlocked && 
                            <>
                                <IconButton onClick={()=>{
                                    setShowMiner(true)
                                    setShowAppStore(false)
                                }} sx={{ opacity: showMiner ? '1': '0.5'}} >
                                    <SvgIcon component={LocalLaundryServiceIcon} inheritViewBox sx={{ fontSize: 40 }}/>
                                </IconButton>
    
                                <IconButton  onClick={()=>{
                                    setShowAppStore(true)
                                    setShowMiner(false)
                                }} sx={{ opacity: showAppStore ? '1': '0.5'}}>
                                    <SvgIcon component={VpnLockIcon} inheritViewBox sx={{ fontSize: 40 }}/>
                                </IconButton>
                            </>
                        }
                        
                        <Box
                            sx={{ position: 'fixed', right: '120px'}} >
                            <IconButton onClick={
                                e => {
                                        const kk = e.currentTarget
                                        setAnchorEl(kk)
                                    
                                }}>
                                {showLocationIcon(locale)}
                            </IconButton>
                            <LanguageMenu />
                        </Box>
                            
                        <IconButton onClick={()=>{
                                if (mode === 'light') {
                                    return setMode('dark')
                                }
                                setMode('light')
                            }}
                            sx={{ position: 'fixed', right: '60px', opacity: menuValue === 3 ? '1': '0.5'}} >
                            <SvgIcon component={mode === 'light' ? DarkIcon: LightIcon} inheritViewBox sx={{ fontSize: 40 }}/>
                        </IconButton>
    
                        <IconButton onClick={()=>{
                            if (isUnlocked) {
                                setShowProfileDropdown(true)
                            }}} sx={{ width: '55px', position: 'fixed', right: '0px', opacity: menuValue === 0 ? '1': '0.5'}} >
                            <SvgIcon component={animeCONET} inheritViewBox sx={{ fontSize: 40 }}/>
                        </IconButton>
                        
                    </Toolbar>
                </AppBar>
            
            
        )
    }
    const ShowApp = () => {
        
        switch (true) {
            case !hasContainer: {
                return (
                    <CreateWallet/>
                )
            }
            case !isUnlocked : {
                return (
                    <UnLockWallet/>
                )
            }

            case !showAppStore: {
                
                return (
                    <Miner />
                )
            }

            case !localDaemon: {
                return (
                    <NoDaemon/>
                )
            }

            default: {
                return (
                    <Proxy />
                )
            }
        }

    }





    const ProforeIcon = () => {
        return (
            <IconButton  sx={{ width: '3.5rem' }}>
                <SvgIcon component={animeCONET} inheritViewBox />
            </IconButton>
        )
    }

    const LanguageMenu = () => {
        
        return (
            <Menu 
                id="menu-language"
                keepMounted
                open={openMenu}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClick={() => setAnchorEl(null)}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {actions.map(action => (
                            
                    locale !== action.name &&
                        <MenuItem key={action.name} 
                            onClick={(e) => {
                                setLocale (action.name)
                                setAnchorEl(null)
                            }}>
                            <ListItemIcon>{action.icon}</ListItemIcon>
                        </MenuItem>
                            
                ))}
            </Menu>
        )
    }

    const animeCONET = () => {
        return (
            <LogoImage color={mode === 'light' ? '#48473a': '#e5e2d9'}/>
        )
    }

    const MenuSideBar = () => {

    
        const handleChange = (event: SyntheticEvent|null, newValue: number) => {
            setMenuValue(newValue)
            const uu = document.querySelector('#dos-111')

            if (!isUnlocked) {
                if ( newValue ===0 ){               //      language
                    setTimeout(() => {
                        return setAnchorEl(uu)
                    }, 100)
                    
                }
            }
            // if (event !== null ) {
            //     if (newValue ===0 ) {
            //         if (showMiner) {
            //             return
            //         }
            //         setMenuValue(newValue)
            //         setShowAppStore(false)
            //         return setShowMiner (true)
            //     }
            //     if (newValue ===1) {
            //         if (showAppStore) {
            //             return
            //         }
            //         setMenuValue(newValue)
            //         setShowAppStore(true)
            //         return setShowMiner (false)
            //     }
    
            // }
            
        }
    
        return (
            <Stack 
                direction='column'
                alignItems="center"
                spacing={3}
                justifyContent="flex-end"
                sx={{
                    height: '100vh',
                    width: '5rem',
                    backgroundColor: mode === 'light' ? '#f0eddd': '#2d2d1e'
                    }}
            >
                {LanguageFireButton(setAnchorEl, locale)}
                <ProforeIcon />
            </Stack>
        
                // <Tabs orientation="vertical"
                //     value={menuValue}
                //     onChange={handleChange}
                //     sx={{
                //         backgroundColor: mode === 'light' ? '#f0eddd': '#2d2d1e',
                //         minWidth: '5.5rem',
                //         display:{xs: 'none', sm: 'flex', md: 'flex', xm: 'flex', lg: 'flex', xl: 'flex'},
                //         paddingTop: '2rem'
                //     }}
                // >
                    
                //     {
                //         isUnlocked &&
                //         <>
                //             <StyledTab {...a11yProps(0)} icon={<SvgIcon component={LocalLaundryServiceIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{paddingBottom: '2rem'}} />
                //             <StyledTab {...a11yProps(1)} icon={<SvgIcon component={VpnLockIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{paddingBottom: '2rem'}}/>
    
                //         </>
                //     }

                    

                //     {/* <StyledTab {...a11yProps(2)} id='dos-111' icon={showLocationIcon(locale)} sx={{ position: 'fixed', bottom: '10rem'}} /> */}
                        
                //     <StyledTab {...a11yProps(3)} icon={<SvgIcon component={mode === 'light' ? DarkIcon: LightIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx ={{ position: 'fixed', bottom: '5.5rem'}} />

                    
                // </Tabs>
                
            
            
        )
    }

    const AppStart = () => {

    
        return (
            <Container maxWidth='lg' sx={{height: '100vh', width: '100%', overflowX: 'hidden', overflowY: 'auto'}}>
                {
                    !isInitializing &&
                    <Stack sx={{width: '100%', height: '100%', paddingTop: {xs: '5rem'}}} alignItems="center">
                        <ShowApp/>
                    </Stack>
                }
                {
                    isInitializing &&
                        <Stack sx={{width: '100%', height: '100vh', padding: '2rem', margin: '-3rem 0 0 0'}} alignItems="center" justifyContent="center">
                            <LogoImage color='grey'/>
                        </Stack>
                }
            </Container>
        )
    }

    return (
        <>
            <StackContainer direction={{ xs: 'column', sm: 'row'}} sx={{ minHeight: '25rem'}}>
                
                <MenuSideBar />
                <AppStart/>
                
            </StackContainer>
            
            <LanguageMenu/>
            <StyledTabsMobile />
            <ProforeIcon/>
            <Dialog
                open={showProfileDropdown}
                onClose={() => setShowProfileDropdown(false)}
            >
                <ProfileDropdown 
                    closeDropdown={()=> {
                        setShowProfileDropdown(false)
                    }}
                />
            </Dialog>
        </>
        
    )
}

export default DashBoard