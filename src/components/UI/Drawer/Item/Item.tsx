import {ReactNode} from 'react'
import styled from 'styled-components'

type ItemProps = {
    text: ReactNode | string,
    icon?: ReactNode
}

const StyledItem = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 20px;

  &:last-of-type {
    border: none;
  }
`

const StyledIcon = styled.div`
  margin-right: 20px;
  font-size: 20px;
  display: flex;
  align-items: center;
`

const StyledText = styled.p`
  font-size: 14px;
`

const Item = ({icon, text}: ItemProps) => {
    return (
        <StyledItem>
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