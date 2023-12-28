import {Grid, CircularProgress, styled as materialStyled, TableContainer,SvgIcon, Table, Link, Paper, TableHead, TableRow, TableCell, TableBody, Typography, Stack, Box, Icon, Fade} from '@mui/material'
import { useIntl } from "react-intl"
import React, {useState, useEffect} from "react"
import { initListenState, getAllNodes} from '../../../../API/index'
import WalletIcon from '@mui/icons-material/Wallet'
import { LogoIcon, LogoText} from "../../../../components/UI/Logo/Logo"
import { red, blueGrey, blue, green, grey } from '@mui/material/colors'
import PublicIcon from '@mui/icons-material/Public'
import {US,JP, SG, AU, CA, KR, IN, IE, SE} from 'country-flag-icons/react/3x2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { loadCSS } from 'fg-loadcss'
import { Pie } from 'react-chartjs-2'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faContao } from '@fortawesome/free-brands-svg-icons'
import { Container, createStyles, makeStyles } from "@mui/material"
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow'

ChartJS.register(ArcElement, Tooltip, Legend)
const ItemStyle = materialStyled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',

    padding: '0.5rem',
	height: '4rem'
}))

const ItemStylePie = materialStyled(Paper)(() => ({
    textAlign: 'center',
    borderRadius: '1rem',
    padding: '0.5rem',
	height: '23rem'
}))

interface nodeType {
	ip_addr: string
	minerAddr: string
	running: boolean
	wallet_addr: string
	balance: string
	country: string
}
interface pieDatasets {
	label: string
	data: number[]
	backgroundColor: string[]
	borderColor: string[]
	borderWidth: number
}
interface pieData {
	labels: string[]
	datasets: pieDatasets[]
}

const countryGetIcon = (country: string) => {
	switch (country) {
		case 'US': {
			return <SvgIcon component={US} inheritViewBox/>
		}
		case 'AU': {
			return <SvgIcon component={AU} inheritViewBox/>
		}
		case 'CA': {
			return <SvgIcon component={CA} inheritViewBox/>
		}
		case 'KR': {
			return <SvgIcon component={KR} inheritViewBox/>
		}
		case 'IN': {
			return <SvgIcon component={IN} inheritViewBox/>
		}
		case 'IE': {
			return <SvgIcon component={IE} inheritViewBox/>
		}
		case 'SE': {
			return <SvgIcon component={SE} inheritViewBox/>
		}
		case 'SG': {
			return <SvgIcon component={SG} inheritViewBox/>
		}
		case 'JP': {
			return <SvgIcon component={JP} inheritViewBox/>
		}
	}
		
	
}

const PieChart = (minted: number) => {
	const totalCNTP = 100000000
	const balance = totalCNTP - minted
	const intl = useIntl()
	const data: pieData = {
		labels: [
			intl.formatMessage({id: 'platform.conet.explorer.CNTP.balance'}),
			intl.formatMessage({id: 'platform.conet.explorer.CNTP.mint'}),
		],
		datasets: [{
			label: '',
			data: [balance, minted],
			backgroundColor: [
				'#6e7b63',
				'#a1b095',
			],
			//@ts-ignore
			hoverOffset: 0,
			borderWidth: 0.5,
		}]
	}

	return (
		<Box>
			{
				minted > 0 &&
				<Pie data={data} />
			}
		</Box>
		
	)
}

const Overview = () => {
	const intl = useIntl()
	const [lastBlock, setLastBlock] = useState(0)
	const [nodes, setNodes] = useState(0)
	const [runningNodes, setRunningNodes] = useState(0)
	const [walletCounting, setWalletCounting] = useState(0)
	const [CNTPBalance, setCNTPBalance] = useState('')
	const [CNTPMint, setCNTPMint] = useState(0)
	const [nodesDetail, setNodesDetail] = useState<nodeType[]>([])
	

	const setDates = (data: any) => {
		setCNTPMint(n => data.balance.toFixed(0))
		const bala = (((100000000-data.balance)/100000000)*100).toFixed(2)
		setCNTPBalance(n => bala.toString()+'%')
		const nodes: nodeType[] = data.nodes
		
		if (nodes?.length > 1) {
			setNodesDetail(n => data.nodes)
			
			nodes.sort((a,b) =>parseFloat(b.balance) - parseFloat(a.balance))
			setNodes(nodes.length)
			const running = nodes.filter(n => n.running)
			setRunningNodes(n => running.length)
		}
		
		
	}
	
	useEffect(() => {
        
        const fetchData = async () => {
			if (!active) {
				return
			}
			fetch('https://scan.conet.network/api/v2/stats', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json;charset=UTF-8',
					'Connection': 'close',
				},
				cache: 'no-store',
				referrerPolicy: 'no-referrer'
			})
			.then ( async res => res.json())
			.then( async data => {
				console.log (data)
				setLastBlock(data.total_blocks)
				setWalletCounting(data.total_addresses)
				const [succes, nodes] = await getAllNodes()
				setDates(nodes[0])
				initListenState('cntp-balance', data => {
					return setDates(data)
				})
			})
			const node = loadCSS(
					'https://use.fontawesome.com/releases/v6.5.1/css/all.css',
					// Inject before JSS
					//@ts-ignore
					document.querySelector('#font-awesome-css') || document.head.firstChild)
		  
			  return () => {
				node.parentNode!.removeChild(node)
			};
        }
		
		let active = true
        fetchData()
        return () => { active = false }

    }, [])

	return (
		<>
			<Grid item md={6} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack direction="column" alignItems="center">
						<Typography variant="body1" sx={{ }}>
							{intl.formatMessage({id: 'platform.conet.explorer.lastBlock'})}
						</Typography>
						<Stack spacing={0} direction="row" alignItems="center">
							<Typography variant="body1" sx={{ fontWeight: '900'}}>
								{lastBlock} / {walletCounting}
							</Typography>
						</Stack>
					</Stack>
				</ItemStyle>
				
			</Grid>
			<Grid item md={6} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStyle>
					<Stack direction="column" alignItems="center">
						<Typography variant="body1" sx={{ }}>
							{intl.formatMessage({id: 'platform.conet.explorer.nodes'})}
						</Typography>
						<Stack spacing={0} direction="row" alignItems="center">
							<Typography variant="body1" sx={{ fontWeight: '900'}}>
								{nodes} / {runningNodes}
							</Typography>
						</Stack>
					</Stack>
				</ItemStyle>
			</Grid>
			<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center'}}>
				<ItemStylePie >
					<Stack direction="column" alignItems="center" spacing={1}>
						<Typography variant="body1" sx={{padding: '1rem 0 0 0' }}>
							{intl.formatMessage({id: 'platform.conet.explorer.CNTP'})} 100,000,000
						</Typography>
						<Stack spacing={0} direction="column" alignItems="center">
							{PieChart(CNTPMint)}
						</Stack>
						
					</Stack>
				</ItemStylePie>
			</Grid>
			<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '0 0 0 0'}}>
				<Stack direction="row"
				justifyContent="center"
				alignItems="center"
				spacing={4}>
					<Typography variant="h5" sx={{ fontWeight: '900', padding: '2rem 0 0 0'}}>
						{intl.formatMessage({id: 'platform.conet.explorer.CNTP.relayNodes'})} 
					</Typography>
				</Stack>
			</Grid>
			<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '0 0 2rem 0'}}>
				<TableContainer component={Paper} sx={{width: '100%'}}>
					<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table"
					//@ts-ignore
					 sx={{width: '100%'}}>
						<TableBody>
							{
								!nodesDetail.length &&
								<Stack 
									direction="column"
									justifyContent="center"
									alignItems="center"
									spacing={2}
									sx={{minHeight: '5rem', width: '100%'}}
								>
									<CircularProgress />
								</Stack>
							}
							{
								nodesDetail.map(n => (
									<TableRow
										key={n.ip_addr}
										sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
									>
										<TableCell component="th" scope="row">
											<Link target="_blank" href={'https://scan.conet.network/address/'+n.minerAddr+'?tab=token_transfers'}>
												{n.wallet_addr.substring(0,5)+'....'+ n.wallet_addr.substring(37)}
											</Link>
											
										</TableCell>
										<TableCell component="th" scope="row">
											{n.ip_addr}
										</TableCell>
										<TableCell component="th" scope="row">
											{countryGetIcon(n.country)}
										</TableCell>
										<TableCell component="th" scope="row">
											<Icon baseClassName="fa-solid" className="fa-gear fa-spin" sx={{ fontSize: 10, color: '#6e7b63' }} />
										</TableCell>
										<TableCell component="th" scope="row" align="right">
											<Stack direction="row" alignItems="center" sx={{width: '100%'}} justifyContent="flex-end">
												<Fade in={n.balance.length>0}>
													<Typography variant="body2" sx={{ padding: '0rem 0 0 0', textAlign: 'right'}}>
														{n.balance}
													</Typography>
												</Fade>
												
												<LogoIcon size={20} color={green[300]}/>
											</Stack>
												
										
											
										</TableCell>
										
									</TableRow>
								))
							}
						</TableBody>
					</Table>
				</TableContainer>
				
			</Grid>
		</>
	)
}

const NodeExplorer = () => {
	const intl = useIntl()
	return (
		<Grid container spacing={1} columns={{ xs: 4, sm: 8, md: 12}} sx={{padding: '0rem 0 10rem 0', width: '100%'}}>
			<Grid item md={12} sm={8} xs={4} sx={{textAlign: 'center', width: '100%', padding: '0 0 2rem 0'}}>
				<Typography variant="h4" sx={{ fontWeight: '900'}}>
						{intl.formatMessage({id: 'platform.conet.explorer.title'})}
				</Typography>

			</Grid>
			< Overview/>
			
		</Grid>
	)
}

export default NodeExplorer