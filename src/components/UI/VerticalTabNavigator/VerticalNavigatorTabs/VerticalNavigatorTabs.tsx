import styled from "styled-components"
import Tab from "../Tab/Tab"
import {VerticalTabNavigatorPages} from "../VerticalTabNavigator"
import React from 'react'

const StyledVerticalNavigatorTabs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50px;
  height: 100%;
  border-right: 1px solid ${props => props.theme.ui.colors.border.light};
`

type VerticalNavigatorTabsProps = {
    screens: VerticalTabNavigatorPages
}

const VerticalNavigatorTabs = ({screens}: VerticalNavigatorTabsProps) => {
    return (
        <StyledVerticalNavigatorTabs>
            {
                Object.keys(screens).map((id, idx) => {
                    if (screens[id].isTopLevel == undefined || screens[id].isTopLevel) {
                        return <Tab
                            key={`id${idx}`}
                            id={id}
                            icon={screens[id]?.icon || null}
                        />
                    }
                })
            }
        </StyledVerticalNavigatorTabs>
    )
}

export default VerticalNavigatorTabs