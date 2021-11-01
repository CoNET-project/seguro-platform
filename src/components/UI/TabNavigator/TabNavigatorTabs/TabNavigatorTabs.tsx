import {AnimateSharedLayout, HTMLMotionProps} from 'framer-motion';
import styled from 'styled-components'
import Tab, {TabActiveStyles} from '../Tab/Tab'
import {TabNavigatorPages} from "../TabNavigator";

export type TabNavigatorTabsProps = {
    screens: TabNavigatorPages,
    activeStyles?: TabActiveStyles
}

const StyledTabNavigatorTabs = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${props => props.theme.ui.border.color};
`

const TabNavigatorTabs = ({screens, activeStyles}: TabNavigatorTabsProps) => {
    return (
        <StyledTabNavigatorTabs>
            <AnimateSharedLayout>
                {
                    Object.keys(screens).map((screen, idx) => (
                        <Tab
                            key={idx}
                            id={screen}
                            text={screens[screen].text || screen}
                            icon={screens[screen]?.icon || null}
                            activeStyles={activeStyles}
                        />
                    ))
                }
            </AnimateSharedLayout>
        </StyledTabNavigatorTabs>
    )
}

export default TabNavigatorTabs
