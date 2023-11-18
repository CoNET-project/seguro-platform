import styled from 'styled-components'
import {LogoImage} from "../../UI/Logo/Logo"
import React from "react"
import LinearProgress from '@mui/material/LinearProgress'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import {FormattedMessage, useIntl} from "react-intl"

const StyledContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	background-color: ${props => props.theme.ui.colors.secondary};
	padding: 50px;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
type CoNETSINodeProps = {
	reload: boolean
} & React.HTMLAttributes<HTMLDivElement>

const getNewNumber = ( oldProgress: number ) => {
	if (oldProgress === 100) {
		return 0
	}
	const diff = Math.random() * 10
	return Math.min( oldProgress + diff, 100 )	
}
const LaunchScreen = ({reload}: CoNETSINodeProps) => {

	const [progress, setProgress] = React.useState(0)
	let countN = 0

	React.useEffect(() => {

		const processRun = () => {
			countN = getNewNumber(countN)
			setProgress(countN)

			setTimeout (() => {
				return processRun()
			}, 500)
		}
		processRun ()

	}, [])

	const buttom = () => {
        const intl = useIntl()
		return (
			<Button
				variant="contained"
				color="error"
				size="large"
				onClick={() => {
					location.reload()
					return false
				}}
			>
				<Typography variant="subtitle1" sx={{ color: 'error' }}>
                        { intl.formatMessage({id: 'LaunchScreen.loadFail'})}
				</Typography>
			</Button>
		)
	}

    return (
        <StyledContainer>
			
            <LogoImage color='white'/>

			{
				reload && 
					<Container maxWidth="md"  sx={{paddingTop: '2rem', textAlign:"center"}} >
						{ buttom() }
					</Container>
			}
			{
				!reload && 
					<Container maxWidth="md" sx={{paddingTop: '2rem'}}>
						<LinearProgress color="inherit" variant="determinate" value={progress} sx={{ color: 'white'}}/>
					</Container>
			}
			
			
        </StyledContainer>
    )
}

export default LaunchScreen
