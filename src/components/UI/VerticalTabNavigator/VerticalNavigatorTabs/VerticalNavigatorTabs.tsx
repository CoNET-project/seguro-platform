import styled from "styled-components";
import Tab from "../Tab/Tab";
import {VerticalTabNavigatorPages} from "../VerticalTabNavigator";

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
                Object.keys(screens).map((id, index) => <Tab key={id + index} id={id} icon={screens[id].icon}/>)
            }
        </StyledVerticalNavigatorTabs>
    )
}

export default VerticalNavigatorTabs