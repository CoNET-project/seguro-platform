import styled from 'styled-components';
import {ReactNode} from "react";

const StyledKey = styled.button`
  min-height: 4rem;
  min-width: 4rem;
  height: 4rem;
  width: 4rem;
  content: '';
  background-color: transparent;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  transition: background-color 50ms ease-in-out;
  &:active {
    background-color: rgba(0,0,0,0.05);
  }
`

const StyledKeyNumber = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 24px;
  color: ${props => props.theme.ui.keypadKey.numberColor};
  pointer-events: none;
`

const StyledKeyAlphabet = styled(StyledKeyNumber)`
  font-size: 12px;
  font-weight: normal;
  min-height: 12px;
  color: ${props => props.theme.ui.keypadKey.alphabetColor};
`

const StyledKeyText = styled(StyledKeyNumber)`
  font-size: 15px;
  color: ${props => props.theme.ui.keypadKey.basicColor}
`

export type KeyProps = {
    number?: string | number,
    alphabet?: string,
    component?: ReactNode,
    isDisabled?: boolean,
    onClick: () => void
}

const Key = (props: KeyProps) => {
    let keyContent = null
    if (props.component) {
        keyContent = <StyledKeyText>{props.component}</StyledKeyText>
    } else {
        keyContent = (
            <>
                <StyledKeyNumber>{props.number}</StyledKeyNumber>
                <StyledKeyAlphabet>{props.alphabet}</StyledKeyAlphabet>
            </>
        )
    }
    return (
        <StyledKey onClick={props.onClick} disabled={props.isDisabled || false}>
            {keyContent}
        </StyledKey>
    )
}

export default Key