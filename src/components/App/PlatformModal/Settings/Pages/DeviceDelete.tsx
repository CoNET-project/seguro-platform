import styled from "styled-components"
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants"
import MotionWrapper from "../../../../UI/Motion/MotionWrapper"
import {DeviceData} from "../../../../../store/appState/appStateReducer"
import {Desktop, Mobile, Tablet} from "../../../../UI/Icons/Icons"
import React from "react"
import {FormattedMessage} from "react-intl"

type StyledDeviceButtonProps = {
    danger?: boolean
}

type DeviceDeleteProps = {
    custom: number,
    device?: DeviceData,
    onConfirm: () => void,
    onCancel: () => void
}

const StyledDeviceDelete = styled.div`
	min-height: 30rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	& > * {
		margin-top: 10px;
	}
`

const StyledDeviceIcon = styled.div``

const StyledDeviceName = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.lg};
	font-weight: 700;
	margin: 20px 0;
	color: ${props => props.theme.ui.colors.text.primary}
`

const StyledDeviceRow = styled.div``

const StyledDeviceMessage = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.md};
	color: ${props => props.theme.ui.colors.text.primary}
`

const StyledDeviceSubmessage = styled(StyledDeviceMessage)`
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	color: ${props => props.theme.ui.colors.text.primary}
`

const StyledDeviceButton = styled.button<StyledDeviceButtonProps>`
	margin-top: 20px;
	max-width: 75%;
	padding: 10px 30px;
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	border-radius: 5px;
	background-color: ${props => props.danger ? props.theme.ui.colors.dangerous : 'initial'};
	color: ${props => props.danger ? 'white' : props.theme.ui.colors.text.primary};

	&:last-of-type {
		margin-left: 20px;
	}
`


const DeviceDelete = ({custom, device, onConfirm, onCancel}: DeviceDeleteProps) => {
	
    const getDeviceIcon = () => {
        if (device) {
            switch (device.type) {
                case 'mobile':
                    return <Mobile size={72}/>
                case 'tablet':
                    return <Tablet size={72}/>
                case 'desktop':
                    return <Desktop size={72}/>
                default:
                    return
            }
        }
    }
    return (
        // Shouldn't be able to delete current active device!
        // Shouldn't be able to delete last device!
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Language" variants={pageTransitionVariants}>
            <StyledDeviceDelete>
                <StyledDeviceIcon>
                    {getDeviceIcon()}
                </StyledDeviceIcon>
                <StyledDeviceName>
                    {device && device.name}
                </StyledDeviceName>
                <StyledDeviceMessage>
                    <FormattedMessage id='platform.settings.device.delete.confirmMessage'/>
                </StyledDeviceMessage>
                <StyledDeviceSubmessage>
                    <FormattedMessage id='platform.settings.device.delete.confirmSubmessage'/>
                </StyledDeviceSubmessage>
                <StyledDeviceRow>
                    <StyledDeviceButton onClick={onCancel}>
                        <FormattedMessage id='platform.settings.device.delete.cancelButton'/>
                    </StyledDeviceButton>
                    <StyledDeviceButton danger={true} onClick={onConfirm}>
                        <FormattedMessage id='platform.settings.device.delete.confirmButton'/>
                    </StyledDeviceButton>
                </StyledDeviceRow>
            </StyledDeviceDelete>
        </MotionWrapper>
    )
}

export default DeviceDelete
