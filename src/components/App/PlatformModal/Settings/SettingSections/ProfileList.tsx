import styled from "styled-components";
import AnonymousAvatar from '../../../../../assets/Avatar-anonymous.png'
import ExampleProfile1 from '../../../../../assets/examples/profile-example.jpeg'
import ExampleProfile2 from '../../../../../assets/examples/profile-example1.png'

import Image from "../../../../UI/Common/Profile/Image/Image";
import {screenWidth} from "../../../../UI/screenSizes";

type ProfileItemProps = {
    profileImageSrc?: string,
    nickname: string,
    keyId: string,
    isPrimary?: boolean,
    setPrimary?: () => void
}

const StyledProfileItem = styled.div`
  display: flex;
  align-items: center;

  &:not(:first-of-type) {
    margin-top: 15px;
  }
`

const StyledProfileItemSection = styled.div`
  &:first-of-type {
    margin-right: 20px;
  }

  &:nth-child(2) {
    width: 100%;
  }

  &:last-of-type {
    min-width: 100px;
    display: flex;
    justify-content: flex-end;
  }
`

const StyledProfileItemNickname = styled.p`
  font-weight: 700;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const StyledProfileItemKeyId = styled.p`
  color: ${props => props.theme.ui.text.textSecondary};
  margin-top: 5px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const StyledProfileItemPrimary = styled.p`
  font-weight: 700;
  color: ${props => props.theme.ui.text.textSecondary};
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.medium.sm};
  }
`

const StyledProfileItemSetPrimary = styled.a`
  color: ${props => props.theme.ui.primaryColor};
  cursor: pointer;
  text-decoration: underline;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  @media (${screenWidth.mediumWidth}) {
    font-size: ${props => props.theme.ui.fontSizes.medium.sm};
  }
`

const ProfileItem = ({profileImageSrc, nickname, keyId, isPrimary, setPrimary}: ProfileItemProps) => {
    return (
        <StyledProfileItem>
            <StyledProfileItemSection><Image src={profileImageSrc || AnonymousAvatar}
                                             size={50}/></StyledProfileItemSection>
            <StyledProfileItemSection>
                <StyledProfileItemNickname>{nickname}</StyledProfileItemNickname>
                <StyledProfileItemKeyId>{keyId}</StyledProfileItemKeyId>
            </StyledProfileItemSection>
            <StyledProfileItemSection>
                {isPrimary ?
                    (<StyledProfileItemPrimary>Primary</StyledProfileItemPrimary>) :
                    <StyledProfileItemSetPrimary>Set Primary</StyledProfileItemSetPrimary>
                }
            </StyledProfileItemSection>
        </StyledProfileItem>
    )
}

const StyledProfileList = styled.div`
  width: 100%;
  margin-top: 15px;
`

const ProfileList = () => {
    return (
        <StyledProfileList>
            <ProfileItem profileImageSrc={ExampleProfile1} nickname='Jennifer K' keyId='4E1F799AA4FF2279'
                         isPrimary={true}/>
            <ProfileItem nickname='Anonymous' keyId='7E1F399BB4FF3879'/>
            <ProfileItem profileImageSrc={ExampleProfile2} nickname='Design Turtle' keyId='1G1F199AC4FG7879'/>
        </StyledProfileList>
    )
}

export default ProfileList
