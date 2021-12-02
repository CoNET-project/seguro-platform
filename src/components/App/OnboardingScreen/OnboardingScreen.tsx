import styled from 'styled-components';
import {AnimatePresence} from "framer-motion"
import useAppState from "../../../store/appState/useAppState";
import {useOnboardingPageNavigator} from "../../../contexts/onboarding/OnboardingContext";
import {createPasscode} from "../../../services/workerService/workerService";
import {LogoIcon, LogoText} from "../../UI/Logo/Logo";
import {screenWidth} from "../../UI/screenSizes";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.colors.background.foundation};
  color: ${props => props.theme.ui.colors.text.primary};
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @media (${screenWidth.mediumWidth}) {
    padding: 50px 0;
  }
`

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
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
            createPasscode({
                passcode: state.onboardingPageData?.passcode,
                progress: (progress) => console.log(progress)
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
                <StyledLogoContainer>
                    <LogoIcon logoColor='white' size={28}/>
                    <LogoText size={26}/>
                </StyledLogoContainer>
                {/*{currentPage[0] === 'language' &&*/}
                {/*<SelectLanguagePage*/}
                {/*    key={currentPage[0]}*/}
                {/*    locale={locale}*/}
                {/*    selectLocale={setLocale}*/}
                {/*/>}*/}

                {/*{currentPage[0] === 'setPasscode' &&*/}
                {/*<PasscodePage*/}
                {/*    key={currentPage[0]}*/}
                {/*    title={<FormattedMessage id='onboarding.setPasscodeTitle'/>}*/}
                {/*    passcode={onboardingPageData?.passcode || ''}*/}
                {/*    setPasscode={(passcode) => {*/}
                {/*        dispatch(onboardingActions.setPasscode(passcode))*/}
                {/*    }}*/}
                {/*/>}*/}
                {/*{currentPage[0] === 'confirmPasscode' &&*/}
                {/*<PasscodePage*/}
                {/*    key={currentPage[0]}*/}
                {/*    title={<FormattedMessage id='onboarding.confirmPasscodeTitle'/>}*/}
                {/*    passcode={onboardingPageData?.confirmPasscode || ''}*/}
                {/*    setPasscode={(passcode) => {*/}
                {/*        dispatch(onboardingActions.setConfirmPasscode(passcode))*/}
                {/*    }}*/}
                {/*    confirmationAction={confirmationHandler}*/}
                {/*/>}*/}
                {/*{currentPage[0] === 'verification' &&*/}
                {/*<VerificationPage*/}
                {/*    key={currentPage[0]}*/}
                {/*/>}*/}
                {/*{currentPage[0] === 'verificationProcess' &&*/}
                {/*<ProcessingPage*/}
                {/*    key={currentPage[0]}*/}
                {/*    hasTouch={isTouchDevice}*/}
                {/*    onSetupComplete={setShowMain}*/}
                {/*/>}*/}
            </StyledContainer>
        </AnimatePresence>
    )
}

export default OnboardingScreen;
