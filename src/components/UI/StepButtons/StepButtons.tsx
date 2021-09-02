import styled from 'styled-components'
import StepButton from './StepButton/StepButton'
import { FaChevronLeft, FaChevronRight } from "react-icons/all";
import {FormattedMessage} from "react-intl";

type StepButtonsClickActions = {
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
`

const StyledBox = styled.div`
`


const StepButtons = ({previousButton, nextButton}: StepButtonsClickActions) => {
    // @ts-ignore
    console.log(previousButton, nextButton.action)
    return (
        <StyledContainer>
            <StyledBox>
                {
                    previousButton ? <StepButton
                        text={previousButton.text || <FormattedMessage id='button.back'/>} iconLeft={<FaChevronLeft color="white" size={20}/>}
                        onClick={previousButton.action}/> : null
                }
            </StyledBox>
            <StyledBox>
                {
                    nextButton ? <StepButton
                        text={nextButton.text || <FormattedMessage id='button.next'/>} iconRight={<FaChevronRight color="white" size={20} />}
                        onClick={nextButton.action}/> : null
                }
            </StyledBox>
        </StyledContainer>
    )
}

export default StepButtons