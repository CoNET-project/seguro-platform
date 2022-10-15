import React from "react"
import styled, {useTheme} from 'styled-components'
import {ProfileData} from "../../../../../store/appState/appStateReducer"
import ProfileImage from "../../../Common/Profile/Image/Image"
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {toast} from "../../../Toaster/Toaster"
import {Checkmark, Copy} from "../../../Icons/Icons"
import {FormattedMessage} from "react-intl"
import {CopyToClipboard} from "../../../../../utilities/utilities"
import CoNETTokenIMG from '../../../../../assets/logo/CoNET_logo.svg'
import CoNETCashIMG from '../../../../../assets/logo/usd-coin-usdc-logo.svg'
import {VerticalOptions_ArrowUpRightCircleFill, VerticalOptions_ArrowDownloadCircleFill} from "../../../Icons/Icons"

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

const StyledProfileDetails = styled.div`
  margin: 0 15px;
  flex: 1;
`

const StyledProfileItem = styled.div<StyledProfileItemProps>`
	display: flex;
	align-items: center;
	padding: 12.5px 24px;
	background-color: ${props => props.isActive && props.theme.ui.colors.border.light};
	min-height: 70px;
`
const StyledProfileName = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  font-weight: bold;
`
const StyledProfileDropdownOptions = styled.div`
  width: 100%;
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
	margin-left: 15px;

	& > * {
		transition: color 0ms ease-in-out;
	}

	${StyledProfileItem}:hover & > * {
		color: #597CB3;
	}
`

const ImgCenter = styled.div`
	display: block;
	margin: 0 auto;
	height: 35px;
`
const GreyLine = styled.hr`
	color: ${props => props.theme.ui.colors.border.light};
	backgroundColor: ${props => props.theme.ui.colors.border.light};
	height: 1;

`

const IconArea = styled.div`
	margin-top: 1rem;
	cursor: pointer;
`

const TableArea_body_wrapper = styled.div`
	display:table;
    border-collapse:collapse;
	text-align: center;
    width: 100%;
`

const TableArea_content_body = styled.div`
	display:table-row;
	
	
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
	width: 40px;
	height: 40px;
	object-fit: cover;
`

const CurrentProfileItem = ({ bio, nickname, profileImg, keyID, isPrimary, assets }: ProfileData ) => {
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
	const CoNETTokenAsset = assets && assets.length
	const CoNETToken = CoNETTokenAsset ? assets[0].balance : 0
	const CoNETTokenName = CoNETTokenAsset ?  assets[0].currencySymbol : 'CoNET Token'

	const CoNET_USDC = CoNETTokenAsset ? assets[1].balance : 0
	const CoNET_USDC_name = 'USDC'

	const theme = useTheme()
	return (
		<StyledProfileDropdownOptions>
			<StyledProfileItem>
				<ProfileImage src={profileImg || AnonymousProfile} size={45}/>
				<StyledProfileDetails>
					<StyledProfileName>{nickname || 'Anonymous User'}</StyledProfileName>
				</StyledProfileDetails>
				<RowWrapper>
					<StyledProfileKeyId>{shortID}</StyledProfileKeyId>
					<StyledProfileKeyIdCopy onClick={
						(event) => {
							copyDeviceCode(event, keyID)
						}}>
						<Copy/>
					</StyledProfileKeyIdCopy>
				</RowWrapper>
			</StyledProfileItem>

			<GreyLine/>

			<TableArea_body_wrapper>
				<TableArea_content_body id="Token Logo Area">

					<TableArea_content_cell>
						<TokenLogoImg src={CoNETTokenIMG} />
					</TableArea_content_cell>

					<TableArea_content_cell>
						<TokenLogoImg src={CoNETCashIMG} />
					</TableArea_content_cell>
				</TableArea_content_body>

				<TableArea_content_body id="Token Balance Area">

					<TableArea_content_cell>
						<StyledTokenBalance>
							{CoNETToken}
						</StyledTokenBalance>
					</TableArea_content_cell>

					<TableArea_content_cell>
						<StyledTokenBalance>
							{CoNET_USDC}
						</StyledTokenBalance>
					</TableArea_content_cell>

				</TableArea_content_body>

				<TableArea_content_body id="Token Name Area">

					<TableArea_content_cell>
						<StyledTokenBalance>
							{CoNETTokenName}
						</StyledTokenBalance>
					</TableArea_content_cell>

					<TableArea_content_cell>
						<StyledTokenBalance>
							{CoNET_USDC_name}
						</StyledTokenBalance>
					</TableArea_content_cell>

				</TableArea_content_body>

				<TableArea_content_body id="action icon Area">

					<TableArea_content_cell>
						<IconArea>
							<VerticalOptions_ArrowDownloadCircleFill size={30} color={theme.ui.colors.secondary}/>
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
							{CoNET_USDC_name}
						</Icon_Name_cell>
					</TableArea_content_cell>

				</TableArea_content_body>
				
			</TableArea_body_wrapper>

			
		</StyledProfileDropdownOptions>
	)
}

export default CurrentProfileItem
