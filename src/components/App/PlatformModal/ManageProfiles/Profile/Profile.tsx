import Image from "../../../../UI/Common/Profile/Image/Image";
import AnonymousProfile from "../../../../../assets/Avatar-anonymous.png";
import {Camera} from "../../../../UI/Icons/Icons";
import styled from "styled-components";
import {screenWidth} from "../../../../UI/screenSizes";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {ProfileData} from "../../../../../store/appState/appStateReducer";
import {getBase64FromFile} from "../../../../../utilities/utilities";
import {FormattedMessage} from "react-intl";

const StyledManageProfile = styled.div`
  padding: 40px 0 20px 0;
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

const StyledProfileRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
`

const StyledProfileImage = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
`

const StyledProfileImageEdit = styled.button`
  position: absolute;
  top: 0;
  border: none;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  opacity: 0;
  font-weight: bold;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 10px;
  transition: opacity 150ms ease-in-out;

  &:hover {
    opacity: 1;
  }
`

const StyledProfileImageEditText = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const StyledHiddenInput = styled.input`
  display: none;
`

const StyledProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin-top: 10px;
  }
`

const StyledNameInput = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.ui.borderColor};
  padding: 5px;
  min-width: 15rem;
  width: 100%;
  text-align: center;
  background-color: ${props => props.theme.ui.backgroundColor};
  color: ${props => props.theme.ui.text.textPrimary};

  &:focus {
    outline: none;
  }
`

const StyledPrimarySelectionRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

const StyledPrimaryCheckbox = styled.input`
  margin-right: 10px;
`

const StyledPrimaryText = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const StyledKeyIdTextRow = styled(StyledPrimarySelectionRow)``

const StyledTextLabel = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  color: ${props => props.theme.ui.text.textSecondary}
`

const StyledText = styled(StyledTextLabel)`
  margin-left: 10px;
`

type ProfileProps = {
    profile: ProfileData,
    onChange: (profile: ProfileData) => void,
    disableUpdate?: boolean,
    newProfile?: boolean
}

const Profile = ({profile, onChange, disableUpdate, newProfile}: ProfileProps) => {

    console.log(profile)

    const filePickerRef = useRef<HTMLInputElement>(null)

    const profileImageRef = useRef<HTMLImageElement>(null)

    const onNameChange = (value: string) => {
        const updatedProfile = {
            ...profile,
            nickname: value
        }

        onChange(updatedProfile)
    }

    const onProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event && event.target && event.target.files?.length) {
            getBase64FromFile(event.target.files[0], (error, base64) => {
                if (error) {
                    return
                }

                if (typeof base64 === 'string' && profile !== null) {
                    if (profileImageRef && profileImageRef.current) {
                        profileImageRef.current.src = base64
                    }

                    const updatedProfile: ProfileData = {
                        ...profile,
                        imageSrc: base64
                    }
                    if (filePickerRef && filePickerRef.current) {
                        filePickerRef.current.files = null
                        filePickerRef.current.value = ""
                    }

                    onChange(updatedProfile)
                }
            })
        }
    }

    const onChangePrimary = (checked: boolean) => {
        const updatedProfile = {
            ...profile,
            primary: checked
        }

        onChange(updatedProfile)
    }

    return (
        <>
            <StyledHiddenInput type='file' accept='.jpeg,.jpg,.png,.svg' ref={filePickerRef}
                               onChange={onProfileChange}/>
            <StyledManageProfile>
                <StyledProfileRow>
                    <StyledProfileImage>
                        <Image src={profile && profile.imageSrc || AnonymousProfile} size={150} ref={profileImageRef}/>
                        {
                            !disableUpdate && (
                                <StyledProfileImageEdit onClick={() => filePickerRef.current?.click()}>
                                    <Camera size={22} color="white"/>
                                    <StyledProfileImageEditText><FormattedMessage id='platform.profile.changePicture'/></StyledProfileImageEditText>
                                </StyledProfileImageEdit>
                            )
                        }
                    </StyledProfileImage>
                    <StyledProfileDetails>
                        <StyledNameInput
                            type='text'
                            defaultValue={profile?.nickname || ""}
                            disabled={disableUpdate}
                            onChange={event => onNameChange(event.target.value)}
                            placeholder="Anonymous User"
                        />
                        <StyledKeyIdTextRow>
                            <StyledTextLabel>Key ID:</StyledTextLabel>
                            <StyledText>{profile.keyid}</StyledText>
                        </StyledKeyIdTextRow>
                        {
                            !disableUpdate && (
                                <StyledPrimarySelectionRow>
                                    <StyledPrimaryCheckbox type='checkbox'
                                                           onChange={e => onChangePrimary(e.target.checked)}
                                                           defaultChecked={profile?.primary}
                                                           disabled={!newProfile && profile?.primary}
                                    />
                                    <StyledPrimaryText>
                                        <FormattedMessage id='platform.manageProfile.setAsPrimary'/>
                                    </StyledPrimaryText>
                                </StyledPrimarySelectionRow>
                            )
                        }
                    </StyledProfileDetails>
                </StyledProfileRow>
            </StyledManageProfile>
        </>
    )
}

export default Profile
