import React, {ReactNode, useEffect, useRef} from 'react';
import styled from 'styled-components';
import {Warning} from '../../Icons/Icons';

type InputProps = {
    value: string,
    setValue: (inputValue: string) => void,
    nextStepHandler?: () => void,
    previousStepHandler?: () => void,
    error?: ReactNode | string | boolean,
    inputOptions?: {
        inputLabel?: ReactNode | string,
        inputType?: 'password' | 'text',
        inputRightComponent?: ReactNode,
        placeholder?: string
    }
}

type StyledInputProps = {
    fontSize: 'sm' | 'lg',
    error?: boolean
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
  width: 100%;
  height: 4rem;
  font-size: ${props => props.fontSize === 'lg' ? props.theme.ui.fontSizes.narrow.lg : props.theme.ui.fontSizes.narrow.md};
  overflow: hidden;
  text-align: center;
  border: ${props => props.error ? '2px' : '1px'} solid ${props => props.error ? props.theme.ui.colors.dangerous : props.theme.ui.colors.border.light};
  padding: 10px 15px;
  border-radius: 5px;
  color: ${props => props.theme.ui.colors.text.primary};
  background-color: rgba(200, 200, 200, 0.1);
  margin: 20px 0;
  min-width: 300px;

  &:focus {
    outline: none;
    border: ${props => !props.error && '2px solid rgba(0, 0, 0, 0.5)'}
  }
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
                             error={!!error}
                             defaultValue={value} ref={inputRef}
                             fontSize={inputOptions?.inputType === 'password' ? 'lg' : 'sm'}
                             placeholder={inputOptions?.placeholder}/>
            </StyledInputWrapper>
            {
                error !== undefined && typeof error !== "boolean" && (
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
