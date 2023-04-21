import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'
import ToDoContext, {Todo} from './TodoContext'
import {useState, HTMLAttributes, ReactNode, useContext} from 'react'
import Grid from '@mui/material/Grid'
import WestIcon from '@mui/icons-material/West'
import EastIcon from '@mui/icons-material/East'
import RefreshIcon from '@mui/icons-material/Refresh'
import { useIntl} from "react-intl"

type SearchInputProps = {
	onUpdate: (updateText: string) => void
	defaultTodo: Todo
	onChanged: (updateText: string) => void
} & HTMLAttributes<ReactNode>

const SearchInput = ({defaultTodo, onUpdate, onChanged}: SearchInputProps) => {
	const [searchText, setSearchText] = useState(defaultTodo.searchText)
	const intl = useIntl()
	return (
		<Grid container item xs={12} width="100%">
			<Grid item xs="auto">
				<IconButton size="small" disabled>
					<WestIcon/>
				</IconButton>
			</Grid>
			<Grid item xs="auto">
				<IconButton size="small" disabled>
					<EastIcon/>
				</IconButton>
			</Grid>
			<Grid item xs="auto">
				<IconButton size="small" disabled>
					<RefreshIcon/>
				</IconButton>
			</Grid>
			<Grid item xs>
				<FormControl size="small" fullWidth variant="outlined">
					<OutlinedInput sx={{ borderRadius: '20px',fontSize:'small' }}
					fullWidth={true}
					//placeholder={ defaultTodo.keyID }
					placeholder={ intl.formatMessage({id:'platform.app.browser.search.placeholder'})}
					startAdornment={
						<InputAdornment position="start">
							<IconButton>
								<SearchIcon/>
							</IconButton>
						</InputAdornment>
					}
					value={
						searchText
					}
					onChange= {
						e => {
							setSearchText (e.target.value)
							onChanged(e.target.value)
						}
					}
					onKeyDown={ e => {
						if (e.key === 'Enter') {
							onUpdate (searchText)
						}
					}}
				/>
				</FormControl>
			</Grid>
		</Grid>
		
	)
}

export default SearchInput