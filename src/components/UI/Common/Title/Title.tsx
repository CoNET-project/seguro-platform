import {ReactNode} from 'react'
import styled from 'styled-components'

const StyledTitleContainer = styled.h1`
  margin: 20px 0;
`

const Title = ({children}: { children: ReactNode | string }) => {
    return (
        <StyledTitleContainer>
            {children}
        </StyledTitleContainer>
    )
}
export default Title