import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  max-height: 150px;
  height: 100%;
  margin-bottom: 10px;
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
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  color: ${props => props.theme.ui.colors.text.primary};
  margin-bottom: 10px;

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
    labelText: string,
    onChange: (val: string) => void
}

const Textarea = ({id, labelText, onChange}: TextareaProps) => {
    return (
        <StyledContainer>
            <StyledTextAreaLabel htmlFor={id}>{labelText}</StyledTextAreaLabel>
            <StyledTextArea id={id} onChange={e => onChange(e.target.value)}/>
        </StyledContainer>

    )
}

export default Textarea