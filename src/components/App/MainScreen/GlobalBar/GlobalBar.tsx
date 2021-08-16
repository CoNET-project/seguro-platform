import styled from 'styled-components'

const StyledContainer = styled.div`
    height: 60px;
    background-color: ${props => props.theme.globalBar.backgroundColor};
    color: ${props => props.theme.globalBar.color};
`

const GlobalBar = () => {
    return (
        <StyledContainer>
            GlobalBar
        </StyledContainer>
    )
}

export default GlobalBar
