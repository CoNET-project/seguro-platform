import styled from 'styled-components';
import {ProfileData} from "../../../Dropdowns/ProfileDropdown/ProfileDropdown";
import ProfileImage from "../Image/Image";
import {Copy} from "../../../Icons/Icons";

const StyledProfileCard = styled.div`
  display: flex;
  align-items: center;
`

const StyledProfileDetails = styled.div`
  margin-left: 10px;
`

const StyledProfileName = styled.p`
`

const StyledProfileKeyId = styled.p`
  margin-top: 5px;
  color: ${props => props.theme.ui.text.textSecondary}
`

const StyledProfileKeyIdButton = styled.button`
  border: none;
  background-color: transparent;
  margin-left: 5px;
  color: ${props => props.theme.ui.text.textSecondary};
`

const RowWrapper = styled.div`
  display: flex;
  align-items: center;
`


const Card = ({imageSrc, keyid, name}: ProfileData) => {
    return (
        <StyledProfileCard>
            <ProfileImage src={imageSrc} size={60}/>
            <StyledProfileDetails>
                <StyledProfileName>{name || 'Anonymous User'}</StyledProfileName>
                <RowWrapper>
                    <StyledProfileKeyId>{keyid}</StyledProfileKeyId>
                </RowWrapper>
            </StyledProfileDetails>
        </StyledProfileCard>
    )
}

export default Card