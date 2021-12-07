import styled from "styled-components";
import {screenWidth} from "../../../UI/screenSizes";
import {useState} from "react";
import Carousel from "../../../UI/Carousel/Carousel";
import lottie_platform from '../../../../assets/lottie/platform.json'
import lottie_tracking from '../../../../assets/lottie/tracking.json'
import lottie_decentralized from '../../../../assets/lottie/decentralized.json'
import lottie_privacy from '../../../../assets/lottie/privacy.json'
import {FormattedMessage} from "react-intl";
import LottieAnimation from "../../../UI/Lottie/Lottie";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  //padding: 50px;
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


const StyledPageTitle = styled.h1`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
  margin-bottom: 10px;

  @media (${screenWidth.mediumWidth}) {
    margin-bottom: 30px;
    font-size: 30px;
  }
`

type CarouselState = [number, -1 | 1]

const SettingUpPage = () => {
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
            <StyledPageUpper>
                <StyledPageVisual>
                    <Carousel
                        current={carouselState[0]}
                        hasTouch={false}
                        carouselVisualItems={carouselVisualItems}
                        carouselExtraItems={carouselExtraItems}
                    />
                </StyledPageVisual>
            </StyledPageUpper>
            <StyledPageLower>
                hello
            </StyledPageLower>
        </StyledContainer>
    )
}

export default SettingUpPage