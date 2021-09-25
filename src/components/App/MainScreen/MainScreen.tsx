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
import {useEffect, useRef, useState} from "react";
import {drawerTransitionVariants} from "../../UI/Motion/Variants/Variants";
import {DragOverlay} from "../../UI/Common/Overlay/Overlay";
import LeftPanel from "../../UI/Layout/LeftPanel/LeftPanel";
import MainPanel from "../../UI/Layout/MainPanel/MainPanel";
import RightPanel from "../../UI/Layout/RightPanel/RightPanel";
import {DragControlOptions} from "framer-motion/types/gestures/drag/VisualElementDragControls";

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
    const {windowInnerSize: {width}, setIsDrawerOpen, isDrawerOpen, isTouchDevice} = useAppState()

    const drawerWidth = width * 0.80

    const drawerDragControls = useDragControls()
    const animationControls = useAnimation()

    const currentDrawerX = useMotionValue(0)
    const drawerXMovements = [-drawerWidth, 1]
    const overlayOpacity = [0, 1]
    const opacity = useTransform(currentDrawerX, drawerXMovements, overlayOpacity)
    console.log(opacity)

    const startDrag = (event: any) => {
        drawerDragControls.start(event);
    }

    const dragOptions = (): any => {
        if (isTouchDevice) {
            return {
                drag: 'x',
                dragControls: drawerDragControls
            }
        }
        return {}
    }

    // Testing panel animations

    const [showLeft, setShowLeft] = useState(false)

    const showLeftHandler = () => {
        return setShowLeft(!showLeft)
    }

    return (
        <>
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
            <StyledMainScreen onTouchStart={startDrag}>
                <GlobalBar/>
                <AnimateSharedLayout>
                    <StyledContents>
                        {showLeft && <LeftPanel/>}
                        <MainPanel showLeftHandler={showLeftHandler}>
                            <RightPanel/>
                        </MainPanel>
                    </StyledContents>
                </AnimateSharedLayout>
            </StyledMainScreen>
        </>
    )
}

export default MainScreen
