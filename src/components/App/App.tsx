import styled from 'styled-components'
import useUI from '../../store/ui/useUI'

const StyledContainer = styled.div`
    font-size: 24px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: white;
    color: black;
`

const App = () => {
    const ui = useUI()

    return (
        <StyledContainer>
            <div>
                Seguro Platform
            </div>
        </StyledContainer>
    )
}

export default App
