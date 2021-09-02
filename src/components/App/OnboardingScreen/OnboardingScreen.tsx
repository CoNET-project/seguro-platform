import styled from 'styled-components';
import {motion, AnimatePresence} from "framer-motion"
import LanguageSelect from "../../UI/LanguageSelect/LanguageSelect";
import Page from '../../UI/Layout/Pages/Locked-Register/Page';
import {ReactNode, useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import useAppState from "../../../store/appState/useAppState";
import {Locale} from "../../../localization/types";
// import Button from '../../UI/Inputs/Button/Button';
import PasscodeInput, {PasscodeInputProps} from "../../UI/Inputs/PasscodeInput/PasscodeInput";
import Keypad from "../../UI/Keypad/Keypad/Keypad";
import Button from '../../UI/Inputs/Button/Button';
import SelectLanguagePage from "./SelectLanguagePage/SelectLanguagePage";
import PasscodePage from "./PasscodePage/PasscodePage";

type Languages = {
    name: string,
    englishName: string,
    locale: Locale
}

type CurrentPage = [number, -1 | 1]

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.backgroundColor};
  color: ${props => props.theme.ui.textColor};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const AnimatedContent = styled(motion.div)`
  min-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


const AnimatedTitle = styled(motion.h1)`
  font-size: 30px;
  color: ${props => props.theme.ui.textColor};
  font-family: 'Lato Bold', sans-serif;
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`

const OnboardingScreen = () => {
    const appState = useAppState()
    const [currentPage, setCurrentPage] = useState<CurrentPage>([1, 1])

    const [passcodeInput, setPasscodeInput] = useState<PasscodeInputProps>({
        value: ''
    })
    const [confirmPasscodeInput, setConfirmPasscodeInput] = useState<PasscodeInputProps>({
        value: ''
    })

    const fadeAnimation = {
        transition: {duration: 0.5},
        initial: {opacity: 0},
        animate: {opacity: 1},
        exit: {opacity: 0}
    }

    const languages: Array<Languages> = [
        {
            name: 'English',
            englishName: 'English',
            locale: 'en-US'
        },
        {
            name: '简体中文',
            englishName: 'Simplified Chinese',
            locale: 'zh-CN'
        },
        {
            name: '繁體中文',
            englishName: 'Traditional Chinese',
            locale: 'zh-TW'
        }
    ]

    const setLocale = (locale: Locale) => {
        return appState.setLocale(locale)
    }

    const keypadClickHandlers = {
        numberKeyOnClick: (number: number) => {
            const [page] = currentPage
            if (page === 2) {
                return setPasscodeInput({
                    ...passcodeInput,
                    value: passcodeInput.value + `${number}`
                })
            }
            return setConfirmPasscodeInput({
                ...confirmPasscodeInput,
                value: confirmPasscodeInput.value + `${number}`
            })
        },
        deleteKeyOnClick: () => {
            const [page] = currentPage
            if (page === 2) {
                return setPasscodeInput({
                    ...passcodeInput,
                    value: passcodeInput.value.slice(0, passcodeInput.value.length - 1)
                })
            }
            return setConfirmPasscodeInput({
                ...confirmPasscodeInput,
                value: confirmPasscodeInput.value.slice(0, confirmPasscodeInput.value.length - 1)
            })
        }
    }

    const isSamePasscode = (passcode: string, confirmPasscode: string) => {
        return passcode == confirmPasscode
    }

    const isMinimumLength = (passcode: string) => {
        return passcode.length >= 6;
    }

    const clearConfirm = (clearValue?: boolean, clearError?: boolean) => {
        setConfirmPasscodeInput({
            value: clearValue ? '' : confirmPasscodeInput.value,
            error: clearError ? false : confirmPasscodeInput.error,
            confirmError: clearError ? false : confirmPasscodeInput.confirmError,
            lengthError: clearError ? false : confirmPasscodeInput.lengthError
        })
    }

    const clearPasscode = (clearValue?: boolean, clearError?: boolean) => {
        setPasscodeInput({
            value: clearValue ? '' : passcodeInput.value,
            error: clearError ? false : passcodeInput.error,
            confirmError: clearError ? false : passcodeInput.confirmError,
            lengthError: clearError ? false : passcodeInput.lengthError
        })
    }

    const nextStepHandler = () => {
        const [page] = currentPage
        switch (true) {
            case page === 2:
                if (!isMinimumLength(passcodeInput.value)) {
                    setPasscodeInput({
                        ...passcodeInput,
                        lengthError: true
                    })
                    return;
                }
                break;
            case page === 3:
                if (!isMinimumLength(confirmPasscodeInput.value)) {
                    setConfirmPasscodeInput({
                        ...confirmPasscodeInput,
                        confirmError: false,
                        error: false,
                        lengthError: true
                    })
                    return;
                }
                if (!isSamePasscode(passcodeInput.value, confirmPasscodeInput.value)) {
                    setConfirmPasscodeInput({
                        ...confirmPasscodeInput,
                        lengthError: false,
                        error: false,
                        confirmError: true
                    })
                    return;
                }
        }
        clearPasscode(false, true)
        clearConfirm(false, true)
        setCurrentPage([page + 1, 1])
    }

    const previousStepHandler = () => {

        const [page] = currentPage
        const previousPage = page - 1

        switch (true) {
            case previousPage === 1:
                clearPasscode(true, true)
                clearConfirm(true, true)
                break;
            case previousPage === 2:
                clearConfirm(true, true)
                break;
        }

        page > 1 ? setCurrentPage([previousPage, -1]) : null
    }

    return (
        <StyledContainer>
            <AnimatePresence custom={currentPage[1]}>
                {currentPage[0] === 1 &&
                <SelectLanguagePage
                    locale={appState.locale}
                    selectLocale={setLocale}
                    nextButtonAction={nextStepHandler}
                    pageTransition={{
                        key: currentPage[0],
                        direction: currentPage[1]
                    }}
                />}

                {currentPage[0] === 2 &&
                <PasscodePage
                    title={<FormattedMessage id='onboarding.setPasscode'/>}
                    keypadClickHandlers={keypadClickHandlers}
                    passcode={passcodeInput}
                    nextButtonAction={nextStepHandler}
                    previousButtonAction={previousStepHandler}
                    pageTransition={{
                        key: currentPage[0],
                        direction: currentPage[1]
                    }}
                />}
                {currentPage[0] === 3 &&
                <PasscodePage
                    title={<FormattedMessage id='onboarding.confirmPasscode'/>}
                    keypadClickHandlers={keypadClickHandlers}
                    passcode={confirmPasscodeInput}
                    nextButtonAction={nextStepHandler}
                    previousButtonAction={previousStepHandler}
                    pageTransition={{
                        key: currentPage[0],
                        direction: currentPage[1]
                    }}
                />}
            </AnimatePresence>
            {/*<AnimatePresence>*/}
            {/*    <StyledContent>*/}
            {/*        {number === 1 && (*/}
            {/*            <AnimatedTitle initial={{ opacity: 0 }}*/}
            {/*                           animate={{ opacity: 1 }}*/}
            {/*                           exit={{ opacity: 0 }}>*/}
            {/*                ONE*/}
            {/*            </AnimatedTitle>*/}
            {/*        )}*/}

            {/*        {number === 2 && (*/}
            {/*            <AnimatedTitle initial={{ opacity: 0 }}*/}
            {/*                           animate={{ opacity: 1 }}*/}
            {/*                           exit={{ opacity: 0 }}>*/}
            {/*                TWO*/}
            {/*            </AnimatedTitle>*/}
            {/*        )}*/}
            {/*    </StyledContent>*/}
            {/*</AnimatePresence>*/}
        </StyledContainer>
    )
}

export default OnboardingScreen;