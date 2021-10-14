import styled from 'styled-components'
import {ReactNode} from "react";

export type StepButtonProps = {
    text: ReactNode | string,
    onClick: () => void,
    iconRight?: ReactNode,
    iconLeft?: ReactNode
}

type StyledButtonTextProps = {
    shiftLeft?: boolean,
    shiftRight?: boolean
}

const StyledButton = styled.button`
  min-height: 3.5rem;
  min-width: 8rem;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  background-color: transparent;
  padding: 0 15px 0 20px;
`

const StyledButtonText = styled.p<StyledButtonTextProps>`
  height: 100%;
  font-weight: 700;
  color: ${props => props.theme.ui.text.textPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledIcon = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: ${props => props.theme.ui.text.textPrimary}
`

const StepButton = ({text, onClick, iconLeft, iconRight}: StepButtonProps) => {
    if (iconLeft && iconRight) {
        throw new Error('You may not have both icon on left and right!')
    }
    return (
        <StyledButton onClick={onClick}>
            {
                iconLeft && (
                    <StyledIcon>
                        {iconLeft}
                    </StyledIcon>
                )
            }
            <StyledButtonText shiftLeft={!!iconLeft} shiftRight={!!iconRight}>
                {text}
            </StyledButtonText>
            {
                iconRight && (
                    <StyledIcon>
                        {iconRight}
                    </StyledIcon>
                )
            }
        </StyledButton>
    )
}

export default StepButton