import {ReactNode} from 'react'
import styled from 'styled-components'

type StyledInputProps = {
    hasError?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  min-height: 30px;
  border: 1px solid ${props => props.hasError ? props.theme.ui.colors.dangerous : `rgba(0, 0, 0, 0.3)`};
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border-radius: 3px;
  padding: 6px 10px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
`

type StyledInputLabelProps = {
    hasError?: boolean
}

const StyledInputLabel = styled.label<StyledInputLabelProps>`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  margin-bottom: 6px;
  color: ${props => props.hasError ? props.theme.ui.colors.dangerous : props.theme.ui.colors.text.primary};
  margin-left: 2px;
`

type InputProps = {
    id: string,
    labelText: ReactNode | string,
    hasError?: boolean
}

const Input = ({id, labelText, hasError}: InputProps) => {
    return (
        <>
            <StyledInputLabel htmlFor={id} hasError={hasError}>{labelText}</StyledInputLabel>
            <StyledInput id={id} type='text' hasError={hasError}/>
        </>
    )
}

export default Input