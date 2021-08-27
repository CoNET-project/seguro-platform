import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getBridgeService } from '../../../services/bridgeService/bridgeService'
import Keypad from "../../UI/Keypad/Keypad/Keypad";
import PasscodeInput from "../../UI/Inputs/PasscodeInput/PasscodeInput";
import {IoMdLock} from "react-icons/all";
import Icon from "../../UI/Inputs/Icon/Icon";
import {FormattedMessage} from "react-intl";

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.ui.backgroundColor};
`

const StyledContent = styled.div`
    max-width: 30rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const StyledTitle = styled.p`
    margin: 40px 0 20px 0;
    font-size: 16px;
    color: ${props => props.theme.ui.textColor}
`

const UnlockScreen = () => {

    const [passcode, setPasscode] = useState("")

    const keypadClickHandlers = {
        numberKeyOnClick: (num: number) => {
            setPasscode(passcode + num.toString() )
        },
        deleteKeyOnClick: () => {
            console.log(passcode)
            setPasscode(passcode.slice(0, passcode.length - 1))
        },
        cancelKeyOnClick: () => {
            setPasscode('')
        },
        unlockKeyOnClick: () => {
            // Unlock
        }
    }

    return (
        <StyledContainer>
            <StyledContent>
                <Icon component={<IoMdLock size={46}/>}/>
                <StyledTitle><FormattedMessage id="unlock.title" /></StyledTitle>
                <PasscodeInput value={passcode}/>
                <Keypad clickActionHandlers={keypadClickHandlers}/>
            </StyledContent>
        </StyledContainer>
    )
}

export default UnlockScreen
