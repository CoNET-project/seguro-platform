import styled from "styled-components";
import {Delete, Desktop, Mobile, Tablet, VerticalOptions} from "../../../../UI/Icons/Icons";
import {screenWidth} from "../../../../UI/screenSizes";
import {TippyDropdown} from "../../../../UI/Tippy/Tippy";
import {ReactNode, useEffect, useRef, useState} from "react";
import ContextMenu, {ContextMenuActions} from "../../../../UI/Common/ContextMenu/ContextMenu";
import {pageNavigator} from "../../../../../contexts/pageNavigator/pageNavigatorActions";
import {DeviceData, Devices} from "../../../../../store/appState/appStateReducer";

export type Device = {
    type: 'mobile' | 'tablet' | 'desktop',
    deviceId: string,
    onDelete: () => void
}

type DeviceItemProps = {
    device: DeviceData,
    index: number,
    isEditting: boolean,
    setAsEditting: (id: string) => void,
    onClick: (index: number) => void,
    showDropdown: boolean,
    hideDropdown: () => void
}

type DeviceListProps = {
    devices: Devices
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
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.medium.sm}
  }
`

const StyledDeviceItemNameInput = styled.input`
  min-width: 10rem;
  height: 100%;
  margin-left: 15px;
  font-weight: bold;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  border: none;
  border-bottom: 1px solid ${props => props.theme.ui.borderColor};
  padding: 2px 0;
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.medium.sm}
  }

  &:focus {
    outline: none;
  }
`

const StyledDeviceItemButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
  color: ${props => props.theme.ui.text.textPrimary};
  opacity: 0.5;
`

const DeviceItem = ({
                        index,
                        device,
                        isEditting,
                        setAsEditting,
                        onClick,
                        showDropdown,
                        hideDropdown
                    }: DeviceItemProps) => {

    const editInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        console.log(editInputRef.current)
        // if (editInputRef.current) {
        //     editInputRef.current.focus()
        // }
    }, [editInputRef.current])

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
            text: 'Edit Name',
            action: () => {
                setAsEditting(device.id)
            }
        },
        {
            text: 'Delete',
            action: () => {
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
                    isEditting ? <StyledDeviceItemNameInput defaultValue={device.name} ref={editInputRef}/> :
                        <StyledDeviceItemName>{device.name}</StyledDeviceItemName>
                }
            </StyledDeviceItemSection>
            <StyledDeviceItemSection>
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
            </StyledDeviceItemSection>
        </StyledDeviceItem>
    )
}

const StyledDeviceList = styled.div`
  width: 100%;
  margin-top: 15px;
`


const DeviceList = ({devices}: DeviceListProps) => {
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

    const setAsCurrentEditId = (id: string) => {
        setCurrentContextIndex(null)
        setCurrentEditId(id)
    }


    return (
        <StyledDeviceList>
            {Object.values(devices).map((device, idx) => (
                <DeviceItem
                    index={idx}
                    isEditting={currentEditId === device.id}
                    setAsEditting={setAsCurrentEditId}
                    onClick={showContextMenu}
                    device={device}
                    key={idx}
                    showDropdown={currentContextIndex === idx}
                    hideDropdown={clearContextMenu}/>
            ))}
        </StyledDeviceList>

    )
}

export default DeviceList
