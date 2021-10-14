import React, {ReactNode, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Warning} from '../../Icons/Icons';

type InputProps = {
    value: string,
    setValue: (inputValue: string) => void,
    nextStepHandler?: () => void,
    previousStepHandler?: () => void,
    error?: ReactNode | string,
    inputOptions?: {
        inputLabel?: ReactNode | string,
        inputType?: 'password' | 'text',
        inputRightComponent?: ReactNode,
        placeholder?: string
    }
}

type StyledInputProps = {
    fontSize: 'sm' | 'lg'
}

type StyledInputContainerProps = {
    shiftContainer: boolean
}

const StyledInputContainer = styled.div`
  min-width: 100%;
`

const StyledInputWrapper = styled.div`
  position: relative;
`


const StyledInput = styled.input<StyledInputProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  width: 100%;
  height: 4rem;
  font-size: ${props => props.fontSize === 'lg' ? '48px' : '20px'};
  overflow: hidden;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 50px;
  border-radius: 5px;
  color: ${props => props.theme.ui.text.textPrimary};
  background-color: rgba(200, 200, 200, 0.1);
  margin: 20px 0;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.5)
  }
`

const StyledInputRightComponent = styled.span`
  position: absolute;
  top: 0;
  right: 20px;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledInputLabel = styled.label`
  display: inline-block;
`

const StyledInputError = styled.div<{ show: boolean }>`
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

const StyledInputErrorText = styled.p`
  margin-left: 5px;
`

const Input = ({value, setValue, nextStepHandler, previousStepHandler, error, inputOptions}: InputProps) => {

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
        <StyledInputContainer>
            {
                inputOptions?.inputLabel && (
                    <StyledInputLabel>{inputOptions?.inputLabel}</StyledInputLabel>
                )
            }
            <StyledInputWrapper>
                <StyledInput type={inputOptions?.inputType || 'text'} onChange={inputChangeHandler}
                             onKeyUp={keyUpHandler}
                             defaultValue={value} ref={inputRef}
                             fontSize={inputOptions?.inputType === 'password' ? 'lg' : 'sm'}
                             placeholder={inputOptions?.placeholder}/>
                {inputOptions?.inputRightComponent && (
                    <StyledInputRightComponent>
                        {inputOptions?.inputRightComponent}
                    </StyledInputRightComponent>
                )}
            </StyledInputWrapper>
            {
                error !== undefined && (
                    <StyledInputError show={!!error}>
                        <Warning/>
                        <StyledInputErrorText>
                            {error}
                        </StyledInputErrorText>
                    </StyledInputError>
                )
            }
        </StyledInputContainer>
    )
}

export default Input