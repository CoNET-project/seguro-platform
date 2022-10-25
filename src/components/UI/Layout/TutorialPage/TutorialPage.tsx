import {motion} from 'framer-motion'
import styled from 'styled-components'
import React, {ReactNode} from "react"
import {pageTransitionVariants} from "../../Motion/Variants/Variants"
import {screenWidth} from "../../screenSizes"

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
	max-width: 1920px;
	max-height: 1080px;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	position: absolute;
	padding: 30px 20px;
	background-color: ${props => props.theme.ui.colors.background.elevationOne};
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
	@media (${screenWidth.narrowWidth}) {
		padding: 20px 0;
	}
`

const StyledContents = styled.div`
	max-width: 1080px;
	max-height: 1080px;
	width: 100%;
	flex: 1;
	height: 100%;
	content: '';
	color: ${props => props.theme.ui.colors.text.primary};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`

const StyledContent = styled.div`
	max-width: 50rem;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center
`

const StyledTitleContainer = styled(StyledContent)`
	height: unset;
`

const StyledTitle = styled.h1`
	width: 100%;
	display: none;
	text-align: center;
	color: ${props => props.theme.ui.colors.text.primary};
	font-family: 'Montserrat Bold', sans-serif;
	@media (${screenWidth.narrowWidth}) {
		display: inline-block;
	}
`

const StyledLowerContentContainer = styled.div`
	max-width: 50rem;
	width: 100%;
	display: flex;
	align-items: flex-end;
	justify-content: center;
	min-height: 50px
`

const TutorialPage = 
	({
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
