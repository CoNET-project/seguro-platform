import {Languages} from "../../OnboardingScreen/SelectLanguagePage/SelectLanguagePage"
import LanguageSelect from "../../../UI/LanguageSelect/LanguageSelect";
import useAppState from "../../../../store/appState/useAppState";

const SelectLanguage = () => {
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
        <LanguageSelect languages={languages} selectLocale={(locale) => appState.setLocale(locale)}
                        selectedLocale={appState.locale}/>
    )
}

export default SelectLanguage