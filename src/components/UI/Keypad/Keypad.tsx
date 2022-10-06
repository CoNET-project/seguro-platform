import styled from 'styled-components'
import Key from "./Key/Key"
import React from "react"
import {FiDelete} from "react-icons/fi"
import {screenWidth} from "../screenSizes"

export type KeypadProps = {
    numberKeyOnClick: (num: number) => void,
    deleteKeyOnClick: () => void,
    cancelKeyOnClick?: () => void,
    unlockKeyOnClick?: () => void
}

const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 4rem);
  grid-template-rows: repeat(4, 4rem);
  grid-row-gap: 5px;
  grid-column-gap: 20px;

  @media (${screenWidth.mediumWidth}) {
    grid-template-columns: repeat(3, 5rem);
    grid-template-rows: repeat(4, 5rem);
    grid-row-gap: 15px;
    grid-column-gap: 20px;
  }
`

const Keypad = ({numberKeyOnClick, deleteKeyOnClick, cancelKeyOnClick, unlockKeyOnClick}: KeypadProps) => {

    const generateKeys = () => {
        const alphabets = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
        const keys: [] = []
        let key
        for (let i = 1; i <= 12; i++) {
            if (i === 1) {
                key = <Key number={i} alphabet={''} onClick={() => numberKeyOnClick(i)}/>
            } else if (i <= 9) {
                key = <Key number={i} alphabet={alphabets.shift() || ''} onClick={() => numberKeyOnClick(i)}/>
            } else if (i == 11) {
                key = <Key number={0} alphabet='+' onClick={() => numberKeyOnClick(0)}/>
            } else if (i == 12) {
                key = <Key text={<FiDelete size={20}/>} onClick={deleteKeyOnClick}/>
            }
			// @ts-ignore: Unreachable code error
            keys.push(key)
            key = null
        }
        return keys
    }

    return (
        <StyledKeypad>
            {generateKeys().map((key, idx) => (
                <React.Fragment key={idx}>
                    {key ? key : (
                        <div/>
                    )}
                </React.Fragment>
            ))}
        </StyledKeypad>
    )
}

export default Keypad
