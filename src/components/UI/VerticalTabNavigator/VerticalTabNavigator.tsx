import styled from "styled-components";
import VerticalNavigatorTabs from "./VerticalNavigatorTabs/VerticalNavigatorTabs";
import {ReactNode} from "react";
import {usePageNavigator} from "../../../contexts/pageNavigator/PageNavigatorContext";

const StyledVerticalTabNavigator = styled.div`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
`

const StyledVerticalTabNavigatorContent = styled.div`
  width: 100%;
  height: 100%;
`

export type VerticalTabNavigatorPages = {
    [id: string]: {
        text?: ReactNode | string,
        icon?: ReactNode,
        screen: ReactNode,
        isTopLevel?: boolean
    }
}

type VerticalTabNavigatorProps = {
    screens: VerticalTabNavigatorPages,
    className?: string
}

const VerticalTabNavigatorContent = ({screens}: VerticalTabNavigatorProps) => {
    const {state} = usePageNavigator()

    const screen = screens[state.current[0]]?.screen

    return (
        <StyledVerticalTabNavigatorContent>
            {screen}
        </StyledVerticalTabNavigatorContent>
    )
}

const VerticalTabNavigator = ({screens, className}: VerticalTabNavigatorProps) => {
    return (
        <StyledVerticalTabNavigator className={className}>
            <VerticalNavigatorTabs screens={screens}/>
            <VerticalTabNavigatorContent screens={screens}/>
        </StyledVerticalTabNavigator>
    )
}

export default VerticalTabNavigator