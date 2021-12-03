import styled from 'styled-components';
import {AnimatePresence} from "framer-motion"
import useAppState from "../../../store/appState/useAppState";
import {useOnboardingPageNavigator} from "../../../contexts/onboarding/OnboardingContext";
import {createPasscode} from "../../../services/workerService/workerService";
import {LogoIcon, LogoText} from "../../UI/Logo/Logo";
import {screenWidth} from "../../UI/screenSizes";
import SelectLanguagePage from "./SelectLanguagePage/SelectLanguagePage";
import ProgressNumberSteps from "../../UI/Progress/ProgressNumberSteps/ProgressNumberSteps";
import onboardingActions from '../../../contexts/onboarding/onboardingActions';
import PasscodePage from './PasscodePage/PasscodePage';
import {FormattedMessage} from 'react-intl';
import {ChevronLeft, ChevronRight} from "../../UI/Icons/Icons";
import {useEffect} from "react";

const StyledOnboardingContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  background-color: ${props => props.theme.ui.colors.background.foundation};
  color: ${props => props.theme.ui.colors.text.primary};
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  @media (${screenWidth.mediumWidth}) {
    padding: 30px 0;
  }
`

const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
`

const StyledOnboardingHeader = styled.div`
  padding: 50px 0 20px 0;
`

const StyledOnboardingContent = styled.div`
  //min-height: 100%;
  height: 100%;
  width: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (${screenWidth.mediumWidth}) {
    padding: 20px 0;
    width: initial;
    min-width: 30rem;
    max-width: 60rem;
  }
`
const StyledOnboardingNavigation = styled.div`
  width: 100%;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (${screenWidth.narrowWidth}) {
    width: 30rem;
  }

  @media (${screenWidth.mediumWidth}) {
    padding: 20px 10px;
    width: initial;
    min-width: 40rem;
    max-width: 60rem;
  }
`

const StyledNavigationButton = styled.button`
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  background-color: transparent;
  border: none;
  color: ${props => props.theme.ui.colors.text.primary};
`

const StyledNavigationButtonText = styled.p`
  margin: 0 10px;
`

const OnboardingScreen = () => {
    const {locale, isTouchDevice, setLocale, setIsUnlocked, setHasContainer} = useAppState()

    const pages = ['language', 'setPasscode', 'confirmPasscode', 'verification', 'verificationProcess']

    const
        {
            state, dispatch
        }
            = useOnboardingPageNavigator()
    const {currentPage, onboardingPageData} = state

    useEffect(() => {
        console.log(currentPage)
    }, [state])

    console.log(currentPage)

    const currentStep = pages.indexOf(state.currentPage[0]) + 1

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
        <StyledOnboardingContainer>
            <StyledLogoContainer>
                <LogoIcon logoColor='white' size={28}/>
                <LogoText size={26}/>
            </StyledLogoContainer>
            <StyledOnboardingHeader>
                <ProgressNumberSteps currentActiveStep={currentStep} steps={pages.length}/>
            </StyledOnboardingHeader>
            <StyledOnboardingContent>
                <AnimatePresence custom={currentPage[1]} exitBeforeEnter>
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
                        setPasscode={(passcode: string) => {
                            dispatch(onboardingActions.setPasscode(passcode))
                        }}
                    />}
                </AnimatePresence>
            </StyledOnboardingContent>
            <StyledOnboardingNavigation>
                <StyledNavigationButton onClick={() => dispatch(onboardingActions.previousPage())}>
                    <ChevronLeft/>
                    <StyledNavigationButtonText>
                        <FormattedMessage id='button.back'/>
                    </StyledNavigationButtonText>
                </StyledNavigationButton>
                <StyledNavigationButton onClick={() => dispatch(onboardingActions.nextPage())}>
                    <StyledNavigationButtonText>
                        <FormattedMessage id='button.next'/>
                    </StyledNavigationButtonText>
                    <ChevronRight/>
                </StyledNavigationButton>
            </StyledOnboardingNavigation>
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
        </StyledOnboardingContainer>
    )
}

export default OnboardingScreen;
