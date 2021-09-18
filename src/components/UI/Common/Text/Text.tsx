import styled from 'styled-components';
import {HTMLAttributes, ReactNode} from 'react'
import {screenWidth} from "../screenSizes";

type TextProps = {
    fontSize?: number,
    children: ReactNode
} & HTMLAttributes<HTMLDivElement>

type StyledTextProps = {
    fontSize?: number
}

const StyledText = styled.p<StyledTextProps>`
  font-size: 16px;
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => `${props.fontSize}px` || 'unset'};
  }
`

const StyledH1 = styled.h1<StyledTextProps>`
  font-size: ${props => `${props.fontSize}px` || 'unset'};
`

const StyledH2 = styled.h2<StyledTextProps>`
  font-size: ${props => `${props.fontSize}px` || 'unset'};
`

const StyledH3 = styled.h3<StyledTextProps>`
  font-size: ${props => `${props.fontSize}px` || 'unset'};
`

export const StyledFormattedH1 = (props: TextProps) => {
    return (
        <StyledH1 {...props}>
            {props.children}
        </StyledH1>
    )
}

export const StyledFormattedH2 = (props: TextProps) => {
    return (
        <StyledH2 {...props}>
            {props.children}
        </StyledH2>
    )
}

export const StyledFormattedH3 = (props: TextProps) => {
    return (
        <StyledH3 {...props}>
            {props.children}
        </StyledH3>
    )
}

export const StyledFormattedParagraph = (props: TextProps) => {
    console.log(props.fontSize)
    return (
        <StyledText {...props}>
            {props.children}
        </StyledText>
    )
}