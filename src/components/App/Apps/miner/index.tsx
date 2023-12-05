import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import { useIntl } from "react-intl"
import Grid from '@mui/material/Grid'
import TippyDropdownTab from '../CONET-Proxy/TippyDropdown'
import styledCom from "styled-components"
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'
import Grow from '@mui/material/Grow'
import Typography, {TypographyProps} from '@mui/material/Typography'
import useAppState from "../../../../store/appState/useAppState"
import miner2 from '../../../../assets/miner/FancyNyan.webp'
import minerPause from '../../../../assets/miner/FancyNyanPause.png'
import Stack from '@mui/material/Stack'
import Fab from '@mui/material/Fab'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import DnsIcon from '@mui/icons-material/Dns'

import Checkbox from '@mui/material/Checkbox'
import React, {HTMLAttributes, useState, useEffect} from "react"
import {getCONETBalance} from '../../../../API/index'
import {logger} from '../../logger'
import TextField from '@mui/material/TextField'
import { grey } from '@mui/material/colors'
import boostImg from './assets/boost.gif'
import Account from '../dashboard/Accound/index'
import { useTheme } from '@mui/material/styles'
import { lightGreen} from '@mui/material/colors'
import {Tabs, Tab, Button} from '@mui/material-next'

const BoostImg = styledCom.img`
    width: 7rem;
`

const ItemStyle = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '1rem',
}))

const ItemStyle2 = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '1rem',
    color: grey[500]
}))


const FeatureArea5Item1 = ( check: boolean, setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
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
                    variant="filledTonal" size="large"
                    disabled
                    sx={{fontSize: '1.5rem', fontFamily:'inherit', margin: '2rem' }}>
                        { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                </Button>
            </ItemStyle2>
        </Grid>
        
    )
}

const FeatureArea5Item2 = (check: boolean,setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
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
                    variant="filledTonal" size="large"
                    disabled
                    sx={{fontSize: '1.5rem', fontFamily:'inherit', margin: '2rem' }}>
                        { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                </Button>
            </ItemStyle2>

        </Grid>
    )
}

const FeatureArea5Item3 = (check: boolean,setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
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
                <Typography variant="h6" sx={{ textAlign:'center', color: grey[500]}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.storageDetail'})}
                    
                </Typography>
                <Button
                    variant="filledTonal" size="large"
                    disabled
                    sx={{fontSize: '1.5rem', fontFamily:'inherit', margin: '2rem' }}>
                        { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                </Button>
            </ItemStyle2>

        </Grid>
    )
}

const Boost = (CONET_balance: number, setBoost: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    return (
        <Grid item>
            <Box sx={{paddingTop: '2rem'}}>
                
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
                                variant="filledTonal" size="large"
                                disabled
                                sx={{fontSize: '1.5rem', fontFamily:'inherit', margin: '2rem' }}>
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

const ShowStart = (
    CONET_balance: number,
    
    ) => {
    const [value, setValue] = React.useState(0)
    const intl = useIntl()
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)
    
    const [boost, setBoost]= useState(false)
    
    const {
        setShowDePINing,
        showDePINing,
        pendingRewards,
        setPendingRewards
    } = useAppState()
    


    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    return (
        <Grid container columns={{ xs: 4, sm: 8, md: 12}} sx={{ textAlign: 'center', width: '100%'}}>
            
            <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                <Typography variant="h6" sx={{ fontWeight: '700', textAlign:'center', paddingTop: '2rem'}}>
                    {intl.formatMessage({id: 'platform.miner.register.title'})}
                </Typography>
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'center', width: '100%'}}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginBottom: '3rem' }}>
                    <Tabs value={value} onChange={handleChange} 
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile>
                        <Tab label={intl.formatMessage({id: 'platform.joinUS.miner.Bandwidth'})} {...a11yProps(0)} />
                        <Tab label={intl.formatMessage({id: 'platform.joinUS.miner.SaaS'})} {...a11yProps(1)} />
                        <Tab label={intl.formatMessage({id: 'platform.joinUS.miner.storage'})} {...a11yProps(2)} />
                        <Tab label={intl.formatMessage({id: 'platform.miner.register.boost'})} {...a11yProps(3)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    {FeatureArea5Item1(check1,setcheck1)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    {FeatureArea5Item2(check2, setcheck2)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    {FeatureArea5Item3(check3, setcheck3)}
                </CustomTabPanel>
                <CustomTabPanel value={value} index={3}>
                    {Boost(CONET_balance, setBoost)}
                </CustomTabPanel>
            </Grid>
        </Grid>
    )
}



const Miner = () => {
    const {
        showDePINing,
        setShowMiner,
        setPendingRewards,
        setShowDePINing,
        pendingRewards,
    } = useAppState()

    const [minerReward, setMinerReward] = useState(0)
    const [minting, setMinting] = useState(false)
    const intl = useIntl()
    const [CONET_balance, setCONET_balance] = useState(0)
    const [walletAddress, setWalletAddress] = useState('')
    const [totalRewards, setTotalRewards]= useState(0)
    const [previouslyClaimed, setPreviouslyClaimed]= useState(0)
    const [referrals, setReferrals]= useState(0)
    const Theme = useTheme()
    useEffect(() => {
        
        const fetchData = async () => {

            const [status, data] = await getCONETBalance()
            if (status !== 'SUCCESS' || !data) {
                return logger ('Miner Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
            }

            logger (`getCONETBalance SUCCESS`, data)
            setWalletAddress(data[0])
            setCONET_balance(data[1])

        }
      
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error)
    }, [])
    const MinerAni = () => {
        
        const startMinting= async() => {
            if (!minting) {
                return
            }
            const r = Math.random()
            await setMinerReward(s => {
                const kkk = s+r
                return kkk
            })
            const kk = minerReward
            await setPendingRewards(kk)
            const k = pendingRewards
            setTimeout(()=> startMinting(), 3000)
        }
        return (
                <>
        
                    {minting? <img src={miner2} style={{ width: '8rem'}} />: <img src={minerPause} style={{ width: '8rem'}} />}
                    
                    <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ paddingTop: '1rem'}}>
                        <Grid item xs={4} sm={8} md={12}>
                            <Typography variant="h6" sx={{fontWeight: '600'}}>
                                {intl.formatMessage({id: 'platform.miner.register.MinerAni.reward'})}
                            </Typography>
                        </Grid>
                        <Grid item xs={4} sm={8} md={12}>
                            <Typography variant="h4" sx={{fontWeight: '600', paddingBottom: '1rem'}}>
                                {minerReward}
                            </Typography>
                        </Grid>
                        
                        <Grid item xs={4} sm={8} md={12} >
                            <Stack spacing={2} direction="row" justifyContent="center">
                                <Button size="large" variant="outlined"  onClick={() => {
                                    setMinting(!minting)
                                    if (minting) {
                                        startMinting()
                                    }
                                }}>
                                    {minting? intl.formatMessage({id: 'platform.miner.register.MinerAni.pause'}): intl.formatMessage({id: 'platform.miner.register.MinerAni.resume'})}
                                </Button>
                                {
                                    !minting &&
                                    <Button size="large" variant="outlined"  onClick={() => {
                                        setShowDePINing(false)
                                        setMinting(true)
                                        setPendingRewards(minerReward)
                                    }}>
                                        {minting? intl.formatMessage({id: 'platform.miner.register.MinerAni.pause'}): intl.formatMessage({id: 'platform.miner.register.MinerAni.stop'})}
                                    </Button>
                                }
                            </Stack>
                        </Grid>
                    </Grid>
                </>
                
            )
        }
    return (
        
        
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '1rem 0 10rem 0'}}>
                <Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <ItemStyle>
                        <Stack spacing={1}>
                            <Typography variant="h6" sx={{ fontWeight: '600'}}>
                                {intl.formatMessage({id: 'platform.miner.register.totalRewards'})}
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: '500'}}>
                                {totalRewards}
                            </Typography>
                        </Stack>
                    </ItemStyle>
                </Grid>
                <Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <ItemStyle>
                        <Stack spacing={1}>
                            <Typography variant="h6" sx={{ fontWeight: '600'}}>
                                {intl.formatMessage({id: 'platform.miner.register.previouslyClaimed'})}
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: '500'}}>
                                {previouslyClaimed}
                            </Typography>
                        </Stack>
                    </ItemStyle>
                </Grid>
                <Grid item md={4} sm={8} xs={4} sx={{textAlign: 'center'}}>
                    <ItemStyle>
                        <Stack spacing={1}>
                            <Typography variant="h6" sx={{ fontWeight: '600'}}>
                                {intl.formatMessage({id: 'platform.miner.register.referrals'})}
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: '500'}}>
                                {referrals}
                            </Typography>
                        </Stack>
                    </ItemStyle>
                </Grid>
                <Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%'}}>
                    {ShowStart(CONET_balance)}
                </Grid>
                {
                    showDePINing && <MinerAni />
                }
            </Grid>

    )
}

export default Miner