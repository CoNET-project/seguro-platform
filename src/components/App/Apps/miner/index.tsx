
import { styled } from '@mui/material/styles'
import { useIntl } from "react-intl"
import {Grid, CircularProgress, styled as materialStyled, TableContainer, Table, TableHead, TableRow, TableCell, TableBody} from '@mui/material'

import styledCom from "styled-components"
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import CloudQueueIcon from '@mui/icons-material/CloudQueue'
import Slide from '@mui/material/Slide'
import Typography from '@mui/material/Typography'
import useAppState from "../../../../store/appState/useAppState"
import miner2 from '../../../../assets/miner/FancyNyan.webp'
import minerPause from '../../../../assets/miner/FancyNyanPause.png'
import {Stack, Link, IconButton, SvgIcon} from '@mui/material'
import Fab from '@mui/material/Fab'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import DnsIcon from '@mui/icons-material/Dns'
import React, {useState, useEffect} from "react"
import {getCONETBalance, startLiveness, stopLiveness} from '../../../../API/index'
import {logger} from '../../logger'
import {grey, lightGreen, blueGrey, green, red} from '@mui/material/colors'
import boostImg from './assets/boost.gif'
import { useTheme } from '@mui/material/styles'
import {Tabs, Tab, Button, Divider} from '@mui/material-next'
import {getWorkerService} from '../../../../services/workerService/workerService'

import AD from './AD-1'

const StyleDiv = styledCom.div`

`

const cntp_address = '0x0f43685B2cB08b9FB8Ca1D981fF078C22Fec84c5'
const BoostImg = styledCom.img`
    width: 7rem;
`

const ItemStyle = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '0.5rem',
	height: '4rem'
}))

const ItemStyle3 = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '1rem',
	width: '100%'
}))



const ItemStyle2 = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '1rem',
    color: grey[500]
}))

const CloudNode = ( check: boolean, setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    
    return (
        
        <Grid item>
            <ItemStyle2>
                <Fab
                    size='large'
                    color='success'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5)
                    }}
                    >
                    <CloudQueueIcon fontSize='large' />
                </Fab>
				<TableContainer component={Box} sx={{marginTop:'-2rem', padding:'0 0 1rem 0'}}>
					<Table size="small" >
						<TableHead>
							<TableRow>
								<TableCell>
									
								</TableCell>
								<TableCell align="center">
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.title1'})}
								</TableCell>

								<TableCell align="center">
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.title2'})}
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell>
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item1'})}
								</TableCell>
								<TableCell align="center">
									200U
								</TableCell>
								<TableCell align="center">
									1,000U
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item2'})}
								</TableCell>
								<TableCell align="center">
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item2-seed'})}
								</TableCell>
								<TableCell align="center">
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item2-super'})}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item3'})}
								</TableCell>
								<TableCell align="center">
									500
								</TableCell>
								<TableCell align="center">
									100
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item4'})}
								</TableCell>
								<TableCell align="center">
									24/7
								</TableCell>
								<TableCell align="center">
									24/7
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item5'})}
								</TableCell>
								<TableCell align="center">
								{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item5-1'})}
								</TableCell>
								<TableCell align="center">
								{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item5-1'})}
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>
									{ intl.formatMessage({id: 'platform.joinUS.miner.cloud.table.item6'})}
								</TableCell>
								<TableCell align="center">
									8,000 $CONET 
								</TableCell>
								<TableCell align="center">
									50,000 $CONET 
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
				{ intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
            </ItemStyle2>
        </Grid>
        
    )
}

const Bandwidth = ( check: boolean, setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    
    return (
        
        <Grid item>
            <ItemStyle2>
                <Fab
                    size='large'
                    color='success'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5)
                    }}
                    >
                    <CallMissedOutgoingIcon fontSize='large' />
                </Fab>

                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center'}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.Bandwidth'})}
                </Typography>
                <Typography variant="h6" sx={{ textAlign:'center', }}>
                    {intl.formatMessage({id:'platform.joinUS.miner.BandwidthDetail'})}
                </Typography>
                
                <Button
                    variant="outlined" size="large"
                    disabled
                    sx={{fontFamily:'inherit'}}>
                        { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                </Button>
            </ItemStyle2>
        </Grid>
        
    )
}

const SaaS = (check: boolean,setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    return (
        <Grid item>
            <ItemStyle2>
                <Fab
                    size='large'
                    color='success'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5),
                        bottom: (theme) => theme.spacing(2),
                    }}
                    >
                    <DnsIcon fontSize='large' />
                </Fab>

                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', color: grey[500] }}>
                    {intl.formatMessage({id:'platform.joinUS.miner.SaaS'})}
                </Typography>
                <Typography variant="h6" sx={{  textAlign:'center', color: grey[500]}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.SaaSDetail'})}
                    
                </Typography>
                <Button
                    variant="outlined" size="large"
                    disabled
                    sx={{fontFamily:'inherit' }}>
                        { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                </Button>
            </ItemStyle2>

        </Grid>
    )
}

const Storage = (check: boolean,setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()

    return (
        <Grid item>
            <ItemStyle2>
                <Fab
                    size='large'
                    color='success'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5),
                        bottom: (theme) => theme.spacing(2)
                    }}
                    >
                    <DriveFolderUploadIcon fontSize='large' />
                </Fab>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', color: grey[500]  }}>
                    {intl.formatMessage({id:'platform.joinUS.miner.storage'})}
                </Typography>
                <Typography variant="body1" sx={{ textAlign:'center', color: grey[500]}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.storageDetail'})}
                </Typography>
                <Button
                    variant="outlined" 
                    disabled
                    sx={{ fontFamily:'inherit' }}>
                        { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                </Button>
            </ItemStyle2>

        </Grid>
    )
}

const Boost = (CONET_balance: number, setBoost: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    return (
        <Grid item >
            <Box sx={{paddingTop: '4rem'}}>
                
                <Paper sx={{ borderRadius: '1rem'}}>
                    
                    <Grid container spacing={4} >
                        <Grid item xs={4} sx={{ textAlign: 'center'}}>
                            <BoostImg src={boostImg}/>
                        </Grid>
                        <Grid item xs={8} sx={{ textAlign: 'left'}}>
                            <Typography variant="h5" sx={{ fontWeight: '900', color: CONET_balance > 1000 ? 'black': grey[400] }}>
                                {intl.formatMessage({id: 'platform.miner.register.boost'})}
                            </Typography>
                            <Typography variant="h6" sx={{paddingBottom: '1rem', color: CONET_balance > 1000 ? 'black': grey[400] }}>
                                {intl.formatMessage({id: 'platform.miner.register.boost.detail'})}
                            </Typography>
                            <Button
                                variant="outlined"
                                disabled
                                sx={{fontFamily:'inherit', margin: '2rem' }}>
                                    { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                            </Button>
                            
                        </Grid>
                    </Grid>
                </Paper>
                
            </Box>
        </Grid>
    )
}

const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
}

interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && 
                children
            }
        </div>
    )
}

const currentProfile = () => {
	const workerService = getWorkerService()
	if (workerService.data.passcode.status === 'LOCKED') {
		return null
	}
	const index = workerService.data.profiles.findIndex((n:any) => {
		return n.isPrimary
	})

	return workerService.data.profiles[index]
}


const Community_liveness = (CNTP: string, setCNTP: (v:string) => void, setTodayCNTP: (v:string) => void) => {
	const intl = useIntl()
	const [showLoader, setShowLoader] = useState(false)
	const [showSameIPError, setShowSameIPError] = useState(false)
	const [showInstanceError, setShowInstanceError] = useState(false)
	const [minting, setMinting] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			if (!active) {
				return
			}
			
			if (showLoader) {
				if (minting) {
					await stopLiveness()
					setShowLoader (false)
					return setMinting(false)
				}
				startLiveness((err, data ) => {
					setShowLoader (false)
					if (err) {
						clearError()
						setMinting(false)
						return setShowInstanceError(true)
					}
					
					setMinting(true)
					setCNTP(data[0])
					setTodayCNTP(data[1])
					console.log (data)

				})
			}

		}
		
		let active = true
        fetchData()
        return () => { active = false }
	},[showLoader])

	const clearError = () => {
		setTimeout(() => {
			setShowSameIPError(false)
			setShowInstanceError(false)
		}, 5000)
	}

	const clickStart = async () => {
		setShowLoader(true)
	}
	return (
		<ItemStyle3>
			<Stack justifyContent="center" alignItems="center" spacing={2}>
			{
				!showInstanceError && !showSameIPError &&
				<Typography variant="body1" sx={{textAlign:'center', color: grey[500], padding: '0 0 1rem 0'}}>
					{intl.formatMessage({id: 'platform.miner.community.liveness.detail'})}
				</Typography>
			}
			
			{
				showSameIPError &&
				<Typography variant="body1" sx={{textAlign:'center', color: red[700], padding: '0 0 1rem 0'}}>
					{intl.formatMessage({id: 'platform.miner.community.liveness.sameIPError'})}
				</Typography>
			}
			{
				showInstanceError &&
				<Typography variant="body1" sx={{textAlign:'center', color: red[700], padding: '0 0 1rem 0'}}>
					{intl.formatMessage({id: 'platform.miner.community.liveness.sameMinerError'})}
				</Typography>
			}
			<Typography variant="h5" sx={{textAlign:'center', color: green[500], fontWeight: '800'}}>
				{CNTP} CNTP
			</Typography>
				
			{
				minting? <img src={miner2} style={{width: '5rem'}} />: <img src={minerPause} style={{ width: '5rem'}} />
			}
			
			
			<Button
				onClick={clickStart}
				variant="filled"
				color='tertiary'
				disabled={showLoader||showInstanceError||showInstanceError}
				sx={{fontFamily:'inherit'}}
			>
				<Typography  sx={{padding: '0 0.2rem 0rem 0rem'}}>
					{ intl.formatMessage({id: minting? 'platform.miner.register.MinerAni.stop':'platform.miner.register.button'})}
				</Typography>
				{ showLoader && <CircularProgress size={20} color="success" variant="indeterminate"  />}
			</Button>
			
			</Stack>
		</ItemStyle3>
		
	)
		
}

const Referrals_Miner = () => {
	const intl = useIntl()
	
	return (
		<ItemStyle3>
			<Typography variant="body1" sx={{ textAlign:'center', color: grey[500], padding: '0 0 1rem 0'}}>
				{intl.formatMessage({id: 'platform.miner.community.referral.detail'})}
			</Typography>
			<Button
				variant="outlined" size="large"
				disabled
				sx={{fontFamily:'inherit' }}>
					{ intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
            </Button>
		</ItemStyle3>
		
	)
		
}

const Community = (CNTP: string, setCNTP:(v: string) => void, setTodayCNTP:(v: string) => void) => {
	const intl = useIntl()
	const [value, setValue] = React.useState(0)
	const [animei, setAnimei]= useState<'left'|'right'>('left')
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const old = value
        setValue(newValue)
        if (newValue > old) {
            return setAnimei('right') 
        }
        setAnimei('left')
    }

	return (
		<Grid container alignItems="center" direction="column" sx={{ textAlign: 'center', width: '100%'}}>
			<Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
				<Typography variant="h6" sx={{ fontWeight: '700', textAlign:'center', color: lightGreen[400]}}>
					{intl.formatMessage({id: 'platform.miner.community.title'})}
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} 
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile>
                        <Tab label={intl.formatMessage({id: 'platform.miner.community.liveness.title'})} {...a11yProps(0)} />
                        <Tab label={intl.formatMessage({id: 'platform.miner.register.referrals'})} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Slide direction={animei} in={value===0} mountOnEnter unmountOnExit>
						<Stack spacing={1} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'1rem 0 0 0'}}>
						{Community_liveness(CNTP, setCNTP, setTodayCNTP)}
						</Stack>
                    </Slide>
                </CustomTabPanel>
				<CustomTabPanel value={value} index={1}>
                    <Slide direction={animei} in={value===1} mountOnEnter unmountOnExit>
						<Stack spacing={1} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'1rem 0 0 0'}}>
							<Referrals_Miner />
						</Stack>
                    </Slide>
                </CustomTabPanel>
            </Grid>
		</Grid>
	)
	
}

const NodeProvider = () => {
    const [value, setValue] = React.useState(0)
    
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)
    

    const [animei, setAnimei]= useState<'left'|'right'>('left')
    
    const {
    } = useAppState()
    
	const intl = useIntl()

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const old = value
        setValue(newValue)
        if (newValue > old) {
            return setAnimei('right') 
        }
        setAnimei('left')
    }

    return (
        <Grid container columns={{ xs: 4, sm: 8, md: 12}} sx={{ textAlign: 'center', width: '100%', padding: '0 0 3rem 0'}}>
            
            <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                <Typography variant="h6" sx={{ fontWeight: '700', textAlign:'center', color: lightGreen[400]}}>
                    {intl.formatMessage({id: 'platform.miner.register.title'})}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '3rem' }}>
                    <Tabs value={value} onChange={handleChange} 
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile>
						<Tab label={intl.formatMessage({id: 'platform.joinUS.miner.cloudTitle'})} {...a11yProps(0)} />
                        <Tab label={intl.formatMessage({id: 'platform.joinUS.miner.Bandwidth'})} {...a11yProps(1)} />
                        <Tab label={intl.formatMessage({id: 'platform.joinUS.miner.SaaS'})} {...a11yProps(2)} />
                        <Tab label={intl.formatMessage({id: 'platform.joinUS.miner.storage'})} {...a11yProps(3)} />
                    </Tabs>
                </Box>
				<CustomTabPanel value={value} index={0}>
                    <Slide direction={animei} in={value===0} mountOnEnter unmountOnExit>
                        {CloudNode(check1,setcheck1)}
                    </Slide>
                    
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Slide direction={animei} in={value===1} mountOnEnter unmountOnExit>
                        {Bandwidth(check1,setcheck1)}
                    </Slide>
                    
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <Slide direction={animei} in={value===2} mountOnEnter unmountOnExit>
                        {SaaS(check2, setcheck2)}
                    </Slide>
                    
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    <Slide direction={animei} in={value===3} mountOnEnter unmountOnExit>
                        {Storage(check3, setcheck3)}
                    </Slide>
                    
                </CustomTabPanel>
                
            </Grid>
        </Grid>
    )
}

const BoostTabPanel = () => {
	const intl = useIntl()
	const [value, setValue] = React.useState(0)
	const [animei, setAnimei]= useState<'left'|'right'>('left')
    const [boost, setBoost]= useState(false)
	const [CONET_balance, setCONET_balance] = useState(0)
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const old = value
        setValue(newValue)
        if (newValue > old) {
            return setAnimei('right') 
        }
        setAnimei('left')
    }
	return (
		<Grid container alignItems="center" direction="column" sx={{ textAlign: 'center', width: '100%', padding: '0 0 5rem 0'}}>
			<Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
				<Typography variant="h6" sx={{ fontWeight: '700', textAlign:'center',color: lightGreen[400]}}>
					{intl.formatMessage({id: 'platform.miner.register.boost'})}
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                    <Tabs value={value} onChange={handleChange} 
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile>
                        <Tab label={intl.formatMessage({id: 'platform.miner.register.boost'})} {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
					<Slide direction={animei} in={value===0} mountOnEnter unmountOnExit>
						{Boost(CONET_balance, setBoost)}
					</Slide>
                </CustomTabPanel>
            </Grid>
		</Grid>
	)
	
}

const DashBoardpanel = (cntp: string, todayCNTP: string) => {
	const [showMetaMask, setShowMetaMask] = useState(false)
	useEffect(() => {
        
        const fetchData = async () => {
			if (!active) {
				return
			}
			if (typeof 
				//@ts-ignore
				window.ethereum
			!== 'undefined') {  
				setShowMetaMask(true)
			}
        }
		let active = true
        fetchData()
        return () => { active = false }

    }, [])


	const intl = useIntl()
	const addMateMask = async() => {
		try {
			//	@ts-ignore
			const result = await window.ethereum
			.request({
				method: "wallet_addEthereumChain",
				params: [{
					chainId: "0x36CA6",
					rpcUrls: ["https://rpc1.conet.network/"],
					chainName: "CONET Sebolia",
					nativeCurrency: {
						name: "CONET",
						symbol: "CONET",
						decimals: 18
					},
					blockExplorerUrls: ["https://scan.conet.network/"]
				}]
			})
			//	@ts-ignore
			const wasAdded = await ethereum.request({
					method: 'wallet_watchAsset',
					params: {
					type: 'ERC20', // Initially only supports ERC20, but eventually more!
					options: {
						address: cntp_address, // The address that the token is at.
						symbol: 'CNTP', // A ticker symbol or shorthand, up to 5 chars.
						decimals: 18, // The number of decimals in the token
						image: '', // A string url of the token logo
					},
				}
			})
			console.log (`window.ethereum.request success! result =`, result)
		} catch (ex) {
			console.log (`window.ethereum.request error`, ex)
		}
	}

	return (
		<>
			<Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack direction="column" alignItems="center">
						<Typography variant="body1" sx={{ }}>
							{intl.formatMessage({id: 'platform.miner.register.totalRewards'})}
						</Typography>
						<Stack spacing={0} direction="row" alignItems="center">
							<Typography variant="body1" sx={{ fontWeight: '900'}}>
								{cntp} CNTP
							</Typography>

							{
								showMetaMask &&
								<IconButton color="default"

									onClick={ addMateMask }
								>
									<SvgIcon sx={{ width: '1rem', height: '1rem'}}>
										<path d="M21.004 2.61 13.2 8.432l1.443-3.434 6.36-2.386Z" fill="#E2761B"></path><path d="m2.988 2.61 7.741 5.876-1.372-3.489-6.369-2.386Zm15.208 13.492L16.117 19.3l4.447 1.229 1.279-4.356-3.647-.07Zm-16.032.071 1.271 4.356L7.882 19.3l-2.078-3.198-3.64.071Z" fill="#E4761B"></path><path d="m7.631 10.7-1.24 1.882 4.417.197-.157-4.765L7.63 10.7Zm8.73 0L13.3 7.959l-.101 4.82 4.408-.197-1.248-1.883Zm-8.479 8.6 2.651-1.3-2.29-1.795-.36 3.095ZM13.46 18l2.658 1.3-.368-3.095L13.459 18Z" fill="#E4761B"></path><path d="M16.117 19.3 13.458 18l.212 1.741-.023.733 2.47-1.174Zm-8.235 0 2.47 1.174-.015-.733.196-1.74-2.65 1.299Z" fill="#D7C1B3"></path><path d="M10.392 15.055 8.18 14.4l1.561-.717.65 1.37Zm3.208 0 .65-1.37 1.57.716-2.22.654Z" fill="#233447"></path><path d="m7.882 19.3.377-3.198-2.455.071L7.882 19.3Zm7.859-3.198.376 3.198 2.079-3.127-2.455-.07Zm1.867-3.52-4.408.197.408 2.276.65-1.37 1.57.716 1.78-1.82Zm-9.428 1.82 1.569-.718.643 1.37.416-2.275-4.416-.197 1.788 1.82Z" fill="#CD6116"></path><path d="m6.392 12.582 1.85 3.623L8.18 14.4l-1.788-1.82Zm9.435 1.82-.078 1.803 1.859-3.623-1.78 1.82Zm-5.02-1.623-.415 2.276.518 2.686.117-3.537-.22-1.425Zm2.393 0-.212 1.417.094 3.545.526-2.686-.408-2.276Z" fill="#E4751F"></path><path d="m13.608 15.055-.526 2.686.377.26 2.29-1.796.078-1.804-2.22.654ZM8.18 14.4l.063 1.804L10.533 18l.377-.26-.518-2.685L8.18 14.4Z" fill="#F6851B"></path><path d="m13.647 20.474.023-.733-.196-.173h-2.957l-.18.173.016.733-2.47-1.174.862.709 1.749 1.22h3.004l1.757-1.22.862-.709-2.47 1.174Z" fill="#C0AD9E"></path><path d="m13.459 18-.377-.26H10.91l-.377.26-.196 1.741.18-.173h2.957l.196.173-.211-1.74Z" fill="#161616"></path><path d="M21.333 8.81 22 5.595l-.996-2.985-7.545 5.623L16.36 10.7l4.102 1.206.91-1.064-.392-.283.628-.575-.487-.378.628-.48-.416-.316ZM2 5.595l.666 3.213-.423.315.627.48-.478.379.627.575-.392.283.902 1.064 4.102-1.206 2.902-2.465L2.988 2.61 2 5.596Z" fill="#763D16"></path><path d="M20.462 11.904 16.361 10.7l1.247 1.883-1.86 3.623 2.448-.032h3.647l-1.38-4.269ZM7.632 10.7l-4.103 1.205-1.365 4.27h3.64l2.439.03-1.851-3.622 1.24-1.883Zm5.568 2.08.259-4.545 1.192-3.237H9.357l1.176 3.237.275 4.545.094 1.433.008 3.529h2.172l.016-3.529.102-1.433Z" fill="#F6851B"></path>
									</SvgIcon>		
								</IconButton>
							}
						</Stack>
					
					</Stack>
				</ItemStyle>
			</Grid>
			
			<Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack spacing={0}>
						<Typography variant="body1" sx={{}}>
							{intl.formatMessage({id: 'platform.miner.register.previouslyClaimed'})}
						</Typography>
						<Typography variant="body1" sx={{ fontWeight: '900'}}>
							{todayCNTP} CNTP
						</Typography>
					</Stack>
				</ItemStyle>
			</Grid>
			<Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack spacing={0}>
						<Typography variant="body1" sx={{ }}>
							{intl.formatMessage({id: 'platform.miner.register.referrals'})}
						</Typography>
						<Typography variant="body1" sx={{ fontWeight: '900'}}>
							{0} CNTP
						</Typography>
					</Stack>
				</ItemStyle>
			</Grid>
		</>
	)
}  

const Miner = () => {
    const {
        locale,
    } = useAppState()

    const [minerReward, setMinerReward] = useState(0)
    const [minting, setMinting] = useState(false)
    const intl = useIntl()
    const [CONET_balance, setCONET_balance] = useState(0)
	const [showNodeMiner, setShowNodeMiner] = useState(false)
	const [showBosste, setShowBosste] = useState(false)
    const [walletAddress, setWalletAddress] = useState('')
    const [totalRewards, setTotalRewards]= useState('0')
    const [previouslyClaimed, setPreviouslyClaimed]= useState('0')
    const [referrals, setReferrals]= useState('0')
	const [cntp, setCntp] = useState('0')
	const [todayCntp, setTodayCntp] = useState('0')
	useEffect(() => {
		const fetchData = () => {
			if (!active) {
				return
			}
			const profile = currentProfile()
			setCntp(profile.tokens.cntp.balance)
		}
		
		let active = true
        fetchData()
        return () => { active = false }
	},[])

	return (
        
        
            <Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '0rem 0 10rem 0'}}>
				<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '0 0 2rem 0'}}>
					<Typography variant="h4" sx={{ fontWeight: '900'}}>
						{intl.formatMessage({id: 'platform.miner.header.title'})}
					</Typography>
					<Link target="_blank" href={(locale==='zh-CN' || locale ==='zh-TW') ? 
						'https://doc.conet.network/he-xin-ji-shu/qu-zhong-xin-hua-zhuan-yong-wang-luo-dcpn/qu-zhong-xin-hua-wu-li-ji-chu-she-shi-wang-luo': 
						'https://doceng.conet.network/core-technology/decentralized-private-network-dcpn/decentralized-physical-infrastructure-network'}>
						<Typography variant="body1" sx={{ color: '#2e7d32'}}>
							{intl.formatMessage({id: 'platform.miner.header.title.detial'})}
						</Typography>
					</Link>
					<Link target="_blank" href={'https://scan.conet.network/token/0x0f43685B2cB08b9FB8Ca1D981fF078C22Fec84c5?tab=contract'}>
						<Typography variant="body2" sx={{ color: '#2e7d32'}}>
							{intl.formatMessage({id: 'platform.miner.header.title.smartContract'})}
						</Typography>
					</Link>
					
				</Grid>
				{DashBoardpanel(cntp, todayCntp)}
				<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', cursor: 'pointer', marginTop: '2rem'}}>
					<StyleDiv onClick={() => setShowNodeMiner(true)}>
						<AD />
					</StyleDiv>
					
				</Grid>
				<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '5rem 0 3rem 0'}}>
					{Community(todayCntp, setCntp, setTodayCntp)}
				</Grid>
				
				
				{
					!showNodeMiner &&
					<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '5rem 0 3rem 0'}}>
						<Button variant="elevated" onClick={
								() => setShowNodeMiner(true)
							} 
							sx={{fontFamily: 'inherit'}}>
							{intl.formatMessage({id: 'platform.miner.register.title'})}
						</Button>
					</Grid>
				}
				
                
				{
					showNodeMiner && 
						<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%'}}>
							
							<NodeProvider/>
						</Grid>
				}

				{
					!showBosste && 
					<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '5rem 0 3rem 0'}}>
						<Button variant="elevated" onClick={
								() => setShowBosste(true)
							} 
							sx={{fontFamily: 'inherit'}}>
							{intl.formatMessage({id: 'platform.miner.register.boost'})}
						</Button>
					</Grid>
				}
				
                
				{
					showBosste && 
						<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '5rem 0 5rem 0'}}>
							<BoostTabPanel />
						</Grid>
				}

            </Grid>

    )
}

export default Miner