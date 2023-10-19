import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles';
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
import {CONET_Platfrom_API, regionType} from '../API/index'
import {logger} from '../../logger'
import CircularProgress from '@mui/material/CircularProgress'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import AccordionDetails from '@mui/material/AccordionDetails'
import SaaSNodes from './SaasNodes'
import type {nodes_info} from './SaasNodes'
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
width:700px;

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
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon1}/>
                </StyleIconItem>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    TRUE PRIVACY 
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                CONET-Proxy rewrites the definition of VPN privacy. Fragmented communication allows data to be perfectly hidden in the data ocean. Using wallet address network to make customers completely anonymous to decentralized VPN service providers
                </Typography>
            </StyledItemArea>

        </Grid>
    )
}

const FeatureArea6Item = () => {
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon2}/>
                </StyleIconItem>

                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    Traffic obfuscation
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    The biggest feature of CONET's data communication is that it has no special protocol and focuses on hiding data traffic.
                </Typography>
            </StyledItemArea>
        </Grid>
    )
}


const FeatureArea7Item = () => {
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon3}/>
                </StyleIconItem>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase'}}>
                   Parallel multi-channel
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    CONET proxy is the first in the industry that can use multiple proxy servers concurrent communication technology at the same time
                </Typography>
            </StyledItemArea>

        </Grid>
    )
}

const FeatureArea5 = () => {
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}  sx={{padding:'5rem 5rem 2rem 5rem'}}>
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                CoNET is A Ground-Up Revamp of the 
                            </Typography>
                        </Slide>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                Entire Privacy VPN Market 
                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                </Grid>
                < FeatureArea5Item />
                < FeatureArea6Item />
                < FeatureArea7Item />
            </Grid>
        
        </ThemeProvider>
    )
}


const featureArea8Item = (conetBalance: string, loading: boolean, faucet: () => void, wallet: string, regionProgress: boolean) => {

    return (
        <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '3rem', textAlign: 'center'}}>
            <StyledItemArea1>
                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    Step 1 Wallet recharge
                </Typography>
                <Typography variant="h6" sx={{  textAlign:'center', paddingTop: '0rem' }}>
                    Wallet {wallet.substring(0,6)+'...'+ wallet.substring(wallet.length - 4)}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    CONET balance
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
                        <Button size="large" variant="outlined" onClick={faucet} disabled = {regionProgress} >
                            faucet
                        </Button>
                }
                
                <Typography variant="h6" sx={{ color: 'grey', textAlign:'center', padding:'2.2rem 0 1rem 0', fontSize: '15px', }}>
                    Billed by traffic, each 1MB will cost 1 CONET
                </Typography>
            </StyledItemArea1>

        </Grid>
    )
}

const featureArea9Item = (onchange: ((event: React.SyntheticEvent<Element, Event>, checked: boolean, region: string) => void), regionConfirm: () => void, regionProgress: boolean, loading: boolean, showConfirm: boolean) => {
    return (
        <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea1>
                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    Step 2 proxy server localtion
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
                                        confirm
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
                
                <Typography variant="h6" sx={{ color: 'grey', textAlign:'center', padding: '1.2rem 0 1rem 0', fontSize: '15px'}}>
                    Multiple selections will random select
                </Typography>
            </StyledItemArea1>

        </Grid>
    )
}

const FeatureArea10Item = () => {
    return (
        <Grid item xs={4} sm={8} md={12} sx={{ paddingTop: '3rem'}}>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{backgroundColor: 'rgb(240,240,240)'}}
                >
                    <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', textTransform: 'uppercase' }}>Setp 3 Setup Your FireFox</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <StyleIconItem>
                        <StyleIconSize1 src={screen1}/>
                    </StyleIconItem>
                </AccordionDetails>
            </Accordion>
        </Grid>
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
    proxyLogs: any[]
    ) => {
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}  sx={{padding:'0 5rem 0 5rem'}}>
                <Grid item xs={12} sx={{paddingBottom: '2rem'}} >
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                Ready To Start
                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                </Grid>
                <Grid item xs={12} sx={{paddingBottom: '5rem'}}>
                    {SaaSNodes(nodes, proxyLogs)}
                </Grid>
                {featureArea8Item(conetBalance, loading, faucet, wallet, regionProgress)}
                {featureArea9Item(onChange, regionConfirm, regionProgress, loading, showConfirm)}
                <FeatureArea10Item />
            </Grid>
        
        </ThemeProvider>
    )
}

const regions: regionType = {
    us: true,
    uk: false,
    ge: false,
    sp: false,
    fr: false
}

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
    const [terminalLineData, setTerminalLineData] = useState([
        <TerminalOutput>Welcome to the React Terminal UI Demo!</TerminalOutput>
    ])
    useEffect(() => {
        
        const fetchData = async () => {
            
            const workChannel = new CONET_Platfrom_API()
            const [status, data] = await workChannel.getCONETBalance()
            if (status !== 'SUCCESS' || !data) {
                return logger('LaunchPage Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
            }

            logger (`getCONETBalance SUCCESS`, data)
            setWalletAddress(data[0])
            setshowAssetBalance_balance(data[1])
            const _nodes: nodes_info[] = data[2]
            if (_nodes.length > 0) {

                setNodes(_nodes)
                setShowConfirm(false)
                
            }

            

        }
      
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error)
    }, [])

    const HeaderArea = () => {

        return (
            <ThemeProvider theme={themeTopArea1}>
                <Grid container spacing={0} >
                    <TippyDropdownTab />
                    <Grid item xs={12}>

                        <ItemTopArea1 elevation={0}>
                            <BreadcrumbsArea>
                                <Breadcrumbs aria-label="breadcrumb">
    
                                    <Link underline="hover" color="inherit" href="#" sx={{color: 'white'}}
                                        onClick={() => {
                                            setShowAppStore (false)
                                            setShowGuide (true)
                                        }}
                                    >
                                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                        CONET Home
                                    </Link>
                                </Breadcrumbs>
                            </BreadcrumbsArea>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{ color: 'white', padding: '4rem 1rem 0rem 1rem' }}>
                                        CoNET Proxy
                                </Typography>
                            </Grow>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{color: 'white', padding: '1rem 1rem 0rem 1rem'}}>
                                    THE FAST & PRIVACY PROXY
                                </Typography> 
                            </Grow>
                        
                        </ItemTopArea1>
                
                    </Grid>
    
                </Grid>
            
            </ThemeProvider>
        )
    }

    const faucet = async () => {
        const workChannel = new CONET_Platfrom_API()
        setLoading(true)
        const [status, data] = await workChannel.faucet()
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
        const workChannel = new CONET_Platfrom_API()
        setRegionProgress(true)
        const [status, data] = await workChannel.setRegion(region)
        setRegionProgress(false)
        if (status === 'SUCCESS') {
            const [status1, data1] = await workChannel.getRegiestNodes()
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
        <ThemeProvider theme={themeTopArea1} >
            <ItemContainer sx={{ overflowY: 'scroll'}}>
                <HeaderArea/>
                <FeatureArea5 />
                
                {
                    featureArea6(showAssetBalance_balance, loading, faucet, selectOnChange, regionConfirm, regionProgress, walletAddress, nodes, showConfirm, showProxyNodeLogs)
                }
                
            </ItemContainer>
            

        </ThemeProvider>
    )
}

export default LaunchPage