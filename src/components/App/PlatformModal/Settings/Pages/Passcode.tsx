import styled from "styled-components"
import Keypad from "../../../../UI/Keypad/Keypad"
import PasscodeInput from "../../../../UI/Inputs/PasscodeInput/Touch/PasscodeInput"
import React, {ReactNode, useState} from "react"
import {screenWidth} from "../../../../UI/screenSizes"
import StepButtons, {StepButtonsClickActions} from "../../../../UI/StepButtons/StepButtons"
import {usePageNavigator} from "../../../../../contexts/pageNavigator/PageNavigatorContext"
import {pageNavigator} from "../../../../../contexts/pageNavigator/pageNavigatorActions"
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants"
import MotionWrapper from "../../../../UI/Motion/MotionWrapper"
import {FormattedMessage} from "react-intl"
import {toast} from "../../../../UI/Toaster/Toaster"
import {Password} from "../../../../UI/Icons/Icons"

const StyledPasscode = styled.div`
  min-height: 30rem;
  height: 100%;
  padding: 20px 0;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  display: flex;
  flex-direction: column;
  align-items: center;


  @media (${screenWidth.mediumWidth}) {
    margin: 0;
    padding: 40px 20px;
  }
`

const StyledPasscodeContent = styled.div``

const StyledPasscodeInputWrapper = styled.div`
  padding: 50px 0 30px 0;
`

const StyledPasscodeTitle = styled.h2`
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.ui.colors.text.primary}
`

type PasscodeProps = {
    custom: number
}

const Passcode = ({custom}: PasscodeProps) => {
    const {dispatch} = usePageNavigator()
    const [newPasscode, setNewPasscode] = useState<[string, string]>(['', ''])
    const [currentStep, setCurrentStep] = useState<'passcode' | 'confirm'>('passcode')
    const [inputError, setInputError] = useState<ReactNode | string>('')

    const onKeypadClick = (val: number) => {
        setInputError('')
        if (currentStep === 'passcode') {
            return setNewPasscode([
                newPasscode[0] + `${val}`,
                ''
            ])
        }
        return setNewPasscode([
            newPasscode[0],
            newPasscode[1] + `${val}`
        ])
    }

    const onKeypadDeleteClick = () => {
        setInputError('')
        if (currentStep === 'passcode') {
            return setNewPasscode([
                newPasscode[0].slice(0, -1),
                newPasscode[1]
            ])
        }
        return setNewPasscode([
            newPasscode[0],
            newPasscode[1].slice(0, -1)
        ])
    }

    const onNextStepClick = () => {
        setInputError('')
        if (newPasscode[0].length < 6 && newPasscode[1].length < 6) {
            return setInputError('Passcode requires at least 8 characters!')
        }
        if (currentStep === 'passcode' && newPasscode[0].length >= 6) {
            return setCurrentStep('confirm')
        }
        // DO SOMETHING WITH PASSCODE

        if (currentStep === 'confirm' && (newPasscode[0] !== newPasscode[1])) {
            return setInputError('Passcode does not match!')
        }

        // Navigate back to settings
        toast({
            toastIcon: <Password/>,
            event: <FormattedMessage id='toaster.action.passcodeChange'/>
        })

        return dispatch(pageNavigator.navigateToPage('Platform Settings'))
    }

    const onBackStepClick = () => {
        setInputError('')
        if (currentStep === 'passcode') {
            return dispatch(pageNavigator.navigateToPage('Platform Settings'))
        }
        setCurrentStep('passcode')
    }

    const stepButtonClickActions: StepButtonsClickActions = {
        previousButton: {
            text: <FormattedMessage id='platform.settings.passcode.button.back'/>,
            action: onBackStepClick
        },
        nextButton: {
            text: <FormattedMessage id='platform.settings.passcode.button.next'/>,
            action: onNextStepClick
        }
    }

    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Add Profile"
                       variants={pageTransitionVariants}>
            <StyledPasscode>
                <StyledPasscodeContent>
                    <StyledPasscodeTitle>
                        <FormattedMessage
                            id={currentStep === 'passcode' ? 'platform.settings.passcode.title.newPasscode' : 'platform.settings.passcode.title.confirmPasscode'}/>
                    </StyledPasscodeTitle>
                    <StyledPasscodeInputWrapper>
                        <PasscodeInput value={currentStep === 'passcode' ? newPasscode[0] : newPasscode[1]}/>
                    </StyledPasscodeInputWrapper>
                    <Keypad numberKeyOnClick={onKeypadClick} deleteKeyOnClick={onKeypadDeleteClick}/>
                    <StepButtons actionHandler={stepButtonClickActions}/>
                </StyledPasscodeContent>
            </StyledPasscode>
        </MotionWrapper>
    )
}

export default Passcode
