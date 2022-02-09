import styled from "styled-components";
import Header from "../Header";

const StyledChats = styled.div`
  height: 100%;
  width: 100%;
`

const Chats = () => {
    return (
        <StyledChats>
            <Header/>
        </StyledChats>
    )
}

export default Chats