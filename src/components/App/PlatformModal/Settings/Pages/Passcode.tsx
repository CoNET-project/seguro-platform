import styled from "styled-components";
import Keypad from "../../../../UI/Keypad/Keypad";
import PasscodeInput from "../../../../UI/Inputs/PasscodeInput/Touch/PasscodeInput";
import {ReactNode, useState} from "react";
import {screenWidth} from "../../../../UI/screenSizes";
import StepButtons, {StepButtonsClickActions} from "../../../../UI/StepButtons/StepButtons";
import {usePageNavigator} from "../../../../../contexts/pageNavigator/PageNavigatorContext";
import {pageNavigator} from "../../../../../contexts/pageNavigator/pageNavigatorActions";

const StyledPasscode = styled.div`
  margin-top: -20px;
  padding: 0 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
`

const Passcode = () => {
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
            text: 'Back',
            action: onBackStepClick
        },
        nextButton: {
            text: 'Next',
            action: onNextStepClick
        }
    }

    return (
        <StyledPasscode>
            <StyledPasscodeContent>
                <StyledPasscodeTitle>{currentStep === "passcode" ? 'New passcode' : 'Confirm passcode'}</StyledPasscodeTitle>
                <StyledPasscodeInputWrapper>
                    <PasscodeInput value={currentStep === 'passcode' ? newPasscode[0] : newPasscode[1]} error={inputError}/>
                </StyledPasscodeInputWrapper>
                <Keypad numberKeyOnClick={onKeypadClick} deleteKeyOnClick={onKeypadDeleteClick}/>
                <StepButtons actionHandler={stepButtonClickActions}/>
            </StyledPasscodeContent>
        </StyledPasscode>
    )
}

export default Passcode