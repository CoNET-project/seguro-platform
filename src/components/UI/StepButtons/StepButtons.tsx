import styled from 'styled-components'
import StepButton from './StepButton/StepButton'
import {FormattedMessage} from "react-intl";
import {ChevronLeft, ChevronRight} from "../Icons/Icons";

export type StepButtonsClickActions = {
    previousButton?: {
        text?: string,
        action?: () => void
    },
    nextButton?: {
        text?: string,
        action?: () => void
    }
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  overflow: hidden;
  color: ${props => props.theme.ui.textColor}
`

const StyledBox = styled.div`
`


const StepButtons = ({previousButton, nextButton}: StepButtonsClickActions) => {
    return (
        <StyledContainer>
            <StyledBox>
                {
                    previousButton ? <StepButton
                        text={previousButton.text || <FormattedMessage id='button.back'/>}
                        iconLeft={<ChevronLeft size={18}/>}
                        onClick={previousButton.action}/> : null
                }
            </StyledBox>
            <StyledBox>
                {
                    nextButton ? <StepButton
                        text={nextButton.text || <FormattedMessage id='button.next'/>}
                        iconRight={<ChevronRight size={18}/>}
                        onClick={nextButton.action}/> : null
                }
            </StyledBox>
        </StyledContainer>
    )
}

export default StepButtons