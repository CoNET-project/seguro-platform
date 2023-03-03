import mainImage from '../../../../assets/guide/conet.png'
import styled from "styled-components"
import Grid from '@mui/material/Grid'

import Typography from '@mui/material/Typography'
const StyledMainIMG = styled.img`
	width:100%;
	height: auto;
`


const GuildShow = () => {

	const conetSearch = (

		<Grid container justifyContent="center" alignItems="center" sx={{ height: '100%', paddingBottom: '5rem'}}>
			

		</Grid>
	)
	const normail = 
	(<Grid container justifyContent="center" alignItems="center" sx={{ height: '100%', overflowY: 'scroll', paddingBottom: '5rem'}}>
		<Grid item xs={12} sx={{ padding:'2rem'}}>
			<StyledMainIMG src = {mainImage} />
		</Grid>
		<Grid item xs={12}>
			<Typography sx={{paddingTop: '1.5rem', color: 'grey', textAlign: 'center'}} variant="h4" gutterBottom>CoNET PROJECT</Typography>
		</Grid>
		<Grid item xs={12}>
			<Typography variant="h6" gutterBottom sx={{ color: 'grey', textAlign: 'center'}}>Infrastructures For Next</Typography>
		</Grid>
		<Grid item xs={12} sx={{ padding:'2rem'}}>
			<Typography variant="body1" sx={{ color: 'grey'}} gutterBottom>The CoNET project provides Innate in digital privacy from the network layer to the application layer because it benefits from the three unique infrastructures. CoNET Project gains privacy by radically changing the address foundation of both communicating parties, fragmenting content. Proposes an overall decentralized solution from the network layer to the application layer, which for the first time gives the people who resist censorship a technological advantage.</Typography>
		</Grid>
		<Grid item xs={12} sx={{ padding:'2rem'}}>
			<Typography variant="h4" gutterBottom sx={{ color: 'grey', textAlign: 'center'}}>CoNET Platform</Typography>
		</Grid>
		<Grid item xs={12}>
			<Typography variant="h6" gutterBottom sx={{ color: 'grey', textAlign: 'center'}}>A Safebox for Data</Typography>
		</Grid>
		<Grid item xs={12}>
			<Typography variant="h6" gutterBottom sx={{ color: 'grey', textAlign: 'center'}}>The Gate for Web2 to Web3</Typography>
		</Grid>
		<Grid item xs={12} sx={{ padding:'2rem'}}>
			<Typography variant="body1" sx={{ color: 'grey'}} gutterBottom>
				A powerful developer-friendly development environment for all developers who use the CoNET project innate in digital privacy and CNTCash and high-speed lightweight blockchain to develop dAPPs. Developers can develop dAPPs for different OS and devices with single code based programming via Javascript and HTML without any need of building them individually. The completed dAPP is deployed in the dAPP store in the CoNET network, searched by the end user and installed in the CoNET client.
			</Typography>
		</Grid>
	</Grid>)
    return normail
}

export default GuildShow
