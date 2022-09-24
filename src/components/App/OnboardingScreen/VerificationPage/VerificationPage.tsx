import styled from 'styled-components'
import Page from "../../../UI/Layout/Page/Page";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import LargeInput from "../../../UI/Inputs/LargeInput/LargeInput";
import {FormattedMessage} from "react-intl";
import LottieAnimation from '../../../UI/Lottie/Lottie';
import VerificationAnimation from '../../../../assets/lottie/verification.json'
import {screenWidth} from "../../../UI/screenSizes";
import Wallpaper_1 from "../../../../assets/messenger/wallpaper/messenger-wallpaper-1.jpg";
import {StyledWallpaperBox} from '../../Apps/Messenger/Panels/LeftPanel/Settings/Chats/Wallpaper';

const StyledContainer = styled.div`
  width: 100%;
  //padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledPageHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`

const StyledPageContents = styled.div`
  width: 100%;
`


const StyledPageTitle = styled.h1`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
  margin-bottom: 10px;

  @media (${screenWidth.mediumWidth}) {
    margin-bottom: 30px;
    font-size: 36px;
  }
`

const StyledVerificationText = styled.p`
  width: 100%;
  line-height: 24px;
  color: ${props => props.theme.ui.colors.text.primary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};

  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  }
`

const StyledVerificationInputLabel = styled(StyledVerificationText)``

const StyledLottieWrapper = styled.div`
  width: 150px;

  @media (${screenWidth.mediumWidth}) {
    width: 200px;
  }
`

const VerificationPage = () => {
	const {state, dispatch} = useOnboardingPageNavigator()

	const verificationInputHandler = (value: string) => {
		dispatch(onboardingActions.setVerificationCode(value))
	}

	return <Page
		pageTransition={{
			key: state.currentPage[0],
			direction: state.currentPage[1]
		}}
	>
		<StyledContainer>
			<StyledPageHeader>
				This is my local change
			</StyledPageHeader>
			<StyledWallpaperBox imageSrc={Wallpaper_1} height={"500px"} width={"300px"}/>
		</StyledContainer>
	</Page>
}

export default VerificationPage
