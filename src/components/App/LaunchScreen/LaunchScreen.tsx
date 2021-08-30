import styled from 'styled-components'
import SeguroSplash from '../../../assets/seguro-logo.svg'
import useAppState from "../../../store/appState/useAppState";

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.ui.backgroundColor};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const StyledImage = styled.img`
  width: 40%;
  height: 40%;
`

const LaunchScreen = () => {
    return (
        <StyledContainer>
            <StyledImage src={SeguroSplash}/>
        </StyledContainer>
    )
}

export default LaunchScreen
