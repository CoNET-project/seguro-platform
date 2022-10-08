import styled from 'styled-components'
import React, {ReactNode} from "react"
import {motion} from 'framer-motion'
import StyledPanel from "../../../Common/Panel/Panel"

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
