import {TippyDropdown} from  '../../../UI/Tippy/Tippy'//"../../../../Tippy/Tippy"
import ProfileDropdown from '../../../UI/Dropdowns/ProfileDropdown/ProfileDropdown' //"../../Dropdowns/ProfileDropdown/ProfileDropdown"
import { useState} from "react"
import useAppState from "../../../../store/appState/useAppState"
import styled from 'styled-components'
import AddIcon from '@mui/icons-material/Add'
import SvgIcon from '@mui/material/SvgIcon'
import IconButton from '@mui/material/IconButton'
import {ReactComponent as StarIcon} from '../../../../assets/logo/CoNET_logo_white.svg'
import Fab from '@mui/material/Fab'
type Dropdowns = 'applications' | 'profiles' | 'notifications' | 'network' | null
import {getWorkerService} from '../../../../services/workerService/workerService'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const StyledGlobalButton = styled.div`
	position: absolute;
	right:1rem;
	zIndex:9999;
	top:2rem;
`

const StyledGlobalItem = styled(StyledGlobalButton)`
`
const TippyDropdownTab = () => {
	const [currentDropdown, setCurrentDropdown] = useState<Dropdowns>(null)
	const {
        windowInnerSize: {width},
		setShowGuide,
		setShowAppStore
    } = useAppState()
	const {data} = getWorkerService()
    const currentProfile = data.profiles.filter((n:any)=> n.isPrimary)[0]
    const keyID = currentProfile.keyID
    const img = currentProfile.profileImg
	
    const closeDropdown = (app: string ) => {
        setCurrentDropdown(null)

		if (app) {
			if (app === 'showGuide') {
				setShowAppStore (false)
				return setShowGuide(true)
			}
			if (app == 'showAppStore') {
				setShowGuide(false)

				return setShowAppStore (true)
			}
			setShowAppStore (false)
			setShowGuide(false)
		}
    }
	const setDropdownToggle = (dropdown: Dropdowns) => {
        if (currentDropdown === dropdown) {
            return setCurrentDropdown(null)
        }
        return setCurrentDropdown(dropdown)
    }

	return (
		<TippyDropdown
			content = {
				<ProfileDropdown 
					closeDropdown={closeDropdown}
				/>}
			visible={currentDropdown === 'profiles'}
			onClickOutside={()=>{
				closeDropdown('')
			}}
			>
			<StyledGlobalItem onClick={() => {
				setDropdownToggle('profiles')
			}}>
				<Fab color="success">
					{
						!img &&
							<AccountCircleIcon fontSize='large' color='inherit' />
					}
                    
                </Fab>		
				{/* <IconButton size='large'>
					<SvgIcon component={StarIcon} inheritViewBox/>
				</IconButton> */}
			</StyledGlobalItem>
		</TippyDropdown>
	)
}

export default TippyDropdownTab

