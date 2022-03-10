import styled from 'styled-components'
import {LogoImage} from "../../UI/Logo/Logo";
import Loader from "react-loader-spinner";
import React from "react";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.colors.secondary};
  padding: 50px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LaunchScreen = () => {
    return (
        <StyledContainer>
            <LogoImage color='white'/>
            <Loader
                type="Oval"
                color="white"
                height={40}
                width={40}
            />
        </StyledContainer>
    )
}

export default LaunchScreen
