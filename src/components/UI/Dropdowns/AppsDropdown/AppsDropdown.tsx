import styled from 'styled-components';
import {FaAppStoreIos, FaCcApplePay, FaWhatsapp} from "react-icons/fa";

type AppsDropdownProps = {
    closeDropdown: () => void
}

const StyledAppsDropdown = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  max-width: 40rem;
  padding: 10px 15px;
  border-radius: 10px;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
`

const StyledAppItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.ui.colors.primary};
  }

  &:hover > * {
    color: #fff
  }
`

const StyledAppIcon = styled.div`
`

const StyledAppName = styled.p`
  text-align: center;
  font-size: 13px;
`

const AppsDropdown = ({closeDropdown}: AppsDropdownProps) => {
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
