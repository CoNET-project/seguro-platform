import Key, {KeyProps} from '../Key/Key'
import styled from 'styled-components';
import {ReactNode} from "react";
import {FiDelete} from "react-icons/all";

type KeypadClickHandlers = {
    numberKeyOnClick: (num: number) => void,
    deleteKeyOnClick: () => void,
    cancelKeyOnClick: () => void,
    unlockKeyOnClick: () => void
}

const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 5rem);
  grid-template-rows: repeat(4, 5rem);
  grid-gap: 10px;
  width: 100%;
  height: 100%;
`

const alphanumericKeys = (keypadClickHandlers: KeypadClickHandlers): Array<ReactNode> => {
    const alphanumericKeys: Array<ReactNode> = [];
    const alphabets = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']

    const numberKeyOnClick = (number: number) => {
        return keypadClickHandlers.numberKeyOnClick(number)
    }

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
                key = <Key onClick={() => keypadClickHandlers.deleteKeyOnClick} component={<FiDelete size={24}/>}/>
                break;
            case i === 13:
                key = <Key onClick={() => keypadClickHandlers.cancelKeyOnClick} text="Cancel"/>
                break;
            case i === 15:
                key = <Key onClick={() => keypadClickHandlers.unlockKeyOnClick} text="Unlock"/>
                break;
            default:
                key = <Key onClick={() => numberKeyOnClick(i)} number={i} alphabet={alphabets.shift()}/>
                break;
        }


        alphanumericKeys.push(
            key
        )

        // if (i === 1) {
        //     key = <Key number={i} onClick={() => numberKeyOnClick(i)}/>
        // } else {
        //     key = <Key number={i} alphabet={alphabets.shift()} onClick={() => numberKeyOnClick(i)}/>
        // }
    }

    // alphanumericKeys.push(<Key onClick={() => numberKeyOnClick(0)} number={0} alphabet="+"/>)
    // alphanumericKeys.push(<Key onClick={keypadClickHandlers.deleteKeyOnClick} component={<FiDelete size={24}/>}/>)
    //
    // alphanumericKeys.push(<Key onClick={keypadClickHandlers.cancelKeyOnClick} text="Cancel"/>)

    return alphanumericKeys
}

const Keypad = () => {

    const keypadClickHandlers: KeypadClickHandlers = {
        numberKeyOnClick: () => {},
        deleteKeyOnClick: () => {},
        cancelKeyOnClick: () => {},
        unlockKeyOnClick: () => {}
    }
    return (
        <StyledKeypad>
            {alphanumericKeys(keypadClickHandlers).map(key => key === null ? <Key onClick={() => {}} isDisabled={true}/> : key)}
        </StyledKeypad>
    )
}

export default Keypad;