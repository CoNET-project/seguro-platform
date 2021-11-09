import {Languages} from "../../../OnboardingScreen/SelectLanguagePage/SelectLanguagePage"
import LanguageSelect from "../../../../UI/LanguageSelect/LanguageSelect";
import useAppState from "../../../../../store/appState/useAppState";
import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";
import styled from "styled-components";

type LanguageProps = {
    custom: number
}

const StyledLanguage = styled.div`
  min-height: 30rem;
  height: 100%;
`

const Language = ({custom}: LanguageProps) => {
    const appState = useAppState();
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
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Language" variants={pageTransitionVariants}>
            <StyledLanguage>
                <LanguageSelect languages={languages} selectLocale={(locale) => appState.setLocale(locale)}
                                selectedLocale={appState.locale}/>
            </StyledLanguage>
        </MotionWrapper>
    )
}

export default Language
