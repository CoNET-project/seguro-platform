import styled from "styled-components";
import {ReactNode} from "react";
import {motion, Variants} from "framer-motion";

type MotionWrapperProps = {
    children: ReactNode,
    runInitialAnimation: boolean,
    variants: Variants | undefined,
    custom: number,
    name: string
}

const StyledMotionWrapper = styled(motion.div)`
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: scroll;
  background-color: ${props => props.theme.ui.colors.background.elevationOne}
`

const MotionWrapper = ({children, runInitialAnimation, variants, custom, name}: MotionWrapperProps) => {
    return (
        <StyledMotionWrapper
            className="hideScrollbar"
            key={name}
            custom={custom}
            variants={variants}
            initial={runInitialAnimation ? "enter" : false}
            animate="center"
            exit="exit"
            transition={{
                x: {type: "just", duration: 0.2},
                opacity: {type: false}
            }}
        >
            {children}
        </StyledMotionWrapper>
    )
}

export default MotionWrapper
