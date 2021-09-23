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
    const {windowInnerSize, toggleOverlay} = useAppState()
    const drawerWidth = windowInnerSize.width * 0.75
    const dragControls = useDragControls()
    const drawerControls = useAnimation()
    const opacity = useMotionValue(0)

    const drawerRef = useRef<HTMLDivElement>(null)

    const startDrag = (event: any) => {
        console.log(event)
        dragControls.start(event);
    }

    const swipeConfidenceThreshold = 1;
    const swipePower = (offset: number, velocity: number) => {
        console.log(offset, velocity)
        return Math.abs(offset) * velocity;
    };

    useEffect(() => {
        drawerControls.start('setup').then()
    }, [])

    return (
        <>
            <Drawer
                drag='x'
                dragControls={dragControls}
                dragElastic={false}
                dragMomentum={false}
                dragConstraints={{
                    right: 0,
                    left: -(windowInnerSize.width * 0.75)
                }}
                transition={{
                    x: {type: "just"}
                }}
                onDragEnd={(e: any, {offset, velocity}: any) => {
                    const swipe = swipePower(offset.x, velocity.x);

                    if (swipe <= swipeConfidenceThreshold) {
                        drawerControls.start('exit').then(r => {
                        })
                    } else if (swipe > swipeConfidenceThreshold) {
                        drawerControls.start('enter').then(r => {
                        })
                    }
                }}
                animate={drawerControls}
                custom={drawerWidth}
                variants={
                    drawerTransitionVariants
                }
                ref={drawerRef}
            />
            {/*<DragOverlay*/}
            {/*    style={{opacity}}*/}
            {/*/>*/}
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
