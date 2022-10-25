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
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'

const PlatformModal = () => {
    const {isModalOpen, setIsModalOpen, windowInnerSize:{width}} = useAppState()
	const onClose = () => {
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
		<Dialog open={isModalOpen? true : false} onClose = {onClose} fullScreen={width < 800 ? true: false }
			sx={{width:'100%'}}
		>
			<DialogTitle >
				{getHeaderBarTitle()}
				<IconButton onClick={onClose} sx={{position: 'absolute',right: 14,top: 14}}>
					<CloseIcon/>
				</IconButton>
			</DialogTitle>
			{
				isModalOpen === 'settings' && <Settings/>
			}
			{
				isModalOpen === 'profilesList' && <ManageProfiles setCurrectProfile={setCurrectProfile}/>
			}
			{
				isModalOpen === 'addProfile' && <AddProfile/>
			}
			{
				isModalOpen === 'manageProfile' && <Profile profile= {currectProfile} />
			}
		</Dialog>
	)
}

export default PlatformModal
