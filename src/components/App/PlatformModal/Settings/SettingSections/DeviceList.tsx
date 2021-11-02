import styled from "styled-components";
import {Delete, Desktop, Mobile, Tablet} from "../../../../UI/Icons/Icons";
import {screenWidth} from "../../../../UI/screenSizes";

export type Device = {
    type: 'mobile' | 'tablet' | 'desktop',
    deviceId: string,
    onDelete: () => void
}

type DeviceItemProps = {
    device: Device
}

type DeviceListProps = {
    devices: Array<Device>
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

const StyledDeviceItemButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 5px;
`

const DeviceItem = ({device}: DeviceItemProps) => {

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


    return (
        <StyledDeviceItem>
            <StyledDeviceItemSection>
                <StyledDeviceItemIcon>
                    {getDeviceIcon()}
                </StyledDeviceItemIcon>
                <StyledDeviceItemName>{device.deviceId}</StyledDeviceItemName>
            </StyledDeviceItemSection>
            <StyledDeviceItemSection>
                <StyledDeviceItemButton>
                    <Delete size={24}/>
                </StyledDeviceItemButton>
            </StyledDeviceItemSection>
        </StyledDeviceItem>
    )
}

const StyledDeviceList = styled.div`
  width: 100%;
  margin-top: 15px;
`


const DeviceList = ({devices}: DeviceListProps) => {
    return (
        <StyledDeviceList>
            {devices.map((device, idx) => <DeviceItem device={device} key={idx}/>)}
        </StyledDeviceList>

    )
}

export default DeviceList
