import styled from 'styled-components';
import {Locale} from "../../../../localization/types";

type LanguageProps = {
    languageName: string,
    englishName: string,
    locale: Locale,
    selectLocale: (locale: Locale) => void,
    selectedLocale: Locale
}

const StyledItem = styled.div<{selected: boolean}>`
  color: #404040;
  font-size: 16px;
  width: 100%;
  padding: 0 50px 0 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  cursor: pointer;
  background-color: ${props => props.selected ? props.theme.ui.selected : 'white'};
  color: ${props => props.selected ? 'white' : '#404040'};
  &:first-of-type {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-of-type {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
`

const StyledText = styled.p``

const StyledParenthesisText = styled.p`
  margin-left: 5px;
  opacity: 0.6;
`

const Language = (props: LanguageProps) => {
    return (
        <StyledItem onClick={() => props.selectLocale(props.locale)} selected={props.locale === props.selectedLocale}>
            <StyledText>{props.languageName}</StyledText>
            <StyledParenthesisText>({props.englishName})</StyledParenthesisText>
        </StyledItem>
    )
}

export default Language;