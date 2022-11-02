import styled, {useTheme} from 'styled-components'
import React, {HTMLAttributes, useState} from "react"
import useAppState from "../../../../store/appState/useAppState"
import {AddProfile, ManageAccount, PlatformLock} from "../../Icons/Icons"
import {FormattedMessage} from "react-intl"
import {lockPlatform} from '../../../../services/workerService/workerService'
import {ProfileData} from "../../../../store/appState/appStateReducer"
import CurrentProfileItem from './CurrentProfileItem/CurrentProfileItem'
import AssetView from'./CurrentProfileItem/AssetView'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemButton from '@mui/material/ListItemButton'
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import {getWorkerService} from '../../../../services/workerService/workerService'
import { LogoIcon, LogoText} from "../../Logo/Logo"
import { CNTCashLogoIcon } from '../../Logo/CNTCash'
import { USDCLogoIcon } from '../../Logo/usdc'
import Opacity from '@mui/icons-material/Opacity'
import Outbound from '@mui/icons-material/Outbound'
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline'
import Divider from '@mui/material/Divider'
export type Profiles = Array<ProfileData>
import {VerticalOptions_ArrowUpRightCircleFill, VerticalOptions_ArrowDownloadCircleFill, VerticalOptions} from "../../Icons/Icons"

type ProfileDropdownProps = {
    closeDropdown: (app:string) => void
} & HTMLAttributes<HTMLDivElement>



interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

const ProfileDropdown = ({closeDropdown}: ProfileDropdownProps) => {

	const {
        windowInnerSize: {width}
    } = useAppState()

	const {setIsModalOpen, clientProfiles, setActiveProfile, activeProfile} = useAppState()
	const workerService = getWorkerService()
	const currentProfile = workerService.data.profiles.filter((n:any)=> n.isPrimary)[0]
	const conetToken = currentProfile.tokens.conet
	const usdc = currentProfile.tokens.usdc
	const [buttonNavigationCurrent, setButtonNavigationCurrent] = useState(-1)
	
	const [currectAsset, setcurrectAsset] = useState(0)
	
	const [valueTab, setValueTab] = useState(0)


	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setValueTab(newValue)
	}

	const a11yProps = (index: number) => {
		return {
			id: `simple-tab-${index}`,
			'aria-controls': `simple-tabpanel-${index}`,
		}
	}

	const TabPanel = (props: TabPanelProps) => {
		const { children, value, index, ...other } = props
	  
		return (
		  <div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		  >
			{value === index && (
			  <Box sx={{ p: 0 }}>
				<Typography component="span">{children}</Typography>
			  </Box>
			)}
		  </div>
		)
	}

	const theme = useTheme()

	const assetList = [
		{
			primary: 'CoNET',
			balance: conetToken.balance,
			icon: <LogoIcon size={30} color='grey'/>
		},
		{
			primary: 'CoNETCash',
			balance: conetToken.balance,
			icon: <CNTCashLogoIcon size={30}/>,
		},
		{
			primary: 'USDC',
			balance: usdc.balance,
			icon: <USDCLogoIcon size={30} color='grey'/>,
		}
		
	]

	const assetListItem = (index: number, primary: any, balance: number, icon: any) => {
		return (
			currectAsset !== index &&
				<List component="nav" sx={{ width: '100%', padding: '0px'}} key={index}>
					<ListItem sx={{ width: '100%', padding: '0px' }}>
						<ListItemButton onClick={() => {
							setcurrectAsset(index)
						}} >
							{icon}
							<ListItemText primary={primary} sx={{ paddingLeft: '1rem', maxWidth: '5rem'}}/>
							<ListItemText primary={balance} sx={{ textAlign: 'right'}}/>
						</ListItemButton>
						
					</ListItem>
				</List>
		)
	}

    return (

		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
			<ListItem>
				<CurrentProfileItem closeDropdown={closeDropdown}/>
			</ListItem>

			<Divider/>

			<ListItem>
				<AssetView balance={assetList[currectAsset].balance} icon={assetList[currectAsset].icon} labelText = {assetList[currectAsset].primary} />
			</ListItem>
			{
				
				<ListItem>
					<BottomNavigation
						showLabels={true}
						value={buttonNavigationCurrent}
						onChange={(event, newValue) => {
							setButtonNavigationCurrent(newValue);
						}}
						sx={{ width: '100%'}}>
						{
							currectAsset === 0 &&
							<BottomNavigationAction
								label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.actionFondWallet'/>}
								icon={<Opacity />}
							/>
						}
						
						<BottomNavigationAction
							label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.actionSend'/>}
							icon={<Outbound />}
						/>

						{
							currectAsset !== 0 &&
							<BottomNavigationAction
								label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.buy'/>}
								icon={<DownloadForOfflineIcon />}
							/>
						}
						
						
					</BottomNavigation>
				</ListItem>

			}


			<ListItem sx={{ width: '100%', padding: '0px' }}>
				<Box sx={{ width: '100%'}}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<Tabs value={valueTab} onChange={handleTabChange}>
							<Tab {...a11yProps(0)} label={<FormattedMessage id='platform.ProfileDropdown.Tablable.Assets'/>} sx={{ width: '50%'}}/>
							<Tab {...a11yProps(1)} label={<FormattedMessage id='platform.ProfileDropdown.Tablable.Activity'/> } sx={{ width: '50%'}}/>
						</Tabs>
						
					</Box>
					<TabPanel value={valueTab} index={0} >
						{
							assetList.map((v, index) => {
								return assetListItem(index, v.primary, v.balance, v.icon);
							})
						}
					</TabPanel>

					<TabPanel value={valueTab} index={1}>
						<List>
							<ListItem>
								
							</ListItem>
						</List>
					</TabPanel>
				</Box>
				
			</ListItem>
		</List>
    )
}

export default ProfileDropdown
