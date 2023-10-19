import { createTheme, ThemeProvider, makeStyles, rgbToHex } from '@mui/material/styles';
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import styledCom from "styled-components"
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import React, {HTMLAttributes, useState, useEffect} from "react"
import HomeIcon from '@mui/icons-material/Home'
import useAppState from "../../../../store/appState/useAppState"
import SearchInput from '../../../UI/Inputs/searchInput/SearchInput'
import ConetScanIcon from './asset/images/conetscan-log.svg'
import SvgIcon from '@mui/material/SvgIcon'
import Slide from '@mui/material/Slide'
import Typography, {TypographyProps} from '@mui/material/Typography'
import { grey, green } from '@mui/material/colors'
import Chip from '@mui/material/Chip'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import Divider from '@mui/material/Divider'
import {ReactComponent as StarIcon} from '../../../../assets/logo/CoNET_logo.svg'
import type {CryptoAssetHistory} from '../CONET-Proxy/SaasNodes'
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
    paddingBottom: '10rem',
    overflow: "auto",
    maxHeight: '100%'
    
}))

const ItemTopArea1 = styled(Paper)(({ theme }) => ({
    padding: 0,
    borderRadius: 0,
    textAlign: 'center'
}))

const BreadcrumbsArea = styledCom.div`
    padding: 2rem 2rem 0 2rem;

`

const ItemTopArea2 = styled(Paper)(({ theme }) => ({
    padding: '2rem',
    textAlign: 'center'
}))

const headerArea = (setShowBlockScan: (showBlockScan: boolean) => void, setShowGuide: (showguide: boolean) => void) => {

    return (
        <ThemeProvider theme={themeTopArea1}>
            <Grid container spacing={0} >

                <Grid item xs={12}>

                    <ItemTopArea1 elevation={0}>
                        <BreadcrumbsArea>
                            <Grid container spacing={0} >
                                <Grid item xs={3} sx={{marginTop: '0.8rem'}}>
                                    <Breadcrumbs aria-label="breadcrumb">
                                        <Link underline="hover" color="inherit" href="#" sx={{color: '#080213'}}
                                            onClick={() => {
                                                setShowBlockScan (false)
                                                setShowGuide (true)
                                            }}
                                        >
                                            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                                            CONET Home
                                        </Link>
                                    </Breadcrumbs>
                                </Grid>
                                <Grid item xs={9} sx={{textAlign: 'right'}}>
                                    <SearchInput />
                                </Grid>
                            </Grid>
                        </BreadcrumbsArea>
                    </ItemTopArea1>
                </Grid>
                <Grid item xs={2.5} sx={{ padding: '0 2rem 0 '}}>
                    <img src={ConetScanIcon} />

                </Grid>
            </Grid>
        
        </ThemeProvider>
    )
}


const ooo = {
    blockHash: "0xb570cdc8549c176bdc41a87499ac7dc02ef5536051b42ec007b08179b33f8153",
    blockNumber: "58",
    cumulativeGasUsed: "21000",
    effectiveGasPrice: "25000000000",
    from: "0x0a775e944074547b72ac79b7677d2b58fec387e1",
    gasUsed: "21000",
    isSend: true,
    logs: [],
    logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    status: '0',
    time: "2023-10-15T12:50:07.670Z",
    to: "0xa642cfa2ad4790c5a753868480243d720ac472d0",
    transactionHash: "0xbf32ba33e774a9ed9582b639ce829ed59b90096664120b21f135ae9892f45c97",
    transactionIndex: "0",
    type: "Confirmed",
    value: 0.499475
}

export const BlockScanBody = (receipt: CryptoAssetHistory|undefined) => {
    if (receipt === undefined) {
        return (
            <div></div>
        )
    }
    return (
        <Box sx={{background: 'linear-gradient(#fafbfd 0,rgba(246,247,248, 0) 85rem)'}} >
            <ItemTopArea2 elevation={1}>
                
                <Grid container spacing={0} rowSpacing={2} >
                    <Grid item xs={3} sx={{textAlign: 'left'}}>
                        <img src={ConetScanIcon} />
                    </Grid>
                    <Grid item xs={9} sx={{textAlign: 'left'}}>
                        
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Transaction Hash:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left'}} zeroMinWidth>
                        <Typography variant="h6" sx={{ fontSize: '14px'}}>
                            {receipt.transactionHash} 
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Status:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Chip label="Success" variant="outlined" color="success" size="small" icon={<CheckCircleIcon color="success"/>} sx={{ backgroundColor: green[50], borderRadius: '5px'}}/>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Block:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            <span><CheckCircleIcon color="success" sx={{fontSize: '15px', top: '2rem'}}/></span>
                            <span style={{padding: '0 0 0 0.5rem'}}>
                                {receipt.blockNumber}
                            </span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}} zeroMinWidth>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Block Hash:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px'}}>
                            {receipt.blockHash} 
                        </Typography>
                    </Grid>
                    
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Timestamp:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            {receipt.time}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{}}>
                        <Divider />
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Method:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Chip label="Deposit Ether For" variant="outlined" size="small" sx={{ backgroundColor: grey[50], borderRadius: '5px'}}/>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            From:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            {receipt.from}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            To:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            { receipt.to}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{}}>
                        <Divider />
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Value:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Chip label={receipt.value} variant="outlined" size="small" icon={<SvgIcon component={StarIcon} inheritViewBox/>} sx={{ backgroundColor: 'white', border: 'none'}}/>
                        
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Transaction Fee:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            {parseFloat(receipt.gasUsed) * parseFloat(receipt.effectiveGasPrice)/10**18} CONET
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{textAlign: 'left'}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            Gas Price:
                        </Typography>
                    </Grid>
                    <Grid item xs={8} sx={{textAlign: 'left', color: green[700]}}>
                        <Typography variant="h6" sx={{ fontSize: '14px', color: grey[600]}}>
                            {parseFloat(receipt.effectiveGasPrice)/10**9} Gwei CONET
                        </Typography>
                    </Grid>
                </Grid>
            </ItemTopArea2>
        </Box>
    )
}


const BlockScan = () => {
    const {
        setShowGuide,
        setShowBlockScan
    } = useAppState()
    const [receipt, setrRceipt] = useState()
    return (
        <ThemeProvider theme={themeTopArea1} >
            <ItemContainer sx={{ overflowY: 'scroll'}}>
                {headerArea(setShowBlockScan, setShowGuide)}
                {BlockScanBody(ooo)}
            </ItemContainer>
        </ThemeProvider>
    )
}



export default BlockScan