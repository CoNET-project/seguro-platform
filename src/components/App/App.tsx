import React, {useEffect, useRef} from 'react'
import GlobalStyle from '../UI/Global/Styles'
import styled from 'styled-components'
import useAppState from '../../store/appState/useAppState'
import MainScreen from './MainScreen/MainScreen'
import { LayoutGroup, motion, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion'
import LaunchPage from './Apps/launchPage'
import JoinUS from './Apps/joinUS'
import Box from '@mui/material/Box'
import SpeedDial, { SpeedDialProps } from '@mui/material/SpeedDial'
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import SpeedDialIcon from '@mui/material/SpeedDialIcon'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import {US, CN,JP, TW } from 'country-flag-icons/react/3x2'
import SvgIcon from '@mui/material/SvgIcon'
import {Locale} from "../../localization/types"
import Proxy from './Apps/CONET-Proxy/index'
import ConetAPP from './LaunchAPP'
import {testLocalServer} from '../../API/index'
import Miner from './Apps/miner'

import NoDeamon from './NoDaemon'
const StyledContainer = styled.div`
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	color: white;
`
const StyledMainScreen = styled(motion.div)`
	width: 100%;
`

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

const App = () => {
    const {
        isInitializing,
        isPlatformLoading,
        setNetworkStrength,
        setWindowInnerSize,
        setClientDevices,
        setIsTouchDevice,
        showJoinUS,
        setShowAppStore,
        setIsModalOpen,
        setIsShowOverlay,
        showOverlay,
        hasContainer,
        isUnlocked,
        locale, 
        setLocale,
        showGuide,
        showAppStore,
        localDaemon,
        setlocalDaemon,
        showMiner
    } = useAppState()
    const drawerDragControls = useDragControls()
    
    const startDrag = (event: any) => {
        drawerDragControls.start(event)
    }

    const showLocationIcon = () => {
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

    useEffect(() => {
		
        const testDeamon = async() => {
            const test = await testLocalServer ()
            if (test === null) {
                setlocalDaemon(true)
            }
        }
        testDeamon().catch((ex) => {
            console.log(`APP useEffect testDeamon error`, ex)
        })

    }, [])

    const ShowApp = () => {
        return (
            <>
                {localDaemon && <NoDeamon />}
                {!localDaemon && <ConetAPP />}
            </>
            
        )
    }

    const switchShow = () => {
        return (
            <>
                { !(showMiner || showAppStore) && <JoinUS/>}
                {(showMiner || showAppStore) && <ShowApp />}
            </>
        )
    }

    return (
        <>
            <GlobalStyle/>
            <StyledContainer>
                <StyledMainScreen onTouchStart={startDrag} onPointerDown={startDrag}>
                    <Box sx={{ position: 'absolute', mt: 0, top: '18rem', right: '1rem'}}>
                        <SpeedDial
                            ariaLabel="Language"
                            sx={{ position: 'absolute', bottom: 16, right: 16 , backgroundColor: 'rgba(0,0,0,0)'}}
                            icon={showLocationIcon()}
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
                    {switchShow()}
                    
                </StyledMainScreen>
                
            </StyledContainer>
        </>
    )
}

export default App