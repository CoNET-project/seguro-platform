import {LayoutGroup} from 'framer-motion'
import styled from 'styled-components'
import Tab, {TabActiveStyles} from '../Tab/Tab'
import {TabNavigatorPages} from "../TabNavigator"
import React from 'react'

export type TabNavigatorTabsProps = {
    screens: TabNavigatorPages,
    activeStyles?: TabActiveStyles
}
const StyledTabNavigatorTabs = styled.div`
	display: flex;
	align-items: center;
	border-top: 1px solid ${props => props.theme.ui.colors.border.light};
`

const TabNavigatorTabs = ({screens, activeStyles}: TabNavigatorTabsProps) => {


    return (
        <StyledTabNavigatorTabs>
            <LayoutGroup>
                {
                    Object.keys(screens).map((id, idx) => {
                        if (screens[id].isTopLevel == undefined || screens[id].isTopLevel) {
                            return <Tab
                                key={`id${idx}`}
                                id={id}
                                text={screens[id].text || id}
                                icon={screens[id]?.icon || null}
                                activeStyles={activeStyles}
                            />
                        }
                    })
                }
            </LayoutGroup>
        </StyledTabNavigatorTabs>
    )
}

export default TabNavigatorTabs
