import styled, {useTheme} from 'styled-components'
import {VerticalOptions_ArrowUpRightCircleFill, VerticalOptions_ArrowDownloadCircleFill, VerticalOptions} from "../../../Icons/Icons"

const IconArea = styled.div`
	cursor: pointer;
	&:hover > * {
		background-color: initial;
	}
`

const StyledProfileDropdownOptionsText = styled.p`
  	margin-left: 16px;
`


const StyledProfileDropdownOptions = styled.div`
  width: 100%;
`

const FundWallet = () => {
	const theme = useTheme()
	return (
		<StyledProfileDropdownOptions>
			<IconArea>
				<VerticalOptions_ArrowDownloadCircleFill size={30} color={theme.ui.colors.icon.active}/>
			</IconArea>
		</StyledProfileDropdownOptions>

	)
}

export default FundWallet