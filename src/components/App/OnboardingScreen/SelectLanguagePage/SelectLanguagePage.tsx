import styled from 'styled-components';
import LanguageSelect from "../../../UI/LanguageSelect/LanguageSelect";
import {Locale} from "../../../../localization/types";
import {PageTransitionProps} from "../../../UI/Layout/Pages/Locked-Register/Page";
import {FormattedMessage} from "react-intl";
import StepButtons from '../../../UI/StepButtons/StepButtons';
import useAppState from "../../../../store/appState/useAppState";
import Page from '../../../UI/Layout/Page/Page';
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext";
import onboardingActions from "../../../../contexts/onboarding/onboardingActions";
import {LanguageIcon} from '../../../UI/Icons/Icons';

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
        <Page titleComponent={<FormattedMessage
            id='onboarding.selectLanguageTitle'/>}
              icon={<LanguageIcon size='lg'/>}
              contentComponents={
                  <LanguageSelect languages={languages}
                                  selectLocale={selectLocale}
                                  selectedLocale={locale}/>
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