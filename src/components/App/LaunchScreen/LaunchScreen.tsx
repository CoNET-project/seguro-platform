import styled from 'styled-components'
import {LogoImage} from "../../UI/Logo/Logo";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.colors.primary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LaunchScreen = () => {
    return (
        <StyledContainer>
            <LogoImage logoColor='white'/>
        </StyledContainer>
    )
}

export default LaunchScreen
