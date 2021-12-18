import styled from 'styled-components';
import {HTMLAttributes} from "react";
import ListItem from "./ListItem/ListItem";
import useAppState from "../../../../store/appState/useAppState";
import {AddProfile, ManageAccount, PlatformLock} from "../../Icons/Icons";
import {FormattedMessage} from "react-intl";
import {lockPlatform} from '../../../../services/workerService/workerService';
import {ProfileData} from "../../../../store/appState/appStateReducer";

export type Profiles = Array<ProfileData>

type ProfileDropdownProps = {
    closeDropdown: () => void
} & HTMLAttributes<HTMLDivElement>

const StyledProfileDropdown = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  border-radius: 10px;
  //padding: 0 20px;
`

const StyledProfileDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-height: calc(70px * 5);
  overflow-y: auto;
`

const StyledProfileDropdownOptions = styled.div`
  width: 100%;
`

const StyledProfileDropdownOption = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.ui.colors.text.primary};
  text-align: start;
  padding: 15px 30px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  border-top: 1px solid ${props => props.theme.ui.colors.border.light};

  &:hover {
    background-color: ${props => props.theme.ui.colors.primary};
  }

  &:hover > * {
    color: #fff
  }
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
        setActiveProfile(clientProfiles[keyId])
    }


    return (
        <StyledProfileDropdown>
            <StyledProfileDropdownList>
                {
                    Object.values(clientProfiles).map((profile, idx) => <
                        ListItem
                        key={idx} {...profile}
                        active={activeProfile?.keyID === profile.keyID}
                        onSwitchProfile={onSwitchProfile}
                    />)
                }
            </StyledProfileDropdownList>
            <StyledProfileDropdownOptions>
                <StyledProfileDropdownOption onClick={addProfileHandler}>
                    <AddProfile size={20}/>
                    <StyledProfileDropdownOptionsText>
                        <FormattedMessage id='globalBar.profile.dropdown.addProfile'/>
                    </StyledProfileDropdownOptionsText>
                </StyledProfileDropdownOption>
                <StyledProfileDropdownOption onClick={manageProfileHandler}>
                    <ManageAccount size={20}/>
                    <StyledProfileDropdownOptionsText>
                        <FormattedMessage id='globalBar.profile.dropdown.manageProfiles'/>
                    </StyledProfileDropdownOptionsText>
                </StyledProfileDropdownOption>
                <StyledProfileDropdownOption onClick={lockPlatform}>
                    <PlatformLock size={20}/>
                    <StyledProfileDropdownOptionsText>
                        <FormattedMessage id='globalBar.profile.dropdown.lockPlatform'/>
                    </StyledProfileDropdownOptionsText>
                </StyledProfileDropdownOption>
            </StyledProfileDropdownOptions>
        </StyledProfileDropdown>
    )
}

export default ProfileDropdown
