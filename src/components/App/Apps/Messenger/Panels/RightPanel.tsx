import styled from 'styled-components'
import HeaderBar from "../../../../UI/Common/HeaderBar/HeaderBar";
import {useMessengerContext} from "../../../../../contexts/messenger/MessengerContext";
import {Checkmark, EditPencilIcon} from "../../../../UI/Icons/Icons";
import Input from "../../../../UI/Inputs/Input/Input";
import {useEffect, useRef, useState} from "react";
import {Contact} from '../../../../../contexts/messenger/messengerActions';
import {trimToLength} from "../../../../../utilities/utilities";

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
  height: 350px;
  object-position: center;
  object-fit: cover;
  display: block
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
  opacity: ${props => props.isSet || props.isSet == undefined ? 1 : 0.5};
  min-width: 100px;
  max-width: 100%;
  overflow: hidden;
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

const StyledCustomNicknameInput = styled(Input)`
  min-height: 20px;
  min-width: 100px;
  margin: 0;
`

const RightPanel = () => {
    const {setCurrentFocusPanel, selectedContact, currentFocusPanel, updateContact} = useMessengerContext()
    const [nicknameEdit, setNicknameEdit] = useState('')
    const [toggleEdit, setToggleEdit] = useState(false)

    const [contactProfile, setContactProfile] = useState<Contact>()

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef && inputRef.current && toggleEdit) {
            inputRef.current.focus()
        }
    }, [inputRef, toggleEdit])

    useEffect(() => {
        if (currentFocusPanel === 'right' && selectedContact) {
            setContactProfile(selectedContact)
        }
        setToggleEdit(false)
    }, [currentFocusPanel])

    const onEditNickname = () => {
        if (toggleEdit) {
            if (selectedContact) {
                const updatedContact: Contact = {
                    keyId: selectedContact.keyId,
                    nickname: nicknameEdit,
                    alias: selectedContact.alias,
                    bio: selectedContact.bio,
                    profileSrc: selectedContact.profileSrc
                }
                updatedContact.nickname = nicknameEdit
                updateContact(selectedContact, updatedContact)
                setContactProfile(updatedContact)
            }
        }
        setToggleEdit(!toggleEdit)
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
                        title: trimToLength(contactProfile?.nickname, 20) || trimToLength(contactProfile?.alias, 20) || contactProfile?.keyId,
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
                                {
                                    toggleEdit ? (
                                        <StyledCustomNicknameInput defaultValue={contactProfile?.nickname}
                                                                   id="nicknameInput"
                                                                   ref={inputRef}
                                                                   onChange={setNicknameEdit}
                                        />
                                    ) : (
                                        <StyledPanelText isSet={!!contactProfile?.nickname}>
                                            {trimToLength(contactProfile?.nickname, 30) || 'Unset'}
                                        </StyledPanelText>
                                    )
                                }
                                <StyledPanelIconButton onClick={onEditNickname}>
                                    {
                                        toggleEdit ? (
                                            <Checkmark/>
                                        ) : (
                                            <EditPencilIcon/>
                                        )
                                    }
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
        </>
    )
}

export default RightPanel