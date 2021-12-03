import {ReactNode} from 'react'
import styled from 'styled-components'

type ItemProps = {
    text: ReactNode | string,
    onClick?: () => void,
    icon?: ReactNode
}

const StyledItem = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  transition: background-color 100ms ease-in-out;

  &:last-of-type {
    border: none;
  }

  &:hover {
    background-color: ${props => props.theme.ui.colors.hover}
  }
`

const StyledIcon = styled.div`
  margin-right: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
`

const StyledText = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const Item = ({icon, text, onClick}: ItemProps) => {
    return (
        <StyledItem onClick={onClick}>
            {
                icon && (
                    <StyledIcon>{icon}</StyledIcon>
                )
            }
            <StyledText>{text}</StyledText>
        </StyledItem>
    )
}

export default Item
