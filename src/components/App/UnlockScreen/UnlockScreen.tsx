import {useState} from 'react'
import styled from 'styled-components'
import Keypad from '../../UI/Keypad/Keypad'
import PasscodeInput from "../../UI/Inputs/PasscodeInput/Touch/PasscodeInput"
import {IoMdLock} from "react-icons/io"
import {FormattedMessage} from "react-intl"
import {checkIsVerified, deletePasscode, unlockPasscode} from "../../../services/workerService/workerService"
import Button from "../../UI/Common/Button/Button"
import useAppState from "../../../store/appState/useAppState"
import VerificationModal from './Verification/Modal'
import {Warning} from "../../UI/Icons/Icons"
import AlertDialog, {AlertDialogActions} from "../../UI/Common/AlertDialog/AlertDialog"
import LargeInput from "../../UI/Inputs/LargeInput/LargeInput"
import React from 'react'

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.ui.colors.background.foundation};
`

const StyledIcon = styled.div`
  color: ${props => props.theme.ui.colors.text.primary};
`

const StyledContent = styled.div`
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledFlexContainer = styled.div`
  flex: 1;
`

const StyledTitle = styled.p`
  margin: 40px 0 20px 0;
  color: ${props => props.theme.ui.colors.text.primary};
`

const StyledForgotText = styled.a`
  margin-top: 20px;
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} - 1px);
  color: ${props => props.theme.ui.colors.primary};
  text-decoration: underline;
  cursor: pointer;
`

const StyledUnlockButton = styled(Button)`
  margin-top: 40px;
`

const UnlockScreen = () => {

    const {setIsUnlocked, isTouchDevice} = useAppState()
    const [passcode, setPasscode] = useState("")
    const [isIncorrect, setIsIncorrect] = useState(false)
    const [isInvalid, setIsInvalid] = useState(false)
    const [needVerification, setNeedVerification] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)

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
                if (checkIsVerified()) {
                    return setIsUnlocked(true)
                }
                return setNeedVerification(true)
            } else if (status === 'FAILURE') {
                setIsIncorrect(true)
                setPasscode('')
            }
        })
    }

    const deleteConfirmationActions: AlertDialogActions = {
        cancel: {
            action: () => setShowDeleteModal(false),
            text: <FormattedMessage id='platform.dialog.delete.button.cancel'/>
        },
        confirm: {
            action: () => {
                deletePasscode().then(() => {
                    if (typeof window !== undefined) {
                        window.location.reload()
                    }
                })
            },
            text: <FormattedMessage id='platform.dialog.delete.button.confirm'/>,
            isDangerous: true
        }
    }

    return (
        <StyledContainer>
            <StyledContent>
                <StyledIcon><IoMdLock size={46}/></StyledIcon>
                <StyledTitle><FormattedMessage id="unlock.title"/></StyledTitle>
                {
                    isTouchDevice ? (
                        <>
                            <PasscodeInput value={passcode}/>
                            <Keypad {...keypadClickHandlers}/>
                        </>
                    ) : (
                        (
                            <StyledFlexContainer>
                                <LargeInput value={passcode}
                                            inputOptions={{
                                                inputType: 'password'
                                            }
                                            }
                                            setValue={(val) => {
                                                setPasscode(val)
                                            }}/>
                            </StyledFlexContainer>
                        )
                    )
                }
                <StyledUnlockButton onClick={unlockClickHandler}>
                    <FormattedMessage id='button.unlock'/>
                </StyledUnlockButton>
                <StyledForgotText onClick={() => setShowDeleteModal(true)}>
                    <FormattedMessage id='platform.unlock.button.forgot'/>
                </StyledForgotText>
            </StyledContent>
            {
                showDeleteModal && (
                    <AlertDialog message={<FormattedMessage id='platform.dialog.delete.message'/>}
                                 icon={<Warning color="black"/>}
                                 dialogActions={deleteConfirmationActions}/>
                )
            }
            {
                needVerification && <VerificationModal/>
            }
        </StyledContainer>
    )
}

export default UnlockScreen
