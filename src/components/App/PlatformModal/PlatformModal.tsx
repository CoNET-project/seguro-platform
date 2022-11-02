import Modal from "../../UI/Common/Modal/Modal"
import useAppState from "../../../store/appState/useAppState"
import Settings from "./Settings/Settings"
import ManageProfiles from "./ManageProfiles/ManageProfiles"
import AddProfile from "./AddProfile/AddProfile"
import Profile from "./ManageProfiles/Profile/Profile"
import React , {useState}from 'react'
import {FormattedMessage} from "react-intl"
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { styled } from '@mui/material/styles'
import CheckIcon from '@mui/icons-material/Check'
import AddIcon from '@mui/icons-material/Add'
const PlatformModal = () => {
    const {isModalOpen, setIsModalOpen, windowInnerSize:{width}, updateClientProfiles} = useAppState()
	const onClose = () => {
		setIsModalOpen (null)
	}

	let newProfile: any = null
	
	const BootstrapDialog = styled(Dialog)(({ theme }) => ({
		overflow: 'hidden'
	}))

	const profileChanged = ( profile: any ) => {
		newProfile = profile
	}

	const onChange = () => {
		if ( isModalOpen === 'manageProfile' ) {
			if (newProfile) {
				updateClientProfiles(newProfile)
			}
		}
		setIsModalOpen (null)
	}

	const [currectProfile, setCurrectProfile]= useState (null)

	const getHeaderBarTitle = () => {
        switch (isModalOpen) {
            case 'profilesList': {
				return (<FormattedMessage id='platform.manageProfiles'/>)
			}
            case 'addProfile':
			case 'manageProfile': {
				return (<FormattedMessage id='platform.manageProfile'/>)
			}
            case 'settings':
                return <FormattedMessage id='platform.settings.settings'/>
            default:
                break
        }
    }

	return (
		<BootstrapDialog open={isModalOpen? true : false} onClose = {onClose} fullScreen={ width < 800 ? true: false }
		>
			<DialogTitle 

				sx={{
					minWidth: '30rem',
				}}
			>
				{getHeaderBarTitle()}
				{
					isModalOpen === 'manageProfile' && 
					<IconButton onClick={onChange} sx={{
						position: 'absolute',
						right: 80,top: 14,
						color: 'green'
						}}>
						<CheckIcon/>
					</IconButton>
				}

				{
					isModalOpen === 'profilesList' && 
					<IconButton onClick={onChange} sx={{
						position: 'absolute',
						right: 80,top: 14,
						color: 'green'
						}}>
						<AddIcon/>
					</IconButton>
				}
				
				<IconButton onClick={onClose} sx={{
					position: 'absolute',
					right: 14,
					top: 14}}>
					<CloseIcon/>
				</IconButton>
			</DialogTitle>

			<DialogContent>
				{
					isModalOpen === 'settings' && 
					<Settings/>
				}
				{
					isModalOpen === 'profilesList' && 
					<ManageProfiles
						setCurrectProfile={setCurrectProfile}
					/>
				}
				{
					isModalOpen === 'addProfile' && 
					<AddProfile/>
				}
				{
					isModalOpen === 'manageProfile' && 
					<Profile
						profile= {currectProfile}
						profileChanged = {profileChanged}
					/>
				}
			</DialogContent>

		</BootstrapDialog>
	)
}

export default PlatformModal
