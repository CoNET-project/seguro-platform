import styled from "styled-components";
import Separator from "../../../../UI/Common/Separator/Separator";

const StyledSubscriptionPlan = styled.div`
  width: 100%;
  margin-top: 15px;
`

const StyledPlanRow = styled.div`

  &:nth-of-type(2) {
    margin-bottom: 10px;
  }

  &:nth-of-type(n+2) {
    margin-top: 15px;
  }
`

const StyledInnerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledPlanName = styled.p`
  font-size: 15px;
  font-weight: 900;
  color: ${props => props.theme.ui.text.textPrimary}
`

const StyledPlanPrice = styled(StyledPlanName)``

const StyledPlanDescription = styled.p`
  margin-top: 5px;
  font-size: 13px;
  color: ${props => props.theme.ui.text.textSecondary}
`


const SubscriptionPlan = () => {
    return (
        <StyledSubscriptionPlan>
            <StyledPlanRow>

                <StyledInnerRow>
                    <StyledPlanName>Premium</StyledPlanName>
                    <StyledPlanPrice>$19.99</StyledPlanPrice>
                </StyledInnerRow>

                <StyledPlanDescription>
                    3 Devices 200 GB storage
                </StyledPlanDescription>
            </StyledPlanRow>
            <StyledPlanRow>
            </StyledPlanRow>
        </StyledSubscriptionPlan>
    )
}

export default SubscriptionPlan
