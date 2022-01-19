import {useState} from 'react'
import styled from 'styled-components'
import Keypad from '../../UI/Keypad/Keypad'
import PasscodeInput from "../../UI/Inputs/PasscodeInput/Touch/PasscodeInput";
import {IoMdLock} from "react-icons/all";
import Icon from "../../UI/Inputs/Icon/Icon";
import {FormattedMessage} from "react-intl";
import {unlockPasscode} from "../../../services/workerService/workerService";
import Button from "../../UI/Common/Button/Button";
import useAppState from "../../../store/appState/useAppState";
import VerificationModal from './Verification/Modal';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.ui.colors.background.foundation};
`

const StyledContent = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledTitle = styled.p`
  margin: 40px 0 20px 0;
  color: ${props => props.theme.ui.colors.text.primary}
`

const StyledUnlockButton = styled(Button)`
  margin-top: 40px;
`

const UnlockScreen = () => {

    const {setIsUnlocked} = useAppState()
    const [passcode, setPasscode] = useState("")
    const [isIncorrect, setIsIncorrect] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)
    const [needVerification, setNeedVerification] = useState(false)

    const clearError = () => {
        setIsIncorrect(false)
        setIsInvalid(false)
    }

    const keypadClickHandlers = {
        numberKeyOnClick: (num: number) => {
            clearError()
            setPasscode(passcode + num.toString())
        },
        deleteKeyOnClick: () => {
            clearError()
            setPasscode(passcode.slice(0, passcode.length - 1))
        },
        cancelKeyOnClick: () => {
            clearError()
            setPasscode('')
        },
    }

    const unlockClickHandler = () => {
        if (passcode.length < 6) {
            return setIsInvalid(true)
        }
        unlockPasscode({
            passcode, progress: (progress) => {
            }
        }).then(status => {
            if (status === 'SUCCESS') {
                // if (checkIsVerified()) {
                //     return setIsUnlocked(true)
                // }
                return setNeedVerification(true)
            } else if (status === 'FAILURE') {
                setIsIncorrect(true)
            }
        })
    }

    return (
        <StyledContainer>
            <StyledContent>
                <Icon component={<IoMdLock size={46}/>}/>
                <StyledTitle><FormattedMessage id="unlock.title"/></StyledTitle>
                <PasscodeInput value={passcode}/>
                <Keypad {...keypadClickHandlers}/>
                <StyledUnlockButton onClick={unlockClickHandler}>
                    <FormattedMessage id='button.unlock'/>
                </StyledUnlockButton>
            </StyledContent>
            {
                needVerification && <VerificationModal/>
            }
        </StyledContainer>
    )
}

export default UnlockScreen
