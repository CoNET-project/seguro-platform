import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";
import styled from "styled-components";
import Image from "../../../../UI/Common/Profile/Image/Image";
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {Camera} from "../../../../UI/Icons/Icons";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {getBase64FromFile} from "../../../../../utilities/utilities";
import {screenWidth} from "../../../../UI/screenSizes";
import {ProfileData} from "../../../../../store/appState/appStateReducer";
import {isDisabled} from "@testing-library/user-event/dist/utils";
import Profile from "../Profile/Profile";

type ManageProfileProps = {
    custom: number,
    profile: ProfileData,
    onUpdate: (profile: ProfileData) => void
}

const StyledManageProfile = styled.div`
  padding: 40px 0;
  background-color: ${props => props.theme.ui.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.ui.text.textPrimary};
  @media (${screenWidth.mediumWidth}) {
    margin: 20px;
  }
`

const StyledManageProfileRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

const StyledManageProfileSaveButton = styled.button`
  min-width: 15rem;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${props => props.theme.ui.accentColor};
  color: ${props => props.theme.ui.text.invertedColor};
  border-radius: 5px;
  border: 1px solid ${props => props.theme.ui.borderColor};
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  font-weight: bold;
  text-transform: capitalize;

  &:disabled {
    opacity: 0.6;
  }
`


const ManageProfile = ({custom, profile, onUpdate}: ManageProfileProps) => {

    useEffect(() => {
        if (profile) {
            setCurrentProfile(profile)
        }
    }, [])

    const [currentProfile, setCurrentProfile] = useState<ProfileData>({
        keyid: '',
        primary: false
    })

    const onSave = () => {
        if (currentProfile) {
            onUpdate(currentProfile)
        }
    }

    const getProfileViewData = () => {
        const profileViewData = {
            ...profile
        }
        if (profile.imageSrc !== currentProfile.imageSrc) {
            profileViewData.imageSrc = currentProfile.imageSrc
        }
        return profileViewData
    }

    const saveIsDisabled = () => {
        return (profile?.nickname === currentProfile?.nickname) && (profile?.imageSrc === currentProfile?.imageSrc) && ((profile?.primary === currentProfile?.primary))
    }

    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Manage Profile"
                       variants={pageTransitionVariants}>
            <StyledManageProfile>
                <Profile profile={getProfileViewData()} onChange={(profile) => setCurrentProfile(profile)}/>
                <StyledManageProfileRow>
                    <StyledManageProfileSaveButton
                        disabled={saveIsDisabled()}
                        onClick={onSave}
                    >
                        Save
                    </StyledManageProfileSaveButton>
                </StyledManageProfileRow>
            </StyledManageProfile>
        </MotionWrapper>
    )
}

export default ManageProfile
