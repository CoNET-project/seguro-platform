import styled from 'styled-components'
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import TutorialPage from "../../../UI/Layout/TutorialPage/TutorialPage";
import {ReactNode, useEffect, useState} from "react";
import ProgressSteps from "../../../UI/Progress/ProgressSteps/ProgressSteps";
import {FormattedMessage} from "react-intl";
import Carousel from "../../../UI/Carousel/Carousel";
import lottie_platform from '../../../../assets/lottie/platform.json'
import lottie_tracking from '../../../../assets/lottie/tracking.json'
import lottie_decentralized from '../../../../assets/lottie/decentralized.json'
import lottie_privacy from '../../../../assets/lottie/privacy.json'
import Lottie, {LottieComponentProps} from 'lottie-react'
import Card from "../../../UI/Layout/Card/Card";
import {StyledFormattedH1, StyledFormattedParagraph} from "../../../UI/Common/Text/Text";
import {Warning} from "../../../UI/Icons/Icons";
import AlertDialog, {AlertDialogActions} from "../../../UI/Common/AlertDialog/AlertDialog";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import Button from '../../../UI/Common/Button/Button';

type CarouselState = [number, -1 | 1]

type ProgressingPageProps = {
    hasTouch: boolean
}

const StyledProcessingContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const ProcessingPage = ({hasTouch}: ProgressingPageProps) => {
    const MAX_STEPS = 4;
    const {state, dispatch} = useOnboardingPageNavigator()
    const [currentStep, setCurrentStep] = useState(1)
    const [carouselState, setCarouselState] = useState<CarouselState>([1, 1])

    useEffect(() => {
        setTimeout(() => {
            dispatch(onboardingActions.setVerificationStatus('SUCCESS'))
        }, 16000)
    }, [])

    useEffect(() => {
        const interval: any = setInterval(() => {
            if (currentStep < MAX_STEPS) {
                setCurrentStep(currentStep + 1)
            }
        }, 5000)
        return () => {
            clearInterval(interval)
        }
    }, [currentStep])

    const stepTexts = [
        <FormattedMessage id='onboarding.verification.connecting'/>,
        <FormattedMessage id='onboarding.verification.sending'/>,
        <FormattedMessage id='onboarding.verification.waiting'/>,
        <FormattedMessage id='onboarding.verification.finished'/>
    ]

    const createLottie = (animation: any) => {
        const defaultOptions: LottieComponentProps = {
            loop: true,
            autoplay: true,
            animationData: animation
        }
        return (
            <Lottie
                {...defaultOptions}
            />
        )
    }

    const carouselItems: Array<ReactNode> = [
        <Card
            visual={createLottie(lottie_platform)}
            contentTitle={
                <FormattedMessage id='onboarding.carousel.title.seguro-platform'>
                    {text => <StyledFormattedH1>{text}</StyledFormattedH1>}
                </FormattedMessage>
            }
            contentComponent={
                <FormattedMessage id='onboarding.carousel.content.seguro-platform'>
                    {text => <StyledFormattedParagraph fontSize={20}>{text}</StyledFormattedParagraph>}
                </FormattedMessage>
            }/>,
        <Card visual={createLottie(lottie_tracking)}
              contentTitle={
                  <FormattedMessage id='onboarding.carousel.title.no-ip-tracking'>
                      {text => <StyledFormattedH1>{text}</StyledFormattedH1>}
                  </FormattedMessage>
              }
              contentComponent={
                  <FormattedMessage id='onboarding.carousel.content.no-ip-tracking'>
                      {text => <StyledFormattedParagraph fontSize={20}>{text}</StyledFormattedParagraph>}
                  </FormattedMessage>
              }/>,
        <Card visual={createLottie(lottie_decentralized)}
              contentTitle={
                  <FormattedMessage id='onboarding.carousel.title.decentralized'>
                      {text => <StyledFormattedH1>{text}</StyledFormattedH1>}
                  </FormattedMessage>
              }
              contentComponent={
                  <FormattedMessage id='onboarding.carousel.content.decentralized'>
                      {text => <StyledFormattedParagraph fontSize={20}>{text}</StyledFormattedParagraph>}
                  </FormattedMessage>
              }/>,
        <Card visual={createLottie(lottie_privacy)}
              contentTitle={
                  <FormattedMessage id='onboarding.carousel.title.anonymity'>
                      {text => <StyledFormattedH1>{text}</StyledFormattedH1>}
                  </FormattedMessage>
              }
              contentComponent={
                  <FormattedMessage id='onboarding.carousel.content.anonymity'>
                      {text => <StyledFormattedParagraph fontSize={20}>{text}</StyledFormattedParagraph>}
                  </FormattedMessage>
              }/>,
    ]

    const nextItem = () => {
        const [current] = carouselState
        if (current == MAX_STEPS) {
            setCarouselState([1, 1])
        } else {
            setCarouselState([current + 1, 1])
        }
    }

    const previousItem = () => {
        const [current] = carouselState
        if (current == 1) {
            setCarouselState([4, -1])
        } else {
            setCarouselState([current - 1, -1])
        }
    }

    const verificationErrorModal = () => {
        const verificationStatus = state.onboardingPageData?.verificationStatus

        let dialogMessage: ReactNode | string = <FormattedMessage id='onboarding.verification.modal.button.retry'/>
        const dialogActions: AlertDialogActions = {
            confirm: {
                action: () => {
                }
            }
        }

        switch (verificationStatus) {
            case 'WAITING_SEGURO_RESPONSE_TIMEOUT':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.timeout'/>
                break;
            case 'NOT_INTERNET':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.internet'/>
                break;
            case 'NOT_STRIPE':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.stripe'/>
                break;
            case 'ALL_EMAIL_SERVER_CAN_NOT_CONNECTING':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.email'/>
                break;
            case 'LOCALSERVER_ERROR':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.localserver'/>
                break;
            case 'INCORRECT_CODE':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.incorrect'/>
                dialogActions.confirm.text = <FormattedMessage id='onboarding.verification.modal.button.newCode'/>
                dialogActions.confirm.action = () => {
                    dispatch(onboardingActions.setVerificationCode(''))
                    dispatch(onboardingActions.setVerificationStatus(''))
                    dispatch(onboardingActions.navigateToPage('verification'))
                }
                break;
            case 'EMAIL_ACCOUNT_AUTH_ERROR':
                dialogMessage = <FormattedMessage id='onboarding.verification.error.authError'/>
                dialogActions.confirm.text = <FormattedMessage id='onboarding.verification.modal.button.update'/>
                break;
            default:
                return
        }

        return (
            <AlertDialog message={dialogMessage} icon={<Warning/>} dialogActions={dialogActions}/>
        )
    }

    return (
        <>
            {
                state.onboardingPageData?.verificationStatus && verificationErrorModal()
            }
            <TutorialPage
                contentComponents={
                    <StyledProcessingContent>
                        <Carousel
                            current={carouselState[0]}
                            direction={carouselState[1]}
                            hasTouch={hasTouch}
                            carouselItems={carouselItems}
                            actionHandlers={
                                {
                                    next: nextItem,
                                    previous: previousItem
                                }
                            }
                        />
                    </StyledProcessingContent>
                }
                lowerContentComponents={
                    <>
                        {state.onboardingPageData?.verificationStatus === 'SUCCESS'
                            ? <Button onClick={() => {
                            }}>Enter Seguro</Button>
                            : <ProgressSteps
                                currentStage={currentStep}
                                numberOfSteps={MAX_STEPS}
                                stepTexts={stepTexts}
                            />
                        }
                    </>
                }
                pageTransition={{
                    key: state.currentPage[0],
                    direction: state.currentPage[1]
                }}
            />
        </>
    )
}

export default ProcessingPage
