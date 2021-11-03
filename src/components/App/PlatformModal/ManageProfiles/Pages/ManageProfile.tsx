import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";
import styled from "styled-components";
import {ProfileData} from "../../../../UI/Dropdowns/ProfileDropdown/ListItem/ListItem";
import Image from "../../../../UI/Common/Profile/Image/Image";
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {Camera} from "../../../../UI/Icons/Icons";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {getBase64FromFile} from "../../../../../utilities/utilities";

type ManageProfileProps = {
    custom: number,
    profile?: ProfileData,
    onUpdate: (profile: ProfileData) => void
}

const StyledManageProfile = styled.div`
  padding: 20px 0;
  background-color: ${props => props.theme.ui.backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.ui.text.textPrimary};
`

const StyledManageProfileImage = styled.div`
  position: relative;
  height: fit-content;
  width: fit-content;
  display: flex;
`

const StyledManageProfileImageEdit = styled.button`
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

const StyledHiddenInput = styled.input`
  display: none;
`

const StyledProfileDetails = styled.div`
  margin-left: 20px;
`

const StyledNameInput = styled.input`
  border: none;
  border-bottom: 2px solid ${props => props.theme.ui.borderColor};
  padding: 5px;

  &:focus {
    outline: none;
  }
`

const StyledPrimaryCheckbox = styled.input``

const StyledPrimaryText = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  & > *:not(:first-child) {
    margin-left: 5px;
  }
`


const ManageProfile = ({custom, profile, onUpdate}: ManageProfileProps) => {

    useEffect(() => {
        if (profile) {
            setCurrentProfile(profile)
        }
    }, [])

    const [currentProfile, setCurrentProfile] = useState<ProfileData | null>(null)

    const filePickerRef = useRef<HTMLInputElement>(null)

    const onNameChange = (value: string) => {
        setCurrentProfile({
            imageSrc: currentProfile?.imageSrc,
            keyid: currentProfile?.keyid || "",
            name: currentProfile?.name
        })
    }

    const onProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event && event.target && event.target.files?.length) {
            getBase64FromFile(event.target.files[0], (error, base64) => {
                if (error) {
                    return
                }

                if (typeof base64 === 'string') {
                    setCurrentProfile({
                        imageSrc: base64,
                        keyid: currentProfile?.keyid || "",
                        name: currentProfile?.name
                    })
                    if (filePickerRef && filePickerRef.current) {
                        filePickerRef.current.files = null
                        filePickerRef.current.value = ""
                    }
                }
            })
        }
    }

    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Manage Profile"
                       variants={pageTransitionVariants}>
            <StyledHiddenInput type='file' accept='.jpeg,.jpg,.png,.svg' ref={filePickerRef}
                               onChange={onProfileChange}/>
            <StyledManageProfile>
                <StyledManageProfileImage>
                    <Image src={currentProfile && currentProfile.imageSrc || AnonymousProfile} size={100}/>
                    <StyledManageProfileImageEdit onClick={() => filePickerRef.current?.click()}>
                        <Camera size={20} color="white"/>
                        <p>Change Picture</p>
                    </StyledManageProfileImageEdit>
                </StyledManageProfileImage>
                <StyledProfileDetails>
                    <StyledNameInput
                        type='text'
                        defaultValue={currentProfile?.name || ""}
                        onChange={event => onNameChange(event.target.value)}/>
                    <StyledRow>
                        <StyledPrimaryCheckbox type='checkbox'/>
                        <StyledPrimaryText>
                            Set as Primary
                        </StyledPrimaryText>
                    </StyledRow>
                </StyledProfileDetails>
            </StyledManageProfile>
        </MotionWrapper>
    )
}

export default ManageProfile