import styled from "styled-components"
import {screenWidth} from "../../../UI/screenSizes"
import useAppState from "../../../../store/appState/useAppState"
import React, {useEffect, useState} from "react"
import VerificationAnimation from "../../../../assets/lottie/verification.json"
import LottieAnimation from "../../../UI/Lottie/Lottie"
import {isUUIDv4} from "../../../../utilities/utilities"
import LargeInput from "../../../UI/Inputs/LargeInput/LargeInput"
import Button from "../../../UI/Common/Button/Button"
import {FormattedMessage} from "react-intl"
import {verifyInvitation} from "../../../../services/workerService/workerService"
import {ThreeCircles} from "react-loader-spinner"
import {OverlayDarker} from "../../../UI/Common/Overlay/Overlay"

const StyledVerificationModal = styled.div`
  width: 360px;
  height: 640px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);

  @media (${screenWidth.narrowWidth}) {
    height: 500px;
    width: 400px;
  }
`

const StyledSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledVisual = styled.div`
  max-height: 150px;
  max-width: 150px;
`

const StyledErrorMessage = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  color: ${props => props.theme.ui.colors.dangerous};
  margin-bottom: 20px;
`

const StyledModalTitle = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
  font-weight: 700;
  margin: 20px 0;
  color: ${props => props.theme.ui.colors.text.primary}
`

const StyledModalSubtitle = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  text-align: center;
  color: ${props => props.theme.ui.colors.text.primary};
`

const VerificationModal = () => {
    const {setIsShowOverlay, setIsUnlocked} = useAppState()
    const [verificationCode, setVerificationCode] = useState("")
    const [isVerifying, setIsVerifying] = useState(false)
    const [verificationError, setVerificationError] = useState<'INVITATION_CODE_ERROR' | 'ERROR' | boolean>(false)

    useEffect(() => {
        setIsShowOverlay(true)

        return () => {
            setIsShowOverlay(false)
        }
    }, [])

    const onVerifyHandler = () => {
        if (!verificationCode || !isUUIDv4(verificationCode)) {
            return setVerificationError('INVITATION_CODE_ERROR')
        }
        setIsVerifying(true)
        verifyInvitation(verificationCode).then((status) => {
            switch (status) {
                case 'SUCCESS':
                    setIsUnlocked(true)
                    return
                case 'INVITATION_CODE_ERROR':
                    setVerificationError(status)
                    setIsVerifying(false)
                    return
                default:
                    setVerificationError('ERROR')
                    setIsVerifying(false)
                    return
            }
        })
    }

    const getErrorMessage = () => {
        if (verificationError === 'INVITATION_CODE_ERROR') {
            return <FormattedMessage id='onboarding.verification.error.incorrect'/>
        } else if (verificationError === 'ERROR') {
            return <FormattedMessage id='onboarding.verification.error.generic'/>
        }
    }


    return (
        <>
            <OverlayDarker show={true} onClick={() => {
				
            }}/>
            <StyledVerificationModal>
                <StyledSection>
                    <StyledVisual>
                        <LottieAnimation animationSrc={VerificationAnimation}/>
                    </StyledVisual>
                    <StyledModalTitle>Verification Required</StyledModalTitle>
                    <StyledModalSubtitle>Please enter your 36 character invitation code to complete your
                        setup.</StyledModalSubtitle>
                    <LargeInput value=''
                                setValue={(val) => {
                                    setVerificationCode(val)
                                    setVerificationError(false)
                                }}
                                error={!!verificationError}
                    />
                    <StyledErrorMessage>
                        {
                            typeof verificationError === 'string' && getErrorMessage()
                        }
                    </StyledErrorMessage>
                </StyledSection>
                {
                    isVerifying ? (
                        <ThreeCircles
                            color="#396FC0"
                            height={30}
                            width={30}
                        />
                    ) : (
                        <Button
                            onClick={onVerifyHandler}>
                            <FormattedMessage id='platform.modal.verification.button'/>
                        </Button>
                    )
                }
            </StyledVerificationModal>
        </>
    )
}

export default VerificationModal