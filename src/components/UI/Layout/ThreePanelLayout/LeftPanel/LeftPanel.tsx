import styled from 'styled-components';
import {screenWidth} from '../../../screenSizes';
import StyledPanel from "../../../Common/Panel/Panel";
import {ReactNode} from 'react';

type LeftPanelProps = {
    children: ReactNode,
    focus: boolean
}

type StyledLeftPanelProps = {
    visible: boolean
}

const StyledLeftPanel = styled(StyledPanel)<StyledLeftPanelProps>`
  width: ${props => props.visible ? '100%' : 0};
  border-right: 1px solid rgba(0, 0, 0, 0.05);
  opacity: ${props => props.visible ? 1 : 0};
  @media (${screenWidth.narrowWidth}) {
    max-width: 300px;
    opacity: 1;
  }
  @media (${screenWidth.mediumWidth}) {
    max-width: 350px;
    width: 100%;
  }
`

const LeftPanel = ({focus, children}: LeftPanelProps) => {
    return (
        <StyledLeftPanel visible={focus}>
            {children}
        </StyledLeftPanel>
    )
}

export default LeftPanel;
