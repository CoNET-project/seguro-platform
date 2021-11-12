import styled from 'styled-components';
import StepButton from "./StepButton/StepButton";
import {ChevronLeft, ChevronRight} from "../Icons/Icons";
import {
    CgArrowLongLeft,
    CgArrowLongRight,
    FaArrowLeft,
    FaArrowRight,
    HiArrowNarrowLeft,
    HiArrowNarrowRight
} from "react-icons/all";
import {FormattedMessage} from "react-intl";
import {screenWidth} from '../screenSizes';
import {ReactNode} from "react";

export type StepButtonsClickActions = {
    previousButton?: {
        text?: ReactNode | string,
        action: () => void
    },
    nextButton?: {
        text?: ReactNode | string,
        action: () => void
    }
}


export type StepButtonsProps = {
    actionHandler: StepButtonsClickActions
}

const StyledStepButtons = styled.div`
  width: 100%;
  min-width: 15rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StepButtons = ({actionHandler}: StepButtonsProps) => {
    return (
        <StyledStepButtons>
            {
                !actionHandler.previousButton && (
                    <div/>
                )
            }
            {
                actionHandler.previousButton && (
                    <StepButton
                        text={actionHandler.previousButton.text || <FormattedMessage id='button.back'/>}
                        onClick={actionHandler.previousButton.action}
                        iconLeft={<CgArrowLongLeft/>}/>
                )
            }
            {
                actionHandler.nextButton && (
                    <StepButton
                        text={actionHandler.nextButton.text || <FormattedMessage id='button.next'/>}
                        onClick={actionHandler.nextButton.action}
                        iconRight={<CgArrowLongRight/>}/>
                )
            }
        </StyledStepButtons>
    )
}

export default StepButtons
