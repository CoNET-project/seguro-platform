import ProgressNumber from "./ProgressNumber/ProgressNumber";
import styled from "styled-components";

type StyledProgressNumberBlockProps = {
    isActive: boolean,
    nth: number
}

const StyledProgressNumberSteps = styled.div`
  display: flex;
  align-items: center;
`

const StyledProgressNumberBlock = styled.div<StyledProgressNumberBlockProps>`
  width: 25px;
  height: 3px;
  margin: 0 5px;
  content: '';
  background-color: ${props => props.isActive ? props.theme.ui.colors.primary : props.theme.ui.colors.background.elevationOne};

  &:nth-child(-n + ${props => props.nth + 1}) {
    background-color: ${props => props.theme.ui.colors.primary};
  }

  &:nth-child(n + ${props => props.nth}) {
    background-color: ${props => props.theme.ui.colors.background.elevationOne};
  }

`

export type ProgressNumberStepsProps = {
    currentActiveStep: number
}

const ProgressNumberSteps = ({currentActiveStep}: ProgressNumberStepsProps) => {

    const totalSteps = [1, 2, 3, 4]

    const generateContent = (number: number, index: number, active: boolean, start?: boolean) => {
        return (
            <>
                {!start && <StyledProgressNumberBlock nth={index} isActive={active}/>}
                <ProgressNumber number={number} isActive={active}/>
            </>
        )
    }

    return (
        <StyledProgressNumberSteps>
            {totalSteps.map((number, idx) => {
                return (
                    generateContent(number, idx, currentActiveStep === idx + 1, idx + 1 === 1)
                )
            })}
        </StyledProgressNumberSteps>
    )
}

export default ProgressNumberSteps