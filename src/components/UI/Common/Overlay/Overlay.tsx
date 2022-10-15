import {HTMLMotionProps, motion} from 'framer-motion'
import styled from 'styled-components'
import React from "react"
import {ThreeCircles} from 'react-loader-spinner'
import {PlatformLoadingTypes} from "../../../../store/appState/appStateReducer"
import {FormattedMessage} from "react-intl"
import useAppState from "../../../../store/appState/useAppState"
import logger from "../../../../utilities/logger/logger"

type DragOverlayProps = {
    acceptPointerEvents?: boolean
} & HTMLMotionProps<any>

type OverlayProps = {
    show: boolean,
    onClick?: () => void,
    className?: string
}

type StyledOverlayProps = {
    show: boolean
}

type StyledDragOverlayProps = {
    acceptPointerEvents?: boolean
	pointerEvents?: string	
}

const StyledOverlay = styled.div<StyledOverlayProps>`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${props => props.show ? 200 : -100};
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 50ms ease-in-out;
  opacity: ${props => props.show ? 1 : 0};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledOverlayDarker = styled(StyledOverlay)`
  background-color: rgba(0, 0, 0, 0.95);
`



const StyledOverlayText = styled.p`
  margin-top: 20px;
  color: whitesmoke;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

export const Overlay = ({show, onClick, className}: OverlayProps) => {
    return <StyledOverlay show={show} onClick={onClick} className={className}/>
}

export const OverlayDarker = ({show, onClick}: OverlayProps) => {
    return <StyledOverlay show={show} onClick={onClick}/>
}

const getOverlayText = (type: PlatformLoadingTypes) => {
    switch (type) {
        case 'unlockPasscode':
            return (
                <FormattedMessage id='platform.overlay.unlocking'/>
            )
        case 'createProfile':
            return (
                <FormattedMessage id='platform.overlay.createProfile'/>
            )

    }
}

export const OverlayWithLoaderText = ({show, onClick, type}: OverlayProps & { type: PlatformLoadingTypes }) => {
    return (
        <StyledOverlayDarker show={show} onClick={onClick}>
            <ThreeCircles
                color="#396FC0"
                height={50}
                width={50}
            />
            <StyledOverlayText>
                {
                    getOverlayText(type)
                }
            </StyledOverlayText>
        </StyledOverlayDarker>
    )
}

export const DragOverlay = (props: DragOverlayProps) => {
	const {
        setIsDrawerOpen,
        isDrawerOpen
    } = useAppState()
	const divProps = Object.assign({}, props)
	delete divProps.acceptPointerEvents
	//		pointer-events: ${props => props.acceptPointerEvents ? 'initial' : 'none'};
	const StyledDragOverlay = styled(motion.div)<StyledDragOverlayProps>`
		position: absolute;
		z-index: 1000;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.65);
		width: 100%;
		height: 100vh;
		opacity: 0;
		visibility: visible;
		pointer-events: ${props => props.acceptPointerEvents ? 'initial' : 'none'};
	`
	const onclick = () => {
		if ( props.acceptPointerEvents ) {
			return setIsDrawerOpen(false)
		}
	}
	logger.log ('Overlay.tsx', 'DragOverlay', props.acceptPointerEvents)
	return <StyledDragOverlay
		onClick={onclick}
		{...divProps} 
	/>
}
