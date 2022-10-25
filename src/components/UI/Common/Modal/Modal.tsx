import styled, {keyframes} from "styled-components"
import {screenWidth} from "../../screenSizes"
import React, {ReactNode} from "react"

export type SubModal = {
    title: ReactNode,
    closeAction: () => void
}

export type ModalProps = {
    children: ReactNode,
    closeAction: () => void
}

const ModalKeyFrames = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`

const StyledModal = styled.div`
	height: 100%;
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	margin: auto;
	max-width: 40rem;
	opacity: 0;
	background-color: ${props => props.theme.ui.colors.background.foundation};
	z-index: 200;
	animation: ${ModalKeyFrames} 500ms forwards;
	border: 1px solid rgba(200, 200, 200, 0.2);
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
	overflow: hidden;
	border-radius: 3px;
	transition: width 500ms ease-in-out, height 500ms ease-in-out;

	@media (${screenWidth.mediumWidth}) {
		width: fit-content;
		height: fit-content;
		//border: 1px solid rgba(0, 0, 0, 0.15);
		max-height: 60rem;
		max-width: 55rem;
	}
`

const Modal = ({children, closeAction}: ModalProps) => {
	
    return (
        <StyledModal>
            {children}
        </StyledModal>
    )
}

export default Modal
