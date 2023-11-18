import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import Typography, {TypographyProps} from '@mui/material/Typography'
import { useIntl } from "react-intl"
import Grid from '@mui/material/Grid'


import miner1 from '../../../../assets/miner/BlueGameboyCat.webp'
import miner2 from '../../../../assets/miner/FancyNyan.webp'
import miner3 from '../../../../assets/miner/StarSpangled.webp'


const StyledItemArea1 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    width: '100%',
    padding: '1rem'
}))

const Miner = () => {
    const intl = useIntl ()
    return (
        <StyledItemArea1>
            <img src={miner2} style={{ width: '10rem'}} />
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '1rem'}}>
                    <Typography variant="h6" sx={{fontWeight: '600'}}>
                        {intl.formatMessage({id: 'platform.profile.walletAddr'})}
                    </Typography>
                </Grid>
                <Grid item xs={4} sm={8} md={6} sx={{ paddingTop: '1rem'}}>
                    <Typography variant="h6" sx={{}}>
                        {//wallet.substring(0, 6)+'...'+wallet.substring(wallet.length - 4)
                        }
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="h5" sx={{ fontWeight: '900', textAlign:'center', paddingTop: '2rem', textTransform: 'uppercase' }}>
                {intl.formatMessage({id: 'platform.proxy.featureArea8Item.step1'})}
            </Typography>

        </StyledItemArea1>
    )
}

export default Miner