import styled from 'styled-components';
import {Sizes} from '../../../Icons/Icons';
import {getPixelSize} from "../../../../../utilities/utilities";
import {ReactNode} from 'react';
import {screenWidth} from "../../../screenSizes";

export type ImageProps = {
    src: string,
    size: Sizes,
    onClick?: () => void,
    children?: ReactNode,
    square?: boolean
}

type StyledImageWrapperProps = {
    size: string,
    square?: boolean
}

const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  width: 30px;
  height: 30px;
  content: '';
  border-radius: ${props => props.square ? '3px' : '50%'};
  overflow: hidden;

  @media (${screenWidth.mediumWidth}) {
    width: ${props => props.size};
    height: ${props => props.size};
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image = ({src, square, size, onClick, children}: ImageProps) => {
    console.log(onClick)
    return (
        <StyledImageWrapper square={square} size={getPixelSize(size)} onClick={onClick || (() => {
        })}>
            <StyledImage src={src} alt='ProfileDropdown picture'/>
            {children}
        </StyledImageWrapper>
    )
}

export default Image;
