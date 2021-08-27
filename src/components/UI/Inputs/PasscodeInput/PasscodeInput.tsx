import styled from 'styled-components';
import {RiErrorWarningFill} from "react-icons/all";

type PasscodeInputProps = {
    value: string,
    error?: boolean
}

const StyledPasscode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
`

const StyledInput = styled.input`
  color: ${props => props.theme.ui.passcodeInput.color};
  border: none;
  border-radius: 0;
  font-size: 24px;
  background-color: transparent;
  padding: 10px;
  width: 16rem;
  text-align: center;
  &:focus {
    outline: none;
  }
  &:disabled {
    border-bottom: 1px solid ${props => props.theme.ui.passcodeInput.border};
    color: ${props => props.theme.ui.passcodeInput.color};
    opacity: 1;
  }
`

const StyledErrorMessage = styled.p`
  color: ${props => props.theme.ui.passcodeInput.color};
  font-size: 14px;
  display: flex;
  align-items: center;
`

const PasscodeInput = (props: PasscodeInputProps) => {
    return (
        <StyledPasscode>
            <StyledInput type="password" value={props.value} disabled={true}/>
            {
                props.error ?
                    <StyledErrorMessage><RiErrorWarningFill style={{marginRight: '5px'}} size={20}/>Incorrect passcode, please try again!</StyledErrorMessage> :
                    null
            }
        </StyledPasscode>
    )
}

export default PasscodeInput