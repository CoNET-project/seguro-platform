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
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}  sx={{padding:'5rem'}}>
                <Grid item xs={12} sx={{paddingBottom: '5rem'}}>
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

const featureArea8Item = (conetBalance: string, loading: boolean, faucet: () => void) => {

    return (
        <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '3rem', textAlign: 'center'}}>
            <StyledItemArea1>
                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    Step 1 Wallet recharge
                </Typography>

                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    CONET balance
                </Typography>
                <Typography variant="h4" sx={{ color: 'rgb(51,51,51)', textAlign:'center', padding: '1rem 0 1rem 0'}}>
                    {conetBalance}
                </Typography>
                <Button size="large" variant="outlined"  onClick={faucet} disabled = {loading} >
                    faucet
                </Button>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center', padding:'3rem 0 1rem 0'}}>
                    Billed by traffic, each 1GB will cost 1 CONET
                </Typography>
            </StyledItemArea1>

        </Grid>
    )
}

const FeatureArea9Item = () => {
    return (
        <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea1>
                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    Step 2 proxy server localtion
                </Typography>
                <FormGroup>
                    <FormControlLabel control={<Checkbox defaultChecked />} label="United States" />
                    <FormControlLabel control={<Checkbox />} label="United Kingdom" />
                    <FormControlLabel control={<Checkbox />} label="Germany" />
                    <FormControlLabel control={<Checkbox />} label="Spain" />
                    <FormControlLabel control={<Checkbox />} label="France" />
                </FormGroup>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    Multiple selections will adapt accordingly 
                </Typography>
            </StyledItemArea1>

        </Grid>
    )
}

const FeatureArea10Item = () => {
    return (
        <Grid item xs={4} sm={8} md={12} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea1>

                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                    Setp 3 Setup Your Browser
                </Typography>

                <StyleIconItem>
                    <StyleIconSize1 src={screen1}/>
                </StyleIconItem>
                
                <Typography variant="h4" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>

                </Typography>
            </StyledItemArea1>

        </Grid>
    )
}

const featureArea6 = (conetBalance: string, loading: boolean, faucet: ()=> void) => {
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}  sx={{padding:'5rem'}}>
                <Grid item xs={12} sx={{paddingBottom: '2rem'}} >
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                Ready To Start
                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                </Grid>
                { featureArea8Item(conetBalance, loading, faucet)}
                <FeatureArea9Item />
                <FeatureArea10Item />
            </Grid>
        
        </ThemeProvider>
    )
}

const LaunchPage = () => {
    let workerService: any
    let assetList:any
    const {
        setShowGuide,
        setShowAppStore
    } = useAppState()
    
    const [showAssetBalance_balance, setshowAssetBalance_balanc] = useState('0')
    const [loading, setLoading] = useState(false)
    const [resultSuccess, setResultSuccess ]  = useState(false)
    const [sendStep, setSendStep] = useState(0)
    const [resultError, setResultError] = useState(false)

    useEffect(() => {
        
        const fetchData = async () => {
            workerService = getWorkerService()
            assetList = reflashAssetList()
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
                                <Typography variant="h3" sx={{ color: 'white', padding: '6rem 1rem 0rem 1rem' }}>
                                        CoNET Proxy
                                </Typography>
                            </Grow>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{color: 'white', padding: '0rem 1rem 0rem 1rem'}}>
                                    THE FAST & PRIVACY PROXY
                                </Typography> 
                            </Grow>
                            
                        
                        </ItemTopArea1>
                
                    </Grid>
    
                </Grid>
            
            </ThemeProvider>
        )
    }

    const [currectAsset, setcurrectAsset] = useState(0)
    const currentProfile = () => {
		if (workerService.data.passcode.status === 'LOCKED') {
			return null
		}
		const index = workerService.data.profiles.findIndex((n:any) => {
			return n.isPrimary
		})
        setcurrectAsset(index)
		return workerService.data.profiles[index]
	}

    const reflashAssetList = () => {
		
		const ret = [
			{
				primary: 'CoNET',
				balance: currentProfile().tokens.conet.balance},
			// {
			// 	primary: 'CoNETCash',
			// 	balance: workerService.data?.CoNETCash ? workerService.data.CoNETCash.Total : 0, 
			// 	icon: <CNTCashLogoIcon size={30}/>,
			// },
			// {
			// 	primary: 'USDC',
			// 	balance: currentProfile().tokens.usdc.balance,
			// 	icon: <USDCLogoIcon size={30} color='grey'/>,
			// }
		]
		return ret
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

	const getFaucet = () => {
		if ( !workerService.method?.getFaucet) {
			return 
		}
		setLoading (true)
		return workerService.method.getFaucet (currentProfile().keyID)
			.then (async (n: any) => {
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

    // 
    // const conetToken = currentProfile().tokens.conet
    return (
        <ThemeProvider theme={themeTopArea1} >
            <ItemContainer sx={{ overflowY: 'scroll'}}>
                <HeaderArea/>
                <FeatureArea5 />
                {
                    featureArea6(showAssetBalance_balance, loading, getFaucet)
                }
                
            </ItemContainer>
            

        </ThemeProvider>
    )
}

export default LaunchPage