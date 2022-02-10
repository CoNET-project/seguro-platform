import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-height: 200px;
  height: 100%;
  margin: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  resize: none;
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 6px 10px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.8);
  }
`

const StyledTextAreaLabel = styled.label`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  margin-bottom: 6px;
  color: ${props => props.theme.ui.colors.text.primary};
  margin-left: 2px;
`

type TextareaProps = {
    id: string,
    labelText: string
}

const Textarea = ({id, labelText}: TextareaProps) => {
    return (
        <StyledContainer>
            <StyledTextAreaLabel htmlFor={id}>{labelText}</StyledTextAreaLabel>
            <StyledTextArea id={id}/>
        </StyledContainer>

    )
}

export default Textarea