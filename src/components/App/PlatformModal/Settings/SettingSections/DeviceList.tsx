import styled, {keyframes} from "styled-components"
import {Checkmark, Desktop, Mobile, Tablet, VerticalOptions} from "../../../../UI/Icons/Icons"
import {screenWidth} from "../../../../UI/screenSizes"
import {TippyDropdown} from "../../../../UI/Tippy/Tippy"
import React, {useCallback, useEffect, useRef, useState} from "react"
import ContextMenu, {ContextMenuActions} from "../../../../UI/Common/ContextMenu/ContextMenu"
import {DeviceData, Devices} from "../../../../../store/appState/appStateReducer"
import useAppState from "../../../../../store/appState/useAppState"
import {FormattedMessage} from "react-intl"
import {usePageNavigator} from "../../../../../contexts/pageNavigator/PageNavigatorContext"

export type Device = {
    type: 'mobile' | 'tablet' | 'desktop',
    deviceId: string,
    onDelete: () => void
}

type DeviceItemProps = {
    device: DeviceData,
    index: number,
    isEditting: boolean,
    setAsEditting: (id: string | null) => void,
    onUpdateDeviceName: (name: string) => void,
    onClick: (index: number) => void,
    onDeviceDelete: (deviceId: string) => void,
    showDropdown: boolean,
    hideDropdown: () => void
}

type DeviceListProps = {
    devices: Devices,
    onDeviceDelete: (deviceId: string) => void
}

const StyledDeviceItem = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	
	&:not(:first-of-type) {
		margin-top: 15px;
	}
`

const StyledDeviceItemSection = styled.div`
	display: flex;
	align-items: center;
`

const StyledDeviceItemIcon = styled.div``

const StyledDeviceItemName = styled.p`
	margin-left: 15px;
	font-weight: bold;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	max-width: 150px;
	@media (${screenWidth.mediumWidth}) {
		font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
		max-width: 200px;
	}
`

const StyledDeviceItemNameInput = styled.input`
	min-width: 200px;
	height: 100%;
	margin-left: 15px;
	font-weight: bold;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	border: none;
	border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
	padding: 2px 0;
	@media (${screenWidth.mediumWidth}) {
		font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
	}
	
	&:focus {
		outline: none;
	}
`

const StyledDeviceItemButton = styled.button`
	border: none;
	background-color: transparent;
	padding: 5px;
	color: ${props => props.theme.ui.colors.text.primary};
	opacity: 0.5;
`

const simpleFadeIn = keyframes`
	from {
		opacity: 0;
	}
	
	to {
		opacity: 1;
	}
`

const StyledDeviceItemNameConfirm = styled(StyledDeviceItemButton)`
	background-color: ${props => props.theme.ui.colors.primary};
	color: white;
	padding: 3px 10px;
	border-radius: 5px;
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	animation: ${simpleFadeIn} 100ms linear forwards;
`
const StyledDeviceList = styled.div`
	width: 100%;
	margin-top: 15px;
`	

const DeviceItem = ({
		index,
		device,
		isEditting,
		setAsEditting,
		onUpdateDeviceName,
		onClick,
		onDeviceDelete,
		showDropdown,
		hideDropdown
	}: DeviceItemProps) => {

	  
    useEffect(() => {
        setDeviceName(device.name)
    }, [])

    const [deviceName, setDeviceName] = useState('')
    const {dispatch} = usePageNavigator()

    const onChangeName = (name: string) => {
        setDeviceName(name)
    }

    const editInputRef = useCallback((node: HTMLInputElement) => {
        if (node) {
            node.focus()
        }
    }, [])

    const editInputButton = useRef<HTMLButtonElement>(null)

    const onEditInputFocusLoss = (event: React.FocusEvent<HTMLInputElement>) => {
        if (event.relatedTarget === editInputButton.current) {
            return
        }
        return setAsEditting(null)
    }

    const onChangeNameConfirm = () => {
        if (deviceName !== device.name) {
            onUpdateDeviceName(deviceName)
        } else {
            setAsEditting(null)
        }
    }

    const getDeviceIcon = () => {
        switch (device.type) {
            case 'mobile':
                return <Mobile size={24}/>
            case 'tablet':
                return <Tablet size={24}/>
            case 'desktop':
                return <Desktop size={24}/>
            default:
                return
        }
    }

    const deviceContextMenuButtons: Array<ContextMenuActions> = [
        {
            text: <FormattedMessage id='platform.settings.devices.contextMenu.edit'/>,
            action: () => {
                setAsEditting(device.id)
            }
        },
        {
            text: <FormattedMessage id='platform.settings.devices.contextMenu.delete'/>,
            action: () => {
                onDeviceDelete(device.id)
            }
        }
    ]

    return (
        <StyledDeviceItem>
            <StyledDeviceItemSection>
                <StyledDeviceItemIcon>
                    {getDeviceIcon()}
                </StyledDeviceItemIcon>
                {
                    isEditting ? <StyledDeviceItemNameInput defaultValue={device.name}
                                                            onChange={(event) => onChangeName(event.target.value)}
                                                            ref={editInputRef}
                                                            onBlur={(event) => onEditInputFocusLoss(event)}/> :
                        <StyledDeviceItemName>{device.name}</StyledDeviceItemName>
                }
            </StyledDeviceItemSection>
            <StyledDeviceItemSection>
                {
                    isEditting ? <StyledDeviceItemNameConfirm
                            ref={editInputButton}
                            onClick={onChangeNameConfirm}>
                            <Checkmark size={16} color='#fff'/>
                        </StyledDeviceItemNameConfirm> :
                        <TippyDropdown content={<ContextMenu buttons={deviceContextMenuButtons}/>}
                                       visible={showDropdown}
                                       onClickOutside={(instance => {
                                           instance.hide();
                                           hideDropdown()
                                       })}>
                            <StyledDeviceItemButton onClick={() => onClick(index)}>
                                <VerticalOptions/>
                            </StyledDeviceItemButton>
                        </TippyDropdown>
                }
            </StyledDeviceItemSection>
        </StyledDeviceItem>
    )
}


const DeviceList = ({devices, onDeviceDelete}: DeviceListProps) => {

    const {updateClientDevice, clientDevices} = useAppState()
    const [currentContextIndex, setCurrentContextIndex] = useState<number | null>(null)
    const [currentEditId, setCurrentEditId] = useState<string | null>(null)


    const clearContextMenu = () => {
        setCurrentEditId(null)
        return setCurrentContextIndex(null)
    }

    const showContextMenu = (index: number) => {
        setCurrentEditId(null)
        if (currentContextIndex === index) {
            return clearContextMenu()
        }
        setCurrentContextIndex(index)
    }

    const setAsCurrentEditId = (id: string | null) => {
        setCurrentContextIndex(null)
        setCurrentEditId(id)
    }

    const onUpdateDeviceName = (value: string) => {
        if (currentEditId) {
            updateClientDevice(currentEditId, {
                ...clientDevices[currentEditId],
                name: value
            })
            setAsCurrentEditId(null)
        }
    }


    return (
        <StyledDeviceList>
            {Object.values(devices).map((device, idx) => (
                <DeviceItem
                    index={idx}
                    isEditting={currentEditId === device.id}
                    setAsEditting={setAsCurrentEditId}
                    onUpdateDeviceName={onUpdateDeviceName}
                    onClick={showContextMenu}
                    onDeviceDelete={onDeviceDelete}
                    device={device}
                    key={idx}
                    showDropdown={currentContextIndex === idx}
                    hideDropdown={clearContextMenu}

                />
            ))}
        </StyledDeviceList>

    )
}

export default DeviceList
