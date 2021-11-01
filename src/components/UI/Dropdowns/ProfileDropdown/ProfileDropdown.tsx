import styled from 'styled-components';
import Dropdown from "../../Common/Dropdown/Dropdown";
import ProfileImage from '../../Common/Profile/Image/Image'
import {HTMLAttributes} from "react";
import ListItem, {ProfileData} from "./ListItem/ListItem";

export type Profiles = Array<ProfileData>

type ProfileDropdownProps = {
    profiles: Profiles
} & HTMLAttributes<HTMLDivElement>

const StyledProfileDropdown = styled.div`
  width: 100%;
  height: 100%;
  //padding: 0 20px;
`

const ProfileDropdown = ({profiles}: ProfileDropdownProps) => {
    return (
        <StyledProfileDropdown>
            {
                profiles.map((profile, idx) => <ListItem key={idx} {...profile} current={idx === 0}/>)
            }
        </StyledProfileDropdown>
    )
}

export default ProfileDropdown
