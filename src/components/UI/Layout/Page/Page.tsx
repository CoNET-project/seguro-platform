import {m, motion} from 'framer-motion'
import styled from 'styled-components'
import {ReactNode} from "react";
import StepButtons, {StepButtonsClickActions} from "../../StepButtons/StepButtons";
import {pageTransitionVariants} from "../../Motion/Variants/Variants";
import {screenWidth} from "../../screenSizes";
import {LogoText} from "../../Logo/Logo";
import {ChevronLeft} from "../../Icons/Icons";

export type PageTransitionProps = {
    pageTransition: {
        key: number | string,
        direction: -1 | 1
    }
}

type PageProps = {
    header?: ReactNode,
    contentComponents: {
        contentLeft: ReactNode,
        contentRight: ReactNode
    },
    stepButtonsClickActions: StepButtonsClickActions
} & PageTransitionProps


const StyledPage = styled(motion.div)`
  max-width: 1920px;
  max-height: 1080px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${props => props.theme.ui.backgroundColor};
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media (${screenWidth.narrowWidth}) {
    padding: 20px 0;
  }
`

const StyledPageButton = styled.button`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.ui.text.textPrimary}
`

const StyledContents = styled.div`
  max-width: 1080px;
  max-height: 1080px;
  width: 100%;
  height: 100%;
  content: '';
  color: ${props => props.theme.ui.text.textPrimary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const StyledContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 10px;
  @media (${screenWidth.mediumWidth}) {
    flex-direction: row;
    height: 100%;
  }
`


const StyledContentTop = styled(StyledContent)`
  flex-direction: column;
  border: none;
`

const StyledContentBottom = styled(StyledContent)`
  flex-direction: column;
  border: none;
`

const StyledActionButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px
`

const Page = ({
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
                <StyledContent>
                    <StyledContentTop>
                        {contentComponents.contentLeft}
                    </StyledContentTop>
                    <StyledContentBottom>
                        {contentComponents.contentRight}
                    </StyledContentBottom>
                </StyledContent>
                <StyledActionButtonContainer>
                    {stepButtonsClickActions && (
                        <StepButtons actionHandler={stepButtonsClickActions}/>
                    )}
                </StyledActionButtonContainer>
            </StyledContents>
        </StyledPage>
    )
}

export default Page