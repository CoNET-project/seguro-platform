import { createTheme, ThemeProvider, makeStyles, styled, useTheme } from '@mui/material/styles'

import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

import {ReactComponent as CONETIcon} from '../../../../assets/logo/CoNET_logo_white.svg'
import React, {HTMLAttributes, useState, useEffect, SyntheticEvent, ReactNode} from "react"
import SvgIcon from '@mui/material/SvgIcon'
import type {SxProps, Theme} from '@mui/material/'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import SwipeableViews from 'react-swipeable-views'
import Box from '@mui/material/Box'
import {testLocalServer} from '../../../../API/index'
import Proxy from '../CONET-Proxy'
import { useIntl } from "react-intl"
import useAppState from "../../../../store/appState/useAppState"
import {LogoImage} from "../../../UI/Logo/Logo"
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial'
import {US, CN,JP, TW } from 'country-flag-icons/react/3x2'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import {Locale} from "../../../../localization/types"
import UnLockWallet from './UnLockWallet'
import conetStyle from '../../../../assets/themeCONET.json'
import CreateWallet from './CreateWallet'

interface TabPanelProps {
    children?: React.ReactNode
    dir?: string
    index: number
    value: number
}

type action = {
    icon: JSX.Element
    name: Locale
}

interface StyledTabProps {
    label?: string
    icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    sx?:SxProps<Theme>
}

const themeGreen = createTheme ({
    typography: {
        h3: {
            'fontWeight': '600'
        },
        h4: {
            'fontWeight': '600'
        },
        fontFamily: [
            'Inter',
            '"Inter Placeholder"',
            'sans-serif',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#386a20',
            light: '#9cd67d',
            dark: '#0c3900',
            contrastText: '#042100'
        },
        text: {

        },
        contrastThreshold: 4.5
    }
})


const StackContainer = styled(Stack)(() => ({
    height: '100vh',
    overflowY: 'auto'
}))


const a11yProps = (index: number) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    }
}
interface StyledTabsProps {
    children?: React.ReactNode;
    value: number;
    onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabsMobile = styled((props: StyledTabsProps) => (
    <AppBar position="fixed" sx={{top: 'auto', bottom: 0}}>
        <Tabs 
            {...props}
            TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
        />
    </AppBar>
    
  ))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
})


const StyledTabs = styled((props: StyledTabsProps) => (
    <Tabs orientation="vertical"
      {...props}
      TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
  ))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#635ee7',
    },
})

const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: 'rgba(255, 255, 255, 0.7)',
        '&.Mui-selected': {
            color: '#B5E687',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
}))


const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props
    return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`full-width-tabpanel-${index}`}
          aria-labelledby={`full-width-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box sx={{ p: 3 }}>
                <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      )
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



const DashBoard = () => {
    const [menuValue, setMenuValue] = useState(0)
    
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

    useEffect(() => {
		
        const testDeamon = async() => {
            const test = await testLocalServer ()
            if (test === true) {
                setlocalDaemon(true)
            }
            dAPPInitialize().then(() => {
            })
        }

        testDeamon().catch((ex) => {
            console.log(`APP useEffect testDeamon error`, ex)
        })

    }, [])

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setMenuValue(newValue)
    }


    const Menu = () => {
    
        return (
            <StyledTabs
                value={menuValue}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ backgroundColor: 'black',
                    minWidth: '6rem',
                    display:{xs: 'none', sm: 'flex', md: 'flex', xm: 'flex', lg: 'flex', xl: 'flex'},
                    paddingTop: '3rem'
                }}
            >
                <Tab {...a11yProps(0)} icon={<SvgIcon component={CONETIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{paddingBottom: '4rem'}}/>
                
                       
                <StyledTab {...a11yProps(1)} icon={<SvgIcon component={LocalLaundryServiceIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{paddingBottom: '2rem'}} />
                <StyledTab {...a11yProps(2)} icon={<SvgIcon component={VpnLockIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{paddingBottom: '2rem'}}/>
                <StyledTab {...a11yProps(3)} icon={<SvgIcon component={AccountCircleIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx ={{ position: 'fixed', bottom: '0px'}} />
            </StyledTabs>
        )
    }

    const MenuMobile = () => {

        return (
            <StyledTabsMobile
                value={menuValue}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ backgroundColor: 'black',
                    display:{xs: 'flex', sm: 'none', md: 'none', xm: 'none', lg: 'none', xl: 'none'}
                }}
            >
                <Tab {...a11yProps(0)}  icon={<SvgIcon component={CONETIcon} inheritViewBox sx={{ fontSize: 40 }}/>} />
                <StyledTab  {...a11yProps(1)} icon={<SvgIcon component={LocalLaundryServiceIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{}}/>
                <StyledTab  {...a11yProps(2)} icon={<SvgIcon component={VpnLockIcon} inheritViewBox sx={{ fontSize: 40 }}/>} sx={{}}/>
                <StyledTab  {...a11yProps(3)} icon={<SvgIcon component={AccountCircleIcon} inheritViewBox sx={{ fontSize: 40, position: 'fixed', right: '1rem' }}/>} />
            </StyledTabsMobile>
        )
    }

    const SelectLanguage = () => {
        return (
            <Box sx={{ position: 'absolute', mt: 0, top: '14rem', right: '0rem'}}>
                <SpeedDial
                    ariaLabel="Language"
                    sx={{ position: 'absolute', bottom: 16, right: 16 , 
                        backgroundColor: 'rgba(0,0,0,0)',
                        '& .MuiFab-primary': { width: 40, height: 40, fontSize: 20 }, 
                    }}
                    icon={showLocationIcon(locale)}
                    direction='down'    
                    
                >
                    {actions.map(action => (
                        
                        locale !== action.name &&
                            <SpeedDialAction
                                sx={{backgroundColor: 'rgba(0,0,0,0)'}}
                                key={action.name}
                                icon={action.icon}
                                onClick={(n) => setLocale (action.name)}
                                tooltipTitle={action.name}/>
                                
                    ))}
                </SpeedDial>
            </Box>
        )
    }

    const ShowApp = () => {
        switch (true) {
            // case isInitializing:
            //     return (
            //         <LaunchScreen reload = {reload}/>
            //     )
            // case hasContainer && isUnlocked:
            //     return (
            //         <MainScreen/>
            //     )
            case hasContainer && !isUnlocked:
                return (
                    <UnLockWallet/>
                )
            case !hasContainer && !isUnlocked:
           
                return (
                    <CreateWallet />
                    
                )
            // default:
            //     return (
            //        <MainScreen/>
            //     )
        }
    }

    return (
        <ThemeProvider theme={themeGreen} >
            
            <Box>
                <MenuMobile/>
                <SelectLanguage/>
                <StackContainer direction={{ xs: 'column', sm: 'row'}}>
                    
                    <Menu />
                    {
                        !isInitializing &&
                        <ShowApp />
                    }
                    
                    {
                        isInitializing &&
                        <Stack sx={{width: '100%', height: '100vh'}} alignItems="center" justifyContent="center">
                            <Stack spacing={2} direction="row" sx={{width: '60%', height: '50vh', paddingBottom: '8rem'}}>
                                <LogoImage color='grey'/>
                            </Stack>
                        </Stack>
                    }
                </StackContainer>
            </Box>
        </ThemeProvider>
    )
}

export default DashBoard