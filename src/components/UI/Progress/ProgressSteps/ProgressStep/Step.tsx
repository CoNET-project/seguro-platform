import styled from 'styled-components'
import React from 'react'

type StepProps = {
    stepReached: boolean
}

type StyledStepProps = {
    stepReached: boolean
}

const StyledStep = styled.div<StyledStepProps>`
	height: 6px;
	width: 100%;
	content: '';
	background-color: ${props => props.stepReached ? props.theme.ui.colors.primary : props.theme.ui.colors.background.elevationOne};
	transition: background-color 150ms ease-in-out;

	&:last-of-type {
		border: none;
	}
`

const Step = ({stepReached}: StepProps) => {

    return <StyledStep stepReached={stepReached}/>
}

export default Step