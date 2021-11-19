import styled from 'styled-components';
import ProfileImage from "../../../Common/Profile/Image/Image";
import {Checkmark, Copy} from "../../../Icons/Icons";
import {toast} from "../../../Toaster/Toaster";
import {FormattedMessage} from "react-intl";
import {CopyToClipboard} from "../../../../../utilities/utilities";
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {ProfileData} from '../../../../../store/appState/appStateReducer';
import React from "react";

type StyledProfileItemProps = {
    isActive?: boolean
}

const StyledProfileItem = styled.div<StyledProfileItemProps>`
  display: flex;
  align-items: center;
  padding: 12.5px 24px;
  cursor: pointer;
  background-color: ${props => props.isActive && props.theme.ui.borderColor};

  &:hover {
    background-color: ${props => props.theme.ui.primaryColorWithOpacity};
    color: ${props => props.theme.ui.text.invertedColor}
  }
`

const StyledProfileDetails = styled.div`
  margin: 0 15px;
  flex: 1;
`

const StyledProfileName = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  font-weight: bold;
  color: ${props => props.theme.ui.text.textPrimary};
`

const StyledProfileKeyId = styled.p`
  color: ${props => props.theme.ui.text.textPrimary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
`

const StyledProfileKeyIdCopy = styled.button`
  background-color: transparent;
  border: none;
  margin-left: 15px;

  & > * {
    transition: color 0ms ease-in-out;
  }

  ${StyledProfileItem}:hover & > * {
    color: ${props => props.theme.ui.text.invertedColor}
  }
`

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

type ListItemProps = {
    active?: boolean,
    onSwitchProfile: (keyId: string) => void
} & ProfileData


const ListItem = ({imageSrc, keyid, nickname, active, onSwitchProfile}: ListItemProps) => {

    const copyDeviceCode = (event: React.MouseEvent<HTMLButtonElement>, code: string) => {
        event.stopPropagation()
        toast({
            toastIcon: <Checkmark size={18}/>,
            event: <FormattedMessage id='toaster.action.copyDeviceCode'/>,
            duration: 'sm'
        })
        CopyToClipboard(code)
    }

    return (
        <StyledProfileItem onClick={() => onSwitchProfile(keyid)} isActive={active}>
            <ProfileImage src={imageSrc || AnonymousProfile} size={45}/>
            <StyledProfileDetails>
                <StyledProfileName>{nickname || 'Anonymous User'}</StyledProfileName>
                <RowWrapper>
                    <StyledProfileKeyId>{keyid}</StyledProfileKeyId>
                    <StyledProfileKeyIdCopy onClick={(event) => copyDeviceCode(event, keyid)}>
                        <Copy/>
                    </StyledProfileKeyIdCopy>
                </RowWrapper>
            </StyledProfileDetails>
        </StyledProfileItem>
    )
}

export default ListItem
