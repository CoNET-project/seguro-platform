import styled from 'styled-components';

type LanguageProps = {
    languageName: string,
    englishName: string,
    locale: string,
    selectLocale: (locale: string) => void
}

const StyledItem = styled.div`
  color: #404040;
  font-size: 16px;
  width: 100%;
  padding: 0 50px 0 20px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  cursor: pointer;
`

const StyledText = styled.p``

const StyledParenthesisText = styled.p`
  margin-left: 5px;
  opacity: 0.6;
`

const Language = (props: LanguageProps) => {
    return (
        <StyledItem onClick={() => props.selectLocale(props.locale)}>
            <StyledText>{props.languageName}</StyledText>
            <StyledParenthesisText>({props.englishName})</StyledParenthesisText>
        </StyledItem>
    )
}

export default Language;