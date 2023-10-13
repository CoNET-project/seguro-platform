
import Grid from '@mui/material/Grid'
import Typography, {TypographyProps} from '@mui/material/Typography'
import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles';
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Grow from '@mui/material/Grow'
import Slide from '@mui/material/Slide'
import Box from '@mui/material/Box'
import featurePicture1 from './assets/images/feature1.webp'
import featurePicture2 from './assets/images/feature2.webp'
import featurePicture3 from './assets/images/feature3.webp'
import featurePicture4 from './assets/images/feature4.webp'
import featureIcon1 from './assets/images/feature5Icon1.webp'
import featureIcon2 from './assets/images/feature5Icon2.png'
import featureIcon3 from './assets/images/feature5Icon3.webp'
import featurePicture6 from './assets/images/feature6.jpg'
import styledCom from "styled-components"
import Button, {ButtonProps} from '@mui/material/Button'
import useAppState from "../../../../store/appState/useAppState"

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



const StyleIMG = styledCom.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`


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

const Item3Left = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'left',
    
}))

const Item3Right = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    
}))

const ItemIcon = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center',
    width: 150
}))

const StyledFeatureArea = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    borderRadius: 0,
    maxWidth: 1200
}))

const StyledItemArea = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    borderRadius: 0,
    width: '100%'
}))

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'black',
    backgroundColor: 'white',
    '&:hover': {
        backgroundColor: 'rgb(200,200,200,1)',
    },
    fontFamily: [
        'Inter',
        '"Inter Placeholder"',
        'sans-serif',
    ].join(','),
    fontWeight: '900',
    fontSize: '20px',
    padding: '0.5rem 4rem 0.5rem 4rem',
    borderRadius: '8px'
}))



const FeatureArea1 = () => {
    return (
        <Box sx={{ flexGrow: 1, px: 3, paddingTop:'5rem' }}>
            <StyledFeatureArea elevation={0} sx={{my: 1, mx: 'auto', p: 2}}>
               
                <Grid container spacing={0} sx={{width:'100%'}} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={8} md={6}>
                        <Item3Left elevation={0}>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h5" sx={{ padding: '0rem 1rem 0rem 1rem', fontWeight: '600' }}>
                                    USE WALLET ADDRESSES INSTEAD OF IP ADDRESSES
                                </Typography>
                            </Slide>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h6" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    CoNET presents a brand new network layer for the Internet that does not use IP addresses or contain any metadata. This is the only routing method that enables total anonymity, privacy, and universal access.
                                </Typography>
                            </Slide>
                        </Item3Left>
                    </Grid>
                    <Grid item xs={4} sm={8} md={6} >
                        <Item3Right elevation={0}>
                            <StyleIMG 
                                src={featurePicture1}
                            />
                        </Item3Right>
                    </Grid>
                </Grid>
            </StyledFeatureArea>
        </Box>
    )
}

const FeatureArea2 = () => {
    return (
        <Box sx={{ flexGrow: 1, px: 3, paddingTop:'0rem' }}>
            <StyledFeatureArea elevation={0} sx={{my: 1, mx: 'auto', p: 2}}>
               
                <Grid container spacing={0} sx={{width:'100%'}} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={8} md={6}>
                        <Item3Left elevation={0}>
                            <StyleIMG 
                                src={featurePicture2}
                            />
                        </Item3Left>
                    </Grid>

                    <Grid item xs={4} sm={8} md={6} >
                        <Item3Left elevation={0}>
                            <Slide direction="left" in={true} mountOnEnter>
                                <Typography variant="h5" sx={{ padding: '0rem 1rem 0rem 1rem', fontWeight: '600' }}>
                                    EASY FOR USERS TO UNDERSTAND AND USE
                                </Typography>
                            </Slide>
                            <Slide direction="left" in={true} mountOnEnter>
                                <Typography variant="h6" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    CoNET helps users avoid ubiquitous surveillance, communication filters, and big data collection, all without creating technical barriers. The interface is intuitive and aesthetically pleasing, removing any trade-offs of previous solutions.
                                </Typography>
                            </Slide>
                            
                        </Item3Left>
                    </Grid>
                </Grid>
            </StyledFeatureArea>
        </Box>
    )
}

const FeatureArea3 = () => {
    return (
        <Box sx={{ flexGrow: 1, px: 3, paddingTop:'0rem' }}>
            <StyledFeatureArea elevation={0} sx={{my: 1, mx: 'auto', p: 2}}>
               
                <Grid container spacing={0} sx={{width:'100%'}} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={8} md={6}>
                        <Item3Left elevation={0}>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h5" sx={{ padding: '0rem 1rem 0rem 1rem', fontWeight: '600' }}>
                                    GOOD BEHAVIOR INCENTIVIZED BY TOKEN USAGE
                                </Typography>
                            </Slide>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h6" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    Users are able to pay gas, earn rewards, delegate tokens, run nodes, and vote on governance initiatives with the CoNET token. The quality of service is decided by users and service providers themselves, and CoNET is no longer involved.
                                </Typography>
                            </Slide>
                        </Item3Left>
                    </Grid>
                    <Grid item xs={4} sm={8} md={6} >
                        <Item3Right elevation={0}>
                            <StyleIMG 
                                src={featurePicture3}
                            />
                        </Item3Right>
                    </Grid>
                </Grid>
            </StyledFeatureArea>
        </Box>
    )
}

const FeatureArea4 = () => {
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={0} >
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{ padding: '5rem 5rem 1rem 5rem' }}>
                                CoNET Surpasses Everything Else Out There
                            </Typography>
                        </Slide>
                        <Typography variant="h6" sx={{ padding: '5rem 5rem 0rem 5rem', color: 'rgb(51,51,51'}}>
                            This is a solution that can do something that TOR, NYM, dVPN, and all other solutions you've heard of cannot.
                        </Typography>
                    </ItemTopArea2>
                    
                </Grid>
                <Grid item xs={12} sx={{padding: '2rem 5rem 0rem 5rem'}}>
                    <Item3Right elevation={0}>
                        <StyleIMG 
                                src={featurePicture4}
                            />
                    </Item3Right>
                </Grid>
            </Grid>
        
        </ThemeProvider>
    )
}

const StyleIconSize = styledCom.img`
    width:150px;
`

const StyleIconItem = styledCom.div`
    display: flex;
    justify-content: center;
`

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
                    Privacy from government and corporate surveillance is becoming increasingly important to users. By abandoning cumbersome Web2 communication protocols, an innovative Web3 protocol with true privacy becomes possible.
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

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    SIMPLE USER ADOPTION
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    Onboarding is easy since the platform runs in various browsers. There’s no need to install any app to get the benefit of CoNET. All incoming and outgoing data will still be encrypted, making user history invisible.
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

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    EASY DEVELOPMENT
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    CoNET has a built-in development package that allows developers to build apps for Web3. The single code base and universal device capability streamline development for non-Web3 coders.
                </Typography>
            </StyledItemArea>

        </Grid>
    )
}


const FeatureArea5 = () => {
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={0} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:'5rem'}}>
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                CoNET is A Ground-Up Revamp of the 
                            </Typography>
                        </Slide>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                Entire Privacy Market 
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

const ItemContainer = styled(Box)(({ theme }) => ({
    paddingBottom: '10rem',
    overflow: "auto",
    maxHeight: '100%'
    
}))



const FeatureArea6 = () => {
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={0} >
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{ padding: '5rem 5rem 1rem 5rem' }}>
                                CoNET’s Unique Design
                            </Typography>
                        </Slide>
                    </ItemTopArea2>
                    
                </Grid>
                <Grid item xs={12} sx={{padding: '2rem 5rem 0rem 5rem'}}>
                    <Item3Right elevation={0}>
                        <StyleIMG 
                                src={featurePicture6}
                            />
                    </Item3Right>
                </Grid>
            </Grid>
        
        </ThemeProvider>
    )
}

const LaunchPage = () => {
    const {
        setShowGuide,
        setShowAppStore

    } = useAppState()
    const HeaderArea = () => {


        return (
            <ThemeProvider theme={themeTopArea1}>
                <Grid container spacing={0} >
                    <Grid item xs={12}>
                        <ItemTopArea1 elevation={0}>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{ color: 'white', padding: '8rem 1rem 0rem 1rem' }}>
                                        CoNET - COMPLETE PRIVACY FOR
                                </Typography>
                            </Grow>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{color: 'white', padding: '0rem 1rem 0rem 1rem'}}>
                                    THE NEW INTERNET
                                </Typography> 
                            </Grow>
                            <Grow in={true}>
                                <Typography variant="h5" sx={{color: 'white', padding: '1rem 1rem 2rem 1rem'}}>
                                    We've Invented A Way to Actually Anonymize The Internet
                                </Typography>  
                            </Grow>
    
                            <ColorButton onClick={() => {
                                setShowGuide(false)
                                setShowAppStore(true)
    
                            }}>Try DEMO</ColorButton>
                        
                        </ItemTopArea1>
                
                    </Grid>
                    <Grid item xs={12}>
                        <ItemTopArea2 elevation={0}>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h4" sx={{ padding: '5rem 1rem 0rem 1rem' }}>
                                    We Rebuilt the Entire Internet… to Be
                                </Typography>
                            </Slide>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h4" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    Censorship Resistant
                                </Typography>
                            </Slide>
                                <Typography variant="h6" sx={{ padding: '0rem 5rem 0rem 5rem', color: 'rgb(51,51,51'}}>
                                    CoNET has reinvented the Internet by coming up with a censorship-resistant method of data 
                                </Typography>
                                <Typography variant="h6" sx={{ padding: '0rem 5rem 1rem 5rem'}}>
                                    exchange using wallet addresses instead of IP addresses.
                                </Typography>
                        </ItemTopArea2>
                    </Grid>
    
                </Grid>
            
            </ThemeProvider>
        )
    }
    return (
        <ThemeProvider theme={themeTopArea1} >
            <ItemContainer sx={{ overflowY: 'scroll'}}>
                <HeaderArea /> 
                <FeatureArea1 />
                <FeatureArea2 />
                <FeatureArea3 />
                <FeatureArea4 />
                <FeatureArea5 />
                <FeatureArea6 />
            </ItemContainer>


        </ThemeProvider>
    )
}

export default LaunchPage