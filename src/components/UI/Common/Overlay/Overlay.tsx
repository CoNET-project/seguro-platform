import {HTMLMotionProps, motion} from 'framer-motion';
import styled from 'styled-components';
import React from "react";
import Loader from 'react-loader-spinner';
import {PlatformLoadingTypes} from "../../../../store/appState/appStateReducer";
import {FormattedMessage} from "react-intl";

type DragOverlayProps = {
    acceptPointerEvents: boolean
} & HTMLMotionProps<any>

type OverlayProps = {
    show: boolean,
    onClick?: () => void
}

type StyledOverlayProps = {
    show: boolean
}

type StyledDragOverlayProps = {
    acceptPointerEvents: boolean
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
  pointer-events: ${props => props.acceptPointerEvents ? 'initial' : 'none'};
  opacity: 0;
  visibility: visible;
`

const StyledOverlayText = styled.p`
  margin-top: 20px;
  color: whitesmoke;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

export const Overlay = ({show, onClick}: OverlayProps) => {
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
            <Loader
                type="Oval"
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
    return <StyledDragOverlay
        {...props}
    />
}
