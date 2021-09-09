import {ReactNode} from 'react';
import styled from 'styled-components'

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.theme.ui.textColor};
  font-size: 18px;
  font-weight: 700;
  padding: 20px 15px;
  display: flex;
`

const StyledText = styled.span`
  margin: 0 5px;
`

const StyledIcon = styled.div`
  color: ${props => props.theme.ui.textColor} !important;
`

const StepButton = ({
                        text,
                        onClick,
                        iconLeft,
                        iconRight
                    }: { text: string | ReactNode, onClick?: () => void, iconLeft?: ReactNode, iconRight?: ReactNode }) => {
    return (
        <StyledButton onClick={onClick}>
            {iconLeft ? (
                <StyledIcon>
                    {iconLeft}
                </StyledIcon>
            ) : null}
            <StyledText>
                {text}
            </StyledText>
            {iconRight ? (
                <StyledIcon>
                    {iconRight}
                </StyledIcon>
            ) : null}
        </StyledButton>
    )
}

export default StepButton;