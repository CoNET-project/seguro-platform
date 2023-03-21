import mainImage from '../../../../assets/logo/conetBrowser.svg'
import styled from "styled-components"
import Grid from '@mui/material/Grid'
import { Box, ThemeProvider } from '@mui/system'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import React, {useState} from "react"
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import {getUUIDv4} from "../../../../utilities/utilities"
import LanguageIcon from '@mui/icons-material/Language'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'

const StyledMainIMG = styled.img`
	width:100%;
	height: auto;
`

const StyledIfram = styled.iframe`
	width:100%;
	height: 33rem;
	border: none;
`
interface TabPanelProps {
	children?: React.ReactNode
	index: number
	value: number

}

const TabPanel = (props: TabPanelProps) => {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }} component="div">
			<div>{children}</div>
		  </Box>
		)}
	  </div>
	)
}

interface iA11yProps{
	id: string
	'aria-controls':string
	lable: string
	domain?: string
	url?: string
}

const Browser = () => {
	const [value, setValue] = useState(0)
	const [textInput, setTextInput]= useState('')
	const [a11yProps, setA11yProps] = useState<iA11yProps[]>([{
		id:'simple-tab-1',
		'aria-controls': '',
		lable: '新分頁'
	}])

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue)
	}

	const inputCom = () => {
		const value = textInput
		if (/^http[s]\:\/\//i.test(value)) {
			const id = getUUIDv4()
			const domain = value.split (/^http[s]\:\/\//i)[1].split('/')[0]
			const label = domain.split(/\./i)
			const _label = label[label.length -2]
			const k: iA11yProps = {
				id: id,
				'aria-controls': id,
				lable: _label,
				domain: domain,
				url: value
			}
			setA11yProps( oldValue => [...oldValue, k])
		}
	}

	const mainSearch = (
		<Grid container direction="column" justifyContent="center" alignItems="center" sx={{ minHeight: '100vh'}}>
			<Grid item xs={12}>
				<Box
				>
					<StyledMainIMG src={mainImage} />
				</Box>
				
			</Grid>
			<Grid item xs={12} width="100%" sx={{paddingBottom: '20rem', paddingTop: '2rem'}}>
				<Box width="100%">
					<Box width="60%" sx={{ borderRadius: 5, borderColor: 'grey.100', border: 1,margin: 'auto' }}>
						<IconButton type="button" sx={{ p: '10px' }} aria-label="search">
							<SearchIcon />
						</IconButton>
						<InputBase
							sx={{ ml: 1, flex: 1, width:'90%' }}
							placeholder="安全隱私檢索網站，或鍵入網址安全訪問..."
							inputProps={{ 'aria-label': 'search google maps' }}
							onChange= {
								e => {
									setTextInput (e.target.value)
								}
							}
							onKeyDown={ e => {
								if (e.key === 'Enter') {
									return inputCom ()
								}
							}}
						/>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12}>
				
			</Grid>
		</Grid>
	)

	const web2Site = (url: string|undefined, domain: string|undefined) => {
		return (
			
			<Grid container direction="column" sx={{ minHeight: '100vh', padding:'0px'}} >
				<Grid item xs={12} >
					<TextField
						sx={{ width:"100%"}}
						size="small"
						id="outlined-read-only-input"
						defaultValue={domain}
						InputProps={{
							readOnly: true,
							startAdornment: (
								<InputAdornment position="start">
									 <AccountBalanceWalletIcon />
								</InputAdornment>
							)
						}}
					/>
				</Grid>
				<Grid item xs={12} >
					<StyledIfram src={url}></StyledIfram>
				</Grid>
			</Grid>
			
		)
		
	}

	const conetSearch = (
		
		<Grid container direction="column" sx={{ minHeight: '100vh'}}>
			<Grid item xs={12}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
						{
							a11yProps.map ((v, index) => { return (<Tab aria-controls={v['aria-controls']} label={v.lable} key={v.id}/>)})
						}
					</Tabs>
				</Box>
			</Grid>
			<Grid item xs={12}>
				{
					a11yProps.map ((v, index) => (<TabPanel value={value} index={index} key={v.id}>{/main|新分頁/.test(v.lable)? mainSearch: web2Site(v.url, v.domain)}</TabPanel>))
				}
			</Grid>
		</Grid>
	)

    return conetSearch
}

export default Browser
