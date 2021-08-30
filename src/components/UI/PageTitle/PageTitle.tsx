import styled from 'styled-components'

const StyledTitle = styled.h1`
  color: ${props => props.theme.ui.textColor};
  font-size: 30px;
`

const PageTitle = (props: {text: string}) => <StyledTitle>{props.text}</StyledTitle>

export default PageTitle;