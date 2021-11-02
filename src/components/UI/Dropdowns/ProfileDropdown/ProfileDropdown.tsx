import styled from 'styled-components';
import Dropdown from "../../Common/Dropdown/Dropdown";
import ProfileImage from '../../Common/Profile/Image/Image'
import {HTMLAttributes} from "react";
import ListItem, {ProfileData} from "./ListItem/ListItem";
import useAppState from "../../../../store/appState/useAppState";
import {BiPlus} from "react-icons/all";
import {AddProfile, ManageAccount} from "../../Icons/Icons";

export type Profiles = Array<ProfileData>

type ProfileDropdownProps = {
    profiles: Profiles,
    closeDropdown: () => void
} & HTMLAttributes<HTMLDivElement>

const StyledProfileDropdown = styled.div`
  width: 100%;
  height: 100%;
  //padding: 0 20px;
`

const StyledProfileDropdownOptions = styled.div`
  width: 100%;

`

const StyledProfileDropdownOption = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.ui.text.textPrimary};
  text-align: start;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  border-top: 1px solid ${props => props.theme.ui.borderColor};
`

const StyledProfileDropdownOptionsText = styled.p`
  margin-left: 10px;
`

const ProfileDropdown = ({profiles, closeDropdown}: ProfileDropdownProps) => {
    const {setIsModalOpen} = useAppState()

    const manageProfileHandler = () => {
        closeDropdown()
        setIsModalOpen('manageProfile')
    }


    return (
        <StyledProfileDropdown>
            {
                profiles.map((profile, idx) => <ListItem key={idx} {...profile} current={idx === 0}/>)
            }
            <StyledProfileDropdownOptions>
                <StyledProfileDropdownOption onClick={() => {
                }}>
                    <AddProfile size={20}/>
                    <StyledProfileDropdownOptionsText>
                        Add Profile
                    </StyledProfileDropdownOptionsText>
                </StyledProfileDropdownOption>
                <StyledProfileDropdownOption onClick={manageProfileHandler}>
                    <ManageAccount size={20}/>
                    <StyledProfileDropdownOptionsText>
                        Manage Profiles
                    </StyledProfileDropdownOptionsText>
                </StyledProfileDropdownOption>
            </StyledProfileDropdownOptions>
        </StyledProfileDropdown>
    )
}

export default ProfileDropdown
