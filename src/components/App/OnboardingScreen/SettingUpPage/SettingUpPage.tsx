import styled from "styled-components"
import {screenWidth} from "../../../UI/screenSizes"
import React, {ReactNode, useEffect, useState} from "react"
import Carousel from "../../../UI/Carousel/Carousel"
import lottie_platform from '../../../../assets/lottie/platform.json'
import lottie_tracking from '../../../../assets/lottie/tracking.json'
import lottie_decentralized from '../../../../assets/lottie/decentralized.json'
import lottie_privacy from '../../../../assets/lottie/privacy.json'
import {useIntl} from "react-intl"
import LottieAnimation from "../../../UI/Lottie/Lottie"
import ProgressSteps from "../../../UI/Progress/ProgressSteps/ProgressSteps"
import useAppState from "../../../../store/appState/useAppState"
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext"
import Button from "../../../UI/Common/Button/Button"
import onboardingActions from "../../../../contexts/onboarding/onboardingActions"
import AlertDialog, {AlertDialogActions} from "../../../UI/Common/AlertDialog/AlertDialog"
import {Warning} from "../../../UI/Icons/Icons"
import {CONET_Platfrom_API} from '../../Apps/API/index'

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
    const intl = useIntl()
	
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
        intl.formatMessage({id: 'onboarding.setup.create.container'}),
        intl.formatMessage({id: 'onboarding.setup.verify.code'})
    ]

    const [setupState, setSetupState] = useState<number>(1)

    const verificationErrorModal = () => {
        const verificationStatus = state.onboardingPageData?.verificationStatus

        if (verificationStatus === 'SUCCESS') {
            return
        }

        let dialogMessage: ReactNode | string = intl.formatMessage({id: 'onboarding.verification.error.generic'})
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
                dialogMessage = intl.formatMessage({id: 'onboarding.verification.error.localserver'})
                break;
            case 'NO_INTERNET':
                dialogMessage = intl.formatMessage({id: 'onboarding.verification.error.internet'})
                break;
            case 'NOT_STRIPE':
                dialogMessage = intl.formatMessage({id: 'onboarding.verification.error.stripe'})
                break;
            case 'SEGURO_ERROR' || 'TIMEOUT_SEGURO_NETWORK':
                dialogMessage = intl.formatMessage({id: 'onboarding.verification.error.timeout'})
                break;
            case 'INVITATION_CODE_ERROR' || 'FAILURE':
                dialogMessage = intl.formatMessage({id: 'onboarding.verification.error.incorrect'})
                dialogActions.confirm.text = intl.formatMessage({id: 'onboarding.verification.modal.button.newCode'})
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
        const fetchData = async () => {
            if (!hasPasscode()) {
                const Api = new CONET_Platfrom_API()
                const [status, data] = await Api.createPasscode(state.onboardingPageData.passcode, locale)
               
                dispatch(onboardingActions.setVerificationStatus('SUCCESS'))
                location.reload()
            
            } else {
                setSetupState(prevState => prevState + 1)
            }
        }
        
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error)
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
                {intl.formatMessage({id: 'onboarding.carousel.title.seguro-platform'})}
               
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
            {intl.formatMessage({id: 'onboarding.carousel.content.seguro-platform'})}
                
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>,

        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                {intl.formatMessage({id: 'onboarding.carousel.title.no-ip-tracking'})}
                
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                {intl.formatMessage({id: 'onboarding.carousel.content.no-ip-tracking'})}
                
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>,

        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                {intl.formatMessage({id: 'onboarding.carousel.title.decentralized'})}
                
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                {intl.formatMessage({id: 'onboarding.carousel.content.decentralized'})}
                
            </StyledCarouselItemDescription>
        </StyledCarouselItemDetails>,

        <StyledCarouselItemDetails>
            <StyledCarouselItemTitle>
                {intl.formatMessage({id: 'oonboarding.carousel.title.anonymity'})}
                
            </StyledCarouselItemTitle>
            <StyledCarouselItemDescription>
                {intl.formatMessage({id: 'onboarding.carousel.content.anonymity'})}
                
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
                    ? <Button onClick={onSetupComplete}>{intl.formatMessage({id: 'onboarding.setup.enter.button'})}</Button>
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
