import styled from "styled-components";
import ProgressBar from "../../../../UI/Progress/ProgressBar/ProgressBar";

const StyledSeguroDrive = styled.div`
  width: 100%;
`

const StyledSeguroDriveTitle = styled.p`
  margin-bottom: 10px;
  color: ${props => props.theme.ui.text.textPrimary}
`

const StyledSeguroDriveUsage = styled.p`
  margin-top: 5px;
  color: ${props => props.theme.ui.text.textSecondary}
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