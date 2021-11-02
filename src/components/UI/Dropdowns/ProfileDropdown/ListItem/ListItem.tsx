import styled from 'styled-components';
import ProfileImage from "../../../Common/Profile/Image/Image";
import {Checkmark, Copy} from "../../../Icons/Icons";
import {toast} from "../../../Toaster/Toaster";
import {FormattedMessage} from "react-intl";
import {CopyToClipboard} from "../../../../../utilities/utilities";
import {current} from "@reduxjs/toolkit";
import useAppState from "../../../../../store/appState/useAppState";

const StyledProfileItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12.5px 30px;
`

const StyledProfileDetails = styled.div`
  margin-left: 20px;
`

const StyledProfileName = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  font-weight: bold;
`

const StyledProfileKeyId = styled.p`
  color: ${props => props.theme.ui.text.textPrimary};
  margin-right: 15px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
`

const StyledProfileKeyIdCopy = styled.button`
  background-color: transparent;
  border: none;
`

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`

const StyledManageButton = styled.button`
  padding: 5px 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.ui.text.textPrimary};
  border-radius: 5px;
  margin-top: 5px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
  color: ${props => props.theme.ui.text.textPrimary}
`

export type ProfileData = {
    imageSrc: string,
    keyid: string,
    name?: string
}


const ListItem = ({imageSrc, keyid, name, current}: ProfileData & { current?: boolean }) => {

    const copyDeviceCode = (code: string) => {
        toast({
            toastIcon: <Checkmark size={18}/>,
            event: <FormattedMessage id='toaster.action.copyDeviceCode'/>,
            duration: 'sm'
        })
        CopyToClipboard(code)
    }

    return (
        <StyledProfileItem>
            <ProfileImage src={imageSrc} size={45}/>
            <StyledProfileDetails>
                <StyledProfileName>{name || 'Anonymous User'}</StyledProfileName>
                <RowWrapper>
                    <StyledProfileKeyId>{keyid}</StyledProfileKeyId>
                    <StyledProfileKeyIdCopy onClick={() => copyDeviceCode(keyid)}>
                        <Copy/>
                    </StyledProfileKeyIdCopy>
                </RowWrapper>
            </StyledProfileDetails>
        </StyledProfileItem>
    )
}

export default ListItem
