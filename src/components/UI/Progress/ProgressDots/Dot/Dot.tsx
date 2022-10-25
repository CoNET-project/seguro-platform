import styled from 'styled-components'
import React from 'react'

type DotProps = {
    selected: boolean
}

type StyledDotProps = {
    selected: boolean
}

const StyledDot = styled.div<StyledDotProps>`
	transition: background-color 150ms ease-in-out, transform 300ms ease-in-out;
	background-color: ${props => props.selected ? props.theme.ui.progress.dot.complete : props.theme.ui.progress.dot.incomplete};
	transform: ${props => props.selected ? 'scale(1.4)' : 'scale(1)'};
	width: 10px;
	height: 10px;
	content: '';
	border-radius: 50%;
	margin: 4px;
`


const Dot = ({selected}: DotProps) => {

    return (
        <StyledDot selected={selected}/>
    )
}

export default Dot;