import styled from 'styled-components';
import Page, {PageTransitionProps} from "../../../UI/Layout/Pages/Locked-Register/Page";
import {FormattedMessage} from "react-intl";
import StepButtons from '../../../UI/StepButtons/StepButtons';
import PasscodeInput, {PasscodeInputProps} from "../../../UI/Inputs/PasscodeInput/PasscodeInput";
import Keypad, {KeypadClickHandlers} from "../../../UI/Keypad/Keypad/Keypad";
import {ReactNode} from 'react';

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`

type PasscodeProps = {
    title: string | ReactNode,
    keypadClickHandlers: KeypadClickHandlers,
    passcode: PasscodeInputProps,
    nextButtonAction?: () => void,
    previousButtonAction?: () => void
} & PageTransitionProps

const PasscodePage = ({
                          title,
                          keypadClickHandlers,
                          passcode,
                          nextButtonAction,
                          previousButtonAction,
                          pageTransition
                      }: PasscodeProps) => {
    return (
        <Page
            title={title}
            contentComponents={
                <>
                    <PasscodeInput {...passcode}/>
                    <Keypad clickActionHandlers={keypadClickHandlers}/>
                </>
            }
            buttonComponents={<StepButtons nextButton={{action: nextButtonAction}}
                                           previousButton={{action: previousButtonAction}}/>}
            pageTransition={pageTransition}
        />
    )
}

export default PasscodePage