import styled from 'styled-components';
import { motion, AnimatePresence } from "framer-motion"
import LanguageSelect from "../../UI/LanguageSelect/LanguageSelect";
import Page from '../../UI/Layout/Pages/Locked-Register/Page';
import {ReactNode, useEffect, useState} from "react";
import {FormattedMessage} from "react-intl";
import useAppState from "../../../store/appState/useAppState";
import {Locale} from "../../../localization/types";
// import Button from '../../UI/Inputs/Button/Button';
import PasscodeInput from "../../UI/Inputs/PasscodeInput/PasscodeInput";
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

    const [passcode, setPasscode] = useState('')
    const [confirmPasscode, setConfirmPasscode] = useState('')

    const fadeAnimation = {
        transition: { duration: 0.5 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
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
                return setPasscode(passcode + `${number}`)
            }
            return setConfirmPasscode(confirmPasscode + `${number}`)
        },
        deleteKeyOnClick: () => {
            const [page] = currentPage
            if (page === 2) {
                return setPasscode(passcode.slice(0, passcode.length - 1))
            }
            return setConfirmPasscode(confirmPasscode.slice(0, confirmPasscode.length - 1))
        }
    }

    const nextStepHandler = () => {
        const [page] = currentPage
        setCurrentPage([page + 1, 1])
    }

    const previousStepHandler = () => {
        const [page] = currentPage
        page > 1 ? setCurrentPage([page - 1, -1]) : null
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
                    passcode={passcode}
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
                    passcode={confirmPasscode}
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