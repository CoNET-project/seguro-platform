import {AnimatePresence, motion, useAnimation, useDragControls, useMotionValue, useTransform} from 'framer-motion';
import styled from 'styled-components';
import GlobalBar from "../../UI/Global/GlobalBar/GlobalBar";
import useAppState from "../../../store/appState/useAppState";
import Drawer from "../../UI/Drawer/Drawer";
import {useEffect, useRef} from "react";
import {drawerTransitionVariants} from "../../UI/Motion/Variants/Variants";
import {DragOverlay} from "../../UI/Common/Overlay/Overlay";

const StyledMainScreen = styled(motion.div)`

`

const StyledContents = styled(motion.div)`
  background-color: ${props => props.theme.ui.backgroundColor};
  content: '';
  height: calc(100% - calc(48px + env(safe-area-inset-top)));
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  text-align: center;
`

const MainScreen = () => {
    const {windowInnerSize: {width}} = useAppState()

    const drawerWidth = width * 0.75

    const drawerDragControls = useDragControls()
    const animationControls = useAnimation()

    const currentDrawerX = useMotionValue(0)
    const drawerXMovements = [-drawerWidth, 1]
    const overlayOpacity = [0, 1]
    const opacity = useTransform(currentDrawerX, drawerXMovements, overlayOpacity)

    const startDrag = (event: any) => {
        drawerDragControls.start(event);
    }

    return (
        <>
            <Drawer
                drag='x'
                style={{x: currentDrawerX}}
                dragControls={drawerDragControls}
                animationControls={animationControls}
            />
            <DragOverlay
                style={{opacity}}
            />
            <StyledMainScreen onTouchStart={startDrag} onPointerDown={startDrag}>
                <GlobalBar/>
                <StyledContents>
                    <div style={{flex: 1}}>
                        <h1>MAIN SCREEN</h1>
                    </div>
                </StyledContents>
            </StyledMainScreen>
        </>
    )
}

export default MainScreen
