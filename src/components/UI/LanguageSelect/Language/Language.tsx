import styled from 'styled-components'
import {Locale} from "../../../../localization/types"
import {screenWidth} from "../../screenSizes";
import React from 'react'

type LanguageProps = {
    index: number,
    languageName: string,
    englishName: string,
    locale: Locale,
    selectLocale: (locale: Locale) => void,
    selectedLocale: Locale
}

const StyledItem = styled.li<{ selected: boolean }>`
	width: 100%;
	padding: 15px 0 15px 15px;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
	display: flex;
	align-items: center;
	cursor: pointer;
	background-color: ${props => props.selected ?
			props.theme.ui.colors.primary :
			"transparent"};
	color: ${props => props.selected ? 'white' : props.theme.ui.colors.text.primary};
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	//&:first-of-type {
	//  border-top-left-radius: 5px;
	//  border-top-right-radius: 5px;
	//}
	//
	//&:last-of-type {
	//  border-bottom-left-radius: 5px;
	//  border-bottom-right-radius: 5px;
	//}

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
        <StyledItem onClick={() => props.selectLocale(props.locale)} selected={props.locale === props.selectedLocale}
                    tabIndex={props.index}>
            <StyledText>{props.languageName}</StyledText>
            <StyledParenthesisText>({props.englishName})</StyledParenthesisText>
        </StyledItem>
    )
}

export default Language;
