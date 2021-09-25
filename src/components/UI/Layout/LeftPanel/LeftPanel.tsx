import styled from 'styled-components';
import Panel from "../../Common/Panel/Panel";
import {screenWidth} from '../../screenSizes';
import StyledPanel from "../../Common/Panel/Panel";
import {panelTransitionVariants} from "../../Motion/Variants/Variants";

type LeftPanelProps = {}

const StyledLeftPanel = styled(StyledPanel)`
  background-color: red;
  flex: 0.4;
  max-width: unset;
  position: absolute;
  @media (${screenWidth.narrowWidth}) {
    position: relative;
  }
`

const LeftPanel = ({}: LeftPanelProps) => {
    return (
        <StyledLeftPanel
            initial="exit"
            animate="center"
            exit="exit"
            transition={{
                x: {damping: 10}
            }}
            custom={1}
            variants={panelTransitionVariants}
            layout
            key='left-panel'
        >
            left panel
        </StyledLeftPanel>
    )
}

export default LeftPanel;