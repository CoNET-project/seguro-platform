import styled from "styled-components";

type SeparatorProps = {
    color?: string
}

type StyledSeparatorProps = {
    color?: string
}

const StyledSeparator = styled.hr<StyledSeparatorProps>`
  background-color: ${props => props.color || 'white'};
  width: 100%;
  height: 1px;
  border: none;
`

const Separator = ({color}: SeparatorProps) => {
    return (
        <StyledSeparator color={color}/>
    )
}

export default Separator
