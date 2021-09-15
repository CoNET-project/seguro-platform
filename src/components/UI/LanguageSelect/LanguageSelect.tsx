import styled from 'styled-components';
import Language from "./Language/Language";
import {Locale} from "../../../localization/types";
import React, {useEffect} from "react";
import {windowKeyListener} from "../../../utilities/utilities";

type LanguageSelectProps = {
    languages: Array<{ name: string, englishName: string, locale: Locale }>,
    selectLocale: (locale: Locale) => void,
    selectedLocale: Locale
}

const StyledContainer = styled.ul`
  width: 100%;
  height: 100%;
  max-height: 540px;
  border-radius: 5px;
  overflow-y: auto;
  background-color: ${props => props.theme.ui.backgroundAccent};
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
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
                    selectedLocale={props.selectedLocale}
                    key={idx}
                    index={idx + 1}
                />
            )}
        </StyledContainer>
    )
}

export default LanguageSelect