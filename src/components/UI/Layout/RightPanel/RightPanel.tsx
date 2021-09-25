import styled from 'styled-components';
import Panel from "../../Common/Panel/Panel";
import {screenWidth} from "../../screenSizes";
import {HTMLMotionProps} from "framer-motion";
import {panelTransitionVariants} from "../../Motion/Variants/Variants";
import StyledPanel from "../../Common/Panel/Panel";

type RightPanelProps = {} & HTMLMotionProps<'div'>

const StyledRightPanel = styled(StyledPanel)`
  flex: 0.4;
  background-color: blue;
  position: absolute;
  right: 0;
  z-index: 100;
  @media (${screenWidth.wideWidth}) {
    position: relative;
  }
`

const RightPanel = ({}: RightPanelProps) => {
    return (
        <StyledRightPanel
            initial="exit"
            animate="center"
            exit="exit"
            transition={{
                x: {damping: 10}
            }}
            custom={-1}
            variants={panelTransitionVariants}
            layout
            key='right-panel'
        >
            right panel
        </StyledRightPanel>
    )
}

export default RightPanel;