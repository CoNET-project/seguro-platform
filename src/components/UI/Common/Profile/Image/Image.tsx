import styled from 'styled-components';
import {Sizes} from '../../../Icons/Icons';
import {getPixelSize} from "../../../../../utilities/utilities";

export type ImageProps = {
    src: string,
    size: Sizes,
    square?: boolean
}

type StyledImageWrapperProps = {
    size: string,
    square?: boolean
}

const StyledImageWrapper = styled.div<StyledImageWrapperProps>`
  width: ${props => props.size};
  height: ${props => props.size};
  content: '';
  border-radius: ${props => props.square ? '3px' : '50%'};
  overflow: hidden;
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Image = ({src, square, size}: ImageProps) => {
    return (
        <StyledImageWrapper square={square} size={getPixelSize(size)}>
            <StyledImage src={src} alt='ProfileDropdown picture'/>
        </StyledImageWrapper>
    )
}

export default Image;