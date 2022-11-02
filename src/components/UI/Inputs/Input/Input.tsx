import React, {ReactNode, Ref} from 'react'
import styled from 'styled-components'

type StyledInputProps = {
    hasError?: boolean
}

type StyledInputLabelProps = {
	hasError?: boolean
}

type InputProps = {
    id: string,
    onChange: (val: string) => void,
    disabled?: boolean,
    placeholder?: string,
    defaultValue?: string,
    labelText?: ReactNode | string,
    hasError?: boolean,
    required?: boolean,
    className?: string
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
const Input = React.forwardRef(
	({
		id,
		labelText,
		onChange,
		defaultValue,
		hasError,
		required,
		className,
		disabled,
		placeholder
	}: InputProps, ref: Ref<HTMLInputElement>) => {


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
                         className={className} defaultValue={defaultValue} disabled={disabled} ref={ref}
                         placeholder={placeholder}/>
        </>
    )
})

export default Input