import Image from "../../../../UI/Common/Profile/Image/Image"
// @ts-ignore: Unreachable code error
import AnonymousProfile from "../../../../../assets/Avatar-anonymous.png"
import {Camera} from "../../../../UI/Icons/Icons"
import styled, {useTheme} from "styled-components"
import {screenWidth} from "../../../../UI/screenSizes"
import React, {ChangeEvent, useRef, useState, useEffect} from "react"
import {getBase64FromFile} from "../../../../../utilities/utilities"
import {useIntl, FormattedMessage} from "react-intl"

import {ProfileData} from "../../../../../store/appState/appStateReducer"
import {getWorkerService} from '../../../../../services/workerService/workerService'


import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Unstable_Grid2'
import TextField from '@mui/material/TextField'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import Button from '@mui/material/Button'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
import AccordionDetails from '@mui/material/AccordionDetails'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'


const StyledHiddenInput = styled.input`
	display: none;
`

const StyledTextLabel = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.xsm};
	color: ${props => props.theme.ui.colors.text.secondary}
`

type ProfileProps = {
    profile: ProfileData|null,
	profileChanged: (profile: any)=> void
}

const Profile = ({profile, profileChanged }: ProfileProps) => {
	const theme = useTheme()
    const filePickerRef = useRef<HTMLInputElement>(null)

    const profileImageRef = useRef<HTMLImageElement>(null)

	const intl = useIntl()

	const _profile = JSON.parse(JSON.stringify(profile))
	
	const {data} = getWorkerService()

	const IsOnlyOneProfile = data.profiles?.length === 1 ? true: false

    const onProfileImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event && event.target && event.target.files?.length) {
            return getBase64FromFile(event.target.files[0], (error, base64) => {
                if (error) {
                    return
                }

                if (typeof base64 === 'string' && _profile !== null) {
					_profile.profileImg = base64
					_profile.changed = true
					profileChanged (_profile)
                    if (profileImageRef?.current) {
                        const img = profileImageRef?.current.children[0]
						if ( img ) {
							img.setAttribute('src', base64)
						}
                    }

                    // const updatedProfile: ProfileData = {
                    //     ...profile,
                    //     profileImg: base64
                    // }

                    // if (filePickerRef && filePickerRef.current) {
                    //     filePickerRef.current.files = null
                    //     filePickerRef.current.value = ""
                    // }

                    //onChange(updatedProfile)
                }
            })
        }
    }


    // const onChangePrimary = (checked: boolean) => {
    //     const updatedProfile: ProfileData = {
    //         ...profile,
    //         isPrimary: checked
    //     }

    //     onChange(updatedProfile)
    // }


	return (
		<Box sx={{ flexGrow: 1,width:'100%' }} id='sahjdchsahcbljn'>
			<StyledHiddenInput type='file' accept='.jpeg,.jpg,.png,.svg' ref={filePickerRef}
                onChange={onProfileImageChange}/>
			 <Grid container spacing={2} id='ooooooo'>
			 	<Grid xs={12} display="flex" justifyContent="center" alignItems="center" >
				 	<Avatar src={profile?.profileImg || AnonymousProfile } sx={{
							width: 150,
							height: 150,
							marginLeft: '-3rem',
							marginTop: '2rem'
						 }} 
						 ref={profileImageRef}/>
						<Avatar
							sx={{
								marginLeft: '-6rem',
								background: '#00000011',
								cursor: 'pointer',
								marginTop: '2rem'
							}}
							onClick = {()=> {
								filePickerRef.current?.click()
							}}
						>
							<AddAPhotoIcon/>
						</Avatar>
				</Grid>
				<Grid xs={12} display="flex" justifyContent="center" alignItems="center" >
					<FormControlLabel
						value="setAsPrimary"
						control={<Checkbox />}
						label={
							<FormattedMessage id='platform.manageProfile.setAsPrimary'/>
						}
						checked={IsOnlyOneProfile || profile?.isPrimary}
						disabled= {IsOnlyOneProfile}
						labelPlacement="end"
						onChange = {
							(e)=> {
								if ( _profile ) {
									_profile.changed = true
									// @ts-ignore
									_profile.isPrimary = e.target.checked
									profileChanged (_profile)
								}
								
							}
						}
					/>
				</Grid>
				<Grid xs={12} display="flex" justifyContent="center" alignItems="center" >
					<TextField
						id="standard-disabled"
						label={<FormattedMessage id='platform.profile.walletAddr'/>}
						defaultValue={
							profile?.keyID
						}
						InputProps={{
							readOnly: true,
						}}
						fullWidth={
							true
						}
						sx={{
							width: '100%',
							textAlign: 'center',
							fontSize: '10px',
    						textAlignLast: 'center'
						}}
						variant="standard"
					/>
				</Grid>
				<Grid xs={12} display="flex" justifyContent="center" alignItems="center" >
					<TextField
						id="outlined-helperText"
						label={<FormattedMessage id='platform.profile.nickName'/>}
						sx={{
							width: '100%'
						}}
						defaultValue={
							profile?.nickName ? profile?.nickName : intl.formatMessage({id: "platform.ProfileDropdown.CurrentProfileItem.AnonymousUser"})
						}
						onChange = {
							(e)=> {
								if ( _profile ) {
									_profile.changed = true
									_profile.nickName = e.target.value
									profileChanged (_profile)
								}
							}
						}
					/>
				</Grid>
				<Grid xs={12} display="flex" justifyContent="center" alignItems="center" >
					<Accordion>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
						>
							<Typography
								sx={{
									color: theme.ui.colors.secondary
								}}
							>
								<FormattedMessage id='platform.profile.privateKey'/>
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography
								variant="subtitle2"
								sx={{
									color: theme.ui.colors.text.error
								}}
								gutterBottom
							>
								<FormattedMessage id='platform.profile.privateKeyWarning'/>
							</Typography>

							<Typography
								variant="body2"
								sx={{
									color: 'grey',
									paddingTop: '1rem'
								}}
								gutterBottom
							>
								{profile?.privateKeyArmor}
							</Typography>
						</AccordionDetails>
					</Accordion>
				</Grid>
			 </Grid>
		</Box>
	)
}


export default Profile
