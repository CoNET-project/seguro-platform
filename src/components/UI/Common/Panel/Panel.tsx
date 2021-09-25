import styled from 'styled-components'
import {ReactNode} from "react";
import {screenWidth} from "../../screenSizes";
import {HTMLMotionProps, motion} from 'framer-motion';
import {panelTransitionVariants} from "../../Motion/Variants/Variants";

export type PanelProps = {
    children: ReactNode,
    className?: string
} & HTMLMotionProps<'div'>

const StyledPanel = styled(motion.div)`
  height: 100%;
  width: 100%;
  content: '';
  color: ${props => props.theme.ui.text.textPrimary};
  min-width: 20rem;
  @media (${screenWidth.narrowWidth}) {
    max-width: 25rem;
  }
  @media (${screenWidth.wideWidth}) {
    max-width: 25rem;
  }
`

export default StyledPanel;