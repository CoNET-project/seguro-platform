import styled from 'styled-components';
import Dropdown from "../../Common/Dropdown/Dropdown";
import {HTMLAttributes} from "react";
import {FaAppStoreIos, FaCcApplePay, FaWhatsapp} from "react-icons/all";

type AppsDropdownProps = {} & HTMLAttributes<HTMLDivElement>

const StyledAppsDropdown = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  max-width: 40rem;
`

const StyledAppItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
`

const StyledAppIcon = styled.div`
`

const StyledAppName = styled.p`
  text-align: center;
  font-size: 13px;
`

const AppsDropdown = () => {
    return (
        <StyledAppsDropdown>
            <StyledAppItem>
                <StyledAppIcon>
                    <FaWhatsapp size={24}/>
                </StyledAppIcon>
                <StyledAppName>
                    WhatsApp
                </StyledAppName>
            </StyledAppItem>

            <StyledAppItem>
                <StyledAppIcon>
                    <FaCcApplePay size={24}/>
                </StyledAppIcon>
                <StyledAppName>
                    Apple Pay
                </StyledAppName>
            </StyledAppItem>

            <StyledAppItem>
                <StyledAppIcon>
                    <FaAppStoreIos size={24}/>
                </StyledAppIcon>
                <StyledAppName>
                    App Store
                </StyledAppName>
            </StyledAppItem>
        </StyledAppsDropdown>
    )
}

export default AppsDropdown;
