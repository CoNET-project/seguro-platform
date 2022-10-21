import styled from "styled-components"
import {screenWidth} from "../../../UI/screenSizes"
import React, {ReactNode, useEffect, useState} from "react"
import Carousel from "../../../UI/Carousel/Carousel"
import lottie_platform from '../../../../assets/lottie/platform.json'
import lottie_tracking from '../../../../assets/lottie/tracking.json'
import lottie_decentralized from '../../../../assets/lottie/decentralized.json'
import lottie_privacy from '../../../../assets/lottie/privacy.json'
import {FormattedMessage} from "react-intl"
import LottieAnimation from "../../../UI/Lottie/Lottie"
import ProgressSteps from "../../../UI/Progress/ProgressSteps/ProgressSteps"
import useAppState from "../../../../store/appState/useAppState"
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext"
import Button from "../../../UI/Common/Button/Button"
import onboardingActions from "../../../../contexts/onboarding/onboardingActions"
import AlertDialog, {AlertDialogActions} from "../../../UI/Common/AlertDialog/AlertDialog"
import {Warning} from "../../../UI/Icons/Icons"
import {
    createPasscode,
    hasPasscode,
    savePreferences,
} from "../../../../services/workerService/workerService"

const StyledContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledPageUpper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledPageVisual = styled.div`
  flex: 0.8;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

const StyledPageLower = styled.div`
  flex: 0.1;
  width: 100%;
  content: '';
  max-width: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`

const StyledCarouselItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledCarouselItemTitle = styled.p`
  margin: 10px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.lg};
  font-weight: 700;

  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
  }
`

const StyledCarouselItemDescription = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  max-width: 30rem;
  text-align: center;

  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.narrow.lg};
  }
`

type CarouselState = [number, -1 | 1]

const SettingUpPage = () => {
    const {
        isTouchDevice,
        setClientProfiles,
        setIsUnlocked,
        setHasContainer,
        theme,
        locale,
        clientProfiles
    } = useAppState()

    const {state, dispatch} = useOnboardingPageNavigator()

    const setupStateText = [
        <FormattedMessage id='onboarding.setup.create.container'/>,
        <FormattedMessage id='onboarding.setup.verify.code'/>
    ]

    const [setupState, setSetupState] = useState<number>(1)

    const verificationErrorModal = () => {
        const verificationStatus = state.onboardingPageData?.verificationStatus

        if (verificationStatus === 'SUCCESS') {
            return
        }

        let dialogMessage: ReactNode | string = <FormattedMessage id='onboarding.verification.error.generic'/>
        const dialogActions: AlertDialogActions = {
            confirm: {
                action: () => {
                    dispatch(onboardingActions.setVerificationCode(''))
                    dispatch(onboardingActions.setVerificationStatus(null))
                    dispatch(onboardingActions.navigateToPage('verification'))
                }
            }
        }

        switch (verificationStatus) {
            case 'LOCAL_SERVER_ERROR':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.localserver'/>
                break;
            case 'NO_INTERNET':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.internet'/>
                break;
            case 'NOT_STRIPE':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.stripe'/>
                break;
            case 'SEGURO_ERROR' || 'TIMEOUT_SEGURO_NETWORK':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.timeout'/>
                break;
            case 'INVITATION_CODE_ERROR' || 'FAILURE':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.incorrect'/>
                dialogActions.confirm.text = <FormattedMessage id='onboarding.verification.modal.button.newCode'/>
                dialogActions.confirm.action = () => {
                    dispatch(onboardingActions.setVerificationCode(''))
                    dispatch(onboardingActions.setVerificationStatus(null))
                    dispatch(onboardingActions.navigateToPage('verification'))
                }
                break;
        }

        return (
            <AlertDialog message={dialogMessage} icon={<Warning color="black"/>} dialogActions={dialogActions}/>
        )
    }

    useEffect(() => {
        switch (setupState) {
            case 1:
                if (!hasPasscode()) {
                    createPasscode({
                        passcode: state.onboardingPageData.passcode, locale: state.onboardingPageData.locale, progress: () => {
                        }
                    }).then((status) => {
                        if (status === "SUCCESS") {
                            savePreferences({theme: theme, language: locale}).then(status => {
                                //setSetupState(prevState => prevState + 1)
								dispatch(onboardingActions.setVerificationStatus('SUCCESS'))
								
                            })
                        }
                    })
                } else {
                    setSetupState(prevState => prevState + 1)
                }
                break
            // case 2:
            //     if (state.onboardingPageData.verificationCode) {
            //         verifyInvitation(state.onboardingPageData.verificationCode).then((status) => {
            //             dispatch(onboardingActions.setVerificationStatus(status))
            //         })
            //     }
            //     // Verification
            //     break;
            default:
                break;
        }
    }, [setupState])

    const onSetupComplete = () => {
        setHasContainer(true)
        setIsUnlocked(true)
    }

    const [carouselState, setCarouselState] = useState<CarouselState>([1, 1])

    const carouselVisualItems = [
        () => LottieAnimation({
            animationSrc: lottie_platform,
            loop: true
        }),
        () => LottieAnimation({
            animationSrc: lottie_tracking,
            loop: true
        }),
        () => LottieAnimation({
            animationSrc: lottie_decentralized,
            loop: true
        }),
        () => LottieAnimation({
            animationSrc: lottie_privacy,
            loop: true
        })
    ]

    const carouselExtraItems = [
        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                <FormattedMessage id='onboarding.carousel.title.seguro-platform'/>
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                <FormattedMessage id='onboarding.carousel.content.seguro-platform'/>
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>,

        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                <FormattedMessage id='onboarding.carousel.title.no-ip-tracking'/>
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                <FormattedMessage id='onboarding.carousel.content.no-ip-tracking'/>
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>,

        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                <FormattedMessage id='onboarding.carousel.title.decentralized'/>
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                <FormattedMessage id='onboarding.carousel.content.decentralized'/>
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>,

        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                <FormattedMessage id='onboarding.carousel.title.anonymity'/>
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                <FormattedMessage id='onboarding.carousel.content.anonymity'/>
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>
    ]

    return (
        <StyledContainer>
            {
                state.onboardingPageData?.verificationStatus && verificationErrorModal()
            }
            <StyledPageUpper>
                <StyledPageVisual>
                    <Carousel
                        current={carouselState[0]}
                        hasTouch={isTouchDevice}
                        carouselVisualItems={carouselVisualItems}
                        carouselExtraItems={carouselExtraItems}
                    />
                </StyledPageVisual>
            </StyledPageUpper>
            <StyledPageLower>
                {state.onboardingPageData?.verificationStatus === 'SUCCESS'
                    ? <Button onClick={onSetupComplete}><FormattedMessage id='onboarding.setup.enter.button'/></Button>
                    : <ProgressSteps
                        currentStage={setupState}
                        numberOfSteps={setupStateText.length}
                        stepTexts={setupStateText}
                    />
                }
            </StyledPageLower>
        </StyledContainer>
    )
}

export default SettingUpPage
