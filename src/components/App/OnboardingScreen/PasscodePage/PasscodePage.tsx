import styled from 'styled-components';
import Keypad from "../../../UI/Keypad/Keypad";
import {ReactNode} from 'react';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import Page from '../../../UI/Layout/Page/Page';
import Input from "../../../UI/Inputs/Input/Input";
import PasscodeTouchInput from "../../../UI/Inputs/PasscodeInput/Touch/PasscodeInput";
import {screenWidth} from '../../../UI/screenSizes';

type PasscodeProps = {
    title: string | ReactNode,
    passcode: string,
    setPasscode: (passcode: string) => void,
    confirmationAction?: () => boolean,
    error: ReactNode | string
}

const StyledContainer = styled.div`
  width: 100%;
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
  margin-bottom: 30px;
`

const StyledPageTitle = styled.h1`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xl};

  @media (${screenWidth.mediumWidth}) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`

const StyledPageError = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  margin-bottom: 15px;
  min-height: calc(${props => props.theme.ui.fontSizes.narrow.sm} + 1px);
`

const PasscodePage = ({
                          title,
                          passcode,
                          setPasscode,
                          error
                      }: PasscodeProps) => {

    const {state, dispatch} = useOnboardingPageNavigator()

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

    // <FormattedMessage id='passcodeInput.invalidLength'/>
    // <FormattedMessage id='passcodeInput.incorrect.error'/>
    // <FormattedMessage id='passcodeInput.confirm.error'/>

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
                        {title}
                    </StyledPageTitle>
                </StyledPageHeader>
                <StyledContents>
                    {
                        true ? (
                            <>
                                <PasscodeTouchInput value={passcode}/>
                                <StyledPageError>
                                    {error}
                                </StyledPageError>
                                <Keypad {...keypadClickHandlers}/>
                            </>
                        ) : (
                            (
                                <Input value={passcode}
                                       inputOptions={{
                                           inputType: 'password'
                                       }
                                       }
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