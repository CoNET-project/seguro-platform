import React from "react"
import styled, {useTheme} from 'styled-components'
import {ProfileData} from "../../../../../store/appState/appStateReducer"
import ProfileImage from "../../../Common/Profile/Image/Image"
//	@ts-ignore
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {toast} from "../../../Toaster/Toaster"
import {Checkmark, Copy} from "../../../Icons/Icons"
import {FormattedMessage} from "react-intl"
import {CopyToClipboard} from "../../../../../utilities/utilities"

import {VerticalOptions_ArrowUpRightCircleFill, VerticalOptions_ArrowDownloadCircleFill, VerticalOptions} from "../../../Icons/Icons"
import {getWorkerService} from '../../../../../services/workerService/workerService'
import AssetView from'./AssetView'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'



type CurrentProfileItemProps = {
} & ProfileData

type StyledProfileItemProps = {
    isActive?: boolean
}

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

const StyledTokenBalance = styled.p`
	text-align: center;
	width: 100%;
	font-size: ${props => props.theme.ui.fontSizes.narrow.md};
	color: ${props => props.theme.ui.colors.border.medium};
	margin-top: 0.1rem;
    margin-bottom: 0.1rem;
	font-family: 'Lato Bold';
`

const StyledProfileKeyIdCopy = styled.button`
	background-color: transparent;
	border: none;
	margin-left: 0.1rem;
`

const ImgCenter = styled.div`
	display: block;
	margin: 0 auto;
	height: 35px;
`
const GreyLine = styled.hr`
	color: ${props => props.theme.ui.colors.border.light};
	backgroundColor: ${props => props.theme.ui.colors.border.light};
	height: 1px;
`

const IconArea = styled.div`
	cursor: pointer;
	&:hover > * {
		background-color: initial;
	}
`

const TableArea_body_wrapper = styled.div`
	display:table;
    border-collapse:collapse;
	text-align: center;
    width: 100%;
	margin-top: 1rem;
	margin-bottom: 1rem;
`

const TableArea_content_body = styled.div`
	display:table-row;
	width: 100%;
`

const TableArea_content_cell = styled.div`
	display:table-cell;
	width: 50%;
`

const Icon_Name_cell = styled.div`
	margin-bottom: 2rem;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	color: ${props => props.theme.ui.colors.secondary};
	cursor: pointer;
`

const TokenLogoImg = styled.img`
	margin-top: 1.5rem;
	width: 45px;
	height: 45px;
	object-fit: cover;
`


const RightToolIcon = styled.div`
	cursor: pointer;
	margin-left: 1rem;
`


const StyledProfileDropdownOption = styled.button`
	width: 100%;
	background-color: transparent;
	border: none;
	color: ${props => props.theme.ui.colors.text.primary};
	text-align: start;
	padding: 15px 20px;
	display: flex;
	align-items: center;
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	border-top: 1px solid ${props => props.theme.ui.colors.border.light};

	&:hover {
			background-color: ${props => props.theme.ui.colors.hover};
	}
`

const CurrentProfileItem = () => {
	const workerService = getWorkerService()
	const currentProfile = workerService.data.profiles.filter((n:any)=> n.isPrimary)[0]
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
	const conetToken = currentProfile.tokens.conet
	const usdc = currentProfile.tokens.usdc
	// const CoNETTokenAsset = assets && assets.length
	// const CoNETToken = CoNETTokenAsset ? assets[0].balance : 0
	// const CoNETTokenName = CoNETTokenAsset ?  assets[0].currencySymbol : 'CoNET Token'

	// const CoNET_USDC = CoNETTokenAsset ? assets[1].balance : 0
	// const CoNET_USDC_name = 'USDC'

	const theme = useTheme()
	return (
		<StyledProfileDropdownOptions>
			{ currentProfile ? <StyledProfileItem id='Top Profiles'>
				<Margin1rem>
					<ProfileImage src={currentProfile.profileImg || AnonymousProfile} size={45}/>
				</Margin1rem>
				
				<StyledProfileDetails>
					<StyledProfileName>{currentProfile.nickname || <FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.AnonymousUser'/>}</StyledProfileName>
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
				<RightToolIcon>
					<VerticalOptions size={30} color={theme.ui.colors.text.secondary}/>
				</RightToolIcon>
			</StyledProfileItem> : null }


			{/* <TableArea_body_wrapper>
				<TableArea_content_body id="action icon Area">

					<TableArea_content_cell>
						<IconArea>
							<VerticalOptions_ArrowDownloadCircleFill size={30} color={theme.ui.colors.icon.inactive}/>
						</IconArea>
					</TableArea_content_cell>

					<TableArea_content_cell>
						<IconArea >
							<VerticalOptions_ArrowUpRightCircleFill size={30} color={theme.ui.colors.secondary}/>
						</IconArea>
					</TableArea_content_cell>

				</TableArea_content_body>

				<TableArea_content_body id="action name Area">

					<TableArea_content_cell>
						<Icon_Name_cell>
							<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.actionFondWallet'/>
						</Icon_Name_cell>
					</TableArea_content_cell>

					<TableArea_content_cell>
						<Icon_Name_cell>
							{'CoNET_USDC_name'}
						</Icon_Name_cell>
					</TableArea_content_cell>

				</TableArea_content_body>

				
			</TableArea_body_wrapper> */}

		</StyledProfileDropdownOptions>
	)
}

export default CurrentProfileItem
