import {Stack, Grid} from '@mui/material'
import ad1 from './assets/ADbig.png'
import {styled} from 'styled-components'
import ad1_s from './assets/ADsmall.png'

const Img1 = styled.img`
	width: 95%;
`
const AD_1 = () => {
	return (
		
		<Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{width: '100%', padding:'0rem 0 2rem 0'}}>
			<Img1 src = { ad1 }/>
		</Stack>

		
	)
}

export default AD_1