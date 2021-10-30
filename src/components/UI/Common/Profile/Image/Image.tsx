import styled from 'styled-components';
import {Sizes} from '../../../Icons/Icons';
import {getPixelSize} from "../../../../../utilities/utilities";
import {ForwardedRef, ReactNode} from 'react';
import {screenWidth} from "../../../screenSizes";
import React from 'react';

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

const Image = React.forwardRef(({
                                    src,
                                    square,
                                    size,
                                    onClick,
                                    children
                                }: ImageProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <StyledImageWrapper square={square} size={getPixelSize(size)} ref={ref} onClick={onClick || (() => {
        })}>
            <StyledImage src={src} alt='ProfileDropdown picture'/>
            {children}
        </StyledImageWrapper>
    )
})

export default Image;
