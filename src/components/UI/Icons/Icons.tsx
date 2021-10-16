import {
    BiWorld, BsChatSquareDots, BsGrid3X3, BsGrid3X3Gap, FaCheckCircle,
    FaChevronLeft,
    FaChevronRight, FaDesktop, FaMobileAlt, FaPlug, FaRegTrashAlt, FaTabletAlt,
    GoPrimitiveDot,
    GrLanguage, ImDownload, IoClose, IoIosCheckmarkCircle, IoIosWarning,
    IoLanguage, IoMdContacts, IoSettingsOutline, MdContentCopy,
    RiShieldKeyholeLine, TiDelete
} from "react-icons/all";
import styled from 'styled-components';
import {ReactNode} from "react";

export type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | undefined

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
            return 20
        case 'md':
            return 24
        case 'lg':
            return 28
        case 'xl':
            return 32
        case 'xxl':
            return 36
    }
}

const StyledIcon = styled.div`
  transition: color 150ms ease-in-out;
  color: ${props => props.theme.ui.text.textPrimary};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

type StyledThemeIconProps = { isPlaceholder?: boolean }

const StyledThemeIcon = styled.div<StyledThemeIconProps>`
  color: ${props => props.isPlaceholder ? props.theme.ui.input.placeholderColor : props.theme.ui.input.color};
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledIconNotifDot = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 6px;
  height: 6px;
  content: '';
  background-color: red;
  border-radius: 50%;
`

const StyledNoColorIcon = styled(StyledIcon)`
  color: unset;
  transition: unset;
`

type StyledValidityIconProps = { valid: boolean }

const StyledValidityIcon = styled(StyledIcon)<StyledValidityIconProps>`
  color: ${props => props.valid ? props.theme.ui.icon.active : props.theme.ui.icon.inactive}
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

export const Grid3X3 = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsGrid3X3Gap size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const SettingGear = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoSettingsOutline size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Plug = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FaPlug size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Close = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoClose size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Copy = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <MdContentCopy size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Update = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <ImDownload size={getSize(size)} color={color || undefined}/>
            <StyledIconNotifDot/>
        </StyledIcon>
    )
}

export const Gear = ({size, color}: IconProps) => {
    return (
        <StyledNoColorIcon>
            <IoSettingsOutline size={getSize(size)} color={color || undefined}/>
        </StyledNoColorIcon>
    )
}

export const ChatBubble = ({size, color}: IconProps) => {
    return (
        <StyledNoColorIcon>
            <BsChatSquareDots size={getSize(size)} color={color || undefined}/>
        </StyledNoColorIcon>
    )
}

export const Contacts = ({size, color}: IconProps) => {
    return (
        <StyledNoColorIcon>
            <IoMdContacts size={getSize(size)} color={color || undefined}/>
        </StyledNoColorIcon>
    )
}

export const Delete = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <TiDelete size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Mobile = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FaMobileAlt size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Tablet = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FaTabletAlt size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}


export const Desktop = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FaDesktop size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Checkmark = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoIosCheckmarkCircle size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}
