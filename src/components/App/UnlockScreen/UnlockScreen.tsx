import React, {useState, ReactNode} from 'react'
import styled from 'styled-components'
import Keypad from '../../UI/Keypad/Keypad'
import PasscodeInput from "../../UI/Inputs/PasscodeInput/Touch/PasscodeInput"
import {IoMdLock} from "react-icons/io"
import {FormattedMessage, useIntl} from "react-intl"
import {deletePasscode, unlockPasscode} from "../../../services/workerService/workerService"
import Button from "../../UI/Common/Button/Button"
import useAppState from "../../../store/appState/useAppState"
import {Warning} from "../../UI/Icons/Icons"
import AlertDialog, {AlertDialogActions} from "../../UI/Common/AlertDialog/AlertDialog"
import LargeInput from "../../UI/Inputs/LargeInput/LargeInput"

const StyledContainer = styled.div`
	height: 70%;
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
	
	const [error, setError] = useState<ReactNode | null>(null)
    const {setIsUnlocked, isTouchDevice} = useAppState()
    const [passcode, setPasscode] = useState("")
	const [locale, setLocale]= useState("")
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const clearError = () => {
		setError (null)
    }

    const intl = useIntl()

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
            return setError(intl.formatMessage({id: 'passcodeInput.invalidLength'}))
        }
		// setError (null)
        unlockPasscode({
            passcode, locale, progress: (progress) => {
				//	get process 
            }
        }).then( status => {
            if (status === 'SUCCESS') {
                
                return setIsUnlocked(true)
                
            } 
			setPasscode('')
			setError (intl.formatMessage({id: 'platform.unlock.button.forgot'}))
            
        })
    }

    const deleteConfirmationActions: AlertDialogActions = {
        cancel: {
            action: () => setShowDeleteModal(false),
            text: intl.formatMessage({id: 'platform.dialog.delete.button.cancel'}) 
        },
        confirm: {
            action: () => {
                deletePasscode().then(() => {
                    if (typeof window !== undefined) {
                        window.location.reload()
                    }
                })
            },
            text: intl.formatMessage({id: 'platform.dialog.delete.button.confirm'}),
            isDangerous: true
        }
    }

    return (
        <StyledContainer>
            <StyledContent>
                <StyledIcon><IoMdLock size={46}/></StyledIcon>
                <StyledTitle>{intl.formatMessage({id: 'unlock.title'})}</StyledTitle>
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
                                            }}
											nextStepHandler = {unlockClickHandler}
                                            setValue={(val) => {
                                                setPasscode(val)
                                            }}
											error={error}
								/>
                            </StyledFlexContainer>
                        )
                    )
                }
                <StyledUnlockButton onClick={unlockClickHandler}>
                    {intl.formatMessage({id: 'button.unlock'})}
                </StyledUnlockButton>
                <StyledForgotText onClick={() => setShowDeleteModal(true)}>
                {intl.formatMessage({id: 'platform.unlock.button.forgot'})}
                </StyledForgotText>
            </StyledContent>
            {
                showDeleteModal && (
                    <AlertDialog message={intl.formatMessage({id: 'platform.dialog.delete.message'})}
						icon={<Warning color="black"/>}
						dialogActions={deleteConfirmationActions}/>
				)
            }
        </StyledContainer>
    )
}

export default UnlockScreen
