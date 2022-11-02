import React, {HTMLAttributes, useState} from "react"
import styled, {useTheme} from 'styled-components'
import ProfileImage from "../../../Common/Profile/Image/Image"
import useAppState from "../../../../../store/appState/useAppState"
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {toast} from "../../../Toaster/Toaster"
import {Checkmark, Copy} from "../../../Icons/Icons"
import {FormattedMessage} from "react-intl"
import {CopyToClipboard} from "../../../../../utilities/utilities"

import {VerticalOptions} from "../../../Icons/Icons"
import {getWorkerService} from '../../../../../services/workerService/workerService'

type StyledProfileItemProps = {
    isActive?: boolean
}

type ProfileDropdownProps = {
    closeDropdown: (app:string) => void
} & HTMLAttributes<HTMLDivElement>

const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Margin1rem = styled.div`
	margin-right: 1rem;
`

const StyledProfileDetails = styled.div`
	cursor: pointer;
	border-radius: 10px;
	flex: 1;
	&:hover {
		background-color: #eee;
		color: ${props => props.theme.ui.colors.secondary};
	}
	padding: 15px 15px;
`

const StyledProfileItem = styled.div<StyledProfileItemProps>`
	display: flex;
	align-items: center;
	padding: 0px 24px 0 24px;
	background-color: ${props => props.isActive && props.theme.ui.colors.border.light};
	min-height: 70px;
	
`
const StyledProfileName = styled.p`
font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
font-weight: bold;
`
const StyledProfileDropdownOptions = styled.div`
width: 100%;
padding-bottom: unset;
`

const StyledProfileKeyId = styled.p`
font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const StyledProfileKeyIdCopy = styled.button`
	background-color: transparent;
	border: none;
	margin-left: 0.1rem;
`


const RightToolIcon = styled.div`
	cursor: pointer;
	margin-left: 1rem;
`

const CurrentProfileItem = ({closeDropdown}: ProfileDropdownProps ) => {

	const {data} = getWorkerService()
	const currentProfile = data.profiles.filter((n:any)=> n.isPrimary)[0]
	const keyID = currentProfile.keyID
	const shortID = keyID.substring(0,2) + keyID.substring(2,6).toUpperCase() + '....' + keyID.substring(keyID.length-4,keyID.length).toUpperCase()
	const copyDeviceCode = (event: React.MouseEvent<HTMLButtonElement>, code: string) => {
        event.stopPropagation()

        toast({
            toastIcon: <Checkmark size={18}/>,
            event: <FormattedMessage id='toaster.action.copyDeviceCode'/>,
            duration: 'sm'
        })
        CopyToClipboard(code)
    }

	const theme = useTheme()
	const {setIsModalOpen, clientProfiles, setActiveProfile, activeProfile} = useAppState()
	return (
		<StyledProfileDropdownOptions>
			{ currentProfile ? <StyledProfileItem id='CurrentProfileItem'>
				<Margin1rem >
					<ProfileImage src={currentProfile.profileImg || AnonymousProfile} size={45}/>
				</Margin1rem>
				
				<StyledProfileDetails>
					<StyledProfileName>{currentProfile.nickName || <FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.AnonymousUser'/>}</StyledProfileName>
					<RowWrapper>
						<StyledProfileKeyId>{shortID}</StyledProfileKeyId>
						<StyledProfileKeyIdCopy onClick={
							(event) => {
								copyDeviceCode(event, currentProfile.keyID)
							}}>
							<Copy/>
						</StyledProfileKeyIdCopy>
					</RowWrapper>
				</StyledProfileDetails>
				<RightToolIcon onClick={()=> {
						setIsModalOpen('profilesList')
						closeDropdown('')
					}}>
					<VerticalOptions size={30} color={theme.ui.colors.text.secondary}/>
				</RightToolIcon>
			</StyledProfileItem> : null }

		</StyledProfileDropdownOptions>
	)
}

export default CurrentProfileItem
