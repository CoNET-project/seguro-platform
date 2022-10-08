import {Languages} from "../../../OnboardingScreen/SelectLanguagePage/SelectLanguagePage"
import LanguageSelect from "../../../../UI/LanguageSelect/LanguageSelect"
import useAppState from "../../../../../store/appState/useAppState"
import MotionWrapper from "../../../../UI/Motion/MotionWrapper"
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants"
import styled from "styled-components"
import {Locale} from "../../../../../localization/types"
import {usePageNavigator} from "../../../../../contexts/pageNavigator/PageNavigatorContext"
import {pageNavigator} from "../../../../../contexts/pageNavigator/pageNavigatorActions"
import {savePreferences} from "../../../../../services/workerService/workerService"
import React from 'react'

type LanguageProps = {
    custom: number
}

const StyledLanguage = styled.div`
  min-height: 30rem;
  height: 100%;
`

const Language = ({custom}: LanguageProps) => {
    const {setLocale, locale} = useAppState();
    const {dispatch} = usePageNavigator()
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

    const selectLocale = (locale: Locale) => {
        setLocale(locale)
        savePreferences({
            language: locale
        }).then(() => {
            dispatch(pageNavigator.navigateToPage('Platform Settings'))
        })
    }


    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Language" variants={pageTransitionVariants}>
            <StyledLanguage>
                <LanguageSelect languages={languages} selectLocale={selectLocale}
                                selectedLocale={locale}/>
            </StyledLanguage>
        </MotionWrapper>
    )
}

export default Language
