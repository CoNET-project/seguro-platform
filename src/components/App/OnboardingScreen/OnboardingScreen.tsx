import styled from 'styled-components';
import LanguageSelect from "../../UI/LanguageSelect/LanguageSelect";
import Page from '../../UI/Layout/Pages/Locked-Register/Page';
import PageTitle from "../../UI/PageTitle/PageTitle";

const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background-color: ${props => props.theme.ui.backgroundColor};
    color: ${props => props.theme.ui.textColor};
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const OnboardingScreen = () => {
    const languages = [
        {
            name: '简体中文',
            englishName: 'Simplified Chinese',
            locale: ''
        },
        {
            name: 'Español',
            englishName: 'Spanish',
            locale: ''
        },
        {
            name: 'Français',
            englishName: 'French',
            locale: ''
        },
        {
            name: 'English',
            englishName: 'English',
            locale: ''
        },
        {
            name: 'Italiano',
            englishName: 'Italian',
            locale: ''
        },
        {
            name: 'Polski',
            englishName: 'Polish',
            locale: ''
        },
        {
            name: '日本',
            englishName: 'Japanese',
            locale: ''
        },
        {
            name: 'Svenska',
            englishName: 'Swedish',
            locale: ''
        },
        {
            name: 'Suomi',
            englishName: 'Finish',
            locale: ''
        },
        {
            name: 'Nederlands',
            englishName: 'Dutch',
            locale: ''
        }
    ]

    const selectLocale = (locale: string) => {
        console.log(locale)
    }
    return (
        <StyledContainer>
            <Page
                upperSection={<PageTitle text='Select Language'/>}
                middleSection={<LanguageSelect languages={languages} selectLocale={selectLocale}/>}
            />
        </StyledContainer>
    )
}

export default OnboardingScreen;