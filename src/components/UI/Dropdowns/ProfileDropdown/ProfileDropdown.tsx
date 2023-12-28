import styled from 'styled-components'
import React, {HTMLAttributes, useState, useEffect} from "react"
import useAppState from "../../../../store/appState/useAppState"
import {FormattedMessage, useIntl} from "react-intl"
import {ProfileData} from "../../../../store/appState/appStateReducer"
import CurrentProfileItem from './CurrentProfileItem/CurrentProfileItem'
import AssetView from'./CurrentProfileItem/AssetView'
import List from '@mui/material/List'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import BottomNavigation from '@mui/material/BottomNavigation/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import {getWorkerService} from '../../../../services/workerService/workerService'
import { LogoIcon, LogoText} from "../../Logo/Logo"
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
import { red, blueGrey, blue, green, grey } from '@mui/material/colors'
import InputAdornment from '@mui/material/InputAdornment'
import Avatar from '@mui/material/Avatar'
import NorthEastRoundedIcon from '@mui/icons-material/NorthEastRounded'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import CallReceivedIcon from '@mui/icons-material/CallReceived'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import {CopyToClipboard} from "../../../../utilities/utilities"
import CoNETSINodeSetup from './conet-si/CoNET_SI_SETUP'
import ListItemText from '@mui/material/ListItemText'
import {faucet, initOneTimeListenState, scanAssets} from '../../../../API/index'


export type Profiles = Array<ProfileData>

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

	const fees = 0.0008500
	const GasToEth = 0.00000001

	const {setIsModalOpen, clientProfiles, setActiveProfile, activeProfile} = useAppState()
	let workerService = getWorkerService()

	const currentProfile = () => {
		if (workerService.data.passcode.status === 'LOCKED') {
			return null
		}
		const index = workerService.data.profiles.findIndex((n:any) => {
			return n.isPrimary
		})
		return workerService.data.profiles[index]
	}

	const intl = useIntl()
	let conetToken
	
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
	const [conet_si_open, setConet_si_open] = useState(false)

	const [showAssetBalance_balance, setshowAssetBalance_balanc] = useState('')
	const [showCoNET_SI_setup_Badge, setShowCoNET_SI_setup_Badge] = useState(0)
	const [showPage, setShowPage] = useState(false)
	const [showLowCONETBalance, setShowLowCONETBalance] = useState(false)
	const [oldBalance, setOldBalance] = useState(0)
	const [getFaucetWaiting, setGetFaucetWaiting] = useState('')
	
	const init = async () => {
		const current = currentProfile()
		if (!current) {
			return
		}
		setShowPage(true)
		await syncAsset()
		if (!current?.network) {
			setShowCoNET_SI_setup_Badge (1)
		}
		conetToken = current.tokens.conet
		setshowAssetBalance_balanc(conetToken.balance)
		if (conetToken.balance < 0.001) {
			setShowLowCONETBalance(true)
		}
	}
	const shortToAddr = (addr: string|undefined) => {
		if (!addr) {
			return ''
		}
		return addr.substring(0,2) + addr.substring(2,6).toUpperCase() + '....' + addr.substring(addr.length-4,addr.length).toUpperCase()
	}

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setValueTab(newValue)
		const currentProfile1 = currentProfile()
		const currentAsset = reflashAssetList()[currectAsset]
		switch (currentAsset.primary) {
			case 'CONET': {
				return setCurrentAssetHistorys (currentProfile1.tokens.conet.history)
			}
			
			default: {
				return setCurrentAssetHistorys (currentProfile1.tokens.cntp.history)
				// const _history: any = []
				// workerService.data.CoNETCash.assets.forEach((n: any) => {
				// 	if ( n.history &&  n.history.length ) {
				// 		n.history.forEach ((nn:any) => {
				// 			_history.push (nn)
				// 		})
				// 	}
					
				// })
				// _history.sort ((a: any, b: any) => {
				// 	const aa = new Date(a.time)
				// 	const bb = new Date(b.time)
				// 	return aa > bb

				// })
				// return setCurrentAssetHistorys (_history)
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
				primary: 'CONET',
				balance: currentProfile().tokens.conet.balance,
				icon: <LogoIcon size={30} color='grey'/>
			},
			{
				primary: 'CNPT',
				balance: currentProfile().tokens.cntp.balance, 
				icon: <LogoIcon size={30} color={green[200]}/>
			}
		]
		return ret
	}


	const totalToken = () => {
		return amountVal + fees
	}

	const getFaucet = async () => {
		setLoading (true)
		const profile = currentProfile()
		const oldBalance = parseFloat(profile.tokens.conet.balance)
		
		initOneTimeListenState('conet', () => {
			workerService = getWorkerService()
			const profileNew = currentProfile()
			const conetBalance = parseFloat(profileNew.tokens.conet.balance)
			if (conetBalance - oldBalance > 0.001) {
				setshowAssetBalance_balanc(profileNew.tokens.conet.balance)
				setResultSuccess (true)
				setSendStep (1)
				return setLoading (false)
			}
			setTimeout (() => scanAssets(), 1000)
			
		})
		
		
		const [success] = await faucet()
		if (success !== 'SUCCESS') {
			setLoading(false)
			return setResultError(true)
		}
		scanAssets()
		
	}

	const syncAsset = () => {
		setLoading(true)
		
		return new Promise ( async (resolve)=> {
			if ( !workerService.method?.syncAsset) {
				setLoading(false)
				return resolve (null)
			}
			const [ status, data ] = await workerService.method.syncAsset ()
			setLoading(false)
			const assetList = reflashAssetList()
			setshowAssetBalance_balanc(assetList[currectAsset].balance)
			return resolve (null)
		})
	}

	const maxBuyCoNETCashClick = () => {
		const assetList = reflashAssetList()
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
		const assetList = reflashAssetList()
		const balance = assetList[currectAsset].balance
		const ret = balance - fees
		setAmountTextFieldID('standard-basic')
		if ( ret > 0) {
			return setAmountVal(ret)
		}
		return setAmountVal(0)
	}

	const maxCoNETClick = () => {
		const assetList = reflashAssetList()
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
		setLoading (false)
		setResultError(false)
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
				asset = 'CONET'
				break
			}
			default : {
				asset = 'COPT'
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
							const assetList = reflashAssetList()
							setcurrectAsset(index)
							setshowAssetBalance_balanc(assetList[index].balance)
						}} >
							{icon}
							<ListItemText primary={primary} sx={{ paddingLeft: '1rem', maxWidth: '5rem'}}/>
							<ListItemText primary={balance} sx={{ textAlign: 'right'}}/>
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
												{intl.formatMessage({id: type ? 'platform.ProfileDropdown.history.type.send': 'platform.ProfileDropdown.history.type.receive'})}
											
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
		const current = reflashAssetList()[currectAsset]
		const conetBalance = parseFloat( reflashAssetList()[0].balance)

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
			//		CNPT
			default: {
				if (conetBalance > 0.001) {
					setShowLowCONETBalance(false)
					break
				}
				setShowLowCONETBalance(true)
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
				const asset = reflashAssetList()[currectAsset]

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

	const openConet_SI_Cliek = () => {
		setConet_si_open(true)
		resetWindow ()
	}

	const closeConet_SI_Cliek = () => {
		setConet_si_open(false)
	}


	useEffect(() => {
        init()
    }, [])

	if (!showPage) {
		return (
			<></>
		)
	}

    return (
		<Stack spacing={2} sx={{ width: '100%'}}>
			<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', paddingBottom: '1rem'}}>

			<ListItem sx={{width: '100%'}}> 
				<CurrentProfileItem closeDropdown={closeDropdown} syncAsset= {syncAsset} />
			</ListItem>

			<Divider/>


			{
				showAssetBalance && 		//		Asset balance

					<ListItem>
						<AssetView balance={showAssetBalance_balance} icon={reflashAssetList()[currectAsset].icon} labelText = {reflashAssetList()[currectAsset].primary} />
					</ListItem>

			}

			{
				buttonNavigationCurrent === 0 && sendStep < 1 && 						//			Faucet Information before send
					<ListItem sx={{ textAlign: 'center', width: '100%'}}>
						<Typography variant="body2" gutterBottom sx={{wordBreak: 'break-word'}}>
							{intl.formatMessage({id: 'platform.ProfileDropdown.faucet.limited'})}
						</Typography>
					</ListItem>
			}

			{
				resultSuccess &&						//		 success
				<>
					<ListItem sx={{ textAlign: 'center'}}>
						<Typography variant="body1" gutterBottom>
							{intl.formatMessage({id: 'platform.ProfileDropdown.faucet.success'})}
						</Typography>
					</ListItem>
					<ListItem sx={{ textAlign: 'center'}}>
						<Button 
							variant="contained"
							onClick={()=>{
								resetWindow()
							}}
						>
							{intl.formatMessage({id: 'platform.manageProfiles.deleteProfile.confirmButton'})}
						</Button>
							
					</ListItem>
				</>
				

			}

			{
				buttonNavigationCurrent === 0 && resultError &&						//			Faucet error
				<>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Typography variant="body1" gutterBottom sx={{ color: red[700]}}>
							{intl.formatMessage({id: 'platform.ProfileDropdown.faucet.error'})}
						</Typography>
					</ListItem>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Button 
							variant="contained"
							onClick={() => {
								resetWindow ()
							}}
						>
							{intl.formatMessage({id: 'platform.manageProfiles.deleteProfile.confirmButton'})}
						</Button>
					</ListItem>
				</>
			}

			{
				buttonNavigationCurrent > 0 && resultError &&						//			Other error
				<>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Typography variant="body1" gutterBottom sx={{ color: red[700]}}>
							{intl.formatMessage({id: 'platform.ProfileDropdown.send.error'})}
							
						</Typography>
					</ListItem>
					<ListItem sx={{ textAlign: 'center', padding: '2rem'}}>
						<Button 
							variant="contained"
							onClick={() => {
								resetWindow ()
							}}
						>
							{intl.formatMessage({id: 'platform.manageProfiles.deleteProfile.confirmButton'})}
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
							label={
								intl.formatMessage({id:'platform.ProfileDropdown.send.receiver'})
							} 
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
								label={
									intl.formatMessage({id:'platform.ProfileDropdown.send.amount'})
								}
								type='number'
								value={amountVal}
								onChange={e=> {
									setAmountTextFieldID('standard-basic')
									let val = 0
									val = parseFloat(e.target.value)
									
									if ( isNaN(val) || val < 0) {
										return setAmountVal(0)
									}
									
									setAmountVal(val)
									if ( val + fees > reflashAssetList()[currectAsset].balance) {
										return setAmountTextFieldID('standard-error')
									}
									
									
								}}
							/>
							<Button variant="text"
							onClick={() => {
								maxClick()
							}}
							>
								{intl.formatMessage({id:'platform.ProfileDropdown.send.max'})}
							</Button>
						</Stack>
						
					</ListItem>

				</>
				
			}

			{
				buttonNavigationCurrent === 1 && sendStep > 1 && !resultSuccess && !resultError &&	//			show send information
				
					<ListItem id = "show send information" >
						<Grid container spacing={2} sx={{ padding: '1.5rem'}} width='100%' justifyContent="center">
							<Grid item xs={7}>
								<Typography variant="subtitle2" gutterBottom color='grey' width={'30%'}>
								{intl.formatMessage({id:'platform.ProfileDropdown.send.receiver'})}
									
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
									{amountVal.toFixed(6)}
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="subtitle2" gutterBottom align='right' width={'100%'} color={'grey'}> 
									{reflashAssetList()[currectAsset].primary}
								</Typography>
							</Grid>
							<Grid item xs={8}>
								<Typography variant="subtitle2" gutterBottom color={'grey'} >
									{intl.formatMessage({id:'platform.ProfileDropdown.send.estimatedGas'})}
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
									{intl.formatMessage({id:'platform.ProfileDropdown.send.total'})}
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<Typography variant="subtitle2" gutterBottom color='grey' align='right'>
									{totalToken() + ' ' + reflashAssetList()[currectAsset].primary}
								</Typography>
							</Grid>
						</Grid>
					</ListItem>

				
			}


			{

				showHistoryDetail &&																//		HistoryDetail
				<ListItem id = "showHistoryDetail">
					<Grid container spacing={1} alignItems="center" sx={{ width:'100%', padding: '1rem'}}>
						
							
						<Grid item xs={6} sx={{textAlign: 'left', paddingTop: '5px!important'}}>
							<Typography variant="body1" gutterBottom sx={ showHistoryDetail.isSend ? {color: red[900]}: {color: blue[400]}}>
								{intl.formatMessage({id:showHistoryDetail.isSend ? 'platform.ProfileDropdown.history.type.send' : 'platform.ProfileDropdown.history.type.receive'})}
								
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right', paddingTop: '0px!important', marginRight: '-1rem'}}>
							<IconButton color="primary" onClick={closeAssetHistory}>
								<CloseIcon />
							</IconButton>
						</Grid>

						<Grid item xs={3} sx={{textAlign: 'left', paddingTop: '2rem!important'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								{intl.formatMessage({id:'platform.ProfileDropdown.history.timestamp'})}
							</Typography>
						</Grid>
						<Grid item xs={9} sx={{ textAlign: 'right', paddingTop: '2rem!important'}}>
							<Typography variant="caption" gutterBottom sx={{ color: blueGrey[600]}}>
								{ showHistoryDetail?.time ? new Date(showHistoryDetail.time).toLocaleDateString() + ' ' + new Date(showHistoryDetail.time).toLocaleTimeString() : ''}
							</Typography>
						</Grid>

						<Grid item xs={7} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								{intl.formatMessage({id:showHistoryDetail?.isSend ? 'platform.ProfileDropdown.send.receiver': 'platform.ProfileDropdown.history.sender'})}
							</Typography>
						</Grid>
						{
							showHistoryDetail.status ==='Confirmed' &&
							<Grid item xs={5}
								sx={{ textAlign: 'right'}} zeroMinWidth >
								<Typography variant="caption" gutterBottom sx={{color: blueGrey[600]}} noWrap>
									{ showHistoryDetail?.isSend ? shortToAddr(showHistoryDetail?.to) : showHistoryDetail.from ? shortToAddr(showHistoryDetail.from) : intl.formatMessage({id:'platform.ProfileDropdown.history.CoNETCash.mint'})}
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
								{intl.formatMessage({id:'platform.ProfileDropdown.send.amount'})}
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right'}}>
							<Typography variant="button" gutterBottom sx={{color: blueGrey[600]}}>
								{ showHistoryDetail.value.toFixed(6) }
							</Typography>
						</Grid>
						
						<Grid item xs={6} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								{intl.formatMessage({id:'platform.ProfileDropdown.history.gas.total'})}
							</Typography>
						</Grid>
						<Grid item xs={6} sx={{ textAlign: 'right'}}>
							<Typography variant="button" gutterBottom sx={{color: blueGrey[600]}}>
								{ showHistoryDetail?.cumulativeGasUsed ? (showHistoryDetail?.cumulativeGasUsed * GasToEth).toFixed(6): 0}
							</Typography>
						</Grid>

						<Grid item xs={6} sx={{textAlign: 'left'}}>
							<Typography variant="caption" gutterBottom sx={{}}>
								{intl.formatMessage({id:'platform.ProfileDropdown.send.total'})}
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
				buttonNavigationCurrent > -1 &&	!loading &&	!resultError &&	!resultSuccess && 							//			Process button bar
					<ListItem sx={{ textAlign: 'center'}}>
						<Stack direction="row" spacing={4} sx={{width: '100%'}} justifyContent="center" alignItems="center">
							<Button variant="outlined" onClick={() => {
								resetWindow ()
							}}>
								{intl.formatMessage({id:'platform.dialog.delete.button.cancel'})}
							</Button>
							<Button onClick={nextClick}
							variant="contained"
							disabled={(buttonNavigationCurrent === 1 && (amountVal<=0||!toAddr||/error/.test(walletTextFieldID)||/error/.test(amountTextFieldID)))}
							>
								{intl.formatMessage({id:'platform.ProfileDropdown.send.next'})}
							</Button>
						</Stack>
					</ListItem>
			}

			{
				
			}

			{
				buttonNavigationCurrent < 0 && !showHistoryDetail &&													//			Current Asset form include buy
					

					<> 
						{
							showLowCONETBalance &&
							<ListItem id="Tools" sx={{padding: '0 2rem 0 2rem'}}>
								<Typography variant="body2" gutterBottom sx={{ color: red[700]}}>
									{intl.formatMessage({id: 'platform.ProfileDropdown.faucet.lowBalance'})}
								</Typography>
							</ListItem>
						}
						<ListItem id="Tools">
							<BottomNavigation
								showLabels={true}
								value={buttonNavigationCurrent}
								onChange={BottomNavigationChanged}
								sx={{ width: '100%'}}>
								{																								//		Faucet		buttonNavigationCurrent = 0
									currectAsset === 0 &&			
									<BottomNavigationAction
										label={intl.formatMessage({id:'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet'})}
										icon={<Opacity />}
									/>
								}
								
								<BottomNavigationAction																			//		Send asset	buttonNavigationCurrent = 1
									disabled={true}
									label={intl.formatMessage({id:'platform.ProfileDropdown.CurrentProfileItem.actionSend'})}
									icon={<Outbound />}
								/>

								{
									// currectAsset !== 0 &&			//		buy assetbuttonNavigationCurrent = 2
									// <BottomNavigationAction
									// 	label={intl.formatMessage({id:'platform.ProfileDropdown.CurrentProfileItem.buy'})}
									// 	icon={<DownloadForOfflineIcon />}
									// />
								}
							</BottomNavigation>
						</ListItem>
					</>
				

				

			}

			{
				!showHistoryDetail && buttonNavigationCurrent < 0 &&			//			Asset List 
				<ListItem sx={{ width: '100%', padding: '0 1rem 0 1rem'}} id="Assets_list">
					<Box sx={{ width: '100%'}}>
						<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
							<Tabs value={valueTab} onChange={handleTabChange}>
								<Tab {...a11yProps(0)} label={intl.formatMessage({id:'platform.ProfileDropdown.Tablable.Assets'})} sx={{ width: '50%'}}/>
								<Tab {...a11yProps(1)} label={intl.formatMessage({id:'platform.ProfileDropdown.Tablable.Activity'})} sx={{ width: '50%'}}/>
							</Tabs>
							
						</Box>
						<TabPanel value={valueTab} index={0} >
							{
								reflashAssetList().map((v, index) => {
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
			{
				conet_si_open &&
				<CoNETSINodeSetup
					closeWindow = { closeConet_SI_Cliek }
					winOpen = {conet_si_open}
					currentProfile = {currentProfile()}
				/>
			}

			</List>
		</Stack>
		
    )
}

export default ProfileDropdown
