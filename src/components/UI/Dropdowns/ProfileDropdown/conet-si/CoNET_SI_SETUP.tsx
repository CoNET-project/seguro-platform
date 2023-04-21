import React, {HTMLAttributes, useState, useEffect, forwardRef} from "react"
import type {ProfileData, nodes_info} from "../../../../../store/appState/appStateReducer"
import Dialog , {DialogProps} from '@mui/material/Dialog'
import Draggable from 'react-draggable'
import Paper, { PaperProps } from '@mui/material/Paper'
import { TransitionProps } from '@mui/material/transitions'
import Slide , {SlideProps} from '@mui/material/Slide'
import {getWorkerService} from '../../../../../services/workerService/workerService'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import Typography from '@mui/material/Typography'
import {FormattedMessage} from "react-intl"
import DialogContent from '@mui/material/DialogContent'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import { red, blueGrey, blue, green, grey } from '@mui/material/colors'
import ListItem from '@mui/material/ListItem'
import DialogContentText from '@mui/material/DialogContentText'
import CircularProgress from '@mui/material/CircularProgress'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import InternetPackage from '../../../../../assets/images/InternetPackage.jpg'
import Conet_SI_Package from '../../../../../assets/images/conet-SI-package.jpg'
import Conet_SI_miner from '../../../../../assets/images/conet-si-miner.jpg'
import Conet_SI_image from '../../../../../assets/images/conet-si-anonymous.jpg'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import DnsIcon from '@mui/icons-material/Dns'
import ListItemText from '@mui/material/ListItemText'
import Rating from '@mui/material/Rating'
import Link from '@mui/material/Link'
import Divider from '@mui/material/Divider'
import styled from 'styled-components'
import { styled as mui_styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Badge from '@mui/material/Badge'
import Checkbox from '@mui/material/Checkbox'
import Fab from '@mui/material/Fab'
import Done from '@mui/icons-material/Done'
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import TextField from '@mui/material/TextField'
import useAppState from "../../../../../store/appState/useAppState"
import InputAdornment from '@mui/material/InputAdornment'
import Button from '@mui/material/Button'
import InputBase from '@mui/material/InputBase'
import { CNTCashLogoIcon } from '../../../Logo/CNTCash'

import MuiAccordionSummary, {
	AccordionSummaryProps,
  } from '@mui/material/AccordionSummary'
type CoNETSINodeProps = {
    closeWindow: () => void
	winOpen: boolean
	currentProfile: ProfileData
} & HTMLAttributes<HTMLDivElement>



const Transition = forwardRef(function Transition(
	props: TransitionProps & {
	   children: React.ReactElement
	},
	ref: React.Ref<unknown>,
	) {
		return <Slide direction="up" ref={ref} {...props} />
	}
)

const label = { inputProps: { 'aria-label': 'CoNET-SI node list' } }

type siListAccordion = `aboutSI`|`selectRecipient`|'selectEntryNode'|'aboutSINode'|'recipientRegisters'|false

const StyleImg = styled.img`
	display: block;
	margin-left: auto;
	margin-right: auto;
	width: 50%;
`

const CoNETSINodesComponent = (props: PaperProps) => {
	return (
		<Draggable
		  handle="#draggable-dialog-title"
		  cancel={'[class*="MuiDialogContent-root"]'}
		>
		  <Paper {...props} />
		</Draggable>
	  )
}

const Accordion = mui_styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => (
	
	{
	
	border: `1px solid ${ theme.palette.divider}`,
	'&:not(:last-child)': {
	  	borderBottom: 0,
	},
	'&:before': {
	  	display: 'none',
	},
}))

const AccordionSummary1 = mui_styled((props: AccordionSummaryProps) => (
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
	  	marginLeft: '1rem',
	}
}))

const CoNET_SI_Entry_node_MaxSelectd = 4
const CoNET_SI_Recipient_node_MaxSelectd = 1

const CoNETSINodeSetup = ({closeWindow, winOpen, currentProfile }: CoNETSINodeProps) => {
	const { updateClientProfiles } = useAppState()
	const [nodeListAccordionOpen, setNodeListAccordionOpen] = useState<siListAccordion> ('aboutSI')
	const [nodeEntryNodeAccordionTitle, setEntryNodeAccordionTitle] = useState(<FormattedMessage id='platform.ProfileDropdown.nodelist.title'/>)
	const [nodeRecipientNodeAccordionTitle, setRecipientNodeAccordionTitle] = useState(<FormattedMessage id='platform.ProfileDropdown.nodelist.title'/>)
	const [loading, setLoading] = useState(false)
	const [resultError, setResultError] = useState(false)
	const [showCoNET_SI_entry_FAB, setShowCoNET_SI_entry_FAB] = useState(false)
	const [showCoNET_SI_Recipient_FAB, setShowCoNET_SI_Recipient_FAB] = useState(false)
	const [showCoNET_SI_Recipient_Badge, setShowCoNET_SI_Recipient_Badge] = useState(0)
	const [showCoNET_SI_RecipientPayment_Badge, setShowCoNET_SI_RecipientPayment_Badge] = useState(0)
	const [showRecipientAccordion, setShowRecipientAccordion] = useState(false)
	const [showCoNET_SI_entry_Badge, setShowCoNET_SI_entry_Badge] = useState(0)
	const [conet_si_nodes, setConet_si_nodes] = useState <nodes_info[]>([])
	const [allEntryDisabled, setAllEntryDisabled ] = useState(false)
	const [allRecipientDisabled, setAllRecipientDisabled ] = useState(false)
	const [showRecipientRegisters, setShowRecipientRegisters ] = useState(false)
	const [showFinishedRecipientRegisters, setShowFinishedRecipientRegisters ] = useState(false)
	const [showCoNETCashInputError, setShowCoNETCashInputError ] = useState(false)
	const [coNETCashInput, setCoNETCashInput ] = useState<number|''>(1)
	const [coNETCashbalance, setCoNETCashbalance ] = useState(0)

	const handleAccordionChange =
	(panel: siListAccordion) => (event: React.SyntheticEvent, isExpanded: boolean) => {
		setNodeListAccordionOpen(isExpanded ? panel : false)
	}

	const workerService = getWorkerService()

	
	const dialogHandleClose = () => {
		closeWindow ()
	}

	const wacky_round = (bb: number, places: number) => {
		var multiplier = Math.pow(10, places+2) // get two extra digits
		var fixed = Math.floor(bb*multiplier) // convert to integer
		fixed += 44 // round down on anything less than x.xxx56
		fixed = Math.floor(fixed/100)// chop off last 2 digits
		return fixed/Math.pow(10, places)
	}

	const checkDisableShow = (rows: nodes_info[]) => {
		let entryCount = 0
		let recipientCount = 0
		rows.forEach (n => {
			if ( n.entryChecked){
				entryCount ++
			}
			if ( n.recipientChecked ) {
				recipientCount ++
			}
		})
		if (entryCount >= CoNET_SI_Entry_node_MaxSelectd ) {
			setAllEntryDisabled (true)
		}
		if (recipientCount >= CoNET_SI_Recipient_node_MaxSelectd ) {
			setAllRecipientDisabled (true)
		}
	}

	const dialogHandleOpen = () => {
		
		if (!currentProfile?.network?.entrys?.length ) {
			setShowCoNET_SI_entry_Badge (1)
		} else {
			setShowRecipientAccordion (true)
			if ( !currentProfile.network.recipients.length ) {
				setShowCoNET_SI_Recipient_Badge (1)
				setNodeListAccordionOpen('selectRecipient')
			} else {
				if (!currentProfile?.network?.payment?.length) {
					setShowCoNET_SI_RecipientPayment_Badge (1)
				}
				setShowRecipientRegisters (true)
				setNodeListAccordionOpen('recipientRegisters')
			}
		}

		setCoNETCashbalance(workerService.data.CoNETCash?.Total-1)
		if ( !workerService.method?.getSINodes ){
			return
		}

		setLoading (true)
		return workerService.method.getSINodes ('TOTAL_ONLINE_TIME', 'USA')
			.then ((n: any ) => {
				setLoading (false)
				const [status, _data] = n
				if (status!=='SUCCESS') {
					return setResultError (true)
				}
				setEntryNodeAccordionTitle(<FormattedMessage id='platform.ProfileDropdown.nodelist.entryNodeTitle'/>)
				setRecipientNodeAccordionTitle(<FormattedMessage id='platform.ProfileDropdown.nodelist.registersRecipientTitle'/>)
				const uu: nodes_info[] = _data
				if ( !uu ) {
					return setResultError (true)
				}
				checkDisableShow (uu)
				return setConet_si_nodes (uu)
				
			})
		
	}

	const getCountry = (country: string) => {
		switch (country) {
			case 'DE': {
				return (
					<FormattedMessage id='platform.country.de'/>
				)
			}
			case 'GB': {
				return (
					<FormattedMessage id='platform.country.gb'/>
				)
			}
			case 'ES': {
				return (
					<FormattedMessage id='platform.country.es'/>
				)
			}
			case 'US':
			default: {
				return (
					<FormattedMessage id='platform.country.us'/>
				)
			}
		}
	}

	const conet_si_entry_confirmButton = () => {
		const currentProfileIndex = workerService.data.profiles.findIndex((n:any) => {
			return n.isPrimary
		})

		const profile:  ProfileData = JSON.parse(JSON.stringify(workerService.data.profiles[currentProfileIndex]))
		
		const rows: nodes_info[] = conet_si_nodes
		const siSetup = rows.filter (n => n.entryChecked )
		profile.network = {
			entrys: siSetup,
			recipients: [],
			payment: []
		}

		updateClientProfiles (profile)
		setNodeListAccordionOpen('selectRecipient')
		setShowRecipientAccordion (true)
		setShowCoNET_SI_entry_Badge (0)
	}

	const conet_si_Recipient_confirmButton = () => {
		const currentProfileIndex = workerService.data.profiles.findIndex((n:any) => {
			return n.isPrimary
		})

		const profile:  ProfileData = JSON.parse(JSON.stringify(workerService.data.profiles[currentProfileIndex]))
		
		const rows: nodes_info[] = conet_si_nodes
		const siSetup = rows.filter ( n=> n.recipientChecked )
		if (profile?.network?.recipients) {
			profile.network.recipients = siSetup
		}

		updateClientProfiles (profile)
		setNodeListAccordionOpen('recipientRegisters')
		setShowRecipientRegisters (true)
		setShowCoNET_SI_entry_Badge (0)
		setShowCoNET_SI_RecipientPayment_Badge (1)
		
	}

	useEffect(() => {
        dialogHandleOpen()
    }, [])

	const controlledCheckbox = (n: number, check: boolean, max: number, showFab: React.Dispatch<React.SetStateAction<boolean>>, isEntry: boolean) => {
		const old = [...conet_si_nodes]

		const currectItem = old[n]

		if ( isEntry ) {
			currectItem.entryChecked = check
		} else {
			currectItem.recipientChecked = check
		}
		setConet_si_nodes(old)
		const checkedGroup = old.filter (n => isEntry ? n.entryChecked : n.recipientChecked )
		const length = checkedGroup.length
		if (check) {
			showFab (true)
			if (length >= max) {
				return isEntry ? setAllEntryDisabled (true) : setAllRecipientDisabled (true)
			}
			return isEntry ? setAllEntryDisabled (false) : setAllRecipientDisabled (false)
		}
		
		if ( length < max ) {
			isEntry ? setAllEntryDisabled (false) : setAllRecipientDisabled (false)
		}
		if (length === 0) {
			showFab (false)
		}
	}

	const fabEntryTitle = (max: number, isEntry: boolean) => {
		const checkedGroup = conet_si_nodes.filter (n => isEntry ? n.entryChecked : n.recipientChecked )
		const length = checkedGroup.length
		const k = ''
		k.toUpperCase
		if (length >= max) {
			return(
				<FormattedMessage id='platform.ProfileDropdown.conet_si.nodes.maxConfirm'/>
			)
		}
		return (
			<FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>
		)
	}

	const checked_check = (n: nodes_info, isEntry: boolean) => {
		if ( isEntry ? n.entryChecked : n.recipientChecked ) {
			return false
		}
		if ( isEntry ? n.recipientChecked: n.entryChecked ) {
			return true
		}

		const allDisabled = isEntry ? allEntryDisabled : allRecipientDisabled

		if ( allDisabled ) {
			return true
		}

		return false
	}

	const shoeNodeList = (n: nodes_info, index: number, length: number, setShoeFab: React.Dispatch<React.SetStateAction<boolean>>, isEntry: boolean, divider: boolean, showCheckBox: boolean) => {
		if (!isEntry && n.entryChecked ) {
			return 
		}
		const linkUrl = `https://${n.pgp_publickey_id}.openpgp.online`
		return (
			<Box key={index}>
				<ListItem alignItems="flex-start" >
				<Grid container spacing={2}>
					<Grid item>
						<ListItemAvatar>
							<DnsIcon fontSize="large" color="primary"/>
						</ListItemAvatar>
					</Grid>
					<Grid item xs={11} sm container>
						<Grid item xs container spacing={0}>
							<Grid item xs={12}>
								<Link href={linkUrl} variant="body2" underline="always" target="_blank">{n.pgp_publickey_id}</Link>
							</Grid>
							<Grid item xs={9}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									<FormattedMessage id='platform.ProfileDropdown.nodelist.country'/>
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									{getCountry(n.country)}
								</Typography>
							</Grid>
							<Grid item xs={9}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									<FormattedMessage id='platform.ProfileDropdown.nodelist.ipAddress'/>
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									{n.ip_addr}
								</Typography>
							</Grid>
							<Grid item xs={9}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									<FormattedMessage id='platform.ProfileDropdown.nodelist.registersDate' />
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									{new Date (n.registration_date).toLocaleDateString()}
								</Typography>
							</Grid>
							<Grid item xs={9}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									<FormattedMessage id='platform.ProfileDropdown.nodelist.keep' />
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									{ n.total_online }
								</Typography>
							</Grid>
							<Grid item xs={9}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									<FormattedMessage id='platform.ProfileDropdown.nodelist.storagePrice' />
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									{ wacky_round(n.storage_fee, 6) }
								</Typography>
							</Grid>
							<Grid item xs={9}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									<FormattedMessage id='platform.ProfileDropdown.nodelist.outboundPrice' />
								</Typography>
							</Grid>
							<Grid item xs={3}>
								<Typography variant="caption" sx={{ color: 'text.secondary' }}>
									{ wacky_round(n.outbound_fee * 1000, 6) }
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Rating name="read-only" value={n.customs_review_total} readOnly />
							</Grid>
						</Grid>
					</Grid>
					{
						showCheckBox && 
							<Grid item>
								<Checkbox {...label}
									sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
									onChange={(e)=> {controlledCheckbox(index, e.target.checked, length, setShoeFab, isEntry)}}
									disabled={checked_check(n, isEntry)}
									checked={isEntry ? n.entryChecked: n.recipientChecked}
								/>
							</Grid>
					}
					
				</Grid>
					
				</ListItem>
				{
					divider && <Divider variant="inset" component="li" />
				}
			</Box>
			
		)
	}

	const registersConfirmButtonClick = () => {
		if (showCoNETCashInputError) {
			return
		}
		if ( typeof coNETCashInput !== 'number' || !workerService.method?.getRecipientCoNETCashAddress) {
			return
		}
		setResultError (false)
		setLoading (true)
		setShowFinishedRecipientRegisters(false)

		return workerService.method.getRecipientCoNETCashAddress (coNETCashInput, (data: any) => {
			if ( typeof workerService.method.listening ==='function') {
				return workerService.method.listening (data)
			}
		})
			.then ((ret: any ) => {
			const [status, _data] = ret
			setLoading (false)
			if (status !== 'SUCCESS') {
				return setResultError (true)
			}
			setShowFinishedRecipientRegisters(true)
			setShowCoNET_SI_RecipientPayment_Badge (0)
		})
	}

	return (
		<Dialog
			open = {winOpen}
			onClose = {dialogHandleClose}
			TransitionComponent = { Transition }
			PaperComponent = {CoNETSINodesComponent} 
			sx={{width: '100%'}}
			fullScreen
		>
			<Toolbar>
				<IconButton
					edge="start"
					
					onClick={dialogHandleClose}
					aria-label="close"
					color='primary'
				>
					<CloseIcon />
				</IconButton>

				<Typography sx={{ ml: 2, flex: 1, color: blue[600] }} variant="subtitle1" component="div">
					<FormattedMessage id='platform.ProfileDropdown.SI.network.title'/>
				</Typography>
			</Toolbar>
			<DialogContent>
				<Accordion expanded = {nodeListAccordionOpen === 'aboutSI'} onChange = {handleAccordionChange('aboutSI')}>
					<AccordionSummary1
						id="aboutSI"
					>
						<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
							<FormattedMessage id='platform.ProfileDropdown.nodelist.CoNET.SI'/>
						</Typography>
					</AccordionSummary1>
					<AccordionDetails>
						<Container maxWidth="md">
							<Grid container spacing={2} justifyContent="center" alignItems="center">
								<Grid item xs={12}>
									<Typography variant="body1" sx={{ color: 'text.secondary' }}>
										<FormattedMessage id='platform.ProfileDropdown.nodelist.about'/>
									</Typography>
								</Grid>

								<Grid item xs={6}>
									<Paper elevation={0}>
										<StyleImg src={InternetPackage} />
									</Paper>
								</Grid>
								<Grid item xs={6}>
									<Paper elevation={0} >
										<StyleImg src={Conet_SI_Package} />
									</Paper>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body1" sx={{ color: 'text.secondary' }}>
										<FormattedMessage id='platform.ProfileDropdown.nodelist.about1'/>
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="body1" sx={{ color: 'text.secondary' }}>
										<FormattedMessage id='platform.ProfileDropdown.nodelist.about2'/>
									</Typography>
								</Grid>
							</Grid>
							
						</Container>
						
					</AccordionDetails>
				</Accordion >
				<Accordion expanded = {nodeListAccordionOpen === 'aboutSINode'} onChange = {handleAccordionChange('aboutSINode')}>
					<AccordionSummary1
						id="aboutSINode"
					>
						<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
							<FormattedMessage id='platform.ProfileDropdown.conet_si.nodes.title'/>
						</Typography>
					</AccordionSummary1>
					<AccordionDetails>
						<Container maxWidth="md">
							<Grid container spacing={1}>
								<Grid item xs={12}>
									<StyleImg src={ Conet_SI_miner } />
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
										<FormattedMessage id='platform.ProfileDropdown.conet_si.nodes.detail'/>
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
										<FormattedMessage id='platform.ProfileDropdown.conet_si.nodes.mining'/>
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Link href="https://www.CoNETTech.ca" underline="always" target="_blank">
										<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
											<FormattedMessage id='platform.ProfileDropdown.CoNET.website'/>
										</Typography>
									</Link>
									
								</Grid>
							</Grid>
							
						</Container>
					
						
					</AccordionDetails>
				</Accordion>
				<Accordion expanded = {nodeListAccordionOpen === 'selectEntryNode'} onChange = {handleAccordionChange('selectEntryNode')}>
					<AccordionSummary1
						id="selectEntryNode"
					>
						<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
							<Badge
								color='warning'
								badgeContent={ showCoNET_SI_entry_Badge }
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
							>
								{nodeEntryNodeAccordionTitle}
							</Badge>
							
						</Typography>
					</AccordionSummary1>
					<AccordionDetails>
						<Container maxWidth="md">
							<List sx={{ width: '100%'}}>
								<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
									<DialogContentText>
										<FormattedMessage id='platform.ProfileDropdown.nodelist.entryNodeditail'/>
									</DialogContentText>
								</ListItem>
								<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
									<DialogContentText>
										<FormattedMessage id='platform.ProfileDropdown.nodelist.selectEntryNode'/>
									</DialogContentText>
								</ListItem>
								{
									resultError &&			//			show Error
										<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%', padding: '2rem'}}>
											<DialogContentText sx={{ ml: 2, flex: 1, color: red[700] }}>
												<FormattedMessage id='platform.ProfileDropdown.SI.network.listError'/>
											</DialogContentText>
										</ListItem>
								}
								{
									loading && 				//			show Loading
										<>
											<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
												<DialogContentText>
													<FormattedMessage id='platform.ProfileDropdown.SI.network.loading'/>
												</DialogContentText>
											</ListItem>
											<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
												<CircularProgress />
											</ListItem>
										</>
								}
								{
									showCoNET_SI_entry_FAB && 				//	show FAB	
										<ListItem
											onClick={conet_si_entry_confirmButton}
											sx={{ textAlign: 'right',display: 'block'}}
										>
											<Fab variant="extended" color="primary" aria-label="add">
												<Done sx={{ mr: 1 }} />
												<Typography variant="h6" gutterBottom sx={{ color: 'white', paddingRight: '1rem', textTransfor:'capitalize!important' }} >
													{fabEntryTitle(CoNET_SI_Entry_node_MaxSelectd, true)}
												</Typography>
											</Fab>
										</ListItem>
								}
								{
									conet_si_nodes &&
										conet_si_nodes.map (( n: nodes_info, index: number ) => 
											shoeNodeList(n, index, CoNET_SI_Entry_node_MaxSelectd, setShowCoNET_SI_entry_FAB, true, true, true )
										)
								}
							</List>
												
						</Container>
					</AccordionDetails>
					
				</Accordion>
				{
					showRecipientAccordion &&
						<Accordion expanded = {nodeListAccordionOpen === 'selectRecipient'} onChange = {handleAccordionChange('selectRecipient')}>
							<AccordionSummary1 aria-controls="panel1a-content"
								id="selectRecipient"
							>
								<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
									<Badge
										color='warning'
										badgeContent={ showCoNET_SI_Recipient_Badge }
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
									>
										{nodeRecipientNodeAccordionTitle}
									</Badge>
								</Typography>
							</AccordionSummary1>
							<AccordionDetails>
								<Container maxWidth="md">
									<Grid container spacing={1}>
										<Grid item xs={12}>
											<StyleImg src={ Conet_SI_image } />
										</Grid>
										<Grid item xs={12}>
											<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
												<FormattedMessage id='platform.ProfileDropdown.nodelist.registersRecipientInfo1'/>
											</Typography>
										</Grid>
										<Grid item xs={12}>
											<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
												<FormattedMessage id='platform.ProfileDropdown.nodelist.registersRecipientInfo2'/>
											</Typography>
										</Grid>
									</Grid>
									<List sx={{ width: '100%'}}>

										{
											resultError &&			//			show Error
												<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%', padding: '2rem'}}>
													<DialogContentText sx={{ ml: 2, flex: 1, color: red[700] }}>
														<FormattedMessage id='platform.ProfileDropdown.SI.network.listError'/>
													</DialogContentText>
												</ListItem>
										}
										{
											loading && 				//			show Loading
												<>
													<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
														<DialogContentText>
															<FormattedMessage id='platform.ProfileDropdown.SI.network.loading'/>
														</DialogContentText>
													</ListItem>
													<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
														<CircularProgress />
													</ListItem>
												</>
										}
										
										{
											showCoNET_SI_Recipient_FAB && 				//	show FAB	
												<ListItem
													onClick={conet_si_Recipient_confirmButton}
													sx={{ textAlign: 'right',display: 'block'}}
													
												>
													<Fab variant="extended" color="primary" aria-label="add">
														<Done sx={{ mr: 1 }} />
														<Typography variant="h6" gutterBottom sx={{ color: 'white', paddingRight: '1rem', textTransfor:'capitalize!important' }} >
															{fabEntryTitle(CoNET_SI_Entry_node_MaxSelectd, true)}
														</Typography>
													</Fab>
												</ListItem>
										}
										{
											conet_si_nodes &&
												<List sx={{ width: '100%'}}>
													{
														conet_si_nodes.map (( n: nodes_info, index: number ) => shoeNodeList(n, index, CoNET_SI_Recipient_node_MaxSelectd, setShowCoNET_SI_Recipient_FAB, false, true, true))
													}
												</List>
												
										}
										
									</List>
								</Container>
							</AccordionDetails>
							
						</Accordion>
				}
				{
					showRecipientRegisters &&
					<Accordion expanded = {nodeListAccordionOpen === 'recipientRegisters'} onChange = {handleAccordionChange('recipientRegisters')}>
						<AccordionSummary1 aria-controls="panel1a-content"
								id="recipientRegisters"
							>
							<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
								<Badge
										color='warning'
										badgeContent={ showCoNET_SI_RecipientPayment_Badge }
										anchorOrigin={{
											vertical: 'top',
											horizontal: 'left',
										}}
									>
										<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.setupTitile'/>
									</Badge>
							</Typography>
						</AccordionSummary1>
						<AccordionDetails>
							<Container maxWidth="md">
								<Grid container spacing={1}>
									<Grid item xs={12}>
										<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
											<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.detail1'/>
										</Typography>
									</Grid>
									
									
									<Grid item xs={12}>
										<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
											<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.authorizationInformation'/>
										</Typography>
									</Grid>

									<Grid item xs={12}>
										<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
											<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.detail2'/>
										</Typography>
									</Grid>
									<Grid item xs={12}>
										{
											currentProfile.network?.recipients.map (( n: nodes_info, index: number ) => shoeNodeList(n, index, CoNET_SI_Recipient_node_MaxSelectd, setShowCoNET_SI_Recipient_FAB, false, false, !showFinishedRecipientRegisters))
										}
									</Grid>
									{
										!showFinishedRecipientRegisters && coNETCashbalance >= 0 &&
											<Grid item xs={12}>
												<TextField
													size="small"
													InputProps={{
														readOnly: true,
													}}
													label={<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.CoNETCashBalance'/>} 
													fullWidth
													color='primary'
													value={coNETCashbalance}
													type="number"
													
												/>
											</Grid>
									}
									
									{
										!showFinishedRecipientRegisters && coNETCashbalance >= 0 &&
											<Grid item xs={12}>
											
												<TextField
													size="small"
													variant="standard" 
													error={showCoNETCashInputError}
													label={<FormattedMessage id='platform.ProfileDropdown.send.receiver'/>} 
													fullWidth
													color='primary'
													value={coNETCashInput}
													type="number"
													disabled = {loading}
													sx={{fontSize: 'small!important'}}
													InputProps={{endAdornment: <InputAdornment position="end" >CoNETCash-USDC</InputAdornment>}}
													onChange = {(e) => {
														let val = 0
														setResultError (false)
														let totalBalance = workerService.data.CoNETCash.Total
														setShowCoNETCashInputError(false)
														if ( !e.target.value.length ) {
															setCoNETCashbalance (totalBalance)
															return setCoNETCashInput('')
														}
														val = parseFloat(e.target.value)
														
														if ( isNaN(val) || val < 0) {
															setCoNETCashbalance (totalBalance)
															return setCoNETCashInput(0)
														}
														if ( val < 1 || val >= totalBalance) {
															setShowCoNETCashInputError(true)
														}
														setCoNETCashbalance (totalBalance-val)
														setCoNETCashInput(val)
													}}
												/>
											</Grid>
									}
									{
										!showFinishedRecipientRegisters && coNETCashbalance < 0 &&
											<Grid item xs={12}>
												<Typography variant="subtitle1" sx={{ color: red[500] }}>
													<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.insufficient_conetcash_balance'/>
												</Typography>
											</Grid>

									}
									{
										!showFinishedRecipientRegisters &&　coNETCashbalance >= 0 &&
											<Grid item xs={12} >
												<Button variant="contained" onClick={registersConfirmButtonClick} disabled = {loading}>
													<FormattedMessage id='platform.manageProfiles.deleteProfile.confirmButton'/>
												</Button>
											</Grid>
									}
									
									{
										showFinishedRecipientRegisters &&
											<ListItem sx={{ display: 'block', width: '100%', padding: '2rem'}}>
												<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
													<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.registersfinished1'/>
												</Typography>
												<Typography variant="subtitle1" sx={{ color: '#1976d2' }}>
													{currentProfile.keyID.toLowerCase()}
												</Typography>
												<Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
													<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.registersfinished2'/>
												</Typography>
														
												
											</ListItem>
									}
									{
										!showFinishedRecipientRegisters && loading && 				//			show Loading
											<>
												<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
													<DialogContentText>
														<FormattedMessage id='platform.ProfileDropdown.nodelist.registersPayment.registersRecipientloading'/>
													</DialogContentText>
												</ListItem>
												<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%'}}>
													<CircularProgress />
												</ListItem>
											</>
									}
									{
										!showFinishedRecipientRegisters && resultError &&			//			show Error
											<ListItem sx={{ textAlign: 'center',  display: 'block', width: '100%', padding: '2rem'}}>
												<DialogContentText sx={{ ml: 2, flex: 1, color: red[700] }}>
													<FormattedMessage id='platform.ProfileDropdown.SI.network.listError'/>
												</DialogContentText>
											</ListItem>
									}
									
								</Grid>
							</Container>
						</AccordionDetails>
					</Accordion>
				}

				
			</DialogContent>
			
		</Dialog>
	)
}

export default CoNETSINodeSetup 