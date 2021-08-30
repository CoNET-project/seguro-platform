import styled from 'styled-components';
import Language from "./Language/Language";

type LanguageSelectProps = {
    languages: Array<{name: string, englishName: string, locale: string}>,
    selectLocale: (locale: string) => void
}

const StyledContainer = styled.div`
  min-width: 15rem;
  max-height: 40rem;
  border-radius: 5px;
  background-color: white;
  overflow-y: auto;
`

const LanguageSelect = (props: LanguageSelectProps) => {
    return (
        <StyledContainer>
            {props.languages.map((language, idx) =>
                <Language
                    languageName={language.name}
                    englishName={language.englishName}
                    locale={language.locale}
                    selectLocale={props.selectLocale}
                    key={idx}/>
            )}
        </StyledContainer>
    )
}

export default LanguageSelect