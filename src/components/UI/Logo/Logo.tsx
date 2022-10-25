import styled from 'styled-components'
import {getPixelSize} from "../../../utilities/utilities"
import {Sizes} from '../Icons/Icons'
import {motion} from 'framer-motion'
import React from 'react'

type LogoTextProps = {
    size?: Sizes
}

type LogoImageProps = {
    size?: Sizes,
    color?: string
} & LogoTextProps

type StyledLogoTextProps = {
    size?: string
}

type StyledLogoSVGProps = {
    size?: string,
    logoColor?: string
} & StyledLogoTextProps

const StyledLogoContainer = styled.div`
	&:not(:first-child) {
		margin-left: 5px;
	}
`

const StyledLogoText = styled.h1<StyledLogoTextProps>`
	font-family: 'Montserrat Bold', sans-serif;
	font-size: ${props => props.size || 'initial'};
`

export const LogoText = ({size}: LogoTextProps) => {
	
    return (
        <StyledLogoContainer>
            <StyledLogoText size={getPixelSize(size)}>CoNET</StyledLogoText>
        </StyledLogoContainer>
    )
}


export const LogoImage = ({color}: LogoImageProps) => {

    return (
        <StyledLogoContainer>
            <motion.svg
				xmlns="http://www.w3.org/2000/svg"
				width="100%"
				height="100%"
				viewBox="0 0 548 548"
				>

					<motion.path 
						fill={color} 
						d="M329.8,124.2l0.2-0.1c53.7,34.6,80,96.9,70.7,157l-0.1,0.7c-2.8,18.8-9.1,37.3-19.2,54.7l-4.2,6.4
						c-6.7-17.7-18.2-33.6-33.9-45.8c2.9-7.1,2.9-7.2,0,0c-3.9-3.2-8.1-6-12.5-8.6c-18-10.4-37.9-15-57.3-14.3
						c-8.2-15.6-12.6-33-12.5-50.6c29.7-3.1,60.5,2.2,88.7,16.9l0.1,0.4c0.5,3.1,0.5,3.2,0,0l0,0v-0.2v-0.2
						c-4.8-30.8-23.1-59.2-52.2-76c-4.4-2.6-9-4.8-13.6-6.6C296.1,142.5,312.1,131,329.8,124.2L329.8,124.2z
						M391.3,430.8c0,0,0,0.2,0,0.3c-56.8,29.2-123.9,20.8-171.3-17.3l-0.6-0.5c-14.9-11.8-27.8-26.6-37.8-44
						l-3.5-6.8c18.7,3,38.2,1,56.6-6.4c4.7,6.1,4.7,6.1,0,0c4.7-1.8,9.3-4,13.7-6.5c18-10.4,31.9-25.3,41-42.5
						c17.6,0.6,34.9,5.6,50.1,14.5c-12.2,27.2-32.2,51.3-59,68.4l-0.4-0.1c-3-1.1-3-1.2,0,0l0,0l0.2,0.1l0.2,0.1
						c29.1,11.2,62.8,9.6,91.9-7.2c4.4-2.6,8.6-5.4,12.5-8.5C392.4,392.5,394.3,412,391.3,430.8L391.3,430.8z
						M95.1,330.8c0,0-0.2-0.1-0.2-0.2c3.1-63.8,44-117.7,100.7-139.7l0.7-0.3c17.7-7,36.9-10.8,57-10.8l7.6,0.4
						c-11.9,14.7-20,32.6-22.7,52.3c-7.6,1-7.7,1.1,0,0c-0.8,5-1.2,10-1.2,15.1c0,20.8,6,40.3,16.3,56.8c-9.4,14.9-22.3,27.4-37.6,36.2
						c-17.5-24.2-28.3-53.5-29.8-85.3l0.3-0.3c2.5-2,2.5-2,0,0l0,0l-0.2,0.1l-0.2,0.1c-24.2,19.6-39.7,49.6-39.7,83.2
						c0,5.1,0.4,10.2,1.1,15.1C127.7,350.9,109.8,342.7,95.1,330.8L95.1,330.8z
						"
						// animation start state
						initial={{
							opacity: 0,
							rotate: -90,
						}}
						// animation end state
						animate={{
							opacity: 1,
							rotate: 0
						}}
						transition={{
							ease: 'easeInOut',
						}}
					/>

					<motion.rect
						fill={color} 
						x="62.8" 
						y="62.6"
						width="41"
						height="41"
						transform="matrix(0.7033 -0.7108 0.7108 0.7033 -34.3832 83.8395)"
						// animation start state
						initial={{
							opacity: 0,
						}}
						// animation end state
						animate={{
							opacity: 1,
						}}
						transition={{
							ease: 'easeInOut',
						}}
						exit={{ opacity: 1 }}
						/>
					<motion.rect 
						fill={color} 
						x="422.1" 
						y="405.2"
						width="41"
						height="41"
						transform="matrix(0.654 -0.7565 0.7565 0.654 -168.9115 482.12)"
						// animation start state
						initial={{
							opacity: 0,
						}}
						// animation end state
						animate={{
							opacity: 1,
						}}
						transition={{
							ease: 'easeInOut',
						}}
						exit={{ opacity: 1 }}
						/>
					<motion.path
						fill='none'
						strokeWidth='10'
						stroke={color} 
						d="M82.8,86.2c-104,105.4-103,275.1,2.3,379.2c105.4,104.3,275.3,103.3,379.5-2s103.3-275.3-2-379.5"
						// animation start state
						initial={{
							opacity: 0,
							rotate: -45,
							pathLength: 0
						}}
						// animation end state
						animate={{
							opacity: 1,
							rotate: 0,
							pathLength: 1
						}}
						transition={{
							ease: 'easeInOut',
						}}
						/>

					<motion.path
						fill='none'
						strokeWidth='10'
						stroke={color}
						d="M442.9,425.4c80.3-93.2,70-233.9-23.1-314.4c-93.2-80.6-234.1-70.4-314.7,22.8s-70.4,234.1,22.8,314.7"
						// animation start state
						initial={{
							opacity: 0,
							rotate: 45,
							pathLength: 0
						}}
						// animation end state
						animate={{
							opacity: 1,
							rotate: 0,
							pathLength: 1
						}}
						transition={{
							ease: 'easeInOut',
						}}
						/>
			
            </motion.svg>

        </StyledLogoContainer>
    )
}


const StyledLogoSVG = styled.svg<StyledLogoSVGProps>`
	width: ${props => props.size};
	height: ${props => props.size};
	fill: ${props => props.logoColor || props.theme.ui.colors.text.primary};
`

const StyledLogoPATH0 = styled.path<StyledLogoSVGProps>`
`

const StyledLogoRect = styled.rect<StyledLogoSVGProps>`
`


const StyledLogoPATH1 = styled.path<StyledLogoSVGProps>`
	fill: none;
	stroke-width:10;
	stroke-miterlimit:10;
`
export const LogoIcon = ({color, size}: LogoImageProps) => {
	

    return (
        <StyledLogoContainer>
            <StyledLogoSVG width="548" height="548" viewBox="0 0 548 548" xmlns="http://www.w3.org/2000/svg"
                           logoColor={color} size={ getPixelSize (size || 'sm')}>
				<StyledLogoPATH0
					fill={color}
					d="M329.8,124.2l0.2-0.1c53.7,34.6,80,96.9,70.7,157l-0.1,0.7c-2.8,18.8-9.1,37.3-19.2,54.7l-4.2,6.4
					c-6.7-17.7-18.2-33.6-33.9-45.8c2.9-7.1,2.9-7.2,0,0c-3.9-3.2-8.1-6-12.5-8.6c-18-10.4-37.9-15-57.3-14.3
					c-8.2-15.6-12.6-33-12.5-50.6c29.7-3.1,60.5,2.2,88.7,16.9l0.1,0.4c0.5,3.1,0.5,3.2,0,0l0,0v-0.2v-0.2
					c-4.8-30.8-23.1-59.2-52.2-76c-4.4-2.6-9-4.8-13.6-6.6C296.1,142.5,312.1,131,329.8,124.2L329.8,124.2z

					M391.3,430.8c0,0,0,0.2,0,0.3c-56.8,29.2-123.9,20.8-171.3-17.3l-0.6-0.5c-14.9-11.8-27.8-26.6-37.8-44
					l-3.5-6.8c18.7,3,38.2,1,56.6-6.4c4.7,6.1,4.7,6.1,0,0c4.7-1.8,9.3-4,13.7-6.5c18-10.4,31.9-25.3,41-42.5
					c17.6,0.6,34.9,5.6,50.1,14.5c-12.2,27.2-32.2,51.3-59,68.4l-0.4-0.1c-3-1.1-3-1.2,0,0l0,0l0.2,0.1l0.2,0.1
					c29.1,11.2,62.8,9.6,91.9-7.2c4.4-2.6,8.6-5.4,12.5-8.5C392.4,392.5,394.3,412,391.3,430.8L391.3,430.8z

					M95.1,330.8c0,0-0.2-0.1-0.2-0.2c3.1-63.8,44-117.7,100.7-139.7l0.7-0.3c17.7-7,36.9-10.8,57-10.8l7.6,0.4
					c-11.9,14.7-20,32.6-22.7,52.3c-7.6,1-7.7,1.1,0,0c-0.8,5-1.2,10-1.2,15.1c0,20.8,6,40.3,16.3,56.8c-9.4,14.9-22.3,27.4-37.6,36.2
					c-17.5-24.2-28.3-53.5-29.8-85.3l0.3-0.3c2.5-2,2.5-2,0,0l0,0l-0.2,0.1l-0.2,0.1c-24.2,19.6-39.7,49.6-39.7,83.2
					c0,5.1,0.4,10.2,1.1,15.1C127.7,350.9,109.8,342.7,95.1,330.8L95.1,330.8z
					"
				/>
				<StyledLogoPATH1
					stroke={color||'black'}
					d="M82.8,86.2c-104,105.4-103,275.1,2.3,379.2c105.4,104.3,275.3,103.3,379.5-2s103.3-275.3-2-379.5
					M442.9,425.4c80.3-93.2,70-233.9-23.1-314.4c-93.2-80.6-234.1-70.4-314.7,22.8s-70.4,234.1,22.8,314.7
					"
				/>
				<StyledLogoRect
					x="62.8" y="62.6" transform="matrix(0.7033 -0.7108 0.7108 0.7033 -34.3509 83.8359)" width="41" height="41"
				/>

				<StyledLogoRect
					x="422.1" y="405.2" transform="matrix(0.654 -0.7565 0.7565 0.654 -168.9115 482.12)" width="41" height="41"
				/>

            </StyledLogoSVG>


        </StyledLogoContainer>
    )
}
