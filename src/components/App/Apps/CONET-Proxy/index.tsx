
import Grid from '@mui/material/Grid'
import {Divider, colors, Container, Paper, } from '@mui/material'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import styled from 'styled-components'
import Link from '@mui/material/Link'
import useAppState from "../../../../store/appState/useAppState"
import React, {HTMLAttributes, useState, useEffect, useMemo} from "react"
import { getCONETBalance, regionType, faucet as faucetAPI, setRegion as setRegionAPI, getRegiestNodes as getRegiestNodesAPI, startProxy, testLocalServer, getIPaddress} from '../../../../API/index'
import {logger} from '../../logger'
import CircularProgress from '@mui/material/CircularProgress'
import type {nodes_info} from './SaasNodes'
import { useIntl } from "react-intl"
import Stack from '@mui/material/Stack'
import {Tabs, Tab, Button} from '@mui/material-next'
import AccelDial from './speedMater'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChrome, faFirefoxBrowser} from '@fortawesome/free-brands-svg-icons'
import chromeIng from './assets/images/chrome-setup.png'
import fireFox from './assets/images/screen1.png'
import iOSSetup from './assets/images/iOS.png'
import androidSetup from './assets/images/android-setup.png'
import AppleIcon from '@mui/icons-material/Apple'
import AndroidIcon from '@mui/icons-material/Android'
import macOSSetup from './assets/images/MacOS.png'
import winSetupImg from './assets/images/winSetup.png'
import WindowSharpIcon from '@mui/icons-material/WindowSharp'
const regions: regionType = {
    us: true,
    uk: false,
    ge: false,
    sp: false,
    fr: false
}


const ChromeImg = styled.img`
	width: 50%;
`

const IOSImg = styled.img`
	width: 100%;
`

const OneLineText = styled.span`
`
interface TabPanelProps {
    children?: React.ReactNode
    index: number
    value: number
}

const CustomTabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props
  
    return (
        <Grid item xs={12}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && 
                children
            }
        </Grid>
    )
}

const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
}

const ChromeSetup = () => {
	const intl = useIntl()
	return (
		<>
			<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}}>
				{intl.formatMessage({id: 'platform.proxy.chrome.detail'})}
			</Typography>
			<Button size="large" variant="outlined" sx={{fontFamily: 'inherit'}}
			onClick={() => window.open(`https://chromewebstore.google.com/detail/conet-platform/pkhkeliikkihkaolfcogfcbjmbehockd`)}
			>
				<Typography variant="h6" sx={{ fontWeight: '500', textAlign:'center'}}>
					{intl.formatMessage({id: 'platform.proxy.featureArea8Item.chrome.extensions'})}
				</Typography>
			</Button>
			<ChromeImg src={chromeIng}/>
		</>
	)
}

const FireFoxSetup = () => {
	const intl = useIntl()
	return (
		<Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'2rem 0 0 0'}}>
			<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}}>
				{intl.formatMessage({id: 'platform.proxy.firefox.detail'})}
			</Typography>
			<ChromeImg src={fireFox}/>
		</Stack>
	)
}

const AndroidSetup = () => {

	const [myLocalIpaddress, setMyLocalIpaddress] = useState('')
	const intl = useIntl()
    useEffect(() => {
        
        const fetchData = async () => {
            if (!active) { return }
			const [, ip] = await getIPaddress()
			const _ip = ip[0].ip
			setMyLocalIpaddress(_ip)
        }
      
        let active = true
        fetchData()
        return () => { active = false }
    }, [])
	return (
		<Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'2rem 0 0 0'}}>
			<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
				
				{intl.formatMessage({id: 'platform.proxy.setup.andOther'})}
			
			</Typography>
			<IOSImg src={androidSetup}/>
			<OneLineText>
				<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
					PAC web address: 
				</Typography>
				<Typography variant="body1" sx={{ textAlign:'center'}} component="span">
					http://{myLocalIpaddress}:3003/pac
				</Typography>
			</OneLineText>
		</Stack>
	)
}

const MacOSSetup = () => {

	const [myLocalIpaddress, setMyLocalIpaddress] = useState('')
	const intl = useIntl()
    useEffect(() => {
        
        const fetchData = async () => {
            if (!active) { return }
			const [, ip] = await getIPaddress()
			const _ip = ip[0].ip
			setMyLocalIpaddress(_ip)
        }
      
        let active = true
        fetchData()
        return () => { active = false }
    }, [])
	return (
		<Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'2rem 0 0 0'}}>
			<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
				
				{intl.formatMessage({id: 'platform.proxy.setup.macosOther'})}
			
			</Typography>
			<IOSImg src={macOSSetup}/>
			
				<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
					Automatic proxy configuration URL: 
				</Typography>
				<Typography variant="body1" sx={{ textAlign:'center'}} component="span">
					http://{myLocalIpaddress}:3003/pac
				</Typography>
			
		</Stack>
	)
}

const WinSetup = () => {

	const [myLocalIpaddress, setMyLocalIpaddress] = useState('')
	const intl = useIntl()
    useEffect(() => {
        
        const fetchData = async () => {
            if (!active) { return }
			const [, ip] = await getIPaddress()
			const _ip = ip[0].ip
			setMyLocalIpaddress(_ip)
        }
      
        let active = true
        fetchData()
        return () => { active = false }
    }, [])
	return (
		<Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'2rem 0 0 0'}}>
			<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
				
				{intl.formatMessage({id: 'platform.proxy.setup.winOther'})}
			
			</Typography>
			<IOSImg src={winSetupImg}/>
			
				<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
					Script address: 
				</Typography>
				<Typography variant="body1" sx={{ textAlign:'center'}} component="span">
					http://{myLocalIpaddress}:3003/pac
				</Typography>
			
		</Stack>
	)
}

const IOS = () => {
	const [myLocalIpaddress, setMyLocalIpaddress] = useState('')
	const intl = useIntl()
    useEffect(() => {
        
        const fetchData = async () => {
            if (!active) { return }
			const [, ip] = await getIPaddress()
			const _ip = ip[0].ip
			setMyLocalIpaddress(_ip)
        }
      
        let active = true
        fetchData()
        return () => { active = false }
    }, [])

	return (
		<Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'2rem 0 0 0'}}>
			<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
				
					{intl.formatMessage({id: 'platform.proxy.setup.iOSOther'})}
				
			</Typography>
			<IOSImg src={iOSSetup}/>
			<OneLineText>
				<Typography variant="body1" sx={{ fontWeight: '900', textAlign:'center', color:colors.lightGreen[400], paddingRight: '0.5rem'}} component="span">
					URL: 
				</Typography>
				<Typography variant="body1" sx={{ textAlign:'center'}} component="span">
					http://{myLocalIpaddress}:3003/pac
				</Typography>
			</OneLineText>
				
			
			
		</Stack>
	)
}

const ItemStyle2 = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '1rem',
    color: colors.grey[500]
}))

const FeatureArea8ItemNew = () => {
    const {
        isProxyStart,
        setIsProxyStart
    } = useAppState()

    const [CONET_Balance, setCONET_Balance] = useState('0')
    const [nodes, setNodes] = useState<nodes_info[]>([])
    const [value, setValue] = React.useState(0)
	const [value1, setValue1] = React.useState(0)
    const [animei, setAnimei]= useState<'left'|'right'>('left')
	const [animei1, setAnimei1]= useState<'left'|'right'>('left')
    const [faucetProcess, setFaucetProcess] =  useState(false)
    const [faucetError, setFaucetError] =  useState(false)
    const [regionProgress,setRegionProgress] = useState(false)
    const [showConfirm, setShowConfirm] = useState(true)
    const [startProxyError, setStartProxyError] =  useState(false)


    const showStartProxy = () => (parseFloat(CONET_Balance) > 0 || nodes.length > 0)&& !isProxyStart

    useEffect(() => {
        
        const fetchData = async () => {
            if (!active) { return }
            const [status, data] = await getCONETBalance()
            if (status !== 'SUCCESS' || !data) {
                return logger('LaunchPage Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
            }

            logger (`getCONETBalance SUCCESS`, data)
            
            setCONET_Balance(data[1].toString())
            const _nodes: nodes_info[] = data[2]
            if (_nodes.length > 0) {
                setNodes(_nodes)
                _startProxy()
            }
        }
      
        let active = true
        fetchData()
        return () => { active = false }
    }, [])



	const _startProxy = async () => {
		if (!isProxyStart) {
			const [status] = await startProxy()
            setRegionProgress(false)
            if (status!=='SUCCESS') {
                return setStartProxyError (true)
            }
			
            return setIsProxyStart (true)
		}
		
	}


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        const old = value
        setValue(newValue)
        if (newValue > old) {
            return setAnimei('right') 
        }
        setAnimei('left')
    }

	const handleChange1 = (event: React.SyntheticEvent, newValue: number) => {
        const old = value1
        setValue1(newValue)
        if (newValue > old) {
            return setAnimei1('right') 
        }
        setAnimei1('left')
    }

    const regionConfirm = async () => {
        setRegionProgress(true)
        if (nodes.length > 0) {
            return _startProxy()
        }
        const [status, data] = await setRegionAPI(regions)
        setRegionProgress(false)
        if (status === 'SUCCESS') {
            const [status1, data1] = await getRegiestNodesAPI()
            if (status1 !== 'SUCCESS' || !data) {
                return logger('LaunchPage Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
            }
            const _nodes: nodes_info[] = data1[0]
            _nodes.forEach( n => {
                n.balance = getBalance(n.receipt[0].value)
            })
            setNodes(_nodes)
            return _startProxy()
        }
    }

    const faucetClick = async () => {
        
        setFaucetProcess(true)
        setFaucetError(false)
        const [status, data] = await faucetAPI()
        setFaucetProcess(false)
        if (status !== 'SUCCESS' || !data) {
            setFaucetError(true)
            setTimeout(() => {
                setFaucetError(false)
            }, 5000)
            return logger('LaunchPage Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
        }
        
        setCONET_Balance(data[1])
        
    }

    const intl = useIntl()


    const GetFaucet = () => {
        return (
            <Grid container sx={{ textAlign: 'center', width: '100%'}} spacing={5}>

                <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>

                    <Stack direction="column" alignItems="center" spacing={2} sx={{}}>
                        <Typography variant="h5" sx={{ fontWeight: '700', textAlign:'center'}}>
                            {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1'})}
                        </Typography>
                        <Typography variant="h6" sx={{ textAlign:'center'}}>
                            {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1.CONETbalance'})}
                        </Typography>
                        <Typography variant="h5" sx={{ textAlign:'center', fontWeight: '600'}}>
                            {CONET_Balance}
                        </Typography>
                        {
                            faucetProcess && 
                                <Box sx={{ display: 'block', textAlign: 'center', width: '100%' }}>
                                    <CircularProgress color='success' disableShrink/>
                                </Box>
                        }
                        {
                            faucetError &&
                            <Typography variant="h6" sx={{ textAlign:'center', color: '#ba1a1a'}}>
                                {intl.formatMessage({id: 'platform.ProfileDropdown.faucet.error'})}
                            </Typography>
                        }
                        {
                            !faucetProcess && 
                                <Button size="large" variant="outlined" onClick={faucetClick} sx={{fontFamily: 'inherit', width: '10rem'}}>
                                    {intl.formatMessage({id: 'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet'})}
                                </Button>
                        }
                    </Stack>
                </Grid>
                <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                    <Divider sx={{ width: '50%', margin: 'auto'}}/>
                </Grid>
                <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
            <Stack direction="column" alignItems="center" spacing={2} sx={{}}>
                {
                     !isProxyStart && parseFloat(CONET_Balance) === 0 &&
                        <Typography variant="h5" sx={{ fontWeight: '700', textAlign:'center'}}>
                            {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step2.cant'})}
                        </Typography>
                }
                {
                    showStartProxy() &&
                        <>
                            <Typography variant="h5" sx={{ fontWeight: '700', textAlign:'center'}}>
                                {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step2'})}
                            </Typography>
                            {
                                regionProgress &&
                                    <Box sx={{ display: 'block', textAlign: 'center', width: '100%' }}>
                                        <CircularProgress color='success' disableShrink/>
                                    </Box>
                            }
                            {
                                !regionProgress &&
                                <Button size="large" variant="outlined" onClick={regionConfirm} sx={{fontFamily: 'inherit', width: '10rem'}}>
                                    {intl.formatMessage({id: 'platform.proxy.FeatureArea.start'})}
                                </Button>
                            }
                        </>
                }
                
                
                </Stack>
                </Grid>
            </Grid>
        )
    }

    return (
        <Grid container direction="column" sx={{ textAlign: 'center', width: '100%'}}>
			{
				isProxyStart &&
				<Grid item sx={{ textAlign: 'center', width: '100%'}}>
					
					<Box sx={{ borderBottom: 1, borderColor: 'divider', width: '100%'}}>
						<Tabs value={value1} onChange={handleChange1} 
							variant="scrollable"
							scrollButtons="auto"
							allowScrollButtonsMobile>
								<Tab label="Chrome" iconPosition="end" icon={<FontAwesomeIcon icon={faChrome} color="#E15241"/>}/>
								<Tab label="FireFox" iconPosition="end" icon={<FontAwesomeIcon icon={faFirefoxBrowser} color={colors.orange[900]} />}/>
								<Tab label={<AppleIcon />} iconPosition="end" icon={intl.formatMessage({id: 'platform.proxy.setup.iOS'})}/>
								<Tab label={<AndroidIcon sx={{color:'#67AD5B'}}/>} iconPosition="end" icon={intl.formatMessage({id: 'platform.proxy.setup.android'})}/>
								<Tab label={<AppleIcon />} iconPosition="end" icon={intl.formatMessage({id: 'platform.proxy.setup.macos'})}/>
								<Tab label={<WindowSharpIcon sx={{color: '#3375D4'}} />} iconPosition="end" icon={intl.formatMessage({id: 'platform.proxy.setup.win'})}/>
						</Tabs>
					</Box>
						
						
					<CustomTabPanel value={value1} index={0}>
						<Slide direction={animei1} in={value1===0} mountOnEnter unmountOnExit>
							<Stack spacing={2} justifyContent="center" alignItems="center" sx={{width: '100%', padding:'2rem 0 0 0'}}>
								<ChromeSetup />
							</Stack>
						</Slide>
				
					</CustomTabPanel>
						
					<CustomTabPanel value={value1} index={1}>
						<Slide direction={animei1} in={value1===1} mountOnEnter unmountOnExit>
							<Container>
								<FireFoxSetup />
							</Container>
						</Slide>
					</CustomTabPanel>
					<CustomTabPanel value={value1} index={2}>
						<Slide direction={animei1} in={value1===2} mountOnEnter unmountOnExit>
							<Container >
								<IOS />
							</Container>
						</Slide>
					</CustomTabPanel>
					<CustomTabPanel value={value1} index={3}>
						<Slide direction={animei1} in={value1===3} mountOnEnter unmountOnExit>
							<Container sx={{width: '100%'}}>
								<AndroidSetup />
							</Container>
						</Slide>
					</CustomTabPanel>
					<CustomTabPanel value={value1} index={4}>
						<Slide direction={animei1} in={value1===4} mountOnEnter unmountOnExit>
							<Container sx={{width: '100%'}}>
								<MacOSSetup />
							</Container>
						</Slide>
					</CustomTabPanel>
					<CustomTabPanel value={value1} index={5}>
						<Slide direction={animei1} in={value1===5} mountOnEnter unmountOnExit>
							<Container  sx={{width: '100%'}}>
								<WinSetup />
							</Container>
						</Slide>
					</CustomTabPanel>
				</Grid>
			}
			<Grid item  sx={{textAlign: 'center', width: '100%', alignItems:"center", padding: '2rem 0 2rem 0'}}>
                <Stack direction="row" justifyContent="center" spacing={1} sx={{width: '100%'}}>
                    {
                        isProxyStart &&
                        <AccelDial />
                        
                    }
                    {
                        isProxyStart &&
                        <AccelDial />
                        
                    }
                </Stack>
            </Grid>
            <Grid item  sx={{textAlign: 'center', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '3rem' }}>
                    <Tabs value={value} onChange={handleChange} 
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile>
                        <Tab label={intl.formatMessage({id: 'platform.proxy.step1.title'})} {...a11yProps(0)} />
                        <Tab label={intl.formatMessage({id: 'platform.proxy.subscription.user'})} {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Slide direction={animei} in={value===0} mountOnEnter unmountOnExit>
                        {GetFaucet()}
                    </Slide>
                    
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Slide direction={animei} in={value===1} mountOnEnter unmountOnExit>
                        <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                            {intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                        </Typography>
                    </Slide>
                </CustomTabPanel>
                
            </Grid>
        </Grid>
    )
}

const getBalance = (conetTokens: number) => {
    if (conetTokens < 1) {
        return conetTokens * 1000 + ' KBeys'
    }
    return conetTokens + ' MBeys'
}


const LaunchPage = () => {

    const {
        locale,


		setlocalDaemon
    } = useAppState()

    const intl = useIntl()

    useEffect(() => {
		

        const fetchData = async() => {
            
            const test = await testLocalServer ()

            if (test !== true) {
                setlocalDaemon(false)
            }

        }

		let active = true
        fetchData()
        return () => { active = false }


    }, [])
    // 
    // const conetToken = currentProfile().tokens.conet
    return (
                
        <Grid container spacing={2}  direction="column"  sx={{padding: '1rem 0 10rem 0'}}>
            <Grid item sx={{}} >
                <Slide direction="right" in={true} mountOnEnter>
                    <Typography variant="h4" sx={{fontWeight: '600'}}>
                        { intl.formatMessage({id:'platform.proxy'})}
                    </Typography>
                </Slide>
            </Grid>
            <Grid item sx={{}} >
                <Slide direction="right" in={true} mountOnEnter>
                    <Typography variant="h6" sx={{}}>
                        { intl.formatMessage({id:'platform.proxy-1'})}
                    </Typography>
                </Slide>
            </Grid>
            <Grid item sx={{paddingBottom: '2rem'}}>
			<Stack direction="row" spacing={2}>
				<Link target="_blank" href={(locale==='zh-CN' || locale ==='zh-TW') ? 'https://doc.conet.network/web2-qiao-jie': 'https://doceng.conet.network/welcome-to-conet/web2-bridging'}>
                    <Typography variant="subtitle1" sx={{ color: '#2e7d32'}}>
                        { intl.formatMessage({id:'platform.proxy.FeatureArea5.moreDetail'})}
                    </Typography>
                </Link>

				<Link target="_blank" href={'https://github.com/CoNET-project/seguro-platform/issues'}>

                    <Typography variant="subtitle1" sx={{ color: '#2e7d32'}}>
                        { intl.formatMessage({id:'platform.proxy.issueReport'})}
                    </Typography>
                </Link>
			</Stack>
                
            </Grid>
            
            <Grid item sx={{textAlign: 'center', width: '100%'}}>
                <FeatureArea8ItemNew/>
            </Grid>
            
        </Grid>

    )
}

export default LaunchPage