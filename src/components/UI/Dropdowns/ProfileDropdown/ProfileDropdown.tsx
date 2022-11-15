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
import { red, blueGrey, blue, green } from '@mui/material/colors'
import InputAdornment from '@mui/material/InputAdornment'
import Avatar from '@mui/material/Avatar'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CallReceivedIcon from '@mui/icons-material/CallReceived'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {CopyToClipboard} from "../../../../utilities/utilities"

import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
export type Profiles = Array<ProfileData>
import {VerticalOptions_ArrowUpRightCircleFill, VerticalOptions_ArrowDownloadCircleFill, VerticalOptions} from "../../Icons/Icons"
import { profile } from '@conet.project/seguro-worker-lib/build/workerBridge'
import SaveAltRoundedIcon from '@mui/icons-material/SaveAltRounded'

type ProfileDropdownProps = {
    closeDropdown: (app:string) => void
} & HTMLAttributes<HTMLDivElement>



interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number
}

type CryptoAssetHistory = {
	status: 'Pending'|'Confirmed'|'0x0'
	Nonce?: number
	to?: string
	transactionFee?: number
	gasLimit?: number
	gasUsed?: number
	baseFee?: number
	priorityFee?: number
	totalGasFee?: number
	maxFeePerGas?: number
	transactionHash?: string
	total: number
	time: string
	blockHash?: string
	blockNumber?: number
	contractAddress?: string
	cumulativeGasUsed?: number
	effectiveGasPrice?: string
	from?: string
	logs?: any[]
	logsBloom?: string
	transactionIndex?: number
	type?: string
	value: number
	isSend?: boolean
}

const AssetHistoryItem =  styled.div`

`

const PanelDev = styled.div`
	max-height: 10rem;
	overflow-y: auto;
`

const ProfileDropdown = ({closeDropdown}: ProfileDropdownProps) => {

	const {
        windowInnerSize: {width}
    } = useAppState()
	const fees = 0.0003045
	const maxFees = 0.0003591
	const GasToEth = 0.00000001

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
	const [showCoNETCashBuyFrom, setShowCoNETCashBuyFrom] = useState(false)
	const [showCoNETCashSendFrom, setShowCoNETCashsendFrom] = useState(false)
	const [usdcPrice, setUsdcPrice]= useState(0.0)
	const [currentAssetHistorys, setCurrentAssetHistorys] = useState([])
	const [receiveVal, setReceiveVal] = useState('')
	const [showHistoryDetail, setShowHistoryDetail] = useState<CryptoAssetHistory|null>(null)

	const [showAssetBalance_balance, setshowAssetBalance_balanc] = useState(conetToken.balance)

	const shortToAddr = (addr: string|undefined) => {
		if (!addr) {
			return ''
		}
		return addr.substring(0,2) + addr.substring(2,6).toUpperCase() + '....' + addr.substring(addr.length-4,addr.length).toUpperCase()
	}

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setValueTab(newValue)
		const currentProfile1 = currentProfile()
		const currentAsset = assetList[currectAsset]
		switch (currentAsset.primary) {
			case 'CoNET': {
				return setCurrentAssetHistorys (currentProfile1.tokens.conet.history)
			}
			case 'USDC': {
				return setCurrentAssetHistorys (currentProfile1.tokens.usdc.history)
			}
			default: {
				const _history: any = []
				workerService.data.CoNETCash.assets.forEach((n: any) => {
					if ( n.history &&  n.history.length ) {
						n.history.forEach ((nn:any) => {
							_history.push (nn)
						})
					}
					
				})
				_history.sort ((a: any, b: any) => {
					const aa = new Date(a.time)
					const bb = new Date(b.time)
					return aa > bb

				})
				return setCurrentAssetHistorys (_history)
			}
		}

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
		  <PanelDev
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		  >
			{ value === index && (
			  <Box sx={{ p: 0 }}>
				<Typography component="span">{children}</Typography>
			  </Box>
			)}
		  </PanelDev>
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
				balance: workerService.data?.CoNETCash ? workerService.data.CoNETCash.Total : 0, 
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

	const maxBuyCoNETCashClick = () => {
		assetList = reflashAssetList()
		const USDCbalance = assetList[2].balance
		let ret = USDCbalance - fees
		setAmountTextFieldID('standard-basic')
		if ( ret > 0) {
			if ( ret > 100 ) {
				ret = 100
			}
			return setAmountVal(ret)
		}
		return setAmountVal(0)
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

	const historyItemClick = (index: number, v:CryptoAssetHistory) => {
		// @ts-ignore: Unreachable code error
		setShowHistoryDetail (v)
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
		setShowCoNETCashBuyFrom (false)
		setShowCoNETCashsendFrom(false)
		setShowHistoryDetail (null)
		setCurrentAssetHistorys([])
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

	const closeAssetHistory = () => {
		setShowHistoryDetail (null)
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



	const assetHistory = (index: number, v: CryptoAssetHistory) => {
		if (!v ) {
			return
		}
		
		const type = v?.isSend ? true : false
		
		const time = v.time? new Date (v.time): new Date ()
		const timeString = `${ time.getMonth()+1 }/${ time.getDate() }/${time.getFullYear().toString().replace(/^20/, '')} ${time.toLocaleTimeString()}`
		let address = type ? (v?.to ? v.to: '') : (v.from ? v.from : '')
		address = shortToAddr (address)

		return (
			<List component="nav" sx={{ width: '100%', padding: '0px'}} key={index}>
				<ListItem sx={{ width: '100%', padding: '0px' }}>
					<ListItemButton onClick={() => historyItemClick(index, v)}>
						<Grid container spacing={1} alignItems="center" >
							<Grid item xs={2} sx={{ textAlign: 'center'}}>
								<Avatar sx={ type ? { bgcolor: blueGrey[200], width: 24, height: 24}: { bgcolor: blue[300], width: 24, height: 24 }}>
									{
										type ? <NorthEastRoundedIcon /> : <CallReceivedIcon />
									}
								</Avatar>
							</Grid>
							<Grid item xs={10} sm container rowSpacing={0}>
								<Grid item xs container spacing={2}>
									<Grid item xs={6}>
										<AssetHistoryItem>
											<Typography variant="body1" gutterBottom sx={ type ? {color: red[900]}: {color: blueGrey[400]}}>
												{type ? <FormattedMessage id='platform.ProfileDropdown.history.type.send' /> : <FormattedMessage id='platform.ProfileDropdown.history.type.receive'/>}
											</Typography>
										</AssetHistoryItem>
									</Grid>
									<Grid item xs={6}>
										<AssetHistoryItem>
											<Typography variant="body1" gutterBottom sx={type ? {color: red[900]}: {color: blueGrey[400]}} textAlign='right'>
												{ type ? - v.value.toFixed(6) : v.value.toFixed(6) }
											</Typography>
										</AssetHistoryItem>
									</Grid>
									<Grid item xs={7} sx={{ paddingTop: '0px!important'}}>
										<Typography variant="caption" display="block" gutterBottom sx={{ color: 'grey'}}>
											{ timeString }
										</Typography>
									</Grid>
									<Grid item xs={5} sx={{ paddingTop: '0px!important', paddingLeft: '0px!important', textAlign: 'right'}}>
										<Typography variant="caption" display="block"  gutterBottom sx={{ color: blueGrey[400]}}>
											{ address }
										</Typography>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</ListItemButton>
				</ListItem>
				
			</List>

		)
	}

	const BottomNavigationChanged = (event: any, newValue: number) => {
		setButtonNavigationCurrent(newValue)
		const current = assetList[currectAsset]
		switch (current.primary) {
			case 'USDC' : {
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
				break
			}
			case 'CoNETCash': {
				if ( newValue === 2) {					//			buy CoNETCash
					setShowCoNETCashsendFrom (false)
					return setShowCoNETCashBuyFrom(true)
				}
				setShowCoNETCashBuyFrom(false)
				return setShowCoNETCashsendFrom (true)
				
			}

			default: {
				break
			}
		}
	}

	const nextClick = () => {

		switch (buttonNavigationCurrent) {
			case 0: {								//		getFaucet
				return getFaucet ()
			}
			case 1: {								//		send asset
				if (sendStep < 2) {
					setSendStep (2)
					return setShowAssetBalance(false)
				}
				return sendAsset ()
			}
			case 2: {								//		buy Asset
				const asset = assetList[currectAsset]

				if ( asset.primary === 'USDC') {
					if ( !workerService.method?.buyUSDC) {
						return
					}
					setLoading (true)
					setAmountTextFieldID ('standard-read-only-input')
					return workerService.method.buyUSDC(amountVal, currentProfile().keyID)
						.then( async val => {
							const [status] = val
							setLoading (false)
							if (status!== 'SUCCESS') {
								return setResultError (true)
							}
							setsShowUSDCBuyFrom (false)
							await syncAsset ()
							return setResultSuccess (true)
						})
				}

				//				Buy CoNETCash
				if ( !workerService.method?.mintCoNETCash) {
					return
				}

				setLoading (true)
				setAmountTextFieldID ('standard-read-only-input')
				return workerService.method.mintCoNETCash(amountVal, currentProfile().keyID)
					.then ( async val => {
						const [status] = val 
						setLoading (false)
						if (status!== 'SUCCESS') {
							return setResultError (true)
						}

						
						await syncAsset ()
						setsShowUSDCBuyFrom (false)
						setResultSuccess (true)
					})
				
			}
			default: {
				return
			}
		}
	}

    return (

		<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingBottom: '2rem'}}>

			<ListItem>
				<CurrentProfileItem closeDropdown={closeDropdown} syncAsset= {syncAsset}/>
			</ListItem>

			<Divider/>

			{
				showAssetBalance && 		//		Asset balance

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
				buttonNavigationCurrent > 0 && resultError &&						//			Other error
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
					<ListItem id = "show send information" >
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
									{shortToAddr(toAddr)}
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
					</ListItem>

				</>
			}

			{
				showUSDCBuyFrom && !resultError &&																	//			showUSDCBuyFrom
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
				showCoNETCashBuyFrom && !resultError && !resultSuccess && 
				<>
					{
						/error/.test(amountTextFieldID) &&
						<ListItem >
							<Typography variant="body1" gutterBottom sx={{textAlign: 'center', color: '#d50000'}}>
								{<FormattedMessage id='platform.ProfileDropdown.CoNETCash.amountError'/>}
							</Typography>
						</ListItem>
					}
					
					<ListItem id = "BuyCoNETCash" >
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
									if ( val + fees > assetList[2].balance|| val > 100|| val < 10) {
										return setAmountTextFieldID('standard-error')
									}
									setAmountTextFieldID('standard-basic')
									
								}}
							/>
							<Button variant="text"
							onClick={() => {
								maxBuyCoNETCashClick()
							}}
							>
								{<FormattedMessage id='platform.ProfileDropdown.send.max'/>}
							</Button>
						</Stack>
					</ListItem>
				</>
			}

			{

				showHistoryDetail &&
				<ListItem id = "showHistoryDetail">
					<Grid container spacing={1} alignItems="center" sx={{ width:'100%', padding: '1rem'}}>
						
							
						<Grid item xs={6} sx={{textAlign: 'left', paddingTop: '5px!important'}}>
							<Typography variant="body1" gutterBottom sx={ showHistoryDetail.isSend ? {color: red[900]}: {color: blue[400]}}>
								{showHistoryDetail.isSend ? <FormattedMessage id='platform.ProfileDropdown.history.type.send' /> : <FormattedMessage id='platform.ProfileDropdown.history.type.receive'/>}
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right', paddingTop: '0px!important', marginRight: '-1rem'}}>
							<IconButton color="primary" onClick={closeAssetHistory}>
								<CloseIcon />
							</IconButton>
						</Grid>

						<Grid item xs={3} sx={{textAlign: 'left', paddingTop: '2rem!important'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								<FormattedMessage id='platform.ProfileDropdown.history.timestamp' />
							</Typography>
						</Grid>
						<Grid item xs={9} sx={{ textAlign: 'right', paddingTop: '2rem!important'}}>
							<Typography variant="caption" gutterBottom sx={{ color: blueGrey[600]}}>
								{ showHistoryDetail?.time ? new Date(showHistoryDetail.time).toLocaleDateString() + ' ' + new Date(showHistoryDetail.time).toLocaleTimeString() : ''}
							</Typography>
						</Grid>

						<Grid item xs={7} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								<FormattedMessage id={ showHistoryDetail?.isSend ? 'platform.ProfileDropdown.send.receiver': 'platform.ProfileDropdown.history.sender'} /> 
							</Typography>
						</Grid>
						{
							showHistoryDetail.status ==='Confirmed' &&
							<Grid item xs={5}
								sx={{ textAlign: 'right'}} zeroMinWidth >
								<Typography variant="caption" gutterBottom sx={{color: blueGrey[600]}} noWrap>
									{ showHistoryDetail?.isSend ? shortToAddr(showHistoryDetail?.to) : showHistoryDetail.from ? shortToAddr(showHistoryDetail.from) : <FormattedMessage id='platform.ProfileDropdown.history.CoNETCash.mint' />} 
								</Typography>
							</Grid>
						}
						{
							showHistoryDetail.status !=='Confirmed' &&
							<Grid item xs={5} 
								onClick = {()=> {
									const addr = showHistoryDetail.isSend ? (showHistoryDetail.to ? showHistoryDetail.to : '') : (showHistoryDetail?.from ? showHistoryDetail.from: '')
									if ( addr ) {
										CopyToClipboard(addr)
									}
									
								}}
								sx={{ textAlign: 'right', cursor: 'pointer' }} zeroMinWidth>
								<Stack direction="row" spacing={0} sx={{ textAlign: 'right'}}>
									<Typography variant="caption" gutterBottom sx={{color: blueGrey[600]}} noWrap>
										{ showHistoryDetail?.isSend ? shortToAddr(showHistoryDetail?.to) : shortToAddr(showHistoryDetail?.from) } 
									</Typography>
									<IconButton size='small' sx={{ padding: '0px', color: blueGrey[600]}}>
										<ContentCopyIcon fontSize="inherit"/>
									</IconButton>
								</Stack>
								
							</Grid>
						}
						

						<Grid item xs={6} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								<FormattedMessage id='platform.ProfileDropdown.send.amount' /> 
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right'}}>
							<Typography variant="button" gutterBottom sx={{color: blueGrey[600]}}>
								{ showHistoryDetail.value.toFixed(6) }
							</Typography>
						</Grid>
						
						<Grid item xs={6} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								<FormattedMessage id='platform.ProfileDropdown.history.gas.total' /> 
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right'}}>
							<Typography variant="button" gutterBottom sx={{color: blueGrey[600]}}>
								{ showHistoryDetail?.cumulativeGasUsed ? (showHistoryDetail?.cumulativeGasUsed * GasToEth).toFixed(6): 0}
							</Typography>
						</Grid>

						<Grid item xs={6} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								<FormattedMessage id='platform.ProfileDropdown.send.total' /> 
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right'}}>
							<Typography variant="button" gutterBottom sx={{color: blueGrey[600]}}>
								{ (showHistoryDetail.value + (showHistoryDetail?.cumulativeGasUsed ? showHistoryDetail?.cumulativeGasUsed * GasToEth: 0)).toFixed(6)}
							</Typography>
						</Grid>
					</Grid>
				</ListItem>

				
			}

			{
				//	-------------------------------------------------------------------------------------------------------------------
			}

			{
				loading &&																			//			show Loading
				<ListItem  sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
					<CircularProgress />
				</ListItem>

			}

			{
				buttonNavigationCurrent > -1 &&	!loading &&	!resultError &&	!resultSuccess && 	//			Process button bar
					<ListItem sx={{ textAlign: 'center'}}>
						<Stack direction="row" spacing={2} >
							<Button variant="outlined" onClick={() => {
								resetWindow ()
							}}>
								{<FormattedMessage id='platform.dialog.delete.button.cancel'/>}
							</Button>
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
				buttonNavigationCurrent < 0 && !showHistoryDetail &&			//			Tools bar
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
							currectAsset !== 0 &&			//		buy assetbuttonNavigationCurrent = 2
							<BottomNavigationAction
								label={<FormattedMessage id='platform.ProfileDropdown.CurrentProfileItem.buy'/>}
								icon={<DownloadForOfflineIcon />}
							/>
						}
						
						
					</BottomNavigation>
				</ListItem>

			}

			{
				!showHistoryDetail && buttonNavigationCurrent < 0 &&			//			Asset select 
				<ListItem sx={{ width: '100%', padding: '0px'}} id="Assets_list">
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
							{
								currentAssetHistorys.map ((v, index ) => {
									return assetHistory (index, v)
								})
							}
						</TabPanel>
					</Box>
					
				</ListItem>
			}
			
		</List>
    )
}

export default ProfileDropdown
