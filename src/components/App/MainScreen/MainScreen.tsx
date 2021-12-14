import {AnimateSharedLayout, motion, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion';
import styled from 'styled-components';
import GlobalBar from "../../UI/Global/GlobalBar/GlobalBar";
import useAppState from "../../../store/appState/useAppState";
import Drawer from "../../UI/Drawer/Drawer";
import {DragOverlay} from "../../UI/Common/Overlay/Overlay";
import Messenger from "../Apps/Messenger/Messenger";
import PlatformModal from "../PlatformModal/PlatformModal";
import {Toaster} from '../../UI/Toaster/Toaster'
import {getWorkerService} from "../../../services/workerService/workerService";
import {useEffect} from "react";
import {ProfileData} from "../../../store/appState/appStateReducer";

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
            const clientProfiles = profiles.reduce((clientProfiles: Array<ProfileData>, profile) => {
                clientProfiles.push({
                    nickname: profile.nickname,
                    keyid: profile.keyID || '',
                    primary: profile.isPrimary
                })
                return clientProfiles
            }, [])
            setClientProfiles(clientProfiles)
        }
    }

    useEffect(() => {
        setInitialProfiles()
    }, [])

    const startDrag = (event: any) => {
        drawerDragControls.start(event);
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
                animationControls={animationControls}
            />
            <DragOverlay
                acceptPointerEvents={isDrawerOpen}
                onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                style={{opacity}}
            />
            <StyledMainScreen onTouchStart={startDrag} onPointerDown={startDrag}>
                <Toaster/>
                <GlobalBar/>
                <AnimateSharedLayout>
                    <StyledContents>
                        <Messenger/>
                    </StyledContents>
                </AnimateSharedLayout>
            </StyledMainScreen>
        </>
    )
}

export default MainScreen
