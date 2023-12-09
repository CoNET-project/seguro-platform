import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import { useIntl } from "react-intl"
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import styledCom from "styled-components"
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'
import Grow from '@mui/material/Grow'
import useAppState from "../../../../store/appState/useAppState"
import Typography, {TypographyProps} from '@mui/material/Typography'
import miner from './assets/ezgif-4-320.gif'
import Button from '@mui/material/Button'
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing'
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload'
import NetworkPingIcon from '@mui/icons-material/NetworkPing'
import Fab from '@mui/material/Fab'
import HeaderUserBack from './assets/HanderBackground.png'
import DnsIcon from '@mui/icons-material/Dns'
import { blue, grey } from '@mui/material/colors'
import AddIcon from '@mui/icons-material/Add'
import Slide from '@mui/material/Slide'
import UserBackImage from './assets/Blockchain-news-img.jpg'
import HeaderImage from './assets/HanderBackground.png'
import security from './assets/security.png'

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

const ItemContainer = styled(Box)(({ theme }) => ({
    overflow: "auto",
    maxHeight: '100%'
    
}))

const BreadcrumbsArea = styledCom.div`
    padding: 2rem;

`

const ItemTopArea1 = styled(Box)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    //background: `url(${UserBackImage})`,
    //background: 'linear-gradient(180deg,#080213 0%,hsl(253,79%,15%))',
    paddingBottom: '7rem'
}))

const ItemTopAreaPicture = styled(Box)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    backgroundImage: `url(${UserBackImage})`,
    //background: 'linear-gradient(180deg,#080213 0%,hsl(253,79%,15%))',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
}))

const MinerImg = styledCom.img`

`
const StyledItemArea = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    borderRadius: 0,
    width: '100%'
}))

const StyleIconItem = styledCom.div`
    display: flex;
    justify-content: center;
`
const ItemTopArea2 = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center'
}))

const ItemStyle = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    padding: '0rem 2rem 1rem 2rem',
    borderRadius: '1rem'
}))

const FeatureArea5Item1 = () => {
    const intl = useIntl()
    return (
        
            <Grid item xs={4} sm={8} md={4}>
                <ItemStyle>
                    <Fab
                        size='large'
                        color='primary'
                        sx={{
                            fontSize: '3rem',
                            bottom: (theme) => theme.spacing(2),
                        }}
                        >
                        <CallMissedOutgoingIcon fontSize='large' />
                    </Fab>

                    <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', padding: '1rem 0 1rem 0' }}>
                        {intl.formatMessage({id:'platform.joinUS.miner.Bandwidth'})}
                    </Typography>
                    <Typography variant="h6" sx={{ textAlign:'center', }}>
                        {intl.formatMessage({id:'platform.joinUS.miner.BandwidthDetail'})}
                        
                    </Typography>
                </ItemStyle>
                
                    
                

            </Grid>
        

    )
}
const FeatureArea5Item2 = () => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <ItemStyle>
                <Fab
                    size='large'
                    color='primary'
                    sx={{
                        fontSize: '3rem',
                        bottom: (theme) => theme.spacing(2),
                    }}
                    >
                    <DnsIcon fontSize='large' />
                </Fab>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', padding: '1rem 0 1rem 0' }}>
                    {intl.formatMessage({id:'platform.joinUS.miner.SaaS'})}
                </Typography>
                <Typography variant="h6" sx={{  textAlign:'center'}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.SaaSDetail'})}
                    
                </Typography>
            </ItemStyle>

        </Grid>
    )
}
const FeatureArea5Item3 = () => {
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem', paddingBottom: '3rem',}}>
            <ItemStyle>
                <Fab
                    size='large'
                    color='primary'
                    sx={{
                        fontSize: '3rem',
                        bottom: (theme) => theme.spacing(2),
                    }}
                    >
                    <DriveFolderUploadIcon fontSize='large' />
                </Fab>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', padding: '1rem 0 1rem 0'  }}>
                    {intl.formatMessage({id:'platform.joinUS.miner.storage'})}
                </Typography>
                <Typography variant="h6" sx={{ textAlign:'center'}}>
                    {intl.formatMessage({id:'platform.joinUS.miner.storageDetail'})}
                    
                </Typography>
            </ItemStyle>

        </Grid>
    )
}

const FeatureArea5 = (setMiner: () => void) => {
    const intl = useIntl()
    return (
        <Box sx={{ flexGrow: 1, px: 3}}>
            <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding:'5rem 5rem 5rem 5rem', width: '100%'}}>
                <Grid item xs={12} sx={{padding:'0 2rem 5rem 2rem'}}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{ textTransform: 'uppercase', color: '#448aff'}} >
                                {intl.formatMessage({id:'platform.joinUS.miner.title'})} 
                            </Typography>
                        </Slide>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h6" sx={{padding: '1rem 0 0 0'}} >
                                {intl.formatMessage({id:'platform.joinUS.miner.detail'})}
                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                </Grid>
                < FeatureArea5Item1 />
                < FeatureArea5Item2 />
                < FeatureArea5Item3 />
                <Grid item xs={12} sx={{padding:'5rem 0 0 0rem', textAlign: 'center'}}>
                    <Button onClick={setMiner}
                        variant="outlined" size="large" 
                        sx={{backgroundColor:'white', textTransform: 'none', fontSize: '1.5rem' }}>
                        { intl.formatMessage({id: 'platform.joinUS.joinMiner.button'})}
                    </Button>
                </Grid>
            </Grid>
        </Box>
    )
}

const ItemTopArea3 = styled(Paper)(({ theme }) => ({

    borderRadius: 0,
    textAlign: 'center',
     
}))

const HeaderUser = (setShowAPP: () => void) => {
    const intl = useIntl()
    return (
        <ItemContainer sx={{ padding: '4rem'}}>
            <ItemTopArea3 elevation={5} sx={{borderRadius: '1rem'}}>
                <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '4rem 2rem 4rem 2rem', width: '100%'}}>
                    
                    <Grid item xs={6} sm={8} md={12}>
                    
                        <Grow in={true}>
                            <Typography variant="h3" sx={{ color: '#448aff' }}>
                                { intl.formatMessage({id: 'platform.joinUS.forUser.Title1'})}
                            </Typography>
                        </Grow>
                        {/* <Grow in={true}>
                            <Typography variant="h3" sx={{padding: '1rem 1rem 0rem 1rem', color: '#448aff'}}>
                                { intl.formatMessage({id: 'platform.joinUS.forUser.Title2'})}
                            </Typography> 
                        </Grow> */}
                        <Grow in={true}>
                            <Typography variant="h5" sx={{padding: '1rem 1rem 2rem 1rem'}}>
                                { intl.formatMessage({id: 'platform.joinUS.forUser.detail'})}
                            </Typography>
                        </Grow>
                    </Grid>
                    <Grid item xs={12} sx={{textAlign: 'center'}}>
                        <Button 
                            variant="outlined" size="large"
                            onClick={setShowAPP}
                            sx={{backgroundColor:'white', textTransform: 'none', fontSize: '1.5rem' }}>
                            { intl.formatMessage({id: 'platform.proxy.FeatureArea.start'})}
                        </Button>
                    </Grid>
                </Grid>
            </ItemTopArea3>
        </ItemContainer>
    )
}

const JoinUS = () => {
    const {
        setShowJoinUS,
        setShowGuide,
        locale,
        isInitialized,
        setShowMiner,
        setShowAppStore,
    } = useAppState()
    const whatCo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        let a = document.createElement('a')
        a.target = '_blank'
        switch (locale) {
            default:
            case 'en-US' :{
                a.href = `https://doc.conet.network/`
                break
            }
            case 'ja-JP': {
                a.href = `https://doc.conet.network/conet-howaitopp`
                break
            }
            case 'zh-TW':
            case 'zh-CN': {
                a.href = `https://doc.conet.network/conet-bai-pi-shu`
                break
            }
        }
        
        a.click()
    }

    const HeaderArea = () => {
        const intl = useIntl()
        return (

            <ItemTopAreaPicture>
                <BreadcrumbsArea>
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" sx={{color: '#448aff', cursor: 'pointer'}}
                            onClick={() => {
                                setShowJoinUS (false)
                                setShowGuide (true)
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                            { intl.formatMessage({id: 'platform.home'})}
                        </Link>
                    </Breadcrumbs>
                </BreadcrumbsArea>
                <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '5rem 2rem 5rem 2rem', width: '100%'}}>

                    <Grid item xs={6} sm={8} md={12}>
                    
                        <Grow in={true}>
                            <Typography variant="h2" sx={{ color: '#448aff', fontWeight: '900' }}>
                                { intl.formatMessage({id: 'platform.joinUS.header.title.1'})}
                            </Typography>
                        </Grow>
                        <Grow in={true}>
                            <Typography variant="h3" sx={{padding: '1rem 1rem 0rem 1rem', color: '#448aff'}}>
                                { intl.formatMessage({id: 'platform.joinUS.header.title.2'})}
                            </Typography> 
                        </Grow>
                        <Grow in={true}>
                            <Typography variant="h5" sx={{padding: '1rem 1rem 2rem 1rem', color: 'black', fontFamily: 'sans-serif'}}>
                                { intl.formatMessage({id: 'platform.joinUS.header.detail'})}
                            </Typography>
                        </Grow>
                        <Button onClick={e => whatCo(e)}
                            variant="outlined" size="large" 
                            sx={{backgroundColor:'white', textTransform: 'none', fontSize: '1.5rem' }}>
                            { intl.formatMessage({id: 'platform.joinUS.header.whatConet'})}
                        </Button>
                    </Grid>
                    
                </Grid>
            </ItemTopAreaPicture>
        )
    }

    const setAppstore = () => {
        setShowGuide(false)
        setShowJoinUS(false)
        setShowAppStore(true)
        setShowMiner(false)
    }

    const setMinerpage = () => {
        setShowGuide(false)
        setShowJoinUS(false)
        setShowAppStore(false)
        setShowMiner(true)
    }

    const HeaderArea2 = () => {
        const intl = useIntl()
        return (

            <ItemTopArea1>
                <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '5rem 2rem 5rem 2rem', width: '100%'}}>
                    
                    <Grid item xs={6} sm={8} md={12}>
                    
                        <Grow in={true}>
                            <Typography variant="h3" sx={{ color: '#448aff' }}>
                                { intl.formatMessage({id: 'platform.joinUS.forDeveloper.Title1'})}
                            </Typography>
                        </Grow>
                        <Grow in={true}>
                            <Typography variant="h3" sx={{padding: '1rem 1rem 0rem 1rem', color: '#448aff'}}>
                                { intl.formatMessage({id: 'platform.joinUS.forDeveloper.Title2'})}
                            </Typography> 
                        </Grow>
                        <Grow in={true}>
                            <Typography variant="h5" sx={{padding: '1rem 1rem 2rem 1rem', color: grey[500]}}>
                                { intl.formatMessage({id: 'platform.joinUS.forDeveloper.detail'})}
                            </Typography>
                        </Grow>
                        <Button onClick={e => whatCo(e)}
                            variant="outlined"
                            size="large" 
                            disabled
                            sx={{textTransform: 'none', fontSize: '1.5rem' }}>
                            { intl.formatMessage({id: 'platform.joinUS.forDeveloper.button'})}
                        </Button>
                    </Grid>
                </Grid>
            </ItemTopArea1>

        )
    }

    return (
        <ThemeProvider theme={themeTopArea1} >
            <ItemContainer sx={{ overflowY: 'scroll'}}>
                <HeaderArea/>
                {FeatureArea5(setMinerpage)}
                {HeaderUser (setAppstore)}
                <HeaderArea2/>
            </ItemContainer>
        </ThemeProvider>
    )
}

export default JoinUS