import Key from '../Key/Key'
import styled from 'styled-components';
import { ReactNode, Fragment } from "react";
import {FiDelete} from "react-icons/all";
import {FormattedMessage} from "react-intl";

export type KeypadClickHandlers = {
    numberKeyOnClick: (num: number) => void,
    deleteKeyOnClick: () => void,
    cancelKeyOnClick?: () => void,
    unlockKeyOnClick?: () => void
}

type KeypadProps = {
    clickActionHandlers: KeypadClickHandlers
}

const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(4, 4rem);
  grid-gap: 30px
`

const alphanumericKeys = ({cancelKeyOnClick, deleteKeyOnClick, numberKeyOnClick, unlockKeyOnClick}: KeypadClickHandlers): Array<ReactNode> => {
    console.log(cancelKeyOnClick, deleteKeyOnClick, numberKeyOnClick, unlockKeyOnClick)
    const alphanumericKeys: Array<ReactNode> = [];
    const alphabets = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

    for(let i = 0; i <= 14; i++) {

        let key = null

        switch (true) {
            case i === 0:
                key = <Key onClick={() => numberKeyOnClick(i)} number={i}/>
                alphanumericKeys.push(
                    key
                )
                break;
            case i === 9:
                alphanumericKeys.push(
                    key
                )
                break;
            case i === 10:
                key = <Key onClick={() => numberKeyOnClick(0)} number={0} alphabet="+"/>
                alphanumericKeys.push(
                    key
                )
                break;
            case i === 11:
                key = <Key onClick={() => deleteKeyOnClick()} component={<FiDelete size={24}/>}/>
                alphanumericKeys.push(
                    key
                )
                break;
            case i === 12:
                if (cancelKeyOnClick) {
                    key = <Key onClick={() => cancelKeyOnClick()} component={<FormattedMessage id="keypad.cancel"/>}/>
                    alphanumericKeys.push(
                        key
                    )
                }
                if (!cancelKeyOnClick && unlockKeyOnClick) {
                    alphanumericKeys.push(
                        key
                    )
                }
                break;
            case i === 13:
                if (cancelKeyOnClick || unlockKeyOnClick) {
                    alphanumericKeys.push(
                        key
                    )
                }
                break;
            case i === 14:
                if (unlockKeyOnClick) {
                    key = <Key onClick={() => unlockKeyOnClick()} component={<FormattedMessage id="keypad.unlock"/>}/>
                    alphanumericKeys.push(
                        key
                    )
                }
                break;
            default:
                key = <Key onClick={() => numberKeyOnClick(i)} number={i} alphabet={alphabets.shift()}/>
                alphanumericKeys.push(
                    key
                )
                break;
        }
    }
    return alphanumericKeys
}



const Keypad = (props: KeypadProps) => {
    console.log(alphanumericKeys(props.clickActionHandlers))
    return (
        <StyledKeypad>
            {alphanumericKeys(props.clickActionHandlers).map((key, idx) => key === null ?
                <Fragment key={idx}><Key onClick={() => {}} isDisabled={true}/></Fragment> :
                <Fragment key={idx}>{key}</Fragment>)}
        </StyledKeypad>
    )
}

export default Keypad;