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

type ManageProfileProps = {
    custom: number,
    profile?: ProfileData,
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: center;
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
  width: 75%;
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

    const [currentProfile, setCurrentProfile] = useState<ProfileData | null>(null)

    const filePickerRef = useRef<HTMLInputElement>(null)

    const onNameChange = (value: string) => {
        if (currentProfile) {
            setCurrentProfile({
                imageSrc: currentProfile?.imageSrc,
                keyid: currentProfile?.keyid || "",
                nickname: value,
                primary: currentProfile.primary
            })
        }
    }

    const onProfileChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event && event.target && event.target.files?.length) {
            getBase64FromFile(event.target.files[0], (error, base64) => {
                if (error) {
                    return
                }

                if (typeof base64 === 'string' && currentProfile !== null) {
                    setCurrentProfile({
                        imageSrc: base64,
                        keyid: currentProfile.keyid || "",
                        nickname: currentProfile.nickname,
                        primary: currentProfile.primary
                    })
                    if (filePickerRef && filePickerRef.current) {
                        filePickerRef.current.files = null
                        filePickerRef.current.value = ""
                    }
                }
            })
        }
    }

    const onSave = () => {
        if (currentProfile) {
            onUpdate(currentProfile)
        }
    }

    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Manage Profile"
                       variants={pageTransitionVariants}>
            <StyledHiddenInput type='file' accept='.jpeg,.jpg,.png,.svg' ref={filePickerRef}
                               onChange={onProfileChange}/>
            <StyledManageProfile>
                <StyledManageProfileRow>
                    <StyledManageProfileImage>
                        <Image src={currentProfile && currentProfile.imageSrc || AnonymousProfile} size={150}/>
                        <StyledManageProfileImageEdit onClick={() => filePickerRef.current?.click()}>
                            <Camera size={20} color="white"/>
                            <p>Change Picture</p>
                        </StyledManageProfileImageEdit>
                    </StyledManageProfileImage>
                    <StyledProfileDetails>
                        <StyledNameInput
                            type='text'
                            defaultValue={currentProfile?.nickname || ""}
                            onChange={event => onNameChange(event.target.value)}/>
                        <StyledKeyIdTextRow>
                            <StyledTextLabel>Key ID:</StyledTextLabel>
                            <StyledText>{currentProfile?.keyid || ""}</StyledText>
                        </StyledKeyIdTextRow>
                        <StyledPrimarySelectionRow>
                            {
                                currentProfile && !currentProfile.primary && (
                                    <>
                                        <StyledPrimaryCheckbox type='checkbox'/>
                                        <StyledPrimaryText>
                                            Set as Primary
                                        </StyledPrimaryText>
                                    </>
                                )
                            }
                            {/*{*/}
                            {/*    currentProfile && currentProfile.primary && (*/}
                            {/*        <StyledPrimaryText>*/}
                            {/*            Your primary profile*/}
                            {/*        </StyledPrimaryText>*/}
                            {/*    )*/}
                            {/*}*/}
                        </StyledPrimarySelectionRow>
                    </StyledProfileDetails>
                    <StyledManageProfileRow>
                        <StyledManageProfileSaveButton
                            disabled={(profile?.nickname === currentProfile?.nickname) && (profile?.imageSrc === currentProfile?.imageSrc)}
                            onClick={onSave}
                        >
                            Save
                        </StyledManageProfileSaveButton>
                    </StyledManageProfileRow>
                </StyledManageProfileRow>
            </StyledManageProfile>
        </MotionWrapper>
    )
}

export default ManageProfile