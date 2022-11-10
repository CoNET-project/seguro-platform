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
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import PersonIcon from '@mui/icons-material/Person'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import { red } from '@mui/material/colors'
import InputAdornment from '@mui/material/InputAdornment'
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
	const fees = 0.0003045
	const maxFees = 0.0003591

	const {setIsModalOpen, clientProfiles, setActiveProfile, activeProfile} = useAppState()
	const workerService = getWorkerService()
	const currentProfile = () => {
		const index = workerService.data.profiles.findIndex((n:any) => {
			return n.isPrimary
		})
		return workerService.data.profiles[index]
	}

	const conetToken = currentProfile().tokens.conet
	const usdc = currentProfile().tokens.usdc
	
	const [buttonNavigationCurrent, setButtonNavigationCurrent] = useState(-1)
	const [walletTextFieldID, setWalletTextFieldID] = useState('standard-basic')
	const [amountTextFieldID, setAmountTextFieldID ] = useState('standard-basic')
	const [toAddr, setToAddr] = useState('')
	const [currectAsset, setcurrectAsset] = useState(0)
	const [valueTab, setValueTab] = useState(0)
	const [sendStep, setSendStep] = useState(0)
	const [amountVal, setAmountVal] = useState(0)
	const [showAssetBalance, setShowAssetBalance] = useState(true)
	const [loading, setLoading] = useState(false)
	const [resultError, setResultError] = useState(false)
	const [resultSuccess, setResultSuccess ]  = useState(false)
	const [showUSDCBuyFrom, setsShowUSDCBuyFrom] = useState(false)
	const [usdcPrice, setUsdcPrice]= useState(0.0)
	const [receiveVal, setReceiveVal] = useState('')

	const [showAssetBalance_balance, setshowAssetBalance_balanc] = useState(conetToken.balance)

	const shortToAddr = () => {
		return toAddr.substring(0,2) + toAddr.substring(2,6).toUpperCase() + '....' + toAddr.substring(toAddr.length-4,toAddr.length).toUpperCase()
	}

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

	const reflashAssetList = () => {
		
		const ret = [
			{
				primary: 'CoNET',
				balance: currentProfile().tokens.conet.balance,
				icon: <LogoIcon size={30} color='grey'/>
			},
			{
				primary: 'CoNETCash',
				balance: 0,
				icon: <CNTCashLogoIcon size={30}/>,
			},
			{
				primary: 'USDC',
				balance: currentProfile().tokens.usdc.balance,
				icon: <USDCLogoIcon size={30} color='grey'/>,
			}
		]
		return ret
	}

	let assetList = reflashAssetList()

	const totalToken = () => {
		return amountVal + fees
	}

	const getFaucet = () => {
		if ( !workerService.method?.getFaucet) {
			return 
		}
		setLoading (true)
		return workerService.method.getFaucet (currentProfile().keyID)
			.then (async n => {
				const [status, check] = n
				setLoading(false)

				if (status === 'SUCCESS') {
					await syncAsset ()
					setResultSuccess (true)
					return setSendStep (1)
				}
				return setResultError(true)
			})
	}

	const syncAsset = () => {
		
		return new Promise ( async (resolve)=> {
			if ( !workerService.method?.syncAsset) {
				return resolve (null)
			}
			const [ status, data ] = await workerService.method?.syncAsset ()
			assetList = reflashAssetList()
			setshowAssetBalance_balanc(assetList[currectAsset].balance)
			return resolve (null)
		})
	}

	const checkAddress = (address: string) => {
		if ( !workerService.method?.isAddress ) {
			return 
		}
		if (!address) {
			return setWalletTextFieldID ('standard-basic')
		}
		return workerService.method.isAddress (address)
			.then ((val: any) => {
				const [status, check] = val
				if (status === 'SUCCESS') {
					if ( typeof check === 'boolean' ) {
						if (!check) {
							setSendStep(0)
							return setWalletTextFieldID ('standard-error')
						}
						setSendStep (1)
						return setWalletTextFieldID ('standard-basic')
					}
				}
			})

	}

	const maxClick = () => {
		assetList = reflashAssetList()
		const balance = assetList[currectAsset].balance
		const ret = balance - fees
		setAmountTextFieldID('standard-basic')
		if ( ret > 0) {
			return setAmountVal(ret)
		}
		return setAmountVal(0)
	}

	const maxCoNETClick = () => {
		assetList = reflashAssetList()
		const balance = assetList[0].balance
		const ret = balance - fees
		setAmountTextFieldID('standard-basic')
		if ( ret > 0) {

			setAmountVal(ret)
			return setReceiveVal ((ret*usdcPrice).toFixed(2))

		}
		return setAmountVal(0)
	}

	const resetWindow = () => {
		setSendStep (0)
		setButtonNavigationCurrent(-1)
		closeDropdown('')
		setShowAssetBalance(true)
		setWalletTextFieldID ('standard-basic')
		setResultError(false)
		setResultSuccess (false)
		setsShowUSDCBuyFrom (false)
	}

	const sendAsset = () => {
		setLoading (true)
		setSendStep (3)

		if ( !workerService.method?.sendAsset) {
			return
		}
		let asset = ''
		switch (currectAsset) {
			case 0: {
				asset = 'CoNET'
				break
			}
			case 1: {
				asset = 'CoNETCash'
				break
			}
			default : {
				asset = 'USDC'
			}
		}
		return workerService.method?.sendAsset(currentProfile().keyID, amountVal, toAddr, asset)
		.then (async n => {
			const [status, check] = n
			setLoading(false)
			if (status === 'SUCCESS') {
				await syncAsset ()
				return setResultSuccess (true)
				
			}
			return setResultError(true)
		})
	}

	const assetListItem = (index: number, primary: any, balance: number, icon: any) => {
		return (
			currectAsset !== index &&
				<List component="nav" sx={{ width: '100%', padding: '0px'}} key={index}>
					<ListItem sx={{ width: '100%', padding: '0px' }}>
						<ListItemButton onClick={() => {
							assetList = reflashAssetList()
							setcurrectAsset(index)
							setshowAssetBalance_balanc(assetList[index].balance)
						}} >
							{icon}
							<ListItemText primary={primary} sx={{ paddingLeft: '1rem', maxWidth: '5rem'}}/>
							<ListItemText primary={balance.toFixed(4)} sx={{ textAlign: 'right'}}/>
						</ListItemButton>
						
					</ListItem>
				</List>
		)
	}

	const BottomNavigationChanged = (event: any, newValue: number) => {
		setButtonNavigationCurrent(newValue)
		const current = assetList[currectAsset]

		if ( current.primary === 'USDC') {
			if ( newValue === 2) {					//			buy USDC
				if (!workerService.method.getUSDCPrice) {
					return
				}
				setLoading (true)
				return workerService.method.getUSDCPrice ()
				.then (async (val:any) => {
					setLoading (false)
					const [status, prices] = val
					if ( status !== 'SUCCESS') {
						
						return setResultError (true)
					}
					
					setUsdcPrice(prices[0].price.toFixed (2))
					setsShowUSDCBuyFrom (true)

				})
			}
			//			send USDC
		}
	}

	const nextClick = () => {

		switch (buttonNavigationCurrent) {
			case 0: {
				return getFaucet ()
			}
			case 1: {
				if (sendStep < 2) {
					setSendStep (2)
					return setShowAssetBalance(false)
				}
				return sendAsset ()
			}
			case 2: {
				if ( !workerService.method?.buyUSDC) {
					return
				}
				setLoading (true)
				setAmountTextFieldID ('standard-read-only-input')
				return workerService.method?.buyUSDC(amountVal, currentProfile().keyID)
					.then( async val => {
						const [status] = val 
						if (status!== 'SUCCESS') {
							return 
						}
						setsShowUSDCBuyFrom (false)
						await syncAsset ()
						setLoading (false)
						return setResultSuccess (true)
					})
			}
			default: {
				return
			}
		}
	}

    return (

		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingBottom: '2rem' }}>

			<ListItem>
				<CurrentProfileItem closeDropdown={closeDropdown} syncAsset= {syncAsset}/>
			</ListItem>

			<Divider/>

			{
				showAssetBalance &&			//		Asset balance

					<ListItem>
						<AssetView balance={showAssetBalance_balance.toFixed(4)} icon={assetList[currectAsset].icon} labelText = {assetList[currectAsset].primary} />
					</ListItem>

			}

			{
				buttonNavigationCurrent === 0 && sendStep < 1 && 						//			Faucet Information before send
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Typography variant="body1" gutterBottom>
							{<FormattedMessage id='platform.ProfileDropdown.faucet.limited'/>}
						</Typography>
					</ListItem>
			}

			{
				resultSuccess &&						//		 success
				<>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Typography variant="body1" gutterBottom>
							{<FormattedMessage id='platform.ProfileDropdown.faucet.success'/>}
						</Typography>
					</ListItem>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Button 
							variant="contained"
							onClick={()=>{
								resetWindow()
							}}
						>
							{<FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>}
						</Button>
							
					</ListItem>
				</>
				

			}

			{
				buttonNavigationCurrent === 0 && resultError &&						//			Faucet error
				<>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Typography variant="body1" gutterBottom sx={{ color: red[700]}}>
							{<FormattedMessage id='platform.ProfileDropdown.faucet.error'/>}
						</Typography>
					</ListItem>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Button 
							variant="contained"
							onClick={() => {
								resetWindow ()
							}}
						>
							{<FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>}
						</Button>
					</ListItem>
				</>
			}

			{
				buttonNavigationCurrent > 0 && resultError &&						//			Faucet error
				<>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Typography variant="body1" gutterBottom sx={{ color: red[700]}}>
							{<FormattedMessage id='platform.ProfileDropdown.send.error'/>}
						</Typography>
					</ListItem>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Button 
							variant="contained"
							onClick={() => {
								resetWindow ()
							}}
						>
							{<FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>}
						</Button>
					</ListItem>
				</>
			}
			

			{
				buttonNavigationCurrent === 1 && sendStep < 2 && !resultError &&		//			Send Asset Form Fill send information
				<>
					<ListItem id = "Send_Asset" >
						<TextField id={walletTextFieldID}
							size="small"
							variant="standard" 
							error={/error/.test(walletTextFieldID)?true:false}
							label={<FormattedMessage id='platform.ProfileDropdown.send.receiver'/>} 
							fullWidth
							color='primary'
							value={toAddr}
							onChange = {(e) => {
								checkAddress (e.target.value)
								setToAddr(e.target.value)
							}}/>
					</ListItem>
					<ListItem id = "Amount" >
						<Stack direction="row" spacing={2} >	
							<TextField id={amountTextFieldID}
								size="small"
								variant="standard"
								color='secondary'
								error={/error/.test(amountTextFieldID)? true: false}
								label={<FormattedMessage id='platform.ProfileDropdown.send.amount'/>}
								type='number'
								value={amountVal}
								onChange={e=> {
									let val = 0
									try {
										val = parseFloat(e.target.value)
									} catch (ex) {
										return setAmountVal(0)
									}
									if ( val < 0) {
										return setAmountVal(0)
									}
									
									setAmountVal(val)
									if ( val + fees > assetList[currectAsset].balance) {
										return setAmountTextFieldID('standard-error')
									}
									setAmountTextFieldID('standard-basic')
									
								}}
							/>
							<Button variant="text"
							onClick={() => {
								maxClick()
							}}
							>
								{<FormattedMessage id='platform.ProfileDropdown.send.max'/>}
							</Button>
						</Stack>
						
					</ListItem>

				</>
				
			}

			{
				buttonNavigationCurrent === 1 && sendStep > 1 && !resultSuccess && !resultError &&	//			show send information
				<>
					<Grid container spacing={2} sx={{ padding: '1.5rem'}} width='100%' justifyContent="center">
						<Grid item xs={7}>
							<Typography variant="subtitle2" gutterBottom color='grey' width={'30%'}>
								{<FormattedMessage id='platform.ProfileDropdown.send.receiver'/>}
								
							</Typography>
						</Grid>
						<Grid item xs={1}>
							<PersonIcon color="primary" />
						</Grid>
						<Grid item xs={4}>
							<Typography variant="subtitle2" align='left' gutterBottom sx={{ marginLeft: '5px'}}>
								{shortToAddr()}
							</Typography>
						</Grid>

						<Grid item xs={6}>
							<Typography variant="h5" gutterBottom width={'30%'} align='right'>
								{amountVal}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="subtitle2" gutterBottom align='right' width={'100%'} color={'grey'}> 
								{assetList[currectAsset].primary}
							</Typography>
						</Grid>
						<Grid item xs={8}>
							<Typography variant="subtitle2" gutterBottom color={'grey'} >
								{<FormattedMessage id='platform.ProfileDropdown.send.estimatedGas'/>}
							</Typography>
						</Grid>
						<Grid item xs={4}>
							<Typography variant="subtitle2" gutterBottom width={'100%'} color={'grey'} align='right'>
								{fees}
							</Typography>
						</Grid>
						<Grid item xs={12} width={'100%'}>
							<Divider />
						</Grid>
						
						<Grid item xs={6}>
							<Typography variant="subtitle2" gutterBottom color='grey' width={'30%'}>
								{<FormattedMessage id='platform.ProfileDropdown.send.total'/>}
							</Typography>
						</Grid>
						<Grid item xs={6}>
							<Typography variant="subtitle2" gutterBottom color='grey' align='right'>
								{totalToken() + ' ' + assetList[currectAsset].primary}
							</Typography>
						</Grid>
					</Grid>
				</>
			}

			{
				showUSDCBuyFrom && 
				<>
					<ListItem sx={{ width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingBottom: '0px'}} id="USDC_Price">
						<Typography variant="body1" gutterBottom sx={{textAlign: 'center'}}>
							{<FormattedMessage id='platform.ProfileDropdown.buy.usdcPrice'/>}
						</Typography>
					</ListItem>
					<ListItem sx={{ width: '100%', paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '0px'}}>
						<Typography variant="body1" gutterBottom sx={{textAlign: 'center', color: 'grey'}}>
							1 CoNET ≈ {usdcPrice} USDC
						</Typography>
					</ListItem>
					<ListItem >
						<Stack direction="row" spacing={2} >	
							<TextField id={amountTextFieldID}
								size="small"
								variant="standard"
								color='secondary'
								error={/error/.test(amountTextFieldID)? true: false}
								label={<FormattedMessage id='platform.ProfileDropdown.spend'/>}
								type='number'
								value={amountVal}
								onChange={ e => {
									let val = 0
									try {
										val = parseFloat(e.target.value)
									} catch (ex) {
										return setAmountVal(0)
									}
									if ( val < 0) {
										return setAmountVal(0)
									}
									
									setAmountVal(val)
									if ( val + fees > assetList[0].balance) {
										return setAmountTextFieldID('standard-error')
									}
									setAmountTextFieldID('standard-basic')
									setReceiveVal((val *usdcPrice).toFixed(2))
								}}
								InputProps={{endAdornment: <InputAdornment position="end">CoNET</InputAdornment>}}
							/>
							<Button variant="text"
								onClick={() => {
									maxCoNETClick()
								}}
							>
								{<FormattedMessage id='platform.ProfileDropdown.send.max'/>}
							</Button>
						</Stack>
					</ListItem>
					<ListItem >
						<TextField id='outlined-read-only-input'
							label={<FormattedMessage id='platform.ProfileDropdown.Receive'/>}
							value={receiveVal}
							InputProps={{endAdornment: <InputAdornment position="end">USDC</InputAdornment>}}
							sx={{ width: '100%'}}
						/>
					</ListItem>
				</>
			}

			{
				loading &&
				<ListItem  sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
					<CircularProgress />
				</ListItem>

			}

			{
				buttonNavigationCurrent > -1 &&	!loading &&	!resultError &&	!resultSuccess && //			Process button bar
					<ListItem sx={{ textAlign: 'center'}}>
						<Stack direction="row" spacing={2} >
							<Button variant="outlined" onClick={() => {
								resetWindow ()
							}}>
								{<FormattedMessage id='platform.dialog.delete.button.cancel'/>}</Button>
							<Button onClick={nextClick}
							variant="contained"
							disabled={(buttonNavigationCurrent === 1 && (amountVal<=0||!toAddr||/error/.test(walletTextFieldID)||/error/.test(amountTextFieldID)))}
							>
								{<FormattedMessage id='platform.ProfileDropdown.send.next'/>}
							</Button>
						</Stack>
					</ListItem>
			}

			{
				buttonNavigationCurrent < 0 &&			//			Tools bar
				<ListItem id="Tools">
					<BottomNavigation
						showLabels={true}
						value={buttonNavigationCurrent}
						onChange={BottomNavigationChanged}
						sx={{ width: '100%'}}>
						{
							currectAsset === 0 &&			//		Faucet		buttonNavigationCurrent = 0
							<BottomNavigationAction
								label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.actionFondWallet'/>}
								icon={<Opacity />}
							/>
						}
						
						<BottomNavigationAction				//		Send asset	buttonNavigationCurrent = 1
							label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.actionSend'/>}
							icon={<Outbound />}
						/>

						{
							currectAsset !== 0 &&			//		buy asset	buttonNavigationCurrent = 2
							<BottomNavigationAction
								label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.buy'/>}
								icon={<DownloadForOfflineIcon />}
							/>
						}
						
						
					</BottomNavigation>
				</ListItem>

			}

			{
				buttonNavigationCurrent < 0 &&			//			Asset select 
				<ListItem sx={{ width: '100%', padding: '0px' }} id="Assets_list">
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
			}
			
		</List>
    )
}

export default ProfileDropdown
