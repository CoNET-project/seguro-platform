import styled from 'styled-components';
// import Page, {PageTransitionProps} from "../../../UI/Layout/Pages/Locked-Register/Page";
import {FormattedMessage} from "react-intl";
import StepButtons from '../../../UI/StepButtons/StepButtons';
import PasscodeTouchInput from "../../../UI/Inputs/PasscodeInput/Touch/PasscodeInput";
import PasscodeNoTouchInput from '../../../UI/Inputs/PasscodeInput/NoTouch/PasscodeInput'
import Keypad, {KeypadClickHandlers} from "../../../UI/Keypad/Keypad/Keypad";
import {ReactNode, useEffect, useState} from 'react';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import Page from '../../../UI/Layout/Page/Page';
import {Passcode} from '../../../UI/Icons/Icons';
import useAppState from '../../../../store/appState/useAppState';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`

type PasscodeProps = {
    title: string | ReactNode,
    passcode: string,
    setPasscode: (passcode: string) => void,
    confirmationAction?: () => boolean
}

const PasscodePage = ({
                          title,
                          passcode,
                          setPasscode,
                          confirmationAction
                      }: PasscodeProps) => {

    const {state, dispatch} = useOnboardingPageNavigator()
    const [error, setError] = useState<ReactNode | null>(null)

    const keypadClickHandlers = {
        numberKeyOnClick: (number: number) => {
            setPasscode(passcode + `${number}`)
        },
        deleteKeyOnClick: () => {
            setPasscode(passcode.slice(0, passcode.length - 1))
        }
    }

    // 'passcodeInput.incorrect.error': '密碼錯誤，請再試一次',
    //     'passcodeInput.confirm.error': '密碼不對，請再輸入一次',
    //     'passcodeInput.invalidLength': '密碼最少需要6位數',

    const nextButtonHandler = () => {
        if (passcode.length < 6) {
            return setError(<FormattedMessage id='passcodeInput.invalidLength'/>)
        }
        if (confirmationAction && !confirmationAction()) {
            return setError(<FormattedMessage id='passcodeInput.confirm.error'/>)
        }
        dispatch(onboardingActions.nextPage())
    }

    const previousButtonHandler = () => {
        setPasscode('')
        setError(null)
        dispatch(onboardingActions.previousPage())
    }

    return (
        <Page
            titleComponent={title}
            contentComponents={
                <>
                    {
                        useAppState().isTouchDevice ? (
                                <>
                                    <PasscodeTouchInput value={passcode} error={error}/>
                                    <Keypad clickActionHandlers={keypadClickHandlers}/>
                                </>
                            ) :
                            <>
                                <PasscodeNoTouchInput value={passcode}
                                                      nextStepHandler={nextButtonHandler}
                                                      previousStepHandler={previousButtonHandler}
                                                      error={error}
                                                      setValue={(val) => {
                                                          setPasscode(val)
                                                      }}/>
                            </>
                    }
                </>
            }
            stepButtonsClickActions={{
                nextButton: {
                    action: () => {
                        nextButtonHandler()
                    }
                },
                previousButton: {
                    action: () => {
                        previousButtonHandler()
                    }
                }
            }}
            pageTransition={{
                key: state.currentPage[0],
                direction: state.currentPage[1]
            }}
        />
    )
}

export default PasscodePage