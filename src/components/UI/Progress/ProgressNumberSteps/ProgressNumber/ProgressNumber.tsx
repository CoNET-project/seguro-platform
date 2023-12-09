import styled from 'styled-components'
import React from 'react'

type StyledProgressNumberProps = {
    isactive: boolean
}

type ProgressNumberProps = {
    isactive: boolean,
    number: number
}
const StyledProgressNumber = styled.div<StyledProgressNumberProps>`
	height: 25px;
	width: 25px;
	content: '';
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.isactive ? props.theme.ui.colors.primary : props.theme.ui.colors.background.elevationOne};
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	transition: background-color 300ms ease-in-out;
`

const StyledNumberText = styled.p<StyledProgressNumberProps>`
	color: ${props => props.isactive ? 'white' : props.theme.ui.colors.text.primary};
	font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: ${props => props.isactive ? 700 : 400};
`


const ProgressNumber = ({number, isactive}: ProgressNumberProps) => {

    return (
        <StyledProgressNumber isactive={isactive}>
            <StyledNumberText isactive={isactive}>
                {number}
            </StyledNumberText>
        </StyledProgressNumber>
    )
}

export default ProgressNumber
