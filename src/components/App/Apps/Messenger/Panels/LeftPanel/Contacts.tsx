import styled from "styled-components";
import Header from "./Header";

const StyledContacts = styled.div`
  height: 100%;
  width: 100%;
`

const Contacts = () => {
    return (
        <StyledContacts>
            <Header/>
        </StyledContacts>
    )
}

export default Contacts