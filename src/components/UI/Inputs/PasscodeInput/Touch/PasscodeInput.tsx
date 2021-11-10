import {ReactNode} from 'react';
import styled from 'styled-components';
import {PasscodeDot, Warning} from '../../../Icons/Icons';

export type PasscodeInputProps = {
    value: string,
    error?: ReactNode | string
}

const StyledPasscodeInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100%;
  
`

const StyledPasscodeInputDot = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledPasscodePlaceholderDots = styled(StyledPasscodeInputDot)`
  color: ${props => props.theme.ui.input.placeholderColor} !important;
`

const StyledPasscodeText = styled.p`
  height: 100%;
  letter-spacing: 2px;
  display: flex;
  align-items: center;
`

const StyledPasscodeError = styled.div<{ show: boolean }>`
  height: 100%;
  min-width: 100%;
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
  margin-left: 5px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const PasscodeInput = ({value, error}: PasscodeInputProps) => {
    console.log(value)
    const getPasscodeDots = (value: string): Array<ReactNode> => {
        const elements: Array<ReactNode> = []
        if (value.length > 8) {
            value.slice(0, 8).split('').map((_, idx) => {
                elements.push(<PasscodeDot size='md' key={idx}/>)
            })
            const extra = value.slice(8).length
            if (extra) {
                elements.push(<StyledPasscodeText key={'extra'}>+{extra}</StyledPasscodeText>)
            }
            return elements;
        }
        value.split('').map((_, idx) => {
            elements.push(<PasscodeDot size='md' key={idx}/>)
        })
        return elements
    }
    return (
        <StyledPasscodeInput>
            <>
                {
                    value && (
                        <StyledPasscodeInputDot>
                            {getPasscodeDots(value)}
                        </StyledPasscodeInputDot>
                    )
                }
                {
                    !value && (
                        <StyledPasscodePlaceholderDots>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, idx) =>
                                <PasscodeDot size='md'
                                             key={idx}
                                             isPlaceholder={true}/>)}
                        </StyledPasscodePlaceholderDots>
                    )
                }
            </>
            <StyledPasscodeError show={!!error}>
                <Warning/>
                <StyledPasscodeErrorText>
                    {error}
                </StyledPasscodeErrorText>
            </StyledPasscodeError>
        </StyledPasscodeInput>
    )
}

export default PasscodeInput