import {
    AnimatePresence,
    AnimateSharedLayout,
    motion,
    useAnimation,
    useDragControls,
    useMotionValue,
    useTransform
} from 'framer-motion';
import styled from 'styled-components';
import GlobalBar from "../../UI/Global/GlobalBar/GlobalBar";
import useAppState from "../../../store/appState/useAppState";
import Drawer from "../../UI/Drawer/Drawer";
import {DragOverlay} from "../../UI/Common/Overlay/Overlay";
import ThreePanels from "../../UI/Layout/ThreePanelLayout/ThreePanels";
import Messenger from "../Apps/Messenger/Messenger";
import PlatformModal from "../PlatformModal/PlatformModal";

const StyledMainScreen = styled(motion.div)`

`

const StyledContents = styled(motion.div)`
  background-color: ${props => props.theme.ui.backgroundColor};
  content: '';
  height: calc(100% - calc(60px + env(safe-area-inset-top)));
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
  position: relative;
`

const MainScreen = () => {
    const {windowInnerSize: {width}, setIsDrawerOpen, isDrawerOpen, isTouchDevice, isModalOpen} = useAppState()

    const drawerWidth = width * 0.80

    const drawerDragControls = useDragControls()
    const animationControls = useAnimation()

    const currentDrawerX = useMotionValue(0)
    const drawerXMovements = [-drawerWidth, 1]
    const overlayOpacity = [0, 1]
    const opacity = useTransform(currentDrawerX, drawerXMovements, overlayOpacity)

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
