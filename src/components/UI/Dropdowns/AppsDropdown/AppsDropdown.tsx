import styled from 'styled-components';
import Dropdown from "../../Common/Dropdown/Dropdown";
import {HTMLAttributes} from "react";
import {FaAppStoreIos, FaCcApplePay, FaWhatsapp} from "react-icons/all";

type AppsDropdownProps = {} & HTMLAttributes<HTMLDivElement>

const StyledAppsDropdown = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`

const StyledAppItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 75px;
`

const StyledAppIcon = styled.div`
`

const StyledAppName = styled.p`
  font-size: 12px;
  margin-top: 5px;
  text-align: center;
`

const DropdownContent = () => {
    return (
        <StyledAppsDropdown>
            <StyledAppItem>
                <StyledAppIcon>
                    <FaWhatsapp size={36}/>
                </StyledAppIcon>
                <StyledAppName>
                    WhatsApp
                </StyledAppName>
            </StyledAppItem>

            <StyledAppItem>
                <StyledAppIcon>
                    <FaCcApplePay size={36}/>
                </StyledAppIcon>
                <StyledAppName>
                    Apple Pay
                </StyledAppName>
            </StyledAppItem>

            <StyledAppItem>
                <StyledAppIcon>
                    <FaAppStoreIos size={36}/>
                </StyledAppIcon>
                <StyledAppName>
                    App Store
                </StyledAppName>
            </StyledAppItem>
        </StyledAppsDropdown>
    )
}


const AppsDropdown = ({}: AppsDropdownProps) => {
    return (
        <Dropdown content={DropdownContent()}/>
    )
}

export default AppsDropdown;