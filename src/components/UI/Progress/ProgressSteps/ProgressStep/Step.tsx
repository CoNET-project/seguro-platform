import styled from 'styled-components'

type StepProps = {
    stepReached: boolean
}

type StyledStepProps = {
    stepReached: boolean
}

const StyledStep = styled.div<StyledStepProps>`
  height: 5px;
  width: 100%;
  content: '';
  background-color: ${props => props.stepReached ? props.theme.ui.progress.bar.complete : props.theme.ui.progress.bar.incomplete};
  border-right: 1px solid ${props => props.theme.ui.progress.bar.separator};
  transition: background-color 150ms ease-in-out;

  &:last-of-type {
    border: none;
  }
`

const Step = ({stepReached}: StepProps) => {
    return <StyledStep stepReached={stepReached}/>
}

export default Step