import styled from "styled-components";
import Header from "../Header";
import Input from "../../../../../../UI/Inputs/Input/Input";
import {useIntl} from "react-intl";
import Textarea from "../../../../../../UI/Inputs/Textarea/TextArea";

const StyledAddContact = styled.div`
  width: 100%;
  height: 100%;
  content: ''
`

const StyledAddContactContent = styled.div`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
`

const StyledAddContactDesc = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  margin-bottom: 20px;
`

const AddContact = () => {
    const intl = useIntl()
    return (
        <StyledAddContact>
            <Header/>
            <StyledAddContactContent>
                <StyledAddContactDesc>
                    You can add a contact by typing in their Key ID below. Optionally, you may input a custom greeting
                    message that will be sent along with your contact request.
                </StyledAddContactDesc>
                <Input id="keyId" labelText="Contact Key ID"/>
                <Textarea id="greetingMessage" labelText="Greeting Message (Optional)"/>
            </StyledAddContactContent>
        </StyledAddContact>
    )
}

export default AddContact