import styled from 'styled-components';
import {HTMLAttributes} from "react";
import ListItem from "./ListItem/ListItem";
import useAppState from "../../../../store/appState/useAppState";
import {AddProfile, ManageAccount} from "../../Icons/Icons";
import {ProfileData} from '../../../../store/appState/appStateReducer';

export type Profiles = Array<ProfileData>

type ProfileDropdownProps = {
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

const ProfileDropdown = ({closeDropdown}: ProfileDropdownProps) => {
    const {setIsModalOpen, clientProfiles, setActiveProfile, activeProfile} = useAppState()

    const manageProfileHandler = () => {
        closeDropdown()
        setIsModalOpen('manageProfile')
    }

    const addProfileHandler = () => {
        closeDropdown()
        setIsModalOpen('addProfile')
    }

    const onSwitchProfile = (keyId: string) => {
        const profile = clientProfiles.filter(profile => profile.keyid === keyId)
        if (profile.length) {
            setActiveProfile(profile[0])
        }
    }


    return (
        <StyledProfileDropdown>
            {
                clientProfiles.map((profile, idx) => <
                    ListItem
                    key={idx} {...profile}
                    active={activeProfile?.keyid === profile.keyid}
                    onSwitchProfile={onSwitchProfile}
                />)
            }
            <StyledProfileDropdownOptions>
                <StyledProfileDropdownOption onClick={addProfileHandler}>
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
