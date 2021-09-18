import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{isHidden: boolean}>`
    font-size: 18px;
    border-radius: 5px;
    border: 1px #aaa solid;
    background-color: white;
    padding: 10px 0;
    width: 100%;
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
    &:hover {
      transform: scale(1.01);
    }
    &:disabled {
      background-color: rgba(255, 255, 255, 0.5);
    }
    &:last-of-type {
      margin-top: 10px;
    }
`

export type ButtonProps = {
    text: string | ReactNode,
    disabled: boolean,
    onClick: () => void,
    isHidden?: boolean
}

const Button = ({
    text,
    isHidden,
    disabled,
    onClick
}: ButtonProps) => {
    return (
        <StyledButton
            disabled={disabled}
            isHidden={isHidden || false}
            onClick={onClick}
        >
            {text}
        </StyledButton>
    )
}

export default Button
