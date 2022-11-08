import ThreePanels, {ThreePanelComponents} from "../../../UI/Layout/ThreePanelLayout/ThreePanels"
import LeftPanel from "./Panels/LeftPanel"
import RightPanel from "./Panels/RightPanel"
import MainPanel from "./Panels/MainPanel"
import {MessengerContext} from "../../../../contexts/messenger/MessengerContext"
import React, {useEffect} from "react";
import {messengerReducer, MessengerState} from "../../../../contexts/messenger/messengerReducer"
import {messengerActions} from "../../../../contexts/messenger/messengerActions"
import mainVideo from '../../../../assets/appStore/appStore.gif'
import screen1 from '../../../../assets/appStore/screen1.png'
import screen2 from '../../../../assets/appStore/screen2.png'

import styled from "styled-components"
import Grid from '@mui/material/Grid'
import appStore from '../../../../assets/logo/appstore.svg'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import Seguro from '../../../../assets/seguro-logo.svg'
import { grey } from "@mui/material/colors"
import Fab from '@mui/material/Fab'
import Rating from '@mui/material/Rating'
import Paper from '@mui/material/Paper'

const StyleP = styled.p`
	height:100%;
`

const StyleSpan = styled.span`
	padding-left: 2rem;
`

const StyleIMG = styled.img`
	max-width: 5rem;
`

const StyleIMG1 = styled.img`
	width: 100%;
	max-width: 50rem;
`


const ShowAppStore = () => {
    const contents: ThreePanelComponents = {
        leftPanelComponent: <LeftPanel/>,
        mainPanelComponent: <MainPanel/>,
        rightPanelComponent: <RightPanel/>
    }

    const defaultMessengerState: MessengerState = {
        contacts: {},
        selectedContact: null,
        currentChat: null,
        currentFocusPanel: 'left'
    }

    const [state, dispatch] = React.useReducer(messengerReducer, defaultMessengerState)

    useEffect(() => {
        
    }, [])

    return (
        <Grid container sx={{ height: '100%', overflowY: 'scroll', padding: '1rem', paddingBottom: '5rem'}}>
			<Grid item xs={12} sx={{ padding:'2rem', textAlign: 'center'}}>
				<StyleIMG src = { appStore } />
			</Grid>
			<Grid item xs={12} sx={{ textAlign: 'center'}}>
				<Typography variant="h6" gutterBottom sx={{ color: 'grey'}}>
					CoNET Decentralization APP Store
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{ textAlign: 'center'}}>
				<Typography variant="body1" sx={{ color: 'grey'}} gutterBottom>
					CoNET Decentralized App Store provides developers with simple and censorship-free delivery of applications to end users. 
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{ textAlign: 'center'}}>
				<StyleIMG1 src = {mainVideo}/>
			</Grid>
			<Grid item xs={12} sx={{ textAlign: 'center', paddingTop: '2rem'}}>
				<Typography gutterBottom variant="h5" component="div">
					What's New in CoNET APP Store
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{ display: 'flex', paddingBottom: '2rem'}}>
				<StyleSpan>
					<Avatar src={Seguro} sx={{ width: 56, height: 56, bgcolor:grey[400], borderRadius: '15%' }}/>
				</StyleSpan>
				<StyleSpan>
					<Typography variant="subtitle1" gutterBottom >
						SEGURO MESSENGER
					</Typography>
					<Typography variant="subtitle2" gutterBottom>
						Simple. Reliable. Secure.
					</Typography>
					<Fab size="small" color="primary" variant="extended" sx={{ width: '6rem'}}>
						Free
					</Fab>
				</StyleSpan>
			</Grid>
			
			<Grid item xs={12} sx={{ paddingBottom: '1rem'}}>
				<Divider/>
			</Grid>
			
			<Grid item xs={3} sx={{ textAlign: 'center'}}>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					18 RETINGS
				</Typography>
				<Typography variant="h5" gutterBottom sx={{ color: grey[500]}}>
					4.7
				</Typography>
				<Rating defaultValue={4.5} precision={0.5} readOnly />
			</Grid>
			<Grid item xs={3} sx={{ textAlign: 'center'}}>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					AGE
				</Typography>
				<Typography variant="h5" gutterBottom sx={{ color: grey[500]}}>
					18+
				</Typography>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					Years Old
				</Typography>
			</Grid>
			<Grid item xs={3} sx={{ textAlign: 'center'}}>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					DEVELOPER
				</Typography>
				<Typography variant="h5" gutterBottom sx={{ color: grey[500]}}>
					KLOAK IT
				</Typography>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					Company
				</Typography>
			</Grid>
			<Grid item xs={3} sx={{ textAlign: 'center'}}>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					LANGUAGE
				</Typography>
				<Typography variant="h5" gutterBottom sx={{ color: grey[500]}}>
					EN
				</Typography>
				<Typography variant="subtitle1" gutterBottom sx={{ color: grey[500]}}>
					+3 More
				</Typography>
			</Grid>
			<Grid item xs={12} sx={{}}>
				<Divider/>
			</Grid>
			<Grid item xs={6} sx={{ padding: '2rem'}}>
				<Paper elevation={5}>
					<StyleIMG1 src={screen1} />
				</Paper>
				
			</Grid>
			<Grid item xs={3} sx={{ padding: '2rem'}}>
				<Paper elevation={5}>
					<StyleIMG1 src={screen2} />
				</Paper>
				
			</Grid>
			<Grid item xs={3} sx={{ padding: '2rem'}}>
				<Paper elevation={5}>
					<StyleIMG1 src={screen2} />
				</Paper>
				
			</Grid>
			<Grid item xs={12} sx={{ padding: '2rem'}}>
				<Typography variant="body1" sx={{ color: 'grey'}} gutterBottom>
				Seguro Messenger is built to emphasize privacy, by default. Pseudonymous public-private wallet addresses are used to identify user and device addresses, not IP Addresses, severing the link between personal ID and location. With this paradigm, the Seguro dAPP creates a safe environment, even if the rest of the user's environment is insecure.
To further ensure privacy, user messages are encrypted when leaving their device. The Seguro peer-to-peer communication protocols and dAPP system design ensure that no user messages will be leaked while in transit. Additionally a modified sharding protocol, that decentralizes the file fragments, will hide message history. These safety precautions make certain hackers will not be able to compromise the user. Benefiting from CoNET-SI communication obfuscation technology, consumers can use SEGURO Messenger wherever they are from.
In a hostile internet environment SEGURO messenger provides security.

				</Typography>
			</Grid>
		</Grid>
    )
}

export default ShowAppStore
