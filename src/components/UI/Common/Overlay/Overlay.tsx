import {HTMLMotionProps, motion} from 'framer-motion';
import styled from 'styled-components';

type DragOverlayProps = {
    acceptPointerEvents: boolean
} & HTMLMotionProps<any>

type OverlayProps = {
    show: boolean
}

type StyledOverlayProps = {
    show: boolean
}

type StyledDragOverlayProps = {
    acceptPointerEvents: boolean
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.show ? 200 : -100};
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 50ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  width: 100%;
  height: 100%
`

const StyledDragOverlay = styled(motion.div)<StyledDragOverlayProps>`
  position: absolute;
  z-index: 1000;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.65);
  width: 100%;
  height: 100vh;
  pointer-events: ${props => props.acceptPointerEvents ? 'initial' : 'none'};
  opacity: 0;
  visibility: visible;
`

export const Overlay = ({show}: OverlayProps) => {
    return <StyledOverlay show={show}/>
}

export const DragOverlay = (props: DragOverlayProps) => {
    return <StyledDragOverlay
        {...props}
    />
}
