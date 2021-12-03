import styled from 'styled-components';
import {FormattedMessage} from "react-intl";
import Keypad from "../../../UI/Keypad/Keypad";
import {ReactNode, useState} from 'react';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import Page from '../../../UI/Layout/Page/Page';
import Input from "../../../UI/Inputs/Input/Input";
import PasscodeTouchInput from "../../../UI/Inputs/PasscodeInput/Touch/PasscodeInput";

type PasscodeProps = {
    title: string | ReactNode,
    passcode: string,
    setPasscode: (passcode: string) => void,
    confirmationAction?: () => boolean
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  //padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledContents = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`


const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`

const StyledPageTitle = styled.h1`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
  margin-bottom: 10px;
`

const StyledPageSubtitle = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  text-align: center;
  min-height: 32px;
  width: 70%;
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
            pageTransition={{
                key: state.currentPage[0],
                direction: state.currentPage[1]
            }}
        >
            <StyledContainer>
                <StyledPageHeader>
                    <StyledPageTitle>
                        <FormattedMessage id='onboarding.selectLanguageTitle'/>
                    </StyledPageTitle>
                </StyledPageHeader>
                <StyledContents>
                    {
                        true ? (
                            <>
                                <PasscodeTouchInput value={passcode} error={error}/>
                                <Keypad {...keypadClickHandlers}/>
                            </>
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
                    }
                </StyledContents>
            </StyledContainer>
            {
                // useAppState().isTouchDevice
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
        </Page>
    )
}

export default PasscodePage