import { ReactNode } from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.ui.textColor};
  font-size: 18px;
  font-weight: 700;
  padding: 20px 15px;
  display: flex;
  align-items: center;
`

const StyledText = styled.span`
  margin: 0 5px;
`

const StepButton = ({text, onClick, iconLeft, iconRight}: {text: string | ReactNode, onClick?: () => void, iconLeft?: ReactNode, iconRight?: ReactNode}) => {
    return (
        <StyledButton onClick={onClick}>
            {iconLeft || null}
            <StyledText>
                {text}
            </StyledText>
            {iconRight || null}
        </StyledButton>
    )
}

export default StepButton;