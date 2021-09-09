import React, {ReactNode, SyntheticEvent, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {PasscodeDot, Warning} from '../../../Icons/Icons';

type PasscodeInputProps = {
    value: string,
    setValue: (passcode: string) => void,
    nextStepHandler?: () => void,
    previousStepHandler?: () => void,
    error?: ReactNode | string
}

const StyledPasscode = styled.div`
  transform: translateY(16px);
`

const StyledPasscodeInput = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 36px;
  overflow: hidden;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 25px;
  border-radius: 5px;
  color: ${props => props.theme.ui.textColor};
  background-color: ${props => props.theme.ui.backgroundAccent};

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.5)
  }
`

const StyledPasscodeError = styled.div<{ show: boolean }>`
  height: 16px;
  min-height: 16px;
  width: 100%;
  content: '';
  margin-top: 10px;
  transition: opacity 100ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledPasscodeErrorText = styled.p`
  font-size: 14px;
  margin-left: 5px;
`

const PasscodeInput = ({value, setValue, nextStepHandler, previousStepHandler, error}: PasscodeInputProps) => {

    useEffect(() => {
        setTimeout(() => {
            inputRef?.current?.focus()
        }, 500)
    }, [])

    const inputRef = useRef<HTMLInputElement>(null)

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const keyUpHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        const key = event.key
        if (key == 'Enter' && nextStepHandler) {
            return nextStepHandler()
        }

        if (key == 'Escape' && previousStepHandler) {
            return previousStepHandler()
        }
    }

    return (
        <StyledPasscode>
            <StyledPasscodeInput type='password' onChange={inputChangeHandler} onKeyUp={keyUpHandler}
                                 defaultValue={value} ref={inputRef}/>
            <StyledPasscodeError show={!!error}>
                <Warning/>
                <StyledPasscodeErrorText>
                    {error}
                </StyledPasscodeErrorText>
            </StyledPasscodeError>
        </StyledPasscode>
    )
}

export default PasscodeInput