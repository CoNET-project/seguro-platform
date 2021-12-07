import styled, {css, keyframes} from 'styled-components';
import {ReactNode, useState} from "react";
import {screenWidth} from "../../screenSizes";

export type KeyProps = {
    number?: number,
    alphabet?: string,
    text?: ReactNode,
    onClick: () => void
}

const StyledBackgroundKeyframes = keyframes`
  0% {
    box-shadow: 0 0 0 0 #1867a5;
  }
  100% {
    box-shadow: 0 0 5px 25px transparent;
  }
`

const StyledKey = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

const StyledKeyButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 20px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-color: ${props => props.theme.ui.colors.background.foundation};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
  transition: all 25ms ease-in-out;

  &:active {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  }

  @media (${screenWidth.mediumWidth}) {
    width: 5rem;
    height: 5rem;
  }
`

const StyledKeyBackground = styled.div<{ showAnimation: boolean }>`
  width: 4rem;
  height: 4rem;
  display: flex;
  content: '';
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;
  animation: ${props => props.showAnimation ? css`${StyledBackgroundKeyframes} 300ms ease-in-out 0s 1 normal forwards` : 'none'};
`

const StyledText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.ui.colors.text.primary}
`


const StyledNumberText = styled(StyledText)`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  font-weight: bold;
`


const StyledAlphabetText = styled(StyledText)`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  opacity: 0.6;
`


const Key = ({number, alphabet, text, onClick}: KeyProps) => {
    if ((number || alphabet) && text) {
        throw new Error('Key cannot contain text and number with alphabets!')
    }
    const [showAnimation, setShowAnimation] = useState(false)

    const keyClickHandler = () => {
        onClick();
    }

    return (
        <StyledKey>
            <StyledKeyButton onClick={keyClickHandler}
                             onTouchStart={() => setShowAnimation(true)}
                             onMouseDown={() => setShowAnimation(true)}>
                {
                    text && (
                        <StyledText>
                            {text}
                        </StyledText>
                    )
                }
                {
                    (number || alphabet) && (
                        <>
                            <StyledNumberText>
                                {number}
                            </StyledNumberText>
                            <StyledAlphabetText>
                                {alphabet}
                            </StyledAlphabetText>
                        </>
                    )
                }
            </StyledKeyButton>
            <StyledKeyBackground onAnimationEnd={() => setShowAnimation(false)} showAnimation={showAnimation}/>
        </StyledKey>
    )
}

export default Key
