import styled from "styled-components"
import LeftPanel from "./LeftPanel/LeftPanel"
import MainPanel from "./MainPanel/MainPanel"
import RightPanel from "./RightPanel/RightPanel"
import React, {ReactNode} from "react"

export type ThreePanelComponents = {
    leftPanelComponent: ReactNode,
    mainPanelComponent: ReactNode,
    rightPanelComponent: ReactNode
}

type ThreePanelProps = {
    components: ThreePanelComponents,
    currentPanel: 'left' | 'main' | 'right'
}
const StyledThreePanels = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
`

const ThreePanels = ({components, currentPanel}: ThreePanelProps) => {

    const {leftPanelComponent, mainPanelComponent, rightPanelComponent} = components

    return (
        <StyledThreePanels>
            <LeftPanel focus={currentPanel === 'left'}>
                {leftPanelComponent}
            </LeftPanel>
            <MainPanel
                rightPanel={
                    <RightPanel focus={currentPanel === 'right'}>
                        {rightPanelComponent}
                    </RightPanel>
                }>
                {mainPanelComponent}
            </MainPanel>
        </StyledThreePanels>
    )
}

export default ThreePanels
