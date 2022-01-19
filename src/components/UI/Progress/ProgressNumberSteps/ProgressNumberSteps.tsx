import ProgressNumber from "./ProgressNumber/ProgressNumber";
import styled from "styled-components";
import {Fragment} from "react";

type StyledProgressNumberBlockProps = {
    isActive: boolean
}

const StyledProgressNumberSteps = styled.div`
  display: flex;
  align-items: center;
`

const StyledProgressNumberBlock = styled.div<StyledProgressNumberBlockProps>`
  width: 25px;
  height: 3px;
  margin: 0 6px;
  content: '';
  background-color: ${props => props.isActive ? props.theme.ui.colors.primary : props.theme.ui.colors.background.elevationOne};
  transition: background-color 300ms ease-in-out;
  border: 1px solid ${props => props.theme.ui.colors.border.light}
`

export type ProgressNumberStepsProps = {
    currentActiveStep: number,
    steps: number,
    className?: string
}

const ProgressNumberSteps = ({currentActiveStep, steps, className}: ProgressNumberStepsProps) => {

    const totalSteps = Array.from({length: steps}, (_, i) => i + 1)

    const generateContent = (number: number, nthElement: number, start?: boolean) => {
        return (
            <Fragment key={nthElement}>
                {!start &&
                <StyledProgressNumberBlock isActive={currentActiveStep >= nthElement}/>}
                <ProgressNumber number={number} isActive={currentActiveStep >= nthElement}/>
            </Fragment>
        )
    }

    return (
        <StyledProgressNumberSteps className={className}>
            {totalSteps.map((number, idx) => {
                return (
                    generateContent(number, idx + 1, idx === 0)
                )
            })}
        </StyledProgressNumberSteps>
    )
}

export default ProgressNumberSteps