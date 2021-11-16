import styled from "styled-components";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";
import LanguageSelect from "../../../../UI/LanguageSelect/LanguageSelect";
import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {DeviceData} from "../../../../../store/appState/appStateReducer";
import {Desktop, Mobile, Tablet} from "../../../../UI/Icons/Icons";
import React from "react";
import {usePageNavigator} from "../../../../../contexts/pageNavigator/PageNavigatorContext";
import {pageNavigator} from "../../../../../contexts/pageNavigator/pageNavigatorActions";

type StyledDeviceButtonProps = {
    danger?: boolean
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
`

const StyledDeviceRow = styled.div``

const StyledDeviceMessage = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
`

const StyledDeviceSubmessage = styled(StyledDeviceMessage)`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const StyledDeviceButton = styled.button<StyledDeviceButtonProps>`
  margin-top: 20px;
  max-width: 75%;
  padding: 10px 30px;
  border: 1px solid ${props => props.theme.ui.borderColor};
  border-radius: 5px;
  background-color: ${props => props.danger ? props.theme.ui.dangerousColor : 'initial'};
  color: ${props => props.danger ? 'white' : props.theme.ui.text.textPrimary};

  &:last-of-type {
    margin-left: 20px;
  }
`

type DeviceDeleteProps = {
    custom: number,
    device?: DeviceData,
    onConfirm: () => void,
    onCancel: () => void
}


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
                    Are you sure you want to delete this device?
                </StyledDeviceMessage>
                <StyledDeviceSubmessage>
                    All your data associated with this device will be permanently deleted.
                </StyledDeviceSubmessage>
                    <StyledDeviceRow>
                        <StyledDeviceButton onClick={onCancel}>Cancel</StyledDeviceButton>
                        <StyledDeviceButton danger={true} onClick={onConfirm}>Delete</StyledDeviceButton>
                    </StyledDeviceRow>
            </StyledDeviceDelete>
        </MotionWrapper>
    )
}

export default DeviceDelete