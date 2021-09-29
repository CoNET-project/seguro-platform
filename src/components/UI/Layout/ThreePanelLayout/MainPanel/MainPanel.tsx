import styled from 'styled-components';
import Panel from "../../../Common/Panel/Panel";
import {ReactNode, useState} from "react";
import {AnimatePresence, motion} from 'framer-motion';
import StyledPanel from "../../../Common/Panel/Panel";
import {screenWidth} from '../../../screenSizes';
import useAppState from "../../../../../store/appState/useAppState";

type MainPanelProps = {
    rightPanel: ReactNode,
    children: ReactNode
}

const StyledMainPanel = styled(StyledPanel)`
  display: flex;
  width: 100%;
  flex: 1;
  content: '';
`

const StyledMainContents = styled(motion.div)`
  width: 100%;
  flex: 1;
`

const MainPanel = ({children, rightPanel}: MainPanelProps) => {
    return (
        <StyledMainPanel>
            <StyledMainContents>
                {children}
            </StyledMainContents>
            {rightPanel}
        </StyledMainPanel>
    )
}

export default MainPanel;