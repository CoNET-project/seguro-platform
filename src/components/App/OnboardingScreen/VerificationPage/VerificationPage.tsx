import styled from 'styled-components'
import Page from "../../../UI/Layout/Page/Page";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import {ReactNode} from "react";
import Input from "../../../UI/Inputs/Input/Input";
import {FormattedMessage} from "react-intl";
import {CircleCheck} from "../../../UI/Icons/Icons";
import {isUUIDv4} from "../../../../utilities/utilities";
import Title from "../../../UI/Common/Title/Title";
import VerificationAnimation from '../../../../assets/lottie/verification.json'
import LottieAnimation from '../../../UI/Lottie/Lottie';

const StyledVerificationContent = styled.div`
  width: 100%;
`

const StyledVerificationText = styled.p`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: ${props => props.theme.ui.text.textPrimary}
`

const StyledLottieWrapper = styled.div`
  width: 150px;
`


const VerificationPage = () => {
    const {state, dispatch} = useOnboardingPageNavigator()

    const verificationInputHandler = (value: string) => {
        dispatch(onboardingActions.setVerificationCode(value))
    }

    const previousButtonHandler = () => {
        verificationInputHandler('')
        dispatch(onboardingActions.previousPage())
    }

    return <Page
        contentComponents={
            {
                contentLeft: (
                    <>
                        <StyledLottieWrapper>
                            <LottieAnimation animationSrc={VerificationAnimation}/>
                        </StyledLottieWrapper>
                        <Title>
                            <FormattedMessage id='onboarding.verificationTitle'/>
                        </Title>
                    </>
                ),
                contentRight: (
                    <StyledVerificationContent>
                        <>
                            <Input value=''
                                   setValue={verificationInputHandler}
                                   inputOptions={{
                                       inputLabel: (<FormattedMessage id='onboarding.verificationInputLabel'/>),
                                       inputRightComponent: (
                                           <CircleCheck
                                               size={20}
                                               valid={isUUIDv4(state.onboardingPageData?.verificationCode)}
                                           />)
                                   }}
                            />
                            <StyledVerificationText>
                                <FormattedMessage id='onboarding.verificationText'/>
                            </StyledVerificationText>
                        </>
                    </StyledVerificationContent>
                )
            }
        }
        stepButtonsClickActions={{
            nextButton: {
                action: () => {
                    dispatch(onboardingActions.nextPage())
                }
            },
            previousButton: {
                action: previousButtonHandler
            }
        }}
        pageTransition={{
            key: state.currentPage[0],
            direction: state.currentPage[1]
        }}
    />
}

export default VerificationPage