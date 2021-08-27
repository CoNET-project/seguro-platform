import styled from 'styled-components';
import {ReactNode} from "react";

const StyledKey = styled.button`
  width: 5rem;
  height: 5rem;
  content: '';
  background-color: transparent;
  border-radius: 50%;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const StyledKeyNumber = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 24px;
`

const StyledKeyAlphabet = styled(StyledKeyNumber)`
  font-size: 12px;
  font-weight: normal;
  color: rgba(0,0,0,0.5);
  min-height: 12px;
`

const StyledKeyText = styled(StyledKeyNumber)`
  font-size: 16px
`

export type KeyProps = {
    number?: string | number,
    alphabet?: string,
    component?: ReactNode,
    text?: string,
    isDisabled?: boolean,
    onClick: () => void
}

const Key = (props: KeyProps) => {
    let keyContent = null
    if (props.component) {
        keyContent = props.component
    } else if (props.text) {
        keyContent = <StyledKeyText>{props.text}</StyledKeyText>
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