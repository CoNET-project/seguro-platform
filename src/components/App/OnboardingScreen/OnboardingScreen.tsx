import styled from 'styled-components';
import {motion, AnimatePresence} from "framer-motion"
import useAppState from "../../../store/appState/useAppState";
import {Locale} from "../../../localization/types";
import SelectLanguagePage from "./SelectLanguagePage/SelectLanguagePage";
import {useOnboardingPageNavigator} from "../../../contexts/onboarding/OnboardingContext";
import PasscodePage from './PasscodePage/PasscodePage';
import {FormattedMessage} from 'react-intl';
import onboardingActions from "../../../contexts/onboarding/onboardingActions";
import VerificationPage from "./VerificationPage/VerificationPage";
import ProcessingPage from "./ProcessingPage/ProcessingPage";
import {createPasscode} from "../../../services/workerService/workerService";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.backgroundAccent};
  color: ${props => props.theme.ui.text.textPrimary};
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const OnboardingScreen = () => {
    const {locale, isTouchDevice, setLocale, setIsUnlocked, setHasContainer} = useAppState()

    const {state, dispatch} = useOnboardingPageNavigator()
    const {currentPage, onboardingPageData} = state

    // @ts-ignore
    const confirmationHandler = (): boolean => {
        if (!state.onboardingPageData?.passcode || !state.onboardingPageData?.confirmPasscode)
            return false

        if (state.onboardingPageData?.passcode == state.onboardingPageData?.confirmPasscode) {
            createPasscode(state.onboardingPageData?.confirmPasscode, (progress) => {
                console.log(progress)
            })
            return true;
        }

        return false
    }

    const setShowMain = () => {
        setIsUnlocked(true)
        setHasContainer(true)
    }

    return (
        <AnimatePresence custom={currentPage[1]}>
            <StyledContainer>
                {currentPage[0] === 'language' &&
                <SelectLanguagePage
                    key={currentPage[0]}
                    locale={locale}
                    selectLocale={setLocale}
                />}

                {currentPage[0] === 'setPasscode' &&
                <PasscodePage
                    key={currentPage[0]}
                    title={<FormattedMessage id='onboarding.setPasscodeTitle'/>}
                    passcode={onboardingPageData?.passcode || ''}
                    setPasscode={(passcode) => {
                        dispatch(onboardingActions.setPasscode(passcode))
                    }}
                />}
                {currentPage[0] === 'confirmPasscode' &&
                <PasscodePage
                    key={currentPage[0]}
                    title={<FormattedMessage id='onboarding.confirmPasscodeTitle'/>}
                    passcode={onboardingPageData?.confirmPasscode || ''}
                    setPasscode={(passcode) => {
                        dispatch(onboardingActions.setConfirmPasscode(passcode))
                    }}
                    confirmationAction={confirmationHandler}
                />}
                {currentPage[0] === 'verification' &&
                <VerificationPage
                    key={currentPage[0]}
                />}
                {currentPage[0] === 'verificationProcess' &&
                <ProcessingPage
                    key={currentPage[0]}
                    hasTouch={isTouchDevice}
                    onSetupComplete={setShowMain}
                />}
            </StyledContainer>
        </AnimatePresence>
    )
}

export default OnboardingScreen;
