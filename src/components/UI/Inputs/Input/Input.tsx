import {ReactNode} from 'react'
import styled from 'styled-components'

type StyledInputProps = {
    hasError?: boolean
}

const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  min-height: 40px;
  border: 1px solid ${props => props.hasError ? props.theme.ui.colors.dangerous : `rgba(0, 0, 0, 0.3)`};
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border-radius: 3px;
  padding: 6px 10px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  margin-bottom: 10px;
  color: ${props => props.theme.ui.colors.text.primary};

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

const StyledAsterisk = styled.span`
  color: ${props => props.theme.ui.colors.dangerous};
  margin-right: 3px;
`

type InputProps = {
    id: string,
    onChange: (val: string) => void,
    defaultValue?: string,
    labelText?: ReactNode | string,
    hasError?: boolean,
    required?: boolean,
    className?: string
}

const Input = ({id, labelText, onChange, defaultValue, hasError, required, className}: InputProps) => {
    return (
        <>
            {
                labelText && (
                    <StyledInputLabel htmlFor={id} hasError={hasError}>
                        {required && <StyledAsterisk>*</StyledAsterisk>}
                        {labelText}
                    </StyledInputLabel>
                )
            }
            <StyledInput id={id} type='text' hasError={hasError} onChange={e => onChange(e.target.value)}
                         className={className} defaultValue={defaultValue}/>
        </>
    )
}

export default Input