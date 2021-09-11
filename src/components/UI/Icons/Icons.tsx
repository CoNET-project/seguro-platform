import {
    BiWorld, FaCheckCircle,
    FaChevronLeft,
    FaChevronRight,
    GoPrimitiveDot,
    GrLanguage, IoIosWarning,
    IoLanguage,
    RiShieldKeyholeLine
} from "react-icons/all";
import styled from 'styled-components';
import {ReactNode} from "react";

type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | undefined

type IconProps = {
    size?: Sizes,
    color?: string
}


const getSize = (size: Sizes) => {
    if (!size) {
        return undefined
    }
    if (typeof size === 'number') {
        return size
    }

    switch (size) {
        case 'sm':
            return 14
        case 'md':
            return 28
        case 'lg':
            return 46
        case 'xl':
            return 92
        case 'xxl':
            return 184
    }
}

const StyledIcon = styled.div`
  transition: color 150ms ease-in-out;
  color: ${props => props.theme.ui.textColor};
  display: flex;
  align-items: center;
  justify-content: center;
`

type StyledThemeIconProps = { isPlaceholder?: boolean }

const StyledThemeIcon = styled.div<StyledThemeIconProps>`
  color: ${props => props.isPlaceholder ? props.theme.ui.input.placeholderColor : props.theme.ui.input.color};
  display: flex;
  align-items: center;
  justify-content: center;
`

type StyledValidityIconProps = { valid: boolean }

const StyledValidityIcon = styled(StyledIcon)<StyledValidityIconProps>`
  color: ${props => props.valid ? props.theme.ui.icon.valid : props.theme.ui.icon.invalid}
`

export const ChevronLeft = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FaChevronLeft size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const ChevronRight = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FaChevronRight size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const LanguageIcon = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoLanguage size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Passcode = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <RiShieldKeyholeLine size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const PasscodeDot = ({size, color, isPlaceholder}: IconProps & { isPlaceholder?: boolean }) => {
    return (
        <StyledThemeIcon isPlaceholder={isPlaceholder}>
            <GoPrimitiveDot size={getSize(size)} color={color || undefined}/>
        </StyledThemeIcon>
    )
}

export const Warning = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoIosWarning size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const CircleCheck = ({size, color, valid}: IconProps & { valid: boolean }) => {
    return (
        <StyledValidityIcon valid={valid}>
            <FaCheckCircle size={getSize(size)} color={color || undefined}/>
        </StyledValidityIcon>
    )
}

