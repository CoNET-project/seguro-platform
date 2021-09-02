import styled from 'styled-components';
import {RiErrorWarningFill} from "react-icons/all";
import {FormattedMessage} from "react-intl";

type PasscodeInputProps = {
    value: string,
    error?: boolean,
    invalid?: boolean
}

const StyledPasscode = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

type StyledErrorMessageProps = {
    show?: boolean
}

const StyledErrorMessage = styled.p<StyledErrorMessageProps>`
  color: ${props => props.theme.ui.passcodeInput.color};
  font-size: 14px;
  display: flex;
  align-items: center;
  transition: opacity 100ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
`

const PasscodeInput = (props: PasscodeInputProps) => {
    return (
        <StyledPasscode>
            <StyledInput type="password" value={props.value} disabled={true}/>
            <StyledErrorMessage show={props.error || props.invalid}><RiErrorWarningFill style={{marginRight: '5px'}} size={16}/>
                {props.invalid ? <FormattedMessage id="unlock.invalid"/> : null}
                {props.error ? <FormattedMessage id="unlock.error"/> : null}
            </StyledErrorMessage>
        </StyledPasscode>
    )
}

export default PasscodeInput