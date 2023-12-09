import styled from 'styled-components'
import LanguageSelect from "../../../UI/LanguageSelect/LanguageSelect"
import {Locale} from "../../../../localization/types"
import Page from '../../../UI/Layout/Page/Page'
import {useOnboardingPageNavigator} from "../../../../contexts/onboarding/OnboardingContext"
import {FormattedMessage, useIntl} from "react-intl";
import {screenHeight, screenWidth} from '../../../UI/screenSizes'
import React from 'react'



export type Languages = {
    name: string,
    englishName: string,
    locale: Locale
}

type SelectLanguageProps = {
    selectLocale: (locale: Locale) => void,
    locale: Locale
}
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
	background-color: ${props => props.theme.ui.colors.background.elevationOne};
	border-radius: 5px;

	@media (${screenHeight.tallHeight}) {
		height: 20rem;
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
const SelectLanguagePage = ({selectLocale, locale}: SelectLanguageProps) => {
	
    const {state, dispatch} = useOnboardingPageNavigator()
    const intl = useIntl()
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
                        {intl.formatMessage({id: 'onboarding.selectLanguageTitle'})}
                        
                    </StyledPageTitle>
                </StyledPageHeader>
                <StyledPageContents>
                    <LanguageSelect languages={languages}
                                    selectLocale={
                                        selectLocale
                                    }
                                    selectedLocale={locale}/>
                </StyledPageContents>
            </StyledContainer>
        </Page>

    )
}

export default SelectLanguagePage
