import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext";
import {EditPencilIcon} from "../../../../UI/Icons/Icons";
import Input from "../../../../UI/Inputs/Input/Input";
import {useState} from "react";

const StyledRightPanel = styled.div`
  height: 100%;
  width: 100%;
  content: '';
`

const StyledRightPanelContent = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
`

const StyledProfileImage = styled.img`
  width: 100%;
  min-width: 300px;
  max-height: 300px;
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
  width: 100%;
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
  padding: 5px;
  background-color: transparent;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  opacity: 1;
  cursor: pointer;
`

const StyledCustomNicknameInput = styled(Input)`
  min-height: 20px;
  margin: 0;
`

const RightPanel = () => {
    const {setCurrentFocusPanel, selectedContact, currentFocusPanel} = useMessengerContext()
    const [nicknameEdit, setNicknameEdit] = useState('')
    const [toggleEdit, setToggleEdit] = useState(false)

    const onConfirmNickname = () => {

    }
    return (
        <StyledRightPanel>
            <HeaderBar
                closeAction={{
                    action: () => setCurrentFocusPanel('main'),
                    alwaysVisible: true
                }}
                headerContent={{
                    title: selectedContact?.nickname || selectedContact?.alias || selectedContact?.keyId,
                    subtitle: selectedContact && (selectedContact.nickname || selectedContact.alias) ? selectedContact.keyId : null
                }}
            />
            <StyledRightPanelContent>
                <StyledProfileImage src={selectedContact?.profileSrc}/>
                <StyledRightPanelSection>
                    <StyledPanelRow border>
                        <StyledPanelTitle>Contact Information</StyledPanelTitle>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelLabel>ID</StyledPanelLabel>
                        <StyledPanelText>{selectedContact?.keyId}</StyledPanelText>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelLabel>Alias</StyledPanelLabel>
                        <StyledPanelText isSet={!!selectedContact?.alias}>
                            {selectedContact?.alias}
                        </StyledPanelText>
                    </StyledPanelRow>
                    <StyledPanelRow>
                        <StyledPanelLabel>Nickname</StyledPanelLabel>
                        <StyledPanelRowWrapper>
                            {
                                toggleEdit ? (
                                    <>
                                        <StyledCustomNicknameInput
                                            id='nameInput'
                                            defaultValue={selectedContact?.nickname}
                                            onChange={setNicknameEdit}
                                        />
                                        <StyledPanelButton>
                                            Ok
                                        </StyledPanelButton>
                                    </>
                                ) : (
                                    <>
                                        <StyledPanelText
                                            isSet={!!selectedContact?.nickname}>
                                            {selectedContact?.nickname || 'Unset'}
                                        </StyledPanelText>
                                        <StyledPanelIconButton onClick={() => setToggleEdit(true)}>
                                            <EditPencilIcon/>
                                        </StyledPanelIconButton>
                                    </>
                                )
                            }
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
                            {selectedContact?.bio}
                        </StyledPanelText>
                    </StyledPanelRow>
                </StyledRightPanelSection>
            </StyledRightPanelContent>
        </StyledRightPanel>
    )
}

export default RightPanel