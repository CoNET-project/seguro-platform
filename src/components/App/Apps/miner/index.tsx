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
import Button from '@mui/material/Button'
import Checkbox from '@mui/material/Checkbox'
import React, {HTMLAttributes, useState, useEffect} from "react"
import {getCONETBalance} from '../../../../API/index'
import {logger} from '../../logger'
import TextField from '@mui/material/TextField'
import { grey } from '@mui/material/colors'
import boostImg from './assets/boost.gif'
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
const RootContainer = styled(Container)(() => ({
    height: '100vh',
    overflowY: 'scroll'
}))

const BreadcrumbsArea = styledCom.div`
    padding: 2rem;
    
`
const StackContainer = styled(Stack)(() => ({
    height: '100vh',
}))

const BoostImg = styledCom.img`
    width: 7rem;
`
const StackForImg = styled(Stack)(() => ({

}))
const ItemTopArea1 = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    background: 'linear-gradient(180deg,#080213 0%,hsl(253,79%,15%))',
    paddingBottom: '7rem'
}))

const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

const ItemStyle = styled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '1rem'
}))


const FeatureArea5Item1 = ( check: boolean, setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    return (
        
        <Grid item xs={4} sm={8} md={4}>
            <ItemStyle>
                <Fab
                    size='large'
                    color='primary'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5),
                        bottom: (theme) => theme.spacing(1),
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
                
                <Checkbox checked={check}
                    onChange={(e, checked) => setcheck(checked)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                />
            </ItemStyle>

        </Grid>
        
    )
}
const FeatureArea5Item2 = (check: boolean,setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} >
            <ItemStyle>
                <Fab
                    size='large'
                    color='primary'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5),
                        bottom: (theme) => theme.spacing(2),
                    }}
                    >
                    <DnsIcon fontSize='large' />
                </Fab>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center' }}>
                    {intl.formatMessage({id:'platform.joinUS.miner.SaaS'})}
                </Typography>
                <Typography variant="h6" sx={{  textAlign:'center'}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.SaaSDetail'})}
                    
                </Typography>
                <Checkbox checked={check}
                    onChange={(e, checked) => setcheck(checked)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                />
            </ItemStyle>

        </Grid>
    )
}
const FeatureArea5Item3 = (check: boolean,setcheck: React.Dispatch<React.SetStateAction<boolean>>) => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} >
            <ItemStyle>
                <Fab
                    size='large'
                    color='primary'
                    sx={{
                        fontSize: '3rem',
                        top: (theme) => theme.spacing(-5),
                        bottom: (theme) => theme.spacing(2),
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
                <Checkbox disabled
                    onChange={(e, checked) => setcheck(checked)}
                    sx={{ '& .MuiSvgIcon-root': { fontSize: 35 } }}
                />
            </ItemStyle>

        </Grid>
    )
}

const ShowStart = (
    CONET_balance: number
    ) => {
    const intl = useIntl()
    const [check1, setcheck1] = useState(false)
    const [check2, setcheck2] = useState(false)
    const [check3, setcheck3] = useState(false)
    const [minting, setMinting] = useState(false)
    const [boost, setBoost]= useState(false)
    const [minerReward, setMinerReward] = useState(0)
    const {
        setShowDePINing,
        showDePINing,
        pendingRewards,
        setPendingRewards
    } = useAppState()
    
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
        <>
            {
                !showDePINing && 
                <Grid container spacing={5} columns={{ xs: 4, sm: 8, md: 12}} sx={{textAlign: 'center'}}>
                    
                    
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Typography variant="h4" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem'}}>
                            {intl.formatMessage({id: 'platform.miner.register.title'})}
                        </Typography>
                    </Grid>
                    {FeatureArea5Item1(check1,setcheck1)}
                    {FeatureArea5Item2(check2, setcheck2)}
                    {FeatureArea5Item3(check3, setcheck3)}
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Box sx={{paddingTop: '3rem'}}>
                            
                            <Paper sx={{ borderRadius: '1rem'}}>
                                
                                <Grid container spacing={4} >
                                    <Grid item xs={4} sx={{ textAlign: 'center'}}>
                                        <BoostImg src={boostImg}/>
                                    </Grid>
                                    <Grid item xs={8} sx={{ textAlign: 'left'}}>
                                        <Typography variant="h4" sx={{ fontWeight: '900', color: CONET_balance > 1000 ? 'black': grey[400] }}>
                                            {intl.formatMessage({id: 'platform.miner.register.boost'})}
                                        </Typography>
                                        <Typography variant="h5" sx={{paddingBottom: '1rem', color: CONET_balance > 1000 ? 'black': grey[400] }}>
                                            {intl.formatMessage({id: 'platform.miner.register.boost.detail'})}
                                        </Typography>
                                        <Checkbox disabled={CONET_balance < 1000 ? true: false }
                                            onChange={(e, checked) => setBoost(checked)}
                                            sx={{ '& .MuiSvgIcon-root': { fontSize: 35 }}}
                                        />
                                        
                                    </Grid>
                                </Grid>
                            </Paper>
                            
                        </Box>
                    </Grid>
                    
                    
                    <Grid item xs={12} sx={{padding:'0rem 0 0 0rem', textAlign: 'center'}}>
                        <Button 
                            variant="outlined" size="large"
                            onClick={() => setShowDePINing(true)}
                            sx={{backgroundColor:'white', textTransform: 'uppercase', fontSize: '1.5rem' }}>
                            { intl.formatMessage({id: 'platform.miner.register.button'})}
                        </Button>
                    </Grid>
                </Grid>
            }
            {
                showDePINing && <MinerAni />
            }
            
        </>
    )
}



const Miner = () => {
    const {
        setShowMiner,
        pendingRewards,
    } = useAppState()

    const intl = useIntl()
    const [CONET_balance, setCONET_balance] = useState(0)
    const [walletAddress, setWalletAddress] = useState('')
    const [totalRewards, setTotalRewards]= useState(0)
    const [previouslyClaimed, setPreviouslyClaimed]= useState(0)
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

    
    const HeaderArea = () => {
        
        return (
            <ThemeProvider theme={themeTopArea1}>
                <Grid container spacing={0} >
                    <TippyDropdownTab />
                    <Grid item xs={12}>
    
                        <ItemTopArea1 elevation={0}>
                            <BreadcrumbsArea>
                                <Breadcrumbs aria-label="breadcrumb">
    
                                    <Link underline="hover" color="inherit" sx={{color: 'white', cursor: 'pointer'}}
                                        onClick={() => {
                                            setShowMiner(false)
                                        }}
                                    >
                                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                        { intl.formatMessage({id: 'platform.home'})}
                                    </Link>
                                </Breadcrumbs>
                            </BreadcrumbsArea>
                            
                            <Typography variant="h3" sx={{ color: 'white', padding: '4rem 1rem 0rem 1rem' }}>
                                { intl.formatMessage({id: 'platform.miner.header.title'})}
                            </Typography>
                            
                        
                        </ItemTopArea1>
                
                    </Grid>
    
                </Grid>
            
            </ThemeProvider>
        )
    }

    return (
        <ThemeProvider theme={themeTopArea1}>
            <HeaderArea/>
            <RootContainer>
                <StackContainer sx={{paddingTop: '3rem'}}>
                    <Paper sx={{padding: '2rem', borderRadius: '1rem'}} elevation={8}>
                        <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12}}>
                            {/* <Grid item xs={12} sx={{padding:'3rem 0 0rem 0rem', textAlign: 'center'}}>
                                <Typography variant="h6" sx={{  textAlign: 'center', paddingTop: '0rem' }}>
                                    {intl.formatMessage({id: 'platform.profile.walletAddr'})}: {walletAddress}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sx={{textAlign: 'center'}}>
                                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                                    {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1.CONETbalance'})}: {CONET_balance}
                                </Typography>
                            </Grid> */}
                            <Grid item xs={12} sx={{padding:'0rem 0 3rem 0rem', textAlign: 'center'}}>
                                <ItemStyle>
                                    <Stack spacing={4} direction="row" justifyContent="center">
                                        <Stack spacing={2}>
                                            <Typography variant="h5" sx={{ fontWeight: '900'}}>
                                                {intl.formatMessage({id: 'platform.miner.register.totalRewards'})}
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontWeight: '500'}}>
                                                {totalRewards}
                                            </Typography>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Typography variant="h5" sx={{ fontWeight: '900'}}>
                                                {intl.formatMessage({id: 'platform.miner.register.pendingRewards'})}
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontWeight: '500'}}>
                                                {pendingRewards}
                                            </Typography>
                                        </Stack>
                                        <Stack spacing={2}>
                                            <Typography variant="h5" sx={{ fontWeight: '900'}}>
                                                {intl.formatMessage({id: 'platform.miner.register.previouslyClaimed'})}
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontWeight: '500'}}>
                                                {previouslyClaimed}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </ItemStyle>
                            </Grid>
                            <Grid item xs={12} sx={{textAlign: 'center'}}>
                                {ShowStart(CONET_balance)}
                            </Grid>
                        </Grid>
                        
                    </Paper>
                </StackContainer>
                
            </RootContainer>
        </ThemeProvider>
    )
}

export default Miner