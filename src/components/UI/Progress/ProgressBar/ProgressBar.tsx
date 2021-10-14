import styled from "styled-components";

export type ProgressBarProps = {
    progress: number
}

type StyledProgressCompleteProps = {
    progress: number
}

const StyledProgressBar = styled.div`
  width: 100%;
  height: 10px;
  content: '';
  background-color: ${props => props.theme.ui.backgroundAccent};
  position: relative;
  border-radius: 25px;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 3px rgba(0, 0, 0, 0.15);
`

const StyledProgressComplete = styled.div<StyledProgressCompleteProps>`
  transition: width 150ms ease-in-out;
  width: ${props => `${props.progress}%`};
  height: 100%;
  content: '';
  position: absolute;
  top: 0;
  background-color: ${props => props.theme.ui.primaryColor};
  border-radius: 25px;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
  z-index: 100;
  box-shadow: 1px 0 1px rgba(0, 0, 0, 0.5);
`
const ProgressBar = ({progress}: ProgressBarProps) => {
    if (progress < 0 || progress > 100) {
        throw Error('Please use a progress value between 0 and 100!')
    }
    return (
        <StyledProgressBar>
            <StyledProgressComplete progress={progress}/>
        </StyledProgressBar>
    )
}

export default ProgressBar