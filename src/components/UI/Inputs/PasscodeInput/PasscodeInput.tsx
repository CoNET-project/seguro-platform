import styled from 'styled-components';
import {RiErrorWarningFill} from "react-icons/all";
import {FormattedMessage} from "react-intl";

export type PasscodeInputProps = {
    value: string,
    error?: boolean,
    confirmError?: boolean,
    lengthError?: boolean
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
  font-size: 16px;
  display: flex;
  align-items: center;
  transition: opacity 100ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  margin-top: 10px;
`

const PasscodeInput = (props: PasscodeInputProps) => {
    return (
        <StyledPasscode>
            <StyledInput type="password" value={props.value} disabled={true}/>
            <StyledErrorMessage show={props.error || props.confirmError || props.lengthError}><RiErrorWarningFill
                style={{marginRight: '5px'}}
                size={16}/>
                {props.lengthError ? <FormattedMessage id="passcodeInput.invalidLength"/> : null}
                {props.confirmError ? <FormattedMessage id="passcodeInput.confirm.error"/> : null}
                {props.error ? <FormattedMessage id="passcodeInput.incorrect.error"/> : null}
            </StyledErrorMessage>
        </StyledPasscode>
    )
}

export default PasscodeInput