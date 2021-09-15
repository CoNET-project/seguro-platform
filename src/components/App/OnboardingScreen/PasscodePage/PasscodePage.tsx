import styled from 'styled-components';
import {FormattedMessage} from "react-intl";
import PasscodeTouchInput from "../../../UI/Inputs/PasscodeInput/Touch/PasscodeInput";
import Keypad from "../../../UI/Keypad/Keypad";
import {ReactNode, useState} from 'react';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import Page from '../../../UI/Layout/Page/Page';
import useAppState from '../../../../store/appState/useAppState';
import Input from "../../../UI/Inputs/Input/Input";
import Title from "../../../UI/Common/Title/Title";

type PasscodeProps = {
    title: string | ReactNode,
    passcode: string,
    setPasscode: (passcode: string) => void,
    confirmationAction?: () => boolean
}

const StyledPasscodeContents = styled.div`
  height: 100%;
  width: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
            contentComponents={{
                contentLeft: (
                    <>
                        <Title>
                            {title}
                        </Title>
                        {
                            useAppState().isTouchDevice ? (
                                <PasscodeTouchInput value={passcode} error={error}/>
                            ) : null
                        }
                    </>
                ),
                contentRight: (
                    <>
                        {
                            useAppState().isTouchDevice ? (
                                <StyledPasscodeContents>
                                    <Keypad {...keypadClickHandlers}/>
                                </StyledPasscodeContents>
                            ) : (
                                (
                                    <Input value={passcode}
                                           inputOptions={{
                                               inputType: 'password'
                                           }
                                           }
                                           nextStepHandler={nextButtonHandler}
                                           previousStepHandler={previousButtonHandler}
                                           error={error}
                                           setValue={(val) => {
                                               setPasscode(val)
                                           }}/>
                                )
                            )
                            // useAppState().isTouchDevice ? (
                            //         <>
                            //             <PasscodeTouchInput value={passcode} error={error}/>
                            //             <Keypad clickActionHandlers={keypadClickHandlers}/>
                            //         </>
                            //     ) :
                            //     <>
                            //         <Input value={passcode}
                            //                inputOptions={{
                            //                    inputType: 'password'
                            //                }
                            //                }
                            //                nextStepHandler={nextButtonHandler}
                            //                previousStepHandler={previousButtonHandler}
                            //                error={error}
                            //                setValue={(val) => {
                            //                    setPasscode(val)
                            //                }}/>
                            //     </> // useAppState().isTouchDevice ? (
                            //         <>
                            //             <PasscodeTouchInput value={passcode} error={error}/>
                            //             <Keypad clickActionHandlers={keypadClickHandlers}/>
                            //         </>
                            //     ) :
                            //     <>
                            //         <Input value={passcode}
                            //                inputOptions={{
                            //                    inputType: 'password'
                            //                }
                            //                }
                            //                nextStepHandler={nextButtonHandler}
                            //                previousStepHandler={previousButtonHandler}
                            //                error={error}
                            //                setValue={(val) => {
                            //                    setPasscode(val)
                            //                }}/>
                            //     </>
                        }
                    </>
                )
            }}
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