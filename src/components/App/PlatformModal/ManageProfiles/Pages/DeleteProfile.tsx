import styled from "styled-components";
import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";
import Profile from "../Profile/Profile";
import {ProfileData} from "../../../../../store/appState/appStateReducer";
import {pageNavigator} from "../../../../../contexts/pageNavigator/pageNavigatorActions";
import {usePageNavigator} from "../../../../../contexts/pageNavigator/PageNavigatorContext";
import {FormattedMessage} from "react-intl";

type DeleteProfileProps = {
    custom: number,
    profile: ProfileData,
    onDelete: (keyId: string) => void,
    onBack: () => void
}


const StyledDeleteProfile = styled.div`
  min-height: 30rem;
  background-color: ${props => props.theme.ui.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledDeleteProfileRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

const StyledDeleteProfileMessage = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  color: ${props => props.theme.ui.text.textPrimary};
  font-weight: 700;
`

const StyledDeleteProfileSubmessage = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  color: ${props => props.theme.ui.text.textPrimary};
  margin-top: 5px;
  max-width: 75%;
  text-align: center;
`

type ButtonProps = {
    danger?: boolean
}

const StyledDeleteProfileButton = styled.button<ButtonProps>`
  max-width: 75%;
  padding: 10px 30px;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.ui.borderColor};
  border-radius: 5px;
  background-color: ${props => props.danger ? props.theme.ui.dangerousColor : 'initial'};
  color: ${props => props.danger ? 'white' : props.theme.ui.text.textPrimary};

  &:last-of-type {
    margin-left: 20px;
  }
`

const DeleteProfile = ({profile, custom, onDelete, onBack}: DeleteProfileProps) => {
    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Manage Profile"
                       variants={pageTransitionVariants}>
            <StyledDeleteProfile>
                <Profile profile={profile} onChange={() => {
                }} disableUpdate={true}/>
                <StyledDeleteProfileMessage>
                    {profile.primary ? (
                        <FormattedMessage id='platform.manageProfiles.deleteProfile.isPrimaryText'/>
                    ) : (
                        <FormattedMessage id='platform.manageProfiles.deleteProfile.confirmationTitle'/>
                    )}
                </StyledDeleteProfileMessage>
                <StyledDeleteProfileSubmessage>{profile.primary ? (
                    <FormattedMessage id='platform.manageProfiles.deleteProfile.isPrimarySubtext'/>
                ) : (
                    <FormattedMessage id='platform.manageProfiles.deleteProfile.confirmationSubtext'/>
                )}</StyledDeleteProfileSubmessage>
                <StyledDeleteProfileRow>
                    {
                        !profile.primary && (
                            <>
                                <StyledDeleteProfileButton
                                    onClick={onBack}>
                                    <FormattedMessage id='platform.manageProfiles.deleteProfile.cancelButton'/>
                                </StyledDeleteProfileButton>
                                <StyledDeleteProfileButton
                                    danger={true}
                                    onClick={() =>
                                        onDelete(profile.keyid)}>
                                    <FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>
                                </StyledDeleteProfileButton>
                            </>
                        )
                    }
                    {
                        profile.primary && (
                            <StyledDeleteProfileButton
                                onClick={onBack}>
                                <FormattedMessage
                                    id='platform.manageProfiles.deleteProfile.returnButton'/>
                            </StyledDeleteProfileButton>
                        )
                    }
                </StyledDeleteProfileRow>
            </StyledDeleteProfile>
        </MotionWrapper>
    )
}

export default DeleteProfile
