import { LayoutGroup, motion, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion'
import styled from 'styled-components'
import useAppState from "../../../store/appState/useAppState"
import Drawer from "../../UI/Drawer/Drawer"
import {DragOverlay} from "../../UI/Common/Overlay/Overlay"
import PlatformModal from "../PlatformModal/PlatformModal"
import {Toaster} from '../../UI/Toaster/Toaster'
import GlobalBar from '../../UI/Global/GlobalBar/GlobalBar'
import Messenger from '../Apps/Messenger/Messenger'
import GuildShow from '../Apps/GuideShow/GuildShow'
import {getWorkerService} from '../../../services/workerService/workerService'
import {ClientProfiles} from '../../../store/appState/appStateReducer'
import {useEffect} from 'react'
import React from 'react'

const StyledMainScreen = styled(motion.div)`
  width: 100%;
`

const StyledContents = styled(motion.div)`
  background-color: ${props => props.theme.ui.colors.background.foundation};
  content: '';
  height: calc(100% - calc(50px + env(safe-area-inset-top)));
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  position: relative;
`

const MainScreen = () => {
    const {
        windowInnerSize: {width},
        setIsDrawerOpen,
        isDrawerOpen,
        isTouchDevice,
        isModalOpen,
		showGuide,
        setClientProfiles
    } = useAppState()

    const drawerWidth = width * 0.80

    const drawerDragControls = useDragControls()
    const animationControls = useAnimation()

    const currentDrawerX = useMotionValue(0)
    const drawerXMovements = [-drawerWidth, 1]
    const overlayOpacity = [0, 1]
    const opacity = useTransform(currentDrawerX, drawerXMovements, overlayOpacity)

    const setInitialProfiles = () => {
        const {profile} = getWorkerService()
        if (profile && profile.profiles && profile.profiles.length) {
            const profiles = profile.profiles
            const clientProfiles = profiles.reduce((clientProfiles: ClientProfiles, profile) => {
                if (profile.keyID) {
                    // @ts-ignore
                    clientProfiles[profile.keyID] = profile
                }
                return clientProfiles
            }, {})
            setClientProfiles(clientProfiles)
        }
    }

    useEffect(() => {
        setInitialProfiles()
    }, [])

    const startDrag = (event: any) => {
        drawerDragControls.start(event)
    }

    const dragOptions = (): any => {
        // if (isTouchDevice) {
        return {
            drag: 'x',
            dragControls: drawerDragControls
        }
        // }
        // return {}
    }

    return (
        <>
            {
                isModalOpen && (
                    <PlatformModal/>
                )
            }
            <Drawer
                {...dragOptions()}
                style={{x: currentDrawerX}}
                CoNETanimationControls={animationControls}
            />
            {<DragOverlay
                acceptPointerEvents={isDrawerOpen}
                style={{opacity}}
            />}
            <StyledMainScreen onTouchStart={startDrag} onPointerDown={startDrag}>
                <Toaster/>
                <GlobalBar/>
                <LayoutGroup id="a">
                    <StyledContents>
                        {showGuide?<GuildShow/>:<Messenger/>}
                    </StyledContents>
                </LayoutGroup>
            </StyledMainScreen>
        </>
    )
}

export default MainScreen
