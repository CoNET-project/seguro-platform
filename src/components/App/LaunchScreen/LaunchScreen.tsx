import styled from 'styled-components'

const StyledContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledMessage = styled.div`
    font-size: 20px;
`

const LaunchScreen = () => {
    return (
        <StyledContainer>
            <StyledMessage>
                Seguro Platform is launching...
            </StyledMessage>
        </StyledContainer>
    )
}

export default LaunchScreen
