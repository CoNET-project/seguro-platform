import {m, motion} from 'framer-motion'
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

type PageProps = {
    titleComponent: ReactNode | string,
    icon?: ReactNode,
    header?: ReactNode,
    contentComponents: ReactNode,
    stepButtonsClickActions: StepButtonsClickActions
} & PageTransitionProps


const StyledPage = styled(motion.div)`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.ui.backgroundColor};
  position: absolute;
  @media (${screenWidth.mediumWidth}) {
    padding-top: 100px;
  }
`

const StyledTitle = styled.h1`
  width: 100%;
  text-align: center;
  color: ${props => props.theme.ui.textColor};
  margin: 20px 0;
`

const StyledContents = styled.div`
  max-width: 70rem;
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
  @media (${screenWidth.mediumWidth}) {
    flex-direction: row;
  }
`

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const StyledTitleContainer = styled(StyledContent)`
  height: unset;
`

const StyledActionButtonContainer = styled.div`
  max-width: 70em;
  width: 100%;
  margin-top: 30px
`

const Page = ({
                  titleComponent,
                  icon,
                  header,
                  contentComponents,
                  stepButtonsClickActions,
                  pageTransition
              }: PageProps) => {
    return (
        <StyledPage
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
                    {icon && icon}
                    <StyledTitle>{titleComponent}</StyledTitle>
                </StyledTitleContainer>
                <StyledContent>
                    {contentComponents}
                </StyledContent>
            </StyledContents>
            <StyledActionButtonContainer>
                {stepButtonsClickActions && (
                    <StepButtons {...stepButtonsClickActions} />
                )}
            </StyledActionButtonContainer>
        </StyledPage>
    )
}

export default Page