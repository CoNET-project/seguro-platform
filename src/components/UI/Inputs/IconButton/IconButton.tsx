import { ReactNode } from 'react'
import styled from 'styled-components'

type Size = 'sm' | 'md' | 'lg'

const StyledButton = styled.button<{
    size: Size,
    isInverted: boolean
}>`
    transition: transform 200ms ease, border-color 200ms ease;
    
    background-color: transparent;
    color: ${props => props.isInverted ? props.theme.ui.iconButton.invertedColor : props.theme.ui.iconButton.color};
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 3px solid transparent;
    border-radius: 5px;
    
    ${(props) => {
        switch (props.size) {
            case 'sm':
                return 'width: 36px; height: 36px'
            case 'md':
                return 'width: 46px; height: 46px'
            case 'lg':
                return 'width: 56px; height: 56px'
        }
    }};
    
    font-size: ${props => {
        switch (props.size) {
            case 'sm':
                return '20px'
            case 'md':
                return '26px'
            case 'lg':
                return '32px'
        }
    }};
    
    &:disabled {
        opacity: .5;
    }
    
    &:not(:disabled) {
        
        &:hover {
            cursor: pointer;
            transform: scale(1.05);
        }
        
        &:active {
            transform: scale(.95);
        }
        
        &:focus-visible {
            outline: none;
            border-color: ${props => props.theme.ui.outline.color};
        }
    }
`

export type IconButtonProps = {
    label: string,
    children: ReactNode,
    onClick: () => void,
    size?: Size,
    isDisabled?: boolean,
    isInverted?: boolean
}

const IconButton = ({
    label,
    size = 'md',
    children,
    onClick,
    isDisabled = false,
    isInverted = false
}: IconButtonProps) => {
    return (
        <StyledButton
            aria-label={label}
            size={size}
            onClick={onClick}
            disabled={isDisabled}
            isInverted={isInverted}
        >
            {children}
        </StyledButton>
    )
}

export default IconButton
