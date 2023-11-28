import { createTheme, ThemeProvider, makeStyles, styled, useTheme } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import {ReactComponent as CONETIcon} from '../../../../assets/logo/CoNET_logo_white.svg'
import React, {HTMLAttributes, useState, useEffect, SyntheticEvent, ReactNode} from "react"
import SvgIcon from '@mui/material/SvgIcon'
import type {SxProps, Theme} from '@mui/material/'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import SwipeableViews from 'react-swipeable-views'
import Box from '@mui/material/Box'
import Proxy from '../CONET-Proxy'
import Slide from '@mui/material/Slide'
import useAppState from "../../../../store/appState/useAppState"

interface TabPanelProps {
    children?: React.ReactNode
    dir?: string
    index: number
    value: number
}

interface StyledTabProps {
    label?: string
    icon?: string | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    sx?:SxProps<Theme>
}

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


const DashBoard = () => {
    const [value, setValue] = useState(0)
    const {
        windowInnerSize: {width},
        setClientProfiles,
		showAppStore,
		setIsModalOpen,
        showMiner
    } = useAppState()

    const theme = useTheme()
    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue)
    }

    const handleChangeIndex = (index: number) => {
        setValue(index)
    }

    const Menu = () => {
    

        return (
            <StyledTabs
                value={value}
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
                value={value}
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

    return (
        <ThemeProvider theme={themeTopArea1} >
            <Box>
                <StackContainer direction="row" id='sscscsf'>
                    <MenuMobile/>
                    <Menu />
                    <Proxy />
                </StackContainer>
            </Box>
            
            
        </ThemeProvider>
    )
}

export default DashBoard