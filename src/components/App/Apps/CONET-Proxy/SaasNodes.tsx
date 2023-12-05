import React, {HTMLAttributes, useState, useEffect} from 'react'
import { styled } from '@mui/material/styles'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import {logger} from '../../logger'
import Chip from '@mui/material/Chip'
import { US } from 'country-flag-icons/react/3x2'
import SvgIcon from '@mui/material/SvgIcon'
import {ReactComponent as CONETIcon} from '../../../../assets/logo/CoNET_logo.svg'
import ConetIcon from '../../../../assets/logo/CoNET_logo.svg'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import BarChartIcon from '@mui/icons-material/BarChart'
import { grey, green, indigo } from '@mui/material/colors'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Link from '@mui/material/Link'
import styledCom from "styled-components"
import useAppState from "../../../../store/appState/useAppState"
import {BlockScanBody} from '../blockscan/index'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export type CryptoAssetHistory = {
	status: string
	Nonce?: string
	to?: string
	transactionFee?: string
	gasLimit?: string
	gasUsed: string
	baseFee?: string
	priorityFee?: string
	totalGasFee?: string
	maxFeePerGas?: string
	transactionHash?: string
	time: string
	blockHash?: string
	blockNumber: string
	contractAddress?: string
	effectiveGasPrice: string
	cumulativeGasUsed: string
	from: string
	logs?: any[]
	logsBloom?: string
	transactionIndex?: string
	type?: string
	value: number
	isSend: boolean

}

export type nodes_info = {
	country: string
	customs_review_total: number
	ip_addr: string
	last_online: string
	lat: number
	lon: number 
	nft_tokenid: string
	outbound_fee: number
	outbound_total: number
	pgp_publickey_id: string
	region: string
	registration_date: string
	storage_fee: number
	storage_total: number
	total_online: number
	wallet_addr: string
	entryChecked?: boolean
	recipientChecked?: boolean
	disable?: boolean
	armoredPublicKey?: string
	CoNETCashWalletAddress: string
	receipt: CryptoAssetHistory[]
    balance: string
}

const ItemTopArea2 = styled(Paper)(({ theme }) => ({
    padding: '2rem',
    borderRadius: '5px',
    textAlign: 'center',
    
}))

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}))


const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

const styleList = {
    width: '100%',
    bgcolor: 'background.paper',
}

const TextLine1 = styledCom.span`

`
const TextLineIcon = styledCom.span`
    top: 0.2rem;
    position: relative;
    padding-left: 0.5rem;
`
const receiptDetail = (receipt: CryptoAssetHistory,openBlockScan: (data: CryptoAssetHistory)=> void) => {
    return (
        <ListItem divider >
            <ListItemText primary={
                <Grid container spacing={0} rowSpacing={0}>
                    <Grid item xs={3} sx={{textAlign: 'left', fontWeight: '600', color: grey[700], fontFamily: '', fontSize: '14px'}}>
                        Address:
                    </Grid>
                    <Grid item xs={9} sx={{textAlign: 'left', fontSize: '14px'}} onClick = {() => window. open(`https://scan.conet.network/address/${receipt.to}`, '_blank', 'noreferrer') }>
                        <Link underline="hover" href="#">
                            {receipt.to}
                        </Link>
                        
                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'left', fontFamily: '', color: grey[700], fontSize: '14px', margin: '0.2rem 0 0 0'}}>
                        Value:
                    </Grid>
                    <Grid item xs={9} sx={{textAlign: 'left', fontSize: '14px'}}>
                        <TextLine1>
                            {receipt.value}
                        </TextLine1>
                        <TextLineIcon >
                            <SvgIcon component={CONETIcon} fontSize='small' inheritViewBox />
                        </TextLineIcon>
                            

                    </Grid>
                    <Grid item xs={3} sx={{textAlign: 'left', fontFamily: '', color: grey[700], fontSize: '14px'}}>
                        Transaction Hash:
                    </Grid>
                    <Grid item xs={9} sx={{textAlign: 'left', fontSize: '14px'}} onClick = {() => window. open(`https://scan.conet.network/tx/${receipt.transactionHash}`, '_blank', 'noreferrer') }>
                        <Link underline="hover" href="#"  >
                            {receipt.transactionHash}
                        </Link>
                    </Grid>
                </Grid>
                
            }/>
        </ListItem>
        
    )
}

const paymentDetail = (node: nodes_info, openBlockScan: (data: CryptoAssetHistory)=> void) => {
    return (
        <Grid container spacing={0} rowSpacing={0}>
            <Grid item xs={12} sx={{textAlign: 'left'}}>
                <Typography sx={{ fontSize: '14px', color: grey[500]}}>
                    Transaction Receipt Event Logs
                </Typography>
                
            </Grid>
            <Grid item xs={12} sx={{textAlign: 'left'}}>
                <List sx={styleList} component="nav" aria-label="mailbox folders">
                    { 
                        node.receipt.map( n => receiptDetail(n, openBlockScan))
                    }
                </List>
                
            </Grid>
            
        </Grid>
    )
}



const nodeItem = (expanded: string|false, handleChange: (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => void, nodes: nodes_info[], proxyLogs: any[]) => {
    const [primary, setprimary] = React.useState(1)
    const [blockScanData, setBlockScanData] = React.useState<CryptoAssetHistory|undefined>()

    const openBlockScan = (data: CryptoAssetHistory) => {
        setBlockScanData (data)
        setprimary(5)
    }
    return (
        <div>
            {
                nodes.map((node, index) => {
                    return (
                        <Accordion expanded={expanded === node.ip_addr} onChange = {handleChange(node.ip_addr)}>
                            <AccordionSummary aria-controls={`${node.ip_addr}`} id={`${node.ip_addr}`}>
                                <Typography fontSize='16px'>
                                    {`Node 0x${node.wallet_addr.substring(2,4)}...${node.wallet_addr.substring(node.wallet_addr.length-4)} `}
                                </Typography>
                                <Chip variant="outlined" size="small" icon={<SvgIcon component={US} inheritViewBox/>} sx={{ backgroundColor: 'none', border: 'none', padding: '0 0 0 1rem'}}/>
                                <Typography fontSize='16px' sx={{padding: '0 0.5rem 0 0', color: 'grey'}}>
                                    {node.ip_addr}
                                </Typography>
                                <Rating value={node.customs_review_total} readOnly size="small" sx={{ top: '0.2rem', padding: '0 0.5rem 0 0'}} />
                                
                                <Chip variant="outlined" label={node.receipt[0].value} size="small" icon={<SvgIcon component={CONETIcon} inheritViewBox/>}  sx={{ backgroundColor: 'none', borderRadius: '5px'}}/>
                                
                                <Chip variant="outlined" label={node.balance} size="small" icon={<BarChartIcon inheritViewBox sx={{color: green[300]}}/>}  sx={{ backgroundColor: 'none', borderRadius: '5px', borderColor: green[300], margin: '0 0 0 0.5rem'}}/>
                                
                            </AccordionSummary>
                            <AccordionDetails>
                                <Grid container spacing={0} rowSpacing={0} sx={{padding: '0 0 1rem 0'}}>
                                    <Grid item xs={12} sx={{textAlign: 'left'}}>
                                        <Chip label="Overview" size="small" sx={{borderRadius:'5px', margin: '0 0 0 0.5rem'}} color={primary === 1 ? "primary": 'default'} 
                                            onClick={() => {
                                                setprimary(1)
                                                }}
                                            />
                                        <Chip label={`Payment (${node.receipt.length})`} size="small" sx={{borderRadius:'5px', margin: '0 0 0 0.5rem'}} color={primary === 2 ? "primary": 'default'} 
                                            onClick={() => {
                                                
                                                setprimary(2)
                                                
                                                }}
                                            />
                                        <Chip label="Logs" size="small" sx={{borderRadius:'5px', margin: '0 0 0 0.5rem'}}  color={primary === 3 ? "primary": 'default'} 
                                            onClick={() => {
                                                setprimary(3)
                                                }}
                                            />
                                        <Chip label="Comments" size="small" sx={{borderRadius:'5px', margin: '0 0 0 0.5rem'}}  color={primary === 4 ? "primary": 'default'} 
                                            onClick={() => {
                                                setprimary(4)
                                                
                                                }}
                                            /> 
                                    </Grid>
                                </Grid>
                                <Box sx={{background: 'linear-gradient(#fafbfd 0,rgba(246,247,248, 0) 85rem)'}}>
                                    <ItemTopArea2 elevation={1}>
                                        {
                                            primary === 2 &&
                                                paymentDetail (node, openBlockScan)
                                        }
                                        {
                                            primary === 5 &&
                                                BlockScanBody(blockScanData)
                                        }
                                        
                                        
                                    </ItemTopArea2>
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    )
                })
            }
        </div>
    )
}

const SaasNodes = (regiestNodes: nodes_info[], proxyLogs: any[]) =>  {

    const [expanded, setExpanded] = React.useState<string | false>('panel1')
    const [expandedMain, setExpandedMain] = React.useState(regiestNodes.length > 0 ? true: false)

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false)
        }

    return (
        
        <Accordion expanded={expandedMain} onChange={() => setExpandedMain(expandedMain ? false: true)}>
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{backgroundColor: 'rgb(248,248,248)'}}
            >
                <Typography variant="h6" sx={{ fontSize: '15px', textTransform: 'uppercase' }}>Usage</Typography>
            </AccordionSummary>
                
            <AccordionDetails>
                {nodeItem(expanded, handleChange, regiestNodes, proxyLogs)}
            </AccordionDetails>
        </Accordion>
    )
}

export default SaasNodes