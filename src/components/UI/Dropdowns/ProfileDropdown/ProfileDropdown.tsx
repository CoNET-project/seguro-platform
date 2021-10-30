import styled from 'styled-components';
import Dropdown from "../../Common/Dropdown/Dropdown";
import ProfileImage from '../../Common/Profile/Image/Image'
import {HTMLAttributes} from "react";
import Card from "../../Common/Profile/Card/Card";

export type ProfileData = {
    imageSrc: string,
    keyid: string,
    name?: string
}

type ProfileDropdownProps = {
    profileData: ProfileData
} & HTMLAttributes<HTMLDivElement>

type ProfileContent = {
    imageSrc: string,
    keyid: string,
    name?: string,
}

const StyledProfileDropdown = styled.div`
  min-width: 20rem;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`

const ProfileDropdown = ({profileData}: ProfileDropdownProps) => {
    return (
        <StyledProfileDropdown>
            <Card {...profileData}/>
        </StyledProfileDropdown>
    )
}

export default ProfileDropdown
