
import Grid from '@mui/material/Grid'
import Typography, {TypographyProps} from '@mui/material/Typography'
import { useIntl } from "react-intl"
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
    const intl = useIntl()
    return (
        <Box sx={{ flexGrow: 1, px: 3, paddingTop:'5rem' }}>
            <StyledFeatureArea elevation={0} sx={{my: 1, mx: 'auto', p: 2}}>
               
                <Grid container spacing={0} sx={{width:'100%'}} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={8} md={6}>
                        <Item3Left elevation={0}>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h5" sx={{ padding: '0rem 1rem 0rem 1rem', fontWeight: '600' }}>
                                    {intl.formatMessage({id:'launchPage.FeatureArea1.1'})}
                                </Typography>
                            </Slide>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h6" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                {intl.formatMessage({id:'launchPage.FeatureArea1.2'})}
                                    
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
    const intl = useIntl()
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
                                {intl.formatMessage({id:'launchPage.FeatureArea2.1'})}
                                </Typography>
                            </Slide>
                            <Slide direction="left" in={true} mountOnEnter>
                                <Typography variant="h6" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    {intl.formatMessage({id:'launchPage.FeatureArea2.2'})}
                                    
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
    const intl = useIntl()
    return (
        <Box sx={{ flexGrow: 1, px: 3, paddingTop:'0rem' }}>
            <StyledFeatureArea elevation={0} sx={{my: 1, mx: 'auto', p: 2}}>
               
                <Grid container spacing={0} sx={{width:'100%'}} columns={{ xs: 4, sm: 8, md: 12 }}>

                    <Grid item xs={4} sm={8} md={6}>
                        <Item3Left elevation={0}>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h5" sx={{ padding: '0rem 1rem 0rem 1rem', fontWeight: '600' }}>
                                    {intl.formatMessage({id:'launchPage.FeatureArea3.1'})}
                                </Typography>
                            </Slide>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h6" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    {intl.formatMessage({id:'launchPage.FeatureArea3.2'})}
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
    const intl = useIntl()
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={0} >
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{ padding: '5rem 5rem 1rem 5rem' }}>
                            {intl.formatMessage({id:'launchPage.FeatureArea4.1'})}
                            </Typography>
                        </Slide>
                        <Typography variant="h6" sx={{ padding: '5rem 5rem 0rem 5rem', color: 'rgb(51,51,51'}}>
                            {intl.formatMessage({id:'launchPage.FeatureArea4.2'})}
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
    const intl = useIntl()
    return (
        <Grid item xs={4} sm={8} md={4} sx={{ paddingTop: '3rem'}}>
            <StyledItemArea elevation={0}>
                <StyleIconItem>
                    <StyleIconSize src={featureIcon1}/>
                </StyleIconItem>

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    {intl.formatMessage({id:'launchPage.FeatureArea5.1'})}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    {intl.formatMessage({id:'launchPage.FeatureArea5.2'})}
                    
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

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    {intl.formatMessage({id:'launchPage.FeatureArea6.1'})}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    {intl.formatMessage({id:'launchPage.FeatureArea6.2'})}
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

                
                <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem' }}>
                    {intl.formatMessage({id:'launchPage.FeatureArea7.1'})}
                </Typography>
                <Typography variant="h6" sx={{ color: 'rgb(51,51,51)', textAlign:'center'}}>
                    {intl.formatMessage({id:'launchPage.FeatureArea7.2'})}
                </Typography>
            </StyledItemArea>

        </Grid>
    )
}


const FeatureArea5 = () => {
    const intl = useIntl()
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding:'5rem'}}>
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                {intl.formatMessage({id:'launchPage.FeatureArea.1'})} 
                            </Typography>
                        </Slide>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" >
                                {intl.formatMessage({id:'launchPage.FeatureArea.2'})}
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
    const intl = useIntl()
    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={0} >
                <Grid item xs={12}>
                    <ItemTopArea2 elevation={0}>
                        <Slide direction="right" in={true} mountOnEnter>
                            <Typography variant="h4" sx={{ padding: '5rem 5rem 1rem 5rem' }}>
                                {intl.formatMessage({id:'launchPage.FeatureArea.3'})}
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
        setShowAppStore,
        setShowBlockScan
    } = useAppState()
    
    const HeaderArea = () => {
        const intl = useIntl()

        return (
            <ThemeProvider theme={themeTopArea1}>
                <Grid container spacing={0} >
                    <Grid item xs={12}>
                        <ItemTopArea1 elevation={0}>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{ color: 'white', padding: '8rem 1rem 0rem 1rem' }}>
                                    {intl.formatMessage({id: 'launchPage.HeaderArea.title1-1'})}
                                </Typography>
                            </Grow>
                            <Grow in={true}>
                                <Typography variant="h3" sx={{color: 'white', padding: '0rem 1rem 0rem 1rem'}}>
                                    {intl.formatMessage({id: 'launchPage.HeaderArea.title1-2'})}
                                    
                                </Typography> 
                            </Grow>
                            <Grow in={true}>
                                <Typography variant="h5" sx={{color: 'white', padding: '1rem 1rem 2rem 1rem'}}>
                                    {intl.formatMessage({id: 'launchPage.HeaderArea.title2'})}
                                </Typography>  
                            </Grow>
    
                            <ColorButton onClick={() => {
                                setShowGuide(false)
                                setShowAppStore(true)
    
                            }}>
                                {intl.formatMessage({id: 'launchPage.HeaderArea.button'})}
                            </ColorButton>
                        
                        </ItemTopArea1>
                
                    </Grid>
                    <Grid item xs={12}>
                        <ItemTopArea2 elevation={0}>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h4" sx={{ padding: '5rem 1rem 0rem 1rem' }}>
                                {intl.formatMessage({id: 'launchPage.HeaderArea.secondPart.1'})}
                                </Typography>
                            </Slide>
                            <Slide direction="right" in={true} mountOnEnter>
                                <Typography variant="h4" sx={{ padding: '0rem 1rem 1rem 1rem' }}>
                                    {intl.formatMessage({id: 'launchPage.HeaderArea.secondPart.2'})}
                                </Typography>
                            </Slide>
                                <Typography variant="h6" sx={{ padding: '0rem 5rem 0rem 5rem', color: 'rgb(51,51,51'}}>
                                    {intl.formatMessage({id: 'launchPage.HeaderArea.secondPart.3'})}
                                </Typography>
                                <Typography variant="h6" sx={{ padding: '0rem 5rem 1rem 5rem'}}>
                                    {intl.formatMessage({id: 'launchPage.HeaderArea.secondPart.4'})}
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