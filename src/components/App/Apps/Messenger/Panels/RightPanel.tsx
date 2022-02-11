import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext";
import {Checkmark, EditPencilIcon} from "../../../../UI/Icons/Icons";
import Input from "../../../../UI/Inputs/Input/Input";
import {useEffect, useState} from "react";
import { Contact } from '../../../../../contexts/messenger/messengerActions';
import {Overlay} from "../../../../UI/Common/Overlay/Overlay";

const StyledRightPanel = styled.div`
  height: 100%;
  width: 100%;
  content: '';
`

const CustomStyledHeader = styled(HeaderBar)`
`

const StyledRightPanelContent = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: auto;
`

const StyledProfileImage = styled.img`
  width: 100%;
  min-width: 300px;
  min-height: 50%;
  object-position: center;
  object-fit: cover;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
`

const StyledRightPanelSection = styled.div`
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
`

type StyledPanelRowProps = {
    border?: boolean
}

const StyledPanelRow = styled.div<StyledPanelRowProps>`
  padding: 0 15px;
  min-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: ${props => props.border && `1px solid ${props.theme.ui.colors.border.light}`}
`

const StyledPanelTitle = styled.p`
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  align-items: center;
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} + 1px);
  font-family: 'Lato Bold', sans-serif;
`

const StyledPanelLabel = styled(StyledPanelTitle)`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

type StyledPanelTextProps = {
    isSet?: boolean
}

const StyledPanelText = styled(StyledPanelLabel)<StyledPanelTextProps>`
  font-family: 'Lato Regular', sans-serif;
  justify-content: flex-end;
  opacity: ${props => props.isSet || props.isSet == undefined ? 1 : 0.5}
`

const StyledPanelRowWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledPanelIconButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 5px;
  background-color: transparent;
  font-size: 16px;
  opacity: 1;
  cursor: pointer;
`

const StyledPanelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 8px;
  background-color: red;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  opacity: 1;
  cursor: pointer;
  border-radius: 5px;
`

const StyledCustomNicknameInput = styled(Input)`
  min-height: 20px;
  min-width: 100px;
  margin: 0;
`

const StyledPopupModal = styled.div`
  position: absolute;
  min-height: 50%;
  width: 100%;
  bottom: 0;
  left: 0;
  content: '';
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  background-color: ${props => props.theme.ui.colors.background.elevationOne};
  box-shadow: -5px 0 15px rgba(0,0,0,0.4)
`

const RightPanel = () => {
    const {setCurrentFocusPanel, selectedContact, currentFocusPanel} = useMessengerContext()
    const [nicknameEdit, setNicknameEdit] = useState('')
    const [toggleEdit, setToggleEdit] = useState(false)

    const [contactProfile, setContactProfile] = useState<Contact>()

    useEffect(() => {
        if (currentFocusPanel === 'right' && selectedContact) {
            setContactProfile(selectedContact)
        }
        setToggleEdit(false)
    }, [currentFocusPanel])

    const onConfirmNickname = () => {

    }

    return (
        <>
        <StyledRightPanel>
            <CustomStyledHeader
                closeAction={{
                    action: () => setCurrentFocusPanel('main'),
                    alwaysVisible: true
                }}
                headerContent={{
                    title: contactProfile?.nickname || contactProfile?.alias || contactProfile?.keyId,
                    subtitle: contactProfile && (contactProfile?.nickname || contactProfile?.alias) ? contactProfile?.keyId : null
                }}
            />
            <StyledRightPanelContent>
                <StyledProfileImage src={contactProfile?.profileSrc}/>
                <StyledRightPanelSection>
                    <StyledPanelRow border>
                        <StyledPanelTitle>Contact Information</StyledPanelTitle>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelLabel>ID</StyledPanelLabel>
                        <StyledPanelText>{contactProfile?.keyId}</StyledPanelText>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelLabel>Alias</StyledPanelLabel>
                        <StyledPanelText isSet={!!contactProfile?.alias}>
                            {contactProfile?.alias}
                        </StyledPanelText>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelLabel>Nickname</StyledPanelLabel>
                        <StyledPanelRowWrapper>
                            <StyledPanelText
                                isSet={!!contactProfile?.nickname}>
                                {contactProfile?.nickname || 'Unset'}
                            </StyledPanelText>
                            <StyledPanelIconButton onClick={() => setToggleEdit(true)}>
                                <EditPencilIcon/>
                            </StyledPanelIconButton>
                        </StyledPanelRowWrapper>
                    </StyledPanelRow>
                </StyledRightPanelSection>
                <StyledRightPanelSection>
                    <StyledPanelRow>
                        <StyledPanelLabel>Bio</StyledPanelLabel>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelText
                            style={{justifyContent: 'flex-start', textAlign: 'left', marginBottom: '20px'}}>
                            {contactProfile?.bio}
                        </StyledPanelText>
                    </StyledPanelRow>
                </StyledRightPanelSection>
            </StyledRightPanelContent>
        </StyledRightPanel>
        {
            toggleEdit && (
                <StyledPopupModal>
                    Edit your name
                </StyledPopupModal>
            )
        }
        </>
    )
}

export default RightPanel