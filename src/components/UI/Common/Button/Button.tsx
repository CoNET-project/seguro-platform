import {ReactNode} from 'react'
import styled from 'styled-components'

const StyledButton = styled.button<{ isHidden: boolean }>`
  border-radius: 5px;
  border: none;
  padding: 15px 0;
  max-width: 25rem;
  width: 100%;
  cursor: pointer;
  transition: transform 100ms ease-in-out;
  visibility: ${props => props.isHidden ? 'hidden' : 'visible'};
  color: whitesmoke;
  background-color: ${props => props.theme.ui.primaryColor};

  &:disabled {
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:active {
    outline: none;
  }
`

export type ButtonProps = {
    children: string | ReactNode,
    disabled?: boolean,
    onClick: () => void,
    isHidden?: boolean
}

const Button = ({
                    children,
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
            {children}
        </StyledButton>
    )
}

export default Button
