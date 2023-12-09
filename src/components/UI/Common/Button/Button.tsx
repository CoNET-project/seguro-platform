import React, {ReactNode} from 'react'
import styled from 'styled-components'



export type ButtonProps = {
    children: string | ReactNode,
    disabled?: boolean,
    onClick: () => void,
    is_hidden?: boolean,
    className?: string
}

const StyledButton = styled.button<{ is_hidden: boolean }>`
	border-radius: 5px;
	border: none;
	padding: 15px 0;
	max-width: 25rem;
	width: 100%;
	cursor: pointer;
	transition: transform 100ms ease-in-out;
	visibility: ${props => props.is_hidden ? 'hidden' : 'visible'};
	color: whitesmoke;
	background-color: ${props => props.theme.ui.colors.primary};
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};

	&:disabled {
		background-color: rgba(255, 255, 255, 0.5);
	}

	&:active {
		outline: none;
	}
`
const Button = 
	({
		children,
		is_hidden,
		disabled,
		onClick,
		className
	}: ButtonProps) => {

	
    return (
        <StyledButton
            disabled={disabled}
            is_hidden={is_hidden || false}
            onClick={onClick}
            className={className}
        >
            {children}
        </StyledButton>
    )
}

export default Button
