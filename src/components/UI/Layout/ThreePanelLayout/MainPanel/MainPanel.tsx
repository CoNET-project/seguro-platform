import styled from 'styled-components';
import Panel from "../../../Common/Panel/Panel";
import {ReactNode, useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';
import StyledPanel from "../../../Common/Panel/Panel";
import {screenWidth} from '../../../screenSizes';

type MainPanelProps = {
    children: ReactNode,
    showLeftHandler: () => void
}

const StyledMainPanel = styled(StyledPanel)`
  background-color: green;
  flex: 1;
  max-width: unset;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  @media (${screenWidth.narrowWidth}) {
    position: relative;
  }
`

const StyledMainContents = styled(motion.div)`
  width: 100%;
  flex: 1;
`

const MainPanel = ({children, showLeftHandler}: MainPanelProps) => {
    const [showRight, setShowRight] = useState(false)
    const [showMain, setShowMain] = useState(false)
    return (
        <StyledMainPanel>
            <button style={{position: 'absolute', top: 100, left: 0, zIndex: 100000}}
                    onClick={() => showLeftHandler()}>
                SHOW LEFT
            </button>
            <button style={{position: 'absolute', top: 0, left: 0, zIndex: 100000}}
                    onClick={() => setShowRight(!showRight)}>
                SHOW RIGHT
            </button>
            <button style={{position: 'absolute', top: 50, left: 0, zIndex: 100000}}
                    onClick={() => setShowMain(!showMain)}>
                SHOW MAIN
            </button>
            <StyledMainContents layout key='main-contents'>
                Main panel
            </StyledMainContents>
            {
                showRight && children
            }
        </StyledMainPanel>
    )
}

export default MainPanel;