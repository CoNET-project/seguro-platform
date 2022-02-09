import styled from 'styled-components';
import {screenWidth} from "../../../screenSizes";
import {HTMLMotionProps} from "framer-motion";
import StyledPanel from "../../../Common/Panel/Panel";
import {ReactNode} from "react";

type RightPanelProps = {
    children: ReactNode,
    focus: boolean
} & HTMLMotionProps<'div'>

type StyledRightPanelProps = {
    visible: boolean
}

const StyledRightPanel = styled(StyledPanel)<StyledRightPanelProps>`
  position: absolute;
  right: 0;
  width: ${props => props.visible ? '100%' : 0};
  @media (${screenWidth.narrowWidth}) {
    max-width: 350px;
  }
  @media (${screenWidth.wideWidth}) {
    position: relative;
    max-width: 350px;
  }
`

const RightPanel = ({focus, children}: RightPanelProps) => {
    return (
        <StyledRightPanel visible={focus}>
            {children}
        </StyledRightPanel>
    )
}

export default RightPanel;