import styled from "styled-components";
import {screenWidth} from "../../../UI/screenSizes";
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar";
import useAppState from "../../../../store/appState/useAppState";
import {useState} from "react";
import ProfileView from "../ManageProfiles/Profile/Profile";
import {FormattedMessage} from "react-intl";
import {ProfileData} from "../../../../store/appState/appStateReducer";


const StyledAddProfileContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  @media (${screenWidth.mediumWidth}) {
    min-width: 30rem;
  }
`

const StyledAddProfileRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
`

const StyledAddProfileContent = styled.div`
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.ui.colors.text.primary};
  @media (${screenWidth.mediumWidth}) {
    //margin: 20px;
  }
`

const CustomizedHeaderBar = styled(HeaderBar)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.ui.colors.background.elevationOne};

  & > * #headerTitle {
    font-size: ${props => props.theme.ui.fontSizes.narrow.md};
    font-weight: 700;
  }
`

const StyledAddProfileButton = styled.button`
  padding: 10px 50px;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  border-radius: 5px;
  background-color: ${props => props.theme.ui.colors.primary};
  color: ${props => props.theme.ui.colors.text.primary};
`

type AddProfileProps = {}

const AddProfile = ({}: AddProfileProps) => {

    const {setIsModalOpen, createClientProfile} = useAppState()

    const onCreateProfile = (profile: ProfileData) => {
        createClientProfile(profile)
        setIsModalOpen(null)
    }

    const [newProfile, setNewProfile] = useState<ProfileData>({
        alias: "", bio: "", tags: [],
        profileImg: '',
        keyID: '',
        nickname: '',
        isPrimary: false
    })

    return (
        <StyledAddProfileContainer>
            <CustomizedHeaderBar headerContent={{title: <FormattedMessage id='globalBar.profile.dropdown.addProfile'/>}}
                                 closeAction={{
                                     action: () => {
                                         return setIsModalOpen(null)
                                     },
                                     alignRight: true,
                                     alwaysVisible: true
                                 }}
            />
            <StyledAddProfileContent>
                <ProfileView profile={newProfile} onChange={setNewProfile} newProfile={true}/>
                <StyledAddProfileRow>
                    <StyledAddProfileButton onClick={() => onCreateProfile(newProfile)}>
                        <FormattedMessage id='platform.addProfile.createButton'/>
                    </StyledAddProfileButton>
                </StyledAddProfileRow>
            </StyledAddProfileContent>
        </StyledAddProfileContainer>
    )
}

export default AddProfile
