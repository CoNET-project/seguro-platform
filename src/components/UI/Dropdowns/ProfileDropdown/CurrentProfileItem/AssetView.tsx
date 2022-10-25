import styled, {useTheme} from 'styled-components'
import React, {ReactNode} from 'react'

interface TabPanelProps {
	labelText?: React.ReactNode
	balance?: number
	icon?: React.ReactNode
}

const TableArea_body_wrapper = styled.div`
	display:table;
	border-collapse:collapse;
	text-align: center;
	width: 100%;
	margin-top: 1rem;
`

const TableArea_content_body = styled.div`
	display:table-row;
	width: 100%;
`

const TableArea_content_cell = styled.div`
	display:table-cell;
	width: 50%;
`
const StyledTokenBalance = styled.p`
	text-align: center;
	width: 100%;
	font-size: ${props => props.theme.ui.fontSizes.narrow.xl};
	color: ${props => props.theme.ui.colors.border.medium};
	margin-top: 0.1rem;
	margin-bottom: 0.1rem;
	font-family: 'Lato Bold';
`

const StyledTokenBalanceLeft = styled.span`
	padding-right: 0.5rem;
`
const StyledTokenBalanceRight = styled.span`
`

const AssetView =( props: TabPanelProps ) => {
	

	const {icon, balance, labelText} = props
	return (
		<TableArea_body_wrapper>
			<TableArea_content_body id="CoNET Token Logo Area">
				<TableArea_content_cell>
					{icon}
				</TableArea_content_cell>
			</TableArea_content_body>

			<TableArea_content_body id="Token Balance Area">
				<TableArea_content_cell>
					<StyledTokenBalance>
						<StyledTokenBalanceLeft>
							{balance}
						</StyledTokenBalanceLeft>
						<StyledTokenBalanceRight>
							{labelText}
						</StyledTokenBalanceRight>
					</StyledTokenBalance>
				</TableArea_content_cell>
			</TableArea_content_body>
	</TableArea_body_wrapper>
	)
}

export default AssetView
