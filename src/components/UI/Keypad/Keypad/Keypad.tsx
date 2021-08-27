import Key from '../Key/Key'
import styled from 'styled-components';
import { ReactNode, Fragment } from "react";
import {FiDelete} from "react-icons/all";
import {FormattedMessage} from "react-intl";

type KeypadClickHandlers = {
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
  grid-template-columns: repeat(3, 5rem);
  grid-template-rows: repeat(4, 5rem);
  grid-gap: 20px;
`

const alphanumericKeys = ({cancelKeyOnClick, deleteKeyOnClick, numberKeyOnClick, unlockKeyOnClick}: KeypadClickHandlers): Array<ReactNode> => {
    const alphanumericKeys: Array<ReactNode> = [];
    const alphabets = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

    for(let i = 1; i <= 15; i++) {

        let key = null

        switch (true) {
            case i === 1:
                key = <Key onClick={() => numberKeyOnClick(i)} number={i}/>
                break;
            case i === 10 || i === 14:
                break;
            case i === 11:
                key = <Key onClick={() => numberKeyOnClick(0)} number={0} alphabet="+"/>
                break;
            case i === 12:
                key = <Key onClick={() => deleteKeyOnClick()} component={<FiDelete size={24}/>}/>
                break;
            case i === 13:
                if (cancelKeyOnClick) {
                    key = <Key onClick={() => cancelKeyOnClick()} component={<FormattedMessage id="keypad.cancel"/>}/>
                }
                break;
            case i === 15:
                if (unlockKeyOnClick) {
                    key = <Key onClick={() => unlockKeyOnClick()} component={<FormattedMessage id="keypad.unlock"/>}/>
                }
                break;
            default:
                key = <Key onClick={() => numberKeyOnClick(i)} number={i} alphabet={alphabets.shift()}/>
                break;
        }

        alphanumericKeys.push(
            key
        )
    }
    return alphanumericKeys
}



const Keypad = (props: KeypadProps) => {
    return (
        <StyledKeypad>
            {alphanumericKeys(props.clickActionHandlers).map((key, idx) => key === null ?
                <Fragment key={idx}><Key onClick={() => {}} isDisabled={true}/></Fragment> :
                <Fragment key={idx}>{key}</Fragment>)}
        </StyledKeypad>
    )
}

export default Keypad;