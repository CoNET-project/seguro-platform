import styled from "styled-components"
import Header from "../../Header"
import React from 'react'

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`

const DisappearingMessages = () => {
    return (
        <StyledContainer>
            <Header/>
            <p>Disappearing Messages</p>
        </StyledContainer>
    )
}

export default DisappearingMessages