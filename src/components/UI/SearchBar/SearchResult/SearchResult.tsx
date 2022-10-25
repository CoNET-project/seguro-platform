import styled from "styled-components"
import React, {ReactNode} from "react"

const StyledSearchResult = styled.li`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  content: '';
  padding: 10px 5px;
  cursor: pointer;
  border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};

  &:hover {
    background-color: ${props => props.theme.ui.colors.secondary};
  }
`


export type SearchResults = SearchResultProps

type SearchResultProps = {
    leftComponent?: ReactNode,
    rightText: ReactNode | string,
    onClick?: () => void
}
const StyledResultColumn = styled.div`
	display: flex;
`

const StyledResultText = styled.p`
	font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} - 1px);
	color: ${props => props.theme.ui.colors.text.primary};
	margin-left: 5px;

	${StyledSearchResult}:hover & {
		color: whitesmoke;
	}

`

const StyledResultLeft = styled(StyledResultColumn)`
	width: 45px;
	display: flex;
	align-items: center;
	justify-content: center;
`
const SearchResult = ({leftComponent, rightText, onClick}: SearchResultProps) => {
	

    return (
        <StyledSearchResult onClick={onClick}>
            {
                leftComponent && (
                    <StyledResultLeft>{leftComponent}</StyledResultLeft>
                )
            }
            <StyledResultColumn><StyledResultText>{rightText}</StyledResultText></StyledResultColumn>
        </StyledSearchResult>
    )
}

export default SearchResult