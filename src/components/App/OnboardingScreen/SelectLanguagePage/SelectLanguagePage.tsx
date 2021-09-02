import styled from 'styled-components';
import LanguageSelect from "../../../UI/LanguageSelect/LanguageSelect";
import {Locale} from "../../../../localization/types";
import Page, {PageTransitionProps} from "../../../UI/Layout/Pages/Locked-Register/Page";
import {FormattedMessage} from "react-intl";
import StepButtons from '../../../UI/StepButtons/StepButtons';
import useAppState from "../../../../store/appState/useAppState";

const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`

type Languages = {
    name: string,
    englishName: string,
    locale: Locale
}

type SelectLanguageProps = {
    selectLocale: (locale: Locale) => void,
    locale: Locale,
    nextButtonAction?: () => void,
} & PageTransitionProps

const SelectLanguagePage = ({selectLocale, locale, nextButtonAction, pageTransition}: SelectLanguageProps) => {

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
        <Page title={<FormattedMessage id="onboarding.selectLanguage"/>}
              contentComponents={<LanguageSelect languages={languages}
                                                 selectLocale={selectLocale}
                                                 selectedLocale={locale}/>}
              buttonComponents={<StepButtons nextButton={{action: nextButtonAction}}/>}
              pageTransition={pageTransition}
        />
    )
}

export default SelectLanguagePage