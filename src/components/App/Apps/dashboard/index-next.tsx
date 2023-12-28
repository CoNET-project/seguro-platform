import { CssVarsProvider, useColorScheme, extendTheme, styled, useTheme } from "@mui/material-next/styles"

import {HTMLAttributes, useState, useEffect, SyntheticEvent, ReactNode, useMemo, useRef} from "react"
import Stack from "@mui/material/Stack"
import {Tabs, Tab} from '@mui/material-next'
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
import {setDAPPOpen, setIsUnlocked} from "../../../../store/appState/appStateActions"
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
import ManageProfiles from '../../PlatformModal/ManageProfiles/ManageProfiles'    //"..//ManageProfiles/ManageProfiles"
import HubIcon from '@mui/icons-material/Hub'
import NodeExplorer from '../nodeExplorer/nodeExplorer'
import ProfileDropdown from '../../../UI/Dropdowns/ProfileDropdown/ProfileDropdown'
import Container from '@mui/material/Container'
import store from '../../../../store/store'
interface StyledTabsProps {
    children?: React.ReactNode
    value?: number
    onChange?: (event: React.SyntheticEvent, newValue: number) => void
}

const StackContainer = styled(Stack)(() => ({
    height: '100vh',
    width: '100%'
}))

interface StyledTabProps {
    label?: string
    icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    sx?:SxProps<Theme>
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

    // { icon: <SvgIcon component={TW} inheritViewBox/>, name: 'zh-TW' },

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
        // case 'zh-TW': {
        //     return (
        //         <SvgIcon component={TW} inheritViewBox/>
        //     )
        // }
    }
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
		isNodeExplorerOpen,
		isModalOpen,
        setLocale,
		setIsNodeExplorerOpen,
		dAPPOpen
		
    } = useAppState()

    const [menuValue, setMenuValue] = useState(0)
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement|Element>()
    const openMenu = Boolean(anchorEl)
    const { mode, setMode } = useColorScheme()
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)

    const ShowApp = () => {
		if (!hasContainer) {
			return (
				<CreateWallet/>
			)
		}
		if (!isUnlocked) {
			return (
				<UnLockWallet/>
			)
		}
		

        switch (dAPPOpen) {

            case 'miner': {
                return (
                    <Miner />
                )
            }

            case 'proxy': {
				if (!localDaemon) {
					return (
						<NoDaemon/>
					)
				}
				return (
					<Proxy />
				)
                
			}

            default: {
				return (
                    <NodeExplorer />
                )
            }
        }

    }

    const MenuSideBar = () => {

    
        const animeCONET = () => {
            return (
                <LogoImage size={40} color={mode === 'light' ? '#48473a': '#e5e2d9'}/>
            )
        }
        const handleChange = (event: SyntheticEvent|null, newValue: number) => {
            
            if (event !== null ) {
				switch (newValue) {
					case 0: {
						setMenuValue(newValue)
						if (dAPPOpen==='miner') {
							return
						}
						
						return store.dispatch(setDAPPOpen('miner'))
						
					}
					case 1: {
						setMenuValue(newValue)
						if (dAPPOpen==='proxy') {
							return
						}
						
						return store.dispatch(setDAPPOpen('proxy'))
						
					}
					default: {
						setMenuValue(newValue)
						if (dAPPOpen==='nodes') {
							return
						}
						return store.dispatch(setDAPPOpen('nodes'))
					}
				}
                
            }
            
        }
    
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
                                        store.dispatch(setDAPPOpen('miner'))
                                    }} sx={{ opacity: showMiner ? '1': '0.5'}} >
                                        <SvgIcon component={LocalLaundryServiceIcon} inheritViewBox sx={{ fontSize: 40 }}/>
                                    </IconButton>
    
                                    <IconButton  onClick={()=>{
                                        store.dispatch(setDAPPOpen('proxy'))
                                    }} sx={{ opacity: showAppStore ? '1': '0.5'}}>
                                        <SvgIcon component={VpnLockIcon} inheritViewBox sx={{ fontSize: 40 }}/>
                                    </IconButton>

									<IconButton  onClick={()=>{
                                        store.dispatch(setDAPPOpen('nodes'))
                                    }} sx={{ opacity: showAppStore ? '1': '0.5'}}>
                                        <SvgIcon component={HubIcon} inheritViewBox sx={{ fontSize: 40 }}/>
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

        const languageMenuClick = (e:React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            const kk = e.currentTarget.children[0]
            setAnchorEl(kk)
                            
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
    
        return (
            <>
                <StyledTabs
                    value={menuValue}
                    onChange={handleChange}
                    sx={{
                        backgroundColor: mode === 'light' ? '#f0eddd': '#2d2d1e',
                        width: '5.7rem',
                        display:{xs: 'none', sm: 'flex', md: 'flex', xm: 'flex', lg: 'flex', xl: 'flex'},
                        paddingTop: '2rem'
                    }}
                >
                    
                    {
                        isUnlocked &&
                        <>
                            <StyledTab {...a11yProps(0)} icon={<SvgIcon component={LocalLaundryServiceIcon} inheritViewBox sx={{ fontSize: 30 }}/>} sx={{paddingBottom: '2rem'}} />
                            <StyledTab {...a11yProps(1)} icon={<SvgIcon component={VpnLockIcon} inheritViewBox sx={{ fontSize: 30 }}/>} sx={{paddingBottom: '2rem'}}/>
							<StyledTab {...a11yProps(2)} icon={<SvgIcon component={HubIcon} inheritViewBox sx={{ fontSize: 30 }}/>} sx={{paddingBottom: '2rem'}}/>
                        </>
                    }
    
                    {/* <Box {...a11yProps(2)} 
                        onClick={languageMenuClick}
                    >
                        <Tab icon={showLocationIcon(locale)} sx={{ position: 'fixed', bottom: '10rem'}} />
                        <LanguageMenu />
                    </Box> */}

    
                    <Box {...a11yProps(3)} onClick={
                        e => {
                            if (mode === 'light') {
                                return setMode('dark')
                            }
                            setMode('light')
                        }
                    }>
                        <StyledTab icon={<SvgIcon component={mode === 'light' ? DarkIcon: LightIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx ={{ position: 'fixed', bottom: '5.5rem'}} />
                    </Box>
    
                    <Box {...a11yProps(4)} onClick={
                        e => {
                            if (isUnlocked) {
                                setShowProfileDropdown(true)
                            }
                            
                        }
                    }>
                    
					<Tab icon={<SvgIcon component={animeCONET} inheritViewBox />} sx={{ position: 'fixed', bottom: '0px'}}/>
    
                    </Box>
                </StyledTabs>
                <StyledTabsMobile />
                <Dialog
                    open={showProfileDropdown}
                    onClose={() => setShowProfileDropdown(false)}
					maxWidth='xs'
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

    const AppStart = () => {

    
        return (
			<StackContainer>
				<Container maxWidth='lg' sx={{height: '100%', width: '100%', overflowX: 'auto'}}>
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
			</StackContainer>
            
        )
    }

    return (
        <StackContainer direction={{ xs: 'column', sm: 'row'}} sx={{ minHeight: '25rem'}}>
            <MenuSideBar />
            <AppStart/>
        </StackContainer>
    )
}

export default DashBoard