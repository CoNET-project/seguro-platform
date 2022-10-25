import styled from "styled-components"
import React, {ChangeEvent, useRef, useState} from "react"
import SearchResult, {SearchResults} from "./SearchResult/SearchResult"


type SearchBarProps = {
    onSearch?: (value: string) => void,
    onFocus?: (isFocused: boolean) => void,
    results?: SearchResults[]
}

const StyledSearchContainer = styled.div`
	height: 50px;
	width: 100%;
	padding: 10px;
	position: relative;
	border-radius: 5px;
`

const StyledSearchBar = styled.input`
	background-color: rgba(0, 0, 0, 0.15);
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	border-radius: 2px;
	padding: 5px 10px;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	width: 100%;
	height: 100%;
	transition: background-color 50ms ease-in-out;
	position: relative;
	z-index: 199;
	color: ${props => props.theme.ui.colors.text.primary};

	&:focus {
		background-color: ${props => props.theme.ui.colors.background.elevationOne};
		outline: none;
		border: 1px solid ${props => props.theme.ui.colors.border.medium};
	}
`

const StyledSearchResults = styled.ul`
	width: calc(100% - 20px);
	height: 250px;
	content: '';
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	background-color: ${props => props.theme.ui.colors.background.elevationOne};
	border-top: none;
	position: absolute;
	top: 10px;
	padding-top: 30px;
	overflow: auto;
	word-wrap: anywhere;
	border-bottom-left-radius: 5px;
	border-bottom-right-radius: 5px;
	box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05);
	z-index: 198;
`

const SearchBar = ({onFocus, results, onSearch}: SearchBarProps) => {
    const [showResults, setShowResults] = useState(false)

    const searchBarRef = useRef<HTMLInputElement>(null)

    const onFocusBlur = (focused: boolean) => {
        if (onFocus) {
            onFocus(focused)
        }
        if (!focused && searchBarRef.current) {
            searchBarRef.current.value = ''
        }
    }

    const stopPropagation = (event: React.MouseEvent<HTMLUListElement>) => {
        event.preventDefault()
    }

    const onSearchBarChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        if (onSearch) {
            onSearch(value.toLowerCase())
        }
    }

	
    return (
        <StyledSearchContainer>
            <StyledSearchBar placeholder="Search..."
                             ref={searchBarRef}
                             onChange={onSearchBarChange}
                             onFocus={() => onFocusBlur(true)}
                             onBlur={() => onFocusBlur(false)}/>
            {
                results && results.length > 0 && (
                    <StyledSearchResults onMouseDown={e => stopPropagation(e)}>
                        {
                            results?.map((result, index) => (
                                <SearchResult
                                    key={`contact-list-search-result-${index}`}
                                    leftComponent={result.leftComponent}
                                    rightText={result.rightText}
                                    onClick={result.onClick}
                                />
                            ))
                        }
                    </StyledSearchResults>
                )
            }
        </StyledSearchContainer>
    )
}

export default SearchBar