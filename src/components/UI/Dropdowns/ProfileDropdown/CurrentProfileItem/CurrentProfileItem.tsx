import React, {HTMLAttributes, useState, useEffect} from "react"
import styled, {useTheme} from 'styled-components'
import ProfileImage from "../../../Common/Profile/Image/Image"
import useAppState from "../../../../../store/appState/useAppState"
import AnonymousProfile from '../../../../../assets/Avatar-anonymous.png'
import {toast} from "../../../Toaster/Toaster"
import {Checkmark, Copy} from "../../../Icons/Icons"
import {useIntl} from "react-intl"
import {CopyToClipboard} from "../../../../../utilities/utilities"

import {VerticalOptions} from "../../../Icons/Icons"
import {getWorkerService} from '../../../../../services/workerService/workerService'
import SyncIcon from '@mui/icons-material/Sync';
import { blue } from "@mui/material/colors"
import {CircularProgress, Stack, Box, Avatar, IconButton, Typography } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import CachedIcon from '@mui/icons-material/Cached'
import MetaMask from '../../../../../assets/logo/metaMask.svg'
import SvgIcon from '@mui/material/SvgIcon'
import {Tabs, Tab, Button, Divider} from '@mui/material-next'
type StyledProfileItemProps = {
    isactive?: boolean
}

type ProfileDropdownProps = {
    closeDropdown: (app:string) => void,
	syncAsset: () => void
} & HTMLAttributes<HTMLDivElement>

const RowWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

const Margin1rem = styled.div`
	margin-right: 1rem;
	cursor: pointer;
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
	background-color: ${props => props.isactive && props.theme.ui.colors.border.light};
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

const CurrentProfileItem = ({closeDropdown, syncAsset}: ProfileDropdownProps ) => {
	const [showMetaMask, setShowMetaMask] = useState(false)
	const [showPrivateKey, setShowPrivateKey] = useState(false)
	const [privateKeyArmor, setPrivateKeyArmor] = useState('')
	const {data} = getWorkerService()
	useEffect(() => {
        if (typeof 
			//@ts-ignore
			window.ethereum
		!== 'undefined') {  
			setShowMetaMask(true)
		}
		setPrivateKeyArmor(currentProfile.privateKeyArmor)
    }, [])
	const currentProfile = data.profiles.filter((n:any)=> n.isPrimary)[0]
	const keyID = currentProfile.keyID
	const intl = useIntl()
	const shortID = keyID.substring(0,2) + keyID.substring(2,6).toUpperCase() + '....' + keyID.substring(keyID.length-4,keyID.length).toUpperCase()
	const copyDeviceCode = (event: React.MouseEvent<HTMLButtonElement>, code: string) => {
        event.stopPropagation()
		
        toast({
            toastIcon: <Checkmark size={18}/>,
				
            event: intl.formatMessage({id: 'toaster.action.copyDeviceCode'}),
            duration: 'sm'
        })
        CopyToClipboard(code)
    }


	const addMateMask = async () => {
		
		try {
			//	@ts-ignore
			const result = await window.ethereum
			.request({
				method: "wallet_addEthereumChain",
				params: [{
					chainId: "0x36CB1",
					rpcUrls: ["https://HoleskyRpc1.conet.network"],
					chainName: "CONET Holesky",
					nativeCurrency: {
						name: "CONET Holesky",
						symbol: "CONET",
						decimals: 18
					},
					blockExplorerUrls: ["https://scan.conet.network/"]
				}]
			})
			console.log (`window.ethereum.request success! result =`, result)
			
		} catch (ex) {
			console.log (`window.ethereum.request error`, ex)
		}
		
	}

	
	const [loading, setLoading] = useState(false)


	return (
		<Stack direction="column" spacing={0} sx={{width: '100%'}}>
			<Stack direction="row" alignItems="center" justifyContent="space-evenly" spacing={0} sx={{width:'100%'}}>
				<Avatar src={currentProfile.profileImg || AnonymousProfile}/>
				{/* <Margin1rem onClick={()=> {
						setIsModalOpen('profilesList')
						closeDropdown('')
					}}>
					<ProfileImage src={currentProfile.profileImg || AnonymousProfile} size={45}/>

				</Margin1rem> */}
				<Stack direction="row" alignItems="center" spacing={0} sx={{width:'100%'}}>
					<Stack direction="column" spacing={0} sx={{width:'100%'}}>
						<Typography variant="subtitle2" align='center' sx={{}}>
							{ currentProfile.nickName || intl.formatMessage({id: 'platform.ProfileDropdown.CurrentProfileItem.AnonymousUser'})}
						</Typography>
						<Typography variant="body2" align='center' sx={{}}>
							{shortID}
						</Typography>
					</Stack>
					<IconButton color="success" sx={{}}
						onClick={
						(event) => {
							copyDeviceCode(event, currentProfile.keyID)
						}}>
						<ContentCopyIcon sx={{fontSize: '1rem'}}/>
					</IconButton>
				</Stack>

				<IconButton color="default"
					onClick={ async()=> {
					setLoading (true);
					await syncAsset ();
					setLoading (false);
				}}>
					<CachedIcon sx={{fontSize: '1rem'}}/>
					
				</IconButton>
				{
					showMetaMask &&
					<IconButton color="default"
						onClick={ addMateMask }
					>
						<SvgIcon>
							<path d="M21.004 2.61 13.2 8.432l1.443-3.434 6.36-2.386Z" fill="#E2761B"></path><path d="m2.988 2.61 7.741 5.876-1.372-3.489-6.369-2.386Zm15.208 13.492L16.117 19.3l4.447 1.229 1.279-4.356-3.647-.07Zm-16.032.071 1.271 4.356L7.882 19.3l-2.078-3.198-3.64.071Z" fill="#E4761B"></path><path d="m7.631 10.7-1.24 1.882 4.417.197-.157-4.765L7.63 10.7Zm8.73 0L13.3 7.959l-.101 4.82 4.408-.197-1.248-1.883Zm-8.479 8.6 2.651-1.3-2.29-1.795-.36 3.095ZM13.46 18l2.658 1.3-.368-3.095L13.459 18Z" fill="#E4761B"></path><path d="M16.117 19.3 13.458 18l.212 1.741-.023.733 2.47-1.174Zm-8.235 0 2.47 1.174-.015-.733.196-1.74-2.65 1.299Z" fill="#D7C1B3"></path><path d="M10.392 15.055 8.18 14.4l1.561-.717.65 1.37Zm3.208 0 .65-1.37 1.57.716-2.22.654Z" fill="#233447"></path><path d="m7.882 19.3.377-3.198-2.455.071L7.882 19.3Zm7.859-3.198.376 3.198 2.079-3.127-2.455-.07Zm1.867-3.52-4.408.197.408 2.276.65-1.37 1.57.716 1.78-1.82Zm-9.428 1.82 1.569-.718.643 1.37.416-2.275-4.416-.197 1.788 1.82Z" fill="#CD6116"></path><path d="m6.392 12.582 1.85 3.623L8.18 14.4l-1.788-1.82Zm9.435 1.82-.078 1.803 1.859-3.623-1.78 1.82Zm-5.02-1.623-.415 2.276.518 2.686.117-3.537-.22-1.425Zm2.393 0-.212 1.417.094 3.545.526-2.686-.408-2.276Z" fill="#E4751F"></path><path d="m13.608 15.055-.526 2.686.377.26 2.29-1.796.078-1.804-2.22.654ZM8.18 14.4l.063 1.804L10.533 18l.377-.26-.518-2.685L8.18 14.4Z" fill="#F6851B"></path><path d="m13.647 20.474.023-.733-.196-.173h-2.957l-.18.173.016.733-2.47-1.174.862.709 1.749 1.22h3.004l1.757-1.22.862-.709-2.47 1.174Z" fill="#C0AD9E"></path><path d="m13.459 18-.377-.26H10.91l-.377.26-.196 1.741.18-.173h2.957l.196.173-.211-1.74Z" fill="#161616"></path><path d="M21.333 8.81 22 5.595l-.996-2.985-7.545 5.623L16.36 10.7l4.102 1.206.91-1.064-.392-.283.628-.575-.487-.378.628-.48-.416-.316ZM2 5.595l.666 3.213-.423.315.627.48-.478.379.627.575-.392.283.902 1.064 4.102-1.206 2.902-2.465L2.988 2.61 2 5.596Z" fill="#763D16"></path><path d="M20.462 11.904 16.361 10.7l1.247 1.883-1.86 3.623 2.448-.032h3.647l-1.38-4.269ZM7.632 10.7l-4.103 1.205-1.365 4.27h3.64l2.439.03-1.851-3.622 1.24-1.883Zm5.568 2.08.259-4.545 1.192-3.237H9.357l1.176 3.237.275 4.545.094 1.433.008 3.529h2.172l.016-3.529.102-1.433Z" fill="#F6851B"></path>
						</SvgIcon>		
					</IconButton>
				}

			</Stack>
			{
				!showPrivateKey &&
				<Button sx={{fontFamily:'inherit'}} onClick={()=>setShowPrivateKey(true)}>
					{intl.formatMessage({id: 'platform.profile.privateKey'})}
				</Button>
			}
			{
				showPrivateKey &&
				<Stack direction="row" alignItems="center" justifyContent="center" spacing={0}>
					
					<Typography variant="body2" align='center' gutterBottom sx={{maxWidth: '17rem',wordBreak: 'break-word'}}>
						{privateKeyArmor}
					</Typography>
					
					<IconButton color="success" sx={{}}
						onClick={
						(event) => {
							copyDeviceCode(event, privateKeyArmor)
						}}>
						<ContentCopyIcon sx={{fontSize: '1rem'}}/>
					</IconButton>
				</Stack>
				
			}
		</Stack>
	)
}

export default CurrentProfileItem
