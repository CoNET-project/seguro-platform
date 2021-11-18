import styled from 'styled-components';
import LanguageSelect from "../../../UI/LanguageSelect/LanguageSelect";
import {Locale} from "../../../../localization/types";
import {FormattedMessage} from "react-intl";
import Page from '../../../UI/Layout/Page/Page';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import {LogoImage} from '../../../UI/Logo/Logo';
import {screenWidth} from "../../../UI/screenSizes";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;

  @media (${screenWidth.mediumWidth}) {
    max-height: 50%;
  }
`

const StyledTitle = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.lg};
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.medium.xl};
  }
`

export type Languages = {
    name: string,
    englishName: string,
    locale: Locale
}

type SelectLanguageProps = {
    selectLocale: (locale: Locale) => void,
    locale: Locale
}

const SelectLanguagePage = ({selectLocale, locale}: SelectLanguageProps) => {
    const {state, dispatch} = useOnboardingPageNavigator()
    const languages: Array<Languages> = [
        {
            name: 'English',
            englishName: 'English',
            locale: 'en-US'
        },
        {
            name: '简体中文',
            englishName: 'Simplified Chinese',
            locale: 'zh-CN'
        },
        {
            name: '繁體中文',
            englishName: 'Traditional Chinese',
            locale: 'zh-TW'
        }
    ]

    return (
        <Page
            contentComponents={
                {
                    contentLeft: (
                        <>
                            <LogoImage size={200}/>
                            <StyledTitle>
                                <FormattedMessage id='onboarding.selectLanguageTitle'/>
                            </StyledTitle>
                        </>
                    ),
                    contentRight: (
                        <StyledContainer>
                            <LanguageSelect languages={languages}
                                            selectLocale={selectLocale}
                                            selectedLocale={locale}/>
                        </StyledContainer>

                    )
                }
            }
            stepButtonsClickActions={{
                nextButton: {
                    action: () => {
                        dispatch(onboardingActions.nextPage())
                    }
                }
            }}
            pageTransition={{
                key: state.currentPage[0],
                direction: state.currentPage[1]
            }}
        />

    )
}

export default SelectLanguagePage
