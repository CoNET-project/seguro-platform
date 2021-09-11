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
    const {state} = useOnboardingPageNavigator()
    const [currentStep, setCurrentStep] = useState(1)
    const [carouselState, setCarouselState] = useState<CarouselState>([1, 1])

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
                <FormattedMessage id='onboarding.carousel.title.seguro-platform'/>
            }
            contentComponent={
                <FormattedMessage id='onboarding.carousel.content.seguro-platform'/>
            }/>,
        <Card visual={createLottie(lottie_tracking)}
              contentTitle={
                  <FormattedMessage id='onboarding.carousel.title.no-ip-tracking'/>
              }
              contentComponent={
                  <FormattedMessage id='onboarding.carousel.content.no-ip-tracking'/>
              }/>,
        <Card visual={createLottie(lottie_decentralized)}
              contentTitle={
                  <FormattedMessage id='onboarding.carousel.title.decentralized'/>
              }
              contentComponent={
                  <FormattedMessage id='onboarding.carousel.content.decentralized'/>
              }/>,
        <Card visual={createLottie(lottie_privacy)}
              contentTitle={
                  <FormattedMessage id='onboarding.carousel.title.anonymity'/>
              }
              contentComponent={
                  <FormattedMessage id='onboarding.carousel.content.anonymity'/>
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
        if (current == 0) {
            setCarouselState([4, -1])
        } else {
            setCarouselState([current - 1, -1])
        }
    }

    return <TutorialPage
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
            <ProgressSteps
                currentStage={currentStep}
                numberOfSteps={MAX_STEPS}
                stepTexts={stepTexts}
            />
        }
        pageTransition={{
            key: state.currentPage[0],
            direction: state.currentPage[1]
        }}
    />
}

export default ProcessingPage