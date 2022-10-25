import styled from 'styled-components'
import Dot from './Dot/Dot'
import React, {Fragment, ReactNode} from "react"

export type ProgressDotsProps = {
    numberOfDots: number,
    current: number
}

const StyledProgressDots = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`


const ProgressDots = ({numberOfDots, current}: ProgressDotsProps) => {


    const getDots = (): Array<ReactNode> => {
        const dots: Array<ReactNode> = []
        for (let i = 0; i < numberOfDots; i++) {
            dots.push(<Dot selected={i == (current - 1)}/>)
        }
        return dots
    }
    return (
        <StyledProgressDots>
            {getDots().map((dot, idx) => <Fragment key={idx}>{dot}</Fragment>)}
        </StyledProgressDots>
    )
}

export default ProgressDots