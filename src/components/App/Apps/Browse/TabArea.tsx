
import ToDoContext, {Todo} from './TodoContext'
import {useContext, forwardRef, useCallback} from 'react'
import { Box,styled } from '@mui/system'
import Button from '@mui/material/Button'
import Tab from '@mui/material/Tab'
import SvgIcon from '@mui/material/SvgIcon'
import { ReactComponent as StarIcon } from '../../../../assets/logo/CoNET_logo.svg'
import CloseIcon from '@mui/icons-material/Close'
import { useIntl} from "react-intl"

interface StyledTabProps {
	label: string
	component: any
}

const cutTextLength = (text: string) => {
	const u = text.split(/^http[s]\:\/\//i)
	const _u = u[0]||u[1]
	const _uu = _u.substring(0, 10)
	return _uu

}

const a11yProps = (index: number) => {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	  key: `simple-tab-${index}`
	}
}

export const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
  ))(({ theme }) => ({
	textTransform: 'none',
	fontWeight: '500',
	borderTopLeftRadius: '5px',
	borderTopRightRadius: '5px',
	fontSize: 'small',
	marginRight: 0,
	backgroundColor: 'rgba(255, 255, 255, 0.5)',
	padding: '0px 8px 0px 8px',
	color: 'rgba(0, 0, 0, 0.4)',
	borderRight: '1px solid grey',
	minHeight: '32px',
	minWidth: '10rem',
	whiteSpace: 'pre',
	'&.Mui-selected': {
		backgroundColor: '#fff',
		color: 'rgba(0, 0, 0, 1)'
	},
	'&.Mui-focusVisible': {
	  	backgroundColor: 'rgba(255, 255, 255, 0)',
	}
}))

const TabArea = (todo: Todo, index: number, currentTab: Todo) => {
	const todoContext = useContext(ToDoContext)
	const intl = useIntl()

	const deleteTodo = () => {
		todoContext.deleteTodo(todo)
	}

	const ClostButtom = () => {
		return (
			<>
				{
					todoContext.todos?.length > 1 &&
						<Box sx={{display: 'inherit', paddingLeft: '1rem'}}
							onClick = { deleteTodo }>
							<CloseIcon sx={{fontSize:'20px'}} />
						</Box>
				}
			</>
		)
	}

	const GridRoot = forwardRef((props, ref) => {
		
		return (<Button variant="text" {...props}
				startIcon={<SvgIcon component={StarIcon} inheritViewBox sx={{fontSize:'20px'}}/>} 
				endIcon={ClostButtom()}
			>
				{cutTextLength(intl.formatMessage({id:'platform.app.browser.tab.newTabName'}))}
			</Button>
		)
	})

	return (
		<StyledTab label='' {...a11yProps(index)} component={GridRoot}/>
	)
}

export default TabArea