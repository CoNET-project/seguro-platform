import {
    AiOutlineUserAdd
} from "react-icons/ai"

import {
    BiBell,
    BiMessageAdd
} from "react-icons/bi"

import {
    BsCamera,
    BsChatSquareDots,
    BsGrid3X3Gap,
    BsThreeDotsVertical,
	BsArrowUpRightCircleFill,
	BsPatchPlusFill,
	BsCashCoin,
	BsX,
	BsFillHouseFill
} from "react-icons/bs"

import {
    CgProfile
} from "react-icons/cg"

import {
    FaCheckCircle,
    FaChevronLeft,
    FaChevronRight,
    FaDesktop,
    FaMobileAlt,
    FaPlug,
    FaTabletAlt
} from "react-icons/fa"

import {
	FiSend,
    FiSettings
} from 'react-icons/fi'

import {
	GoPrimitiveDot
} from 'react-icons/go'

import {
	ImDownload
} from 'react-icons/im'

import {
    IoIosCheckmarkCircle,
    IoIosCloseCircle,
    IoIosLock,
    IoIosWarning,
	IoMdContacts
} from 'react-icons/io'

import {
	IoCheckmarkSharp,
    IoClose,
    IoLanguage,
    IoSettingsOutline
} from 'react-icons/io5'

import {
	MdContentCopy,
    MdEdit,
    MdManageAccounts,
    MdPassword,
    MdPersonAddAlt1,
	MdDownloadForOffline
} from 'react-icons/md'

import {
	RiShieldKeyholeLine
} from 'react-icons/ri'

import {
    TiDelete
} from 'react-icons/ti'

import styled from 'styled-components';
import React, {ComponentPropsWithRef, ForwardedRef} from "react";

export type Sizes = 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | number | undefined

type IconProps = {
    size?: Sizes,
    color?: string
} & ComponentPropsWithRef<'p'>


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

const StyledIcon = styled.p`
  color: ${props => props.theme.ui.colors.text.primary};
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
  color: ${props => props.valid ? props.theme.ui.colors.icon.active : props.theme.ui.colors.icon.inactive}
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

export const Grid3X3 = React.forwardRef(({size, color}: IconProps, ref: ForwardedRef<HTMLParagraphElement>) => {
    return (
        <StyledIcon ref={ref}>
            <BsGrid3X3Gap size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
})

export const SettingGear = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FiSettings size={getSize(size)} color={color || undefined}/>
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

export const CloseCircle = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoIosCloseCircle size={getSize(size)} color={color || undefined}/>
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

export const CheckmarkCircle = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoIosCheckmarkCircle size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Checkmark = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoCheckmarkSharp size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const VerticalOptions = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsThreeDotsVertical size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const VerticalOptions_ArrowDownloadCircleFill = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsPatchPlusFill size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const VerticalOptions_ArrowUpRightCircleFill = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsCashCoin size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const AddProfile = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <AiOutlineUserAdd size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const ProfileIcon = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <CgProfile size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const ManageAccount = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <MdManageAccounts size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Camera = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsCamera size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const Password = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <MdPassword size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const NotificationBell = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BiBell size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const PlatformLock = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <IoIosLock size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const CreateChat = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BiMessageAdd size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const AddContact = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <MdPersonAddAlt1 size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const EditPencilIcon = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <MdEdit size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}


export const SendIcon = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <FiSend size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const CloseIcon = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsX size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}

export const CloseHome = ({size, color}: IconProps) => {
    return (
        <StyledIcon>
            <BsFillHouseFill size={getSize(size)} color={color || undefined}/>
        </StyledIcon>
    )
}
