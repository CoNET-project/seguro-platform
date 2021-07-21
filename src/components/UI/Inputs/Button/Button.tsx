import { ReactNode } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    font-size: 48px;
    border-radius: 20px;
    border: 2px #aaa solid;
    padding: 5px 15px;
`

export type ButtonProps = {
    children: ReactNode,
    onClick: () => void
}

const Button = ({
    children,
    onClick
}: ButtonProps) => {
    return (
        <StyledButton
            onClick={onClick}
        >
            {children}
        </StyledButton>
    )
}

export default Button
