import styled from 'styled-components'
import React from 'react'

type StyledProgressNumberProps = {
    isActive: boolean
}

const StyledProgressNumber = styled.div<StyledProgressNumberProps>`
  height: 25px;
  width: 25px;
  content: '';
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.isActive ? props.theme.ui.colors.primary : props.theme.ui.colors.background.elevationOne};
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  transition: background-color 300ms ease-in-out;
`

const StyledNumberText = styled.p<StyledProgressNumberProps>`
  color: ${props => props.isActive ? 'white' : props.theme.ui.colors.text.primary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: ${props => props.isActive ? 700 : 400};
`

type ProgressNumberProps = {
    isActive: boolean,
    number: number
}

const ProgressNumber = ({number, isActive}: ProgressNumberProps) => {
    return (
        <StyledProgressNumber isActive={isActive}>
            <StyledNumberText isActive={isActive}>
                {number}
            </StyledNumberText>
        </StyledProgressNumber>
    )
}

export default ProgressNumber
