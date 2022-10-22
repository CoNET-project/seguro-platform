import {Sizes} from '../Icons/Icons'
import styled from 'styled-components'
import ProfileImage from "../../UI/Common/Profile/Image/Image"
import React from 'react'
// @ts-ignore: Unreachable code error
import cotcashImg from '../../../assets/logo/CNTCash.svg'
import {getPixelSize} from "../../../utilities/utilities"

type LogoTextProps = {
    size?: Sizes
}

type LogoImageProps = {
    size?: Sizes,
    color?: string
} & LogoTextProps



export const CNTCashLogoIcon = ({color, size}: LogoImageProps) => {
	return (
		<ProfileImage src={ cotcashImg } size={size}/>
	)
}