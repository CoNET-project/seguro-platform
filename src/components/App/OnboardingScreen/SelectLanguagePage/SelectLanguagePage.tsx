import styled from 'styled-components';
import LanguageSelect from "../../../UI/LanguageSelect/LanguageSelect";
import {Locale} from "../../../../localization/types";
import Page from '../../../UI/Layout/Page/Page';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import {FormattedMessage} from "react-intl";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
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
  margin-bottom: 50px;
`

const StyledPageTitle = styled.h1`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
  margin-bottom: 10px;
`

const StyledPageSubtitle = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  text-align: center;
  min-height: 32px;
  width: 70%;
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
            pageTransition={{
                key: state.currentPage[0],
                direction: state.currentPage[1]
            }}
        >
            <StyledContainer>
                <StyledPageHeader>
                    <StyledPageTitle>
                        <FormattedMessage id='onboarding.selectLanguageTitle'/>
                    </StyledPageTitle>
                    <StyledPageSubtitle>
                        <FormattedMessage id='onboarding.selectLanguageSubtitle'/>
                    </StyledPageSubtitle>
                </StyledPageHeader>
                <LanguageSelect languages={languages}
                                selectLocale={selectLocale}
                                selectedLocale={locale}/>
            </StyledContainer>
        </Page>

    )
}

export default SelectLanguagePage
