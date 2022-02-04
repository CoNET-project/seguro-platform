import styled from "styled-components";
import Header from "./Header";

const StyledSettings = styled.div`
  height: 100%;
  width: 100%;
`

const Settings = () => {
    return (
        <StyledSettings>
            <Header/>
        </StyledSettings>
    )
}

export default Settings