import styled from "styled-components"
import {Checkmark, Copy} from "../../../../UI/Icons/Icons"
import {CopyToClipboard} from "../../../../../utilities/utilities"
import {toast} from "../../../../UI/Toaster/Toaster"
import {FormattedMessage} from "react-intl"
import React from 'react'
type DeviceCodesProp = {
    deviceCodes: Array<string>
}

const StyledDeviceCodes = styled.div`
	width: 100%;
`

const StyledItemRow = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-top: 15px;
`

const StyledDeviceCode = styled.p`
	text-overflow: ellipsis;
	white-space: nowrap;
	overflow: hidden;
	width: 75%;
`

const StyledCopyButton = styled.button`
	background-color: transparent;
	border: none;
	padding: 4px;
	border-radius: 5px;
`

const DeviceCodes = ({deviceCodes}: DeviceCodesProp) => {
	

    const copyDeviceCode = (code: string) => {
        toast({
            toastIcon: <Checkmark size={18}/>,
            event: <FormattedMessage id='toaster.action.copyDeviceCode'/>,
            duration: 'sm'
        })
        CopyToClipboard(code)
    }

    return (
        <StyledDeviceCodes>
            {deviceCodes.map((code, idx) => (
                <StyledItemRow key={idx}>
                    <StyledDeviceCode>{code}</StyledDeviceCode>
                    <StyledCopyButton onClick={() => copyDeviceCode(code)}>
                        <Copy size={16}/>
                    </StyledCopyButton>
                </StyledItemRow>
            ))}
        </StyledDeviceCodes>
    )
}

export default DeviceCodes
