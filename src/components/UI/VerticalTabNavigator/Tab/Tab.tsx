import styled from "styled-components"
import React, {ReactNode} from "react"
import {usePageNavigator} from "../../../../contexts/pageNavigator/PageNavigatorContext"
import {pageNavigator} from "../../../../contexts/pageNavigator/pageNavigatorActions"

type StyledTabProps = {
    active: boolean
}


type StyledTabIconProps = {
    active: boolean
}

export type TabActiveStyles = {
    borderColor?: string,
    color?: string,
    backgroundColor?: string
}

export type TabProps = {
    id: string,
    icon?: ReactNode,
    activeStyles?: TabActiveStyles
}

const StyledTab = styled.div<StyledTabProps>`
	width: 50px;
	height: 50px;
	padding: 5px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	overflow: hidden;
	cursor: pointer;
	box-shadow: ${props => props.active && 'inset 0 0 5px rgba(0, 0, 0, 0.25)'};
	border-radius: 3px
`

const StyledTabIcon = styled.div<StyledTabIconProps>`
	padding: 0;
	opacity: ${props => props.active ? 1 : 0.3};
	transition: opacity 150ms ease-in-out;
	font-size: 18px;
`
const Tab = ({icon, id}: TabProps) => {
    const {state, dispatch} = usePageNavigator()

    const rootPageId = state.current[0].split('/')[0]
	
    return (
        <StyledTab
            active={rootPageId === id}
            onClick={() => dispatch(pageNavigator.navigateToPage(id))}
        >
            {icon && (
                <StyledTabIcon
                    active={rootPageId === id}>{icon}</StyledTabIcon>
            )}
        </StyledTab>
    )
}

export default Tab