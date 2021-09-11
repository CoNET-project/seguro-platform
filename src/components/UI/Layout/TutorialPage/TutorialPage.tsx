import {motion} from 'framer-motion'
import styled from 'styled-components'
import {ReactNode} from "react";
import StepButtons, {StepButtonsClickActions} from "../../StepButtons/StepButtons";
import {pageTransitionVariants} from "../../Motion/Variants/Variants";
import {screenWidth} from "../../screenSizes";

export type PageTransitionProps = {
    pageTransition: {
        key: number | string,
        direction: -1 | 1
    }
}

type TutorialPageProps = {
    icon?: ReactNode,
    header?: ReactNode,
    contentComponents: ReactNode,
    lowerContentComponents?: ReactNode
} & PageTransitionProps


const StyledTutorialPage = styled(motion.div)`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  background-color: ${props => props.theme.ui.backgroundColor};
  position: absolute;
`

const StyledTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.ui.textColor};
  font-size: clamp(16px, 12vw, 36px);
  font-family: 'Montserrat Bold', sans-serif;
`

const StyledContents = styled.div`
  min-width: 100%;
  width: 100%;
  flex: 1;
  height: 100%;
  content: '';
  color: ${props => props.theme.ui.textColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledTitleContainer = styled(StyledContent)`
  height: unset;
`

const StyledLowerContentContainer = styled.div`
  width: 100%;
`

const TutorialPage = ({
                          icon,
                          header,
                          contentComponents,
                          lowerContentComponents,
                          pageTransition
                      }: TutorialPageProps) => {
    return (
        <StyledTutorialPage
            key={pageTransition.key}
            custom={pageTransition.direction}
            initial="enter"
            animate="center"
            exit="exit"
            variants={pageTransitionVariants}
            transition={{
                x: {type: 'just'},
                opacity: {duration: 0.3}
            }}>
            <StyledContents>
                <StyledTitleContainer>
                    <StyledTitle>SEGURO</StyledTitle>
                </StyledTitleContainer>
                <StyledContent>
                    {contentComponents}
                </StyledContent>
            </StyledContents>
            <StyledLowerContentContainer>
                {lowerContentComponents && lowerContentComponents}
            </StyledLowerContentContainer>
        </StyledTutorialPage>
    )
}

export default TutorialPage