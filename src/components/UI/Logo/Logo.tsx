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
    logo_color?: string
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


export const LogoImage = ({color, size}: LogoImageProps) => {

    return (
        <StyledLogoContainer>
            <motion.svg
				xmlns="http://www.w3.org/2000/svg"
				width={size||'100%'}
				height={size||'100%'}
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
	fill: ${props => props.logo_color || props.theme.ui.colors.text.primary};
`

const StyledLogoPATH0 = styled.path<StyledLogoSVGProps>`
`

const StyledLogoPATHCNTP = styled.path<StyledLogoSVGProps>`
	fill: 'none';
	strokeWidth='0.1px';
	strokeMiterlimit: '10';
`
const StyledLogoPATHCNTPevenodd = styled.path<StyledLogoSVGProps>`
	fill: 'none';
	strokeWidth='0.1px';
	strokeMiterlimit: '10';
	fillRule='evenodd';
`



const StyledLogoRect = styled.rect<StyledLogoSVGProps>`
	fill: 'none';
	strokeWidth='0.1px';
	strokeMiterlimit: '10';
`

export const SNTPLogoIcon = ({color, size}: LogoImageProps) => {
	return (
		<StyledLogoContainer>
			 <StyledLogoSVG width="548" height="548" viewBox="0 0 548 548" xmlns="http://www.w3.org/2000/svg"
                           logo_color={color} size={ getPixelSize (size || 'sm')}>
				<StyledLogoPATHCNTPevenodd
					stroke={color}
					d="m12.39,2.87h0c1.99,1.28,2.97,3.59,2.62,5.82v.03c-.11.7-.34,1.38-.72,2.03l-.16.24c-.25-.66-.67-1.25-1.26-1.7h0c-.14-.12-.3-.22-.46-.32-.67-.39-1.4-.56-2.12-.53-.3-.58-.47-1.22-.46-1.88,1.1-.11,2.24.08,3.29.63h0c-.18-1.14-.86-2.19-1.93-2.82-.16-.1-.33-.18-.5-.24.45-.57,1.04-1,1.7-1.25h0Z" />
				<StyledLogoPATHCNTPevenodd
					stroke={color}
					d="m14.67,14.23h0c-2.11,1.09-4.59.78-6.35-.63l-.02-.02c-.55-.44-1.03-.99-1.4-1.63l-.13-.25c.69.11,1.42.04,2.1-.24h0c.17-.07.34-.15.51-.24.67-.39,1.18-.94,1.52-1.58.65.02,1.29.21,1.86.54-.45,1.01-1.19,1.9-2.19,2.54h0c1.08.42,2.33.36,3.41-.26.16-.1.32-.2.46-.32.28.67.35,1.39.24,2.09h0Z"/>
				<StyledLogoPATHCNTPevenodd
					stroke={color}
					d="m3.69,10.53s0,0,0,0c.11-2.36,1.63-4.36,3.73-5.18h.03c.66-.27,1.37-.41,2.11-.41h.28c-.44.56-.74,1.22-.84,1.95h0c-.03.19-.04.37-.04.56,0,.77.22,1.49.6,2.11-.35.55-.83,1.02-1.39,1.34-.65-.9-1.02-3.24-1.09-3.17h0s0,0,0,0c-.9.73-1.47,1.84-1.47,3.08,0,.19.01.38.04.56-.72-.1-1.39-.4-1.93-.84h0Z"/>
				<StyledLogoPATHCNTP
					stroke={color}
					d="m10.31,18.71c-2.72,0-5.28-1.05-7.22-2.97C1.15,13.81.07,11.25.05,8.51.03,5.77.59,3.63,2.51,1.68l.45.44C1.15,3.95.66,5.93.68,8.5c.02,2.57,1.03,4.98,2.86,6.79,1.83,1.81,4.25,2.8,6.83,2.79,2.57-.01,4.98-1.03,6.79-2.86,3.74-3.77,3.7-9.88-.07-13.62l.44-.45c4.02,3.98,4.06,10.49.08,14.51-1.93,1.95-4.5,3.03-7.24,3.04-.02,0-.04,0-.06,0Z"/>
				<StyledLogoPATHCNTP
					stroke={color}
					d="m4.7,15.13c-1.73-1.5-2.78-3.59-2.95-5.87-.17-2.29.57-4.5,2.07-6.24C5.32,1.28,7.41.24,9.69.07c2.29-.17,4.5.57,6.24,2.07,1.73,1.5,2.78,3.58,2.95,5.87.17,2.28-.11,3.9-1.61,5.64l-.48-.41c1.38-1.61,1.61-3.06,1.46-5.18-.16-2.12-1.12-4.05-2.73-5.43C12.2-.25,7.17.11,4.3,3.43c-1.39,1.61-2.07,3.66-1.92,5.78.15,2.12,1.12,4.05,2.73,5.44l-.41.48Z"/>
				<StyledLogoRect
					stroke={color}
					x="2.49" y=".59" width="1.52" height="1.52" transform="translate(0 2.71) rotate(-45.3)"
				/>
				<StyledLogoRect
					stroke={color}
					x="15.81" y="13.28" width="1.52" height="1.52" transform="translate(-4.89 17.39) rotate(-49.16)"
				/>
			</StyledLogoSVG>
		</StyledLogoContainer>
	)
}

const StyledLogoPATH1 = styled.path<StyledLogoSVGProps>`
	fill: none;
	stroke-width:10;
	stroke-miterlimit:10;
`
export const LogoIcon = ({color, size}: LogoImageProps) => {
	

    return (
        <StyledLogoContainer>
            <StyledLogoSVG width="548" height="548" viewBox="0 0 548 548" xmlns="http://www.w3.org/2000/svg"
                           logo_color={color} size={ getPixelSize (size || 'sm')}>
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
