import {motion} from 'framer-motion'
import styled from 'styled-components'
import {ReactNode} from "react";
import {pageTransitionVariants} from "../../Motion/Variants/Variants";
import {screenHeight, screenWidth} from '../../screenSizes';

export type PageTransitionProps = {
    pageTransition: {
        key: number | string,
        direction: -1 | 1
    }
}

type PageProps = {
    header?: ReactNode,
    children: ReactNode
} & PageTransitionProps


const StyledPage = styled(motion.div)`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  @media (${screenWidth.narrowWidth}) {
    width: 30rem;
  }

  @media (${screenWidth.mediumWidth}) {
      //background-color: ${props => props.theme.ui.colors.background.elevationOne};
    width: 40rem;

    @media (${screenHeight.mediumHeight}) {
      height: 40rem;
    }
  }
`

const StyledContents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`

const Page = ({
                  children,
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
                {children}
            </StyledContents>
        </StyledPage>
    )
}

export default Page
