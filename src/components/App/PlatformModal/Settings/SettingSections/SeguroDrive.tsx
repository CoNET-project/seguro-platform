import styled from "styled-components"
import ProgressBar from "../../../../UI/Progress/ProgressBar/ProgressBar"
import React from 'react'

const StyledSeguroDrive = styled.div`
	width: 100%;
`

const StyledSeguroDriveTitle = styled.p`
	margin-bottom: 10px;
	color: ${props => props.theme.ui.colors.text.primary}
`

const StyledSeguroDriveUsage = styled.p`
	margin-top: 5px;
	color: ${props => props.theme.ui.colors.text.secondary};
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const SeguroDrive = () => {


    return (
        <StyledSeguroDrive>
            <StyledSeguroDriveTitle>Seguro Drive</StyledSeguroDriveTitle>
            <ProgressBar progress={30}/>
            <StyledSeguroDriveUsage>5 GB of 30 GB used</StyledSeguroDriveUsage>
        </StyledSeguroDrive>
    )
}

export default SeguroDrive
