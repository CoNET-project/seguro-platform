import styled from "styled-components";
import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";
import ProfileView from "../Profile/Profile";
import {FormattedMessage} from "react-intl";
import useAppState from "../../../../../store/appState/useAppState";
import {ProfileData} from "../../../../../store/appState/appStateReducer";

type DeleteProfileProps = {
    custom: number,
    profile: ProfileData,
    onDelete: (keyId: string) => void,
    onBack: () => void
}


const StyledDeleteProfile = styled.div`
  min-height: 30rem;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
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
  color: ${props => props.theme.ui.colors.text.primary};
  font-weight: 700;
`

const StyledDeleteProfileSubmessage = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.md};
  color: ${props => props.theme.ui.colors.text.primary};
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
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  border-radius: 5px;
  background-color: ${props => props.danger ? props.theme.ui.colors.dangerous : 'initial'};
  color: ${props => props.danger ? 'white' : props.theme.ui.colors.text.primary};

  &:last-of-type {
    margin-left: 20px;
  }
`

const DeleteProfile = ({profile, custom, onDelete, onBack}: DeleteProfileProps) => {

    const {clientProfiles} = useAppState()
    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Manage Profile"
                       variants={pageTransitionVariants}>
            <StyledDeleteProfile>
                <ProfileView profile={profile} onChange={() => {
                }} disableUpdate={true}/>
                {
                    Object.values(clientProfiles).length > 1 && (
                        <StyledDeleteProfileMessage>
                            <FormattedMessage id='platform.manageProfiles.deleteProfile.confirmationTitle'/>
                        </StyledDeleteProfileMessage>
                    )
                }
                <StyledDeleteProfileSubmessage>
                    {
                        Object.values(clientProfiles).length > 1 ? (
                            <FormattedMessage id='platform.manageProfiles.deleteProfile.confirmationSubtext'/>
                        ) : (
                            <FormattedMessage id='platform.manageProfiles.deleteProfile.onlyProfileError'/>
                        )
                    }
                </StyledDeleteProfileSubmessage>
                <StyledDeleteProfileRow>
                    {
                        Object.values(clientProfiles).length > 1 ? (
                            <>
                                <StyledDeleteProfileButton
                                    onClick={onBack}>
                                    <FormattedMessage id='platform.manageProfiles.deleteProfile.cancelButton'/>
                                </StyledDeleteProfileButton>
                                <StyledDeleteProfileButton
                                    danger={true}
                                    onClick={() =>
                                        onDelete(profile.keyID)}>
                                    <FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>
                                </StyledDeleteProfileButton>
                            </>
                        ) : (
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
