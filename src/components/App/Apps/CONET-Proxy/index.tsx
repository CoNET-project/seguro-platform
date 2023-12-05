import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import Grow from '@mui/material/Grow'
import Typography, {TypographyProps} from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Slide from '@mui/material/Slide'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import styledCom from "styled-components"
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'
import useAppState from "../../../../store/appState/useAppState"
import React, {HTMLAttributes, useState, useEffect} from "react"
import featureIcon1 from './assets/images/feature5Icon1.png'
import featureIcon2 from './assets/images/feature5Icon2.png'
import featureIcon3 from './assets/images/feature5Icon3.png'
import screen1 from './assets/images/screen1.png'
import {getWorkerService} from '../../../../services/workerService/workerService'
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import TippyDropdownTab from './TippyDropdown'
import { getCONETBalance, regionType, faucet as faucetAPI, setRegion as setRegionAPI, getRegiestNodes as getRegiestNodesAPI} from '../../../../API/index'
import {logger} from '../../logger'
import CircularProgress from '@mui/material/CircularProgress'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import SaaSNodes from './SaasNodes'
import type {nodes_info} from './SaasNodes'
import { useIntl } from "react-intl"
import chromeImg from './assets/images/chrome.gif'
import Stack from '@mui/material/Stack'
import miner2 from '../../../../assets/miner/FancyNyan.webp'

//import { ColorMode, TerminalOutput } from 'react-terminal-ui'

const themeTopArea1 = createTheme ({
    typography: {
        h3: {
            'fontWeight': '600'
        },
        h4: {
            'fontWeight': '600'
        },
        h6: {
            color: 'rgba(0,0,0,0.6)'
        },
        fontFamily: [
            'Inter',
            '"Inter Placeholder"',
            'sans-serif',
        ].join(','),
    },
})

const ItemTopArea1 = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    background: 'linear-gradient(180deg,#080213 0%,hsl(253,79%,15%))',
    paddingBottom: '7rem'
}))

const ItemTopArea2 = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    
}))

const ItemContainer = styled(Box)(({ theme }) => ({
    paddingBottom: '10rem',
    overflow: "auto",
    maxHeight: '100%'
    
}))

const BreadcrumbsArea = styledCom.div`
    padding: 2rem;

`

const StyleIconSize = styledCom.img`
    width:150px;
`

const StyleIconSize1 = styledCom.img`
width:400px;

`

const StyleIconItem = styledCom.div`
    display: flex;
    justify-content: center;
`

const StyledItemArea = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    borderRadius: 0,
    width: '100%'
}))

const StyledItemArea1 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '100%',
    padding: '1rem'
}))

const FeatureArea5Item = () => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon1}/>
                </StyleIconItem>

                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    { intl.formatMessage({id: 'platform.proxy.FeatureArea5.1'})}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    { intl.formatMessage({id: 'platform.proxy.FeatureArea5.2'})}
                </Typography>
            </StyledItemArea>

        </Grid>
    )
}

const FeatureArea6Item = () => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon2}/>
                </StyleIconItem>

                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    { intl.formatMessage({id: 'platform.proxy.FeatureArea6.1'})}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    { intl.formatMessage({id: 'platform.proxy.FeatureArea6.2'})}
                </Typography>
            </StyledItemArea>
        </Grid>
    )
}


const FeatureArea7Item = () => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon3}/>
                </StyleIconItem>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase'}}>
                { intl.formatMessage({id: 'platform.proxy.FeatureArea7.1'})}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                { intl.formatMessage({id: 'platform.proxy.FeatureArea7.2'})}
                </Typography>
            </StyledItemArea>

        </Grid>
    )
}

const showMoreDetail = (locale: string) => {
   
    switch(locale) {
        default:
        case 'ja-JP':
        case 'en-US': {
            return window.open(`https://doc.conet.network/conet-white-paper/introduction/wallet-address-routing-network-infrastructure/conet-proxy-service`)
        }
        case 'zh-TW':
        case'zh-CN': {
            return window.open(`https://doc.conet.network/conet-bai-pi-shu/jie-shao/qian-bao-di-zhi-lu-you-wang-lao-ji-chu-she-shi/conet-dai-li-fu-wu`)
        }
    }
}

const FeatureArea5 = (locale: string) => {
    const intl = useIntl()
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}  sx={{padding:'5rem 5rem 5rem 5rem'}}>
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{color:' #448aff'}} >
                                { intl.formatMessage({id:'platform.proxy.FeatureArea.title.1'})}

                            </Typography>
                        </Slide>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                { intl.formatMessage({id:'platform.proxy.FeatureArea.title.2'})}

                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                </Grid>
                
                < FeatureArea5Item />
                < FeatureArea6Item />
                < FeatureArea7Item />
                <Grid item xs={12} sx={{textAlign: 'center' }}>
                    <Button 
                        variant="outlined" size="large"
                        onClick={() => showMoreDetail(locale)}
                        sx={{backgroundColor:'white', textTransform: 'none', fontSize: '1.5rem' }}>
                        { intl.formatMessage({id: 'platform.proxy.FeatureArea5.moreDetail'})}
                    </Button>
                </Grid>
            </Grid>
        
        </ThemeProvider>
    )
}

//              Start Proxy

const featureArea8Item = (conetBalance: string, loading: boolean, faucet: () => void, wallet: string, 
    regionProgress: boolean, onchange: ((event: React.SyntheticEvent<Element, Event>, checked: boolean, 
    region: string) => void), regionConfirm: () => void, showConfirm: Boolean, 
    nodes: nodes_info[],
    showMiner: boolean, 
    setShowMiner: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
    const intl = useIntl()
    const [expanded, setExpanded] = React.useState<string | false>(false)
    const [showMinerStart, setShowMinerStart] = useState(false)
    const [minerSetup, setMinerSetup] =  useState(0)
    const [minerReward, setMinerReward] =  useState(0)
    const [minerConnecting, setMinerConnecting] =  useState(0)
    const [minerSaaSCalls, setMinerSaaSCalls] =  useState(0)
    const [minerProcess, setMinerProcess] =  useState(false)
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    }

    const faucetClick = () => {
        faucet()
    }

    const minerCheck = (checkedItem: boolean, item: string) => {
        switch(item) {
            case 'saas': {
                const itemNumber = minerSetup + (checkedItem? 1: -1)
                return setMinerSetup(itemNumber)
            }
            default :{
                const itemNumber = minerSetup + (checkedItem? 2: -2)
                return setMinerSetup(itemNumber)
            }
        }
    }

    const setStatus = () => {
        
        const connecting = Math.round(100 * Math.random())
        setMinerConnecting (connecting)
        const saasCalls = Math.round(1000 * Math.random())
        setMinerSaaSCalls (saasCalls)
        const randomTime =  Math.round(1000 * Math.random())
        setTimeout (() => {

            setStatus()
        }, randomTime)
    }

    const setMinerReword = () => {

        const reword = 0.1 *Math.random()
        setMinerReward (minerReward => minerReward + reword)
        const randomTime =  Math.round(5000 * Math.random())
        setTimeout (() => {

            setMinerReword()
        }, randomTime)
    }

    const minerStartup = () => {
        setMinerConnecting(0)
        setMinerSaaSCalls(0)
        setMinerReward(0)
        setShowMinerStart (true)
        setStatus()
        setMinerReword()

    }
    return (
        <>
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor: 'rgb(240,240,240)'}}
                >
                    
                    {intl.formatMessage({id: 'platform.proxy.step1.title'})}
                    
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                        <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '3rem', textAlign: 'center'}}> 
                        {
                            !showMiner && 
                            <StyledItemArea1>
                                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1'})}
                                </Typography>
                                <Typography variant="h6" sx={{  textAlign:'center', paddingTop: '0rem' }}>
                                    {intl.formatMessage({id: 'platform.profile.walletAddr'})} {wallet.substring(0,6)+'...'+ wallet.substring(wallet.length - 4)}
                                </Typography>
                                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1.CONETbalance'})}
                                </Typography>
                                <Typography variant="h5" sx={{ color: 'rgb(51,51,51)', textAlign:'center', padding: '1.9rem 0 2rem 0'}}>
                                    {conetBalance}
                                </Typography>
                                {
                                    loading && 
                                        <Box sx={{ display: 'block', textAlign: 'center', width: '100%' }}>
                                            <CircularProgress disableShrink/>
                                        </Box>
                                }
                                {
                                    !loading && 
                                        <Button size="large" variant="outlined" onClick={faucetClick} disabled = {regionProgress} >
                                            {intl.formatMessage({id: 'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet'})}
                                        </Button>
                                }
                                
                                <Typography variant="h6" sx={{ color: 'grey', textAlign:'center', padding:'2.2rem 0 1rem 0', fontSize: '15px', }}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1.transferQuote'})}
                                </Typography>
                            </StyledItemArea1>
                        }
                        {
                            showMiner && !showMinerStart &&
                            <StyledItemArea1>
                                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.minerSetup.title'})}
                                </Typography>
                                <ItemTopArea2 elevation={0}>
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label={intl.formatMessage({id: 'platform.proxy.featureArea8Item.minerSetup.saas'})} onChange={(e, checked) => minerCheck( checked, 'saas')}/>
                                        <FormControlLabel control={<Checkbox />} label={intl.formatMessage({id: 'platform.proxy.featureArea8Item.minerSetup.bandwidth'})} onChange={(e, checked) => minerCheck(checked, 'bandwidth')}/>
                                        {/* <FormControlLabel control={<Checkbox />} label="France" onChange={(e, checked) => onchange(e, checked, 'fr')}/> */}
                                    </FormGroup>
                                </ItemTopArea2>
                                
                                <Button size="large" variant="outlined" disabled={loading} onClick={minerStartup}>
                                    {intl.formatMessage({id: 'platform.settings.device.delete.confirmButton'})}
                                </Button>
                            </StyledItemArea1>
                        }

                        </Grid>
                       
                            
                        <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '3rem'}}>

                            <StyledItemArea1>
                            
                                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step2'})}
                                </Typography>
                                <Grid container spacing={2} sx={{ padding: '2rem 0 1rem 0'}}>
                                    <Grid item xs={6}>
                                        <ItemTopArea2 elevation={0}>
                                            <FormGroup>
                                                <FormControlLabel disabled={regionProgress} control={<Checkbox defaultChecked />} label="United States" onChange={(e, checked) => onchange(e, checked, 'us')}/>
                                                <FormControlLabel disabled={regionProgress} control={<Checkbox />} label="United Kingdom" onChange={(e, checked) => onchange(e, checked, 'uk')}/>
                                                <FormControlLabel disabled={regionProgress} control={<Checkbox />} label="Germany" onChange={(e, checked) => onchange(e, checked, 'ge')}/>
                                                <FormControlLabel disabled={regionProgress} control={<Checkbox />} label="Spain" onChange={(e, checked) => onchange(e, checked, 'sp')}/>
                                                {/* <FormControlLabel control={<Checkbox />} label="France" onChange={(e, checked) => onchange(e, checked, 'fr')}/> */}
                                            </FormGroup>
                                        </ItemTopArea2>
                                    </Grid>
                                    <Grid item xs={6} >
                                        <ItemTopArea2 elevation={0} sx={{padding: '3rem 0 0 0', bottom: '0'}}>
                                            {
                                                showConfirm && !regionProgress && 
                                                    <Button size="large" variant="outlined" disabled={loading} onClick={regionConfirm}>
                                                        {intl.formatMessage({id: 'platform.settings.device.delete.confirmButton'})}
                                                    </Button> }
                                            
                                            {
                                                regionProgress && 
                                                    <Box sx={{ display: 'block', textAlign: 'center', width: '100%' }}>
                                                        <CircularProgress disableShrink/>
                                                    </Box>
                                            }
                                            
                                        </ItemTopArea2>
                                    </Grid>
                                </Grid>
                                
                                {/* <Typography variant="h6" sx={{ color: 'grey', textAlign:'center', padding: '1.2rem 0 1rem 0', fontSize: '15px'}}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step2.random'})}
                                </Typography> */}
                            </StyledItemArea1>
        
                        </Grid>
                        
                    </Grid>
                        
                </AccordionDetails>
            </Accordion>
            {
                //  Firefox setup       ***************************************************
            }
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor: 'rgb(240,240,240)'}}
                >
                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.chrome'})}
                </AccordionSummary>
                <AccordionDetails>
                    <StyleIconItem>
                        <Stack>
                            <StyleIconSize1 src={chromeImg}/>
                            <Button
                                variant="outlined" size="large"
                                onClick={() =>window.open(`https://chromewebstore.google.com/detail/conet-platform/pkhkeliikkihkaolfcogfcbjmbehockd`)}
                                sx={{backgroundColor:'white', textTransform: 'none', fontSize: '1.5rem' }}>
                                { intl.formatMessage({id: 'platform.proxy.featureArea8Item.chrome.extensions'})}
                            </Button>
                        </Stack>
                        
                    </StyleIconItem>
                </AccordionDetails>
            </Accordion>           
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor: 'rgb(240,240,240)'}}
                >
                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step3'})}
                </AccordionSummary>
                <AccordionDetails>
                    <StyleIconItem>
                        <StyleIconSize1 src={screen1}/>
                    </StyleIconItem>
                </AccordionDetails>
            </Accordion>
        </>
    )
}

const featureArea6 = (conetBalance: string, loading: boolean, 
    faucet: ()=> void, 
    onChange: (event: React.SyntheticEvent<Element, Event>, 
    checked: boolean, region: string) => void, 
    regionConfirm: () => void, 
    regionProgress: boolean, wallet: string,
    nodes: nodes_info[],
    showConfirm: boolean,
    proxyLogs: any[],
    showMiner: boolean, 
    setShowMiner: React.Dispatch<React.SetStateAction<boolean>>

    ) => {
    const intl = useIntl()
    return (

            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '1rem 0 10rem 0'}}>
                <Grid item xs={12} sx={{paddingBottom: '2rem'}} >
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{color:' #448aff'}}>
                                { intl.formatMessage({id:'platform.proxy.FeatureArea.start'})}
                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                </Grid>

                <Grid item xs={12} sx={{paddingBottom: '2rem'}}>
                    { SaaSNodes(nodes, proxyLogs)}
                </Grid>
                
                
                <Grid item xs={12} sx={{paddingBottom: '5rem'}}>
                    {featureArea8Item(conetBalance, loading, faucet, wallet, regionProgress, onChange, regionConfirm, showConfirm, nodes, showMiner, setShowMiner)}
                </Grid>
                
                
            </Grid>
    )
}

const regions: regionType = {
    us: true,
    uk: false,
    ge: false,
    sp: false,
    fr: false
}

type kk = 0

const getBalance = (conetTokens: number) => {
    if (conetTokens < 1) {
        return conetTokens * 1000 + ' KBeys'
    }
    return conetTokens + ' MBeys'
}

const fetchProxyData = async (node: nodes_info, setProxyNodeLog: React.Dispatch<React.SetStateAction<JSX.Element[]>>) => {
    const url = `http://localhost:3001/getProxyusage`

    const xhttp = new XMLHttpRequest()
    let last_response_len = 0

    xhttp.onprogress = () => {
        const responseText = xhttp.response.substr(last_response_len)
        last_response_len = xhttp.response.length
        responseText.split('\r\n\r\n')
            .filter((n: string) => n.length)
            .forEach((n: any, index: number) => {
                let obj
                try {
                    obj = JSON.parse(n)
                } catch(ex) {
                    return logger(`fetchProxyData responseText JSON parse Error typeof [${typeof n}]`, n)
                }
                logger (`fetchProxyData Got Stream data typeof data[${typeof obj}][${obj.data[0].data}]`, n)
                
                //setProxyNodeLog(proxyLogo)
            })
        
    }

    xhttp.open('POST', url, true)
    xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xhttp.setRequestHeader('Accept', 'text/event-stream')
    xhttp.send(JSON.stringify({data: node.ip_addr}))

    // const connect = await fetch (url, {
    //     method: "POST",
    //     headers: {
    //         Accept: "text/event-stream",
    //         "Content-Type": 'application/json;charset=UTF-8'
    //     },
    //     body: JSON.stringify({data: node.ip_addr}),
    //     cache: 'no-store',
    //     referrerPolicy: 'no-referrer'
    // })
    // .then (value => value.json())
    // .then(data=> {
    //     logger(`fetchData =========>`)
    //     logger (data)
    // })
    // logger (`fetchProxyData [${url}]`)
}

const LaunchPage = () => {

    const {
        locale,
        setShowGuide,
        setShowAppStore
    } = useAppState()

    const [showAssetBalance_balance, setshowAssetBalance_balance] = useState('0')
    const [walletAddress, setWalletAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const [resultSuccess, setResultSuccess ] = useState(false)
    const [sendStep, setSendStep] = useState(0)
    const [resultError, setResultError] = useState(false)
    const [region, setRegion] = useState(regions)
    const [regionProgress,setRegionProgress] = useState(false)
    const [nodes, setNodes] = useState<nodes_info[]>([])
    const [showConfirm, setShowConfirm] = useState(true)
    const [showProxyNodeLogs, setProxyNodeLog] = useState<any[][]>([])
    const [showMiner, setShowMiner] = useState(false)
    

    useEffect(() => {
        
        const fetchData = async () => {

            const [status, data] = await getCONETBalance()
            if (status !== 'SUCCESS' || !data) {
                return logger('LaunchPage Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
            }

            logger (`getCONETBalance SUCCESS`, data)
            setWalletAddress(data[0])
            setshowAssetBalance_balance(data[1])
            const _nodes: nodes_info[] = data[2]
            if (_nodes.length > 0) {
                setNodes(_nodes)
            }

        }
      
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error)
    }, [])

    const intl = useIntl()
    const faucet = async () => {
        setLoading(true)
        const [status, data] = await faucetAPI()
        setLoading(false)
        if (status !== 'SUCCESS' || !data) {
            return logger('LaunchPage Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
        }
        setWalletAddress(data[0])
        setshowAssetBalance_balance(data[1])
    }

    const selectOnChange = (event: React.SyntheticEvent<Element, Event>, checked: boolean, _area: string) => {
       
        const obj = region
         //@ts-ignore
        obj[_area] = checked
        setRegion(obj)
    }

    const regionConfirm = async () => {
        setRegionProgress(true)
        const [status, data] = await setRegionAPI(region)
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
            setShowConfirm(false)
        }
    }

    // 
    // const conetToken = currentProfile().tokens.conet
    return (
                
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '1rem 0 10rem 0'}}>
            <Grid item xs={12} sx={{}} >
                <Slide direction="right" in={true} mountOnEnter>
                    <Typography variant="h4" sx={{fontWeight: '600'}}>
                        { intl.formatMessage({id:'platform.proxy'})}
                    </Typography>
                </Slide>
            </Grid>
            <Grid item xs={12} sx={{}} >
                <Slide direction="right" in={true} mountOnEnter>
                    <Typography variant="h6" sx={{}}>
                        { intl.formatMessage({id:'platform.proxy-1'})}
                    </Typography>
                </Slide>
            </Grid>
            <Grid item xs={12} sx={{paddingBottom: '2rem'}} >
                <Link href={(locale==='zh-CN'||locale ==='zh-TW') ? 'https://doc.conet.network/web2-qiao-jie': 'https://doceng.conet.network/welcome-to-conet/web2-bridging'}>
                    <Typography variant="subtitle1" sx={{}}>
                        { intl.formatMessage({id:'platform.proxy.FeatureArea5.moreDetail'})}
                    </Typography>
                </Link>
            </Grid>
            
            <Grid item xs={12} sx={{paddingBottom: '5rem'}}>
                {featureArea8Item(showAssetBalance_balance, loading, faucet, walletAddress, regionProgress, selectOnChange, regionConfirm, showConfirm, nodes, showMiner, setShowMiner)}
            </Grid>
            
            
        </Grid>

    )
}

export default LaunchPage