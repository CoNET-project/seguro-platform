import { ReactNode } from 'react'
import styled from 'styled-components'

type StyledSectionProps = {
    flex: number
}

type PageProps = {
    upperSection?: ReactNode,
    middleSection?: ReactNode,
    lowerSection?: ReactNode
}

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`

const StyledSection = styled.div<StyledSectionProps>`
  flex: ${props => props.flex || 1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`



const Page = (props: PageProps) => {
    return (
        <StyledContainer>
            <StyledSection flex={0.3}>
                {props.upperSection}
            </StyledSection>
            <StyledSection flex={1}>
                {props.middleSection}
            </StyledSection>
            <StyledSection flex={0.3}>
                {props.lowerSection}
            </StyledSection>
        </StyledContainer>
    )
}

export default Page