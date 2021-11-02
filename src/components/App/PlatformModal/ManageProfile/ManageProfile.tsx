import styled from "styled-components";
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar";
import useAppState from "../../../../store/appState/useAppState";
import {screenWidth} from "../../../UI/screenSizes";
import ListItem from "../../../UI/Common/ListItem/ListItem";
import Image from "../../../UI/Common/Profile/Image/Image";
import AnonymousAvatar from '../../../../assets/Avatar-anonymous.png'
import ExampleProfile from '../../../../assets/examples/profile-example.jpeg'
import {Profiles} from "../../../UI/Dropdowns/ProfileDropdown/ProfileDropdown";
import {ProfileData} from "../../../UI/Dropdowns/ProfileDropdown/ListItem/ListItem";
import {TippyDropdown} from "../../../UI/Tippy/Tippy";
import {useState} from "react";
import {VerticalOptions} from "../../../UI/Icons/Icons";

const StyledManageProfileContainer = styled.div`
  width: 100%;

  @media (${screenWidth.mediumWidth}) {
    min-width: 30rem;
  }
`

const StyledManageProfileContent = styled.div``

const CustomizedHeaderBar = styled(HeaderBar)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const StyledProfileItem = styled.div`
  display: flex;
  align-items: center;
`

const StyledProfileItemDetail = styled.div`
  margin-left: 15px;
`

const StyledProfileItemName = styled.p`
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} + 1.5px);
  font-weight: bold;
`

const StyledProfileItemKeyId = styled.p`
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.xsm} + 1px);
`

const StyledProfileItemOptions = styled.button`
  padding: 3px;
  border: none;
  background-color: transparent;
`

const StyledDropdown = styled.div`
  min-width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

const StyledDropdownItem = styled.button`
  background-color: transparent;
  border: none;
  width: 100%;
  text-align: left;
  padding: 10px 15px;

  &:not(:last-of-type) {
    border-bottom: 1px solid ${props => props.theme.ui.borderColor};
  }
`

const StyledDropdownText = styled.p`
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
  color: ${props => props.theme.ui.text.textPrimary}
`

const ProfileDropdown = () => {
    return (
        <StyledDropdown>
            <StyledDropdownItem>
                <StyledDropdownText>
                    Manage
                </StyledDropdownText>
            </StyledDropdownItem>
            <StyledDropdownItem>
                <StyledDropdownText>
                    Delete
                </StyledDropdownText>
            </StyledDropdownItem>
        </StyledDropdown>
    )
}

const ProfileItem = ({
                         imageSrc,
                         name,
                         keyid,
                         current,
                         primary
                     }: ProfileData & { current?: boolean, primary?: boolean }) => {
    return (
        <StyledProfileItem>
            <Image src={imageSrc || AnonymousAvatar} size={60}/>
            <StyledProfileItemDetail>
                <StyledProfileItemName>{name}</StyledProfileItemName>
                <StyledProfileItemKeyId>{keyid}</StyledProfileItemKeyId>
            </StyledProfileItemDetail>
        </StyledProfileItem>
    )
}

const ManageProfile = () => {
    const exampleProfiles: Profiles = [
        {
            imageSrc: ExampleProfile,
            keyid: '75DDC3C4A499F1A1',
            name: 'Jessica K'
        },
        {
            imageSrc: 'https://source.unsplash.com/random/200x200/?city',
            keyid: '85CCD3D535DA1DS',
            name: 'Private Account'
        },
        {
            imageSrc: 'https://source.unsplash.com/random/200x200/?cute',
            keyid: '96BDA5D6S2C1SDB',
            name: 'Design Studio'
        }
    ]


    const {setIsModalOpen} = useAppState()

    const [currentDropdownIndex, setCurrentDropdownIndex] = useState<number | null>(null)

    const dropdownHandler = (index: number) => {
        if (currentDropdownIndex === index) {
            return setCurrentDropdownIndex(null)
        }
        setCurrentDropdownIndex(index)
    }

    return (
        <StyledManageProfileContainer>
            <CustomizedHeaderBar headerContent={{title: 'Manage Profiles'}}
                                 closeAction={{
                                     action: () => {
                                         return setIsModalOpen(null)
                                     },
                                     alignRight: true,
                                     alwaysVisible: true
                                 }}
            />
            <StyledManageProfileContent>
                {exampleProfiles.map((profile, idx) => (
                    <ListItem
                        key={profile.keyid + idx}
                        itemLeft={<ProfileItem {...profile} current={true} primary={true}/>}
                        itemRight={
                            <TippyDropdown content={<ProfileDropdown/>} visible={currentDropdownIndex === idx}>
                                <StyledProfileItemOptions onClick={() => dropdownHandler(idx)}>
                                    <VerticalOptions/>
                                </StyledProfileItemOptions>
                            </TippyDropdown>
                        }
                    />
                ))}
            </StyledManageProfileContent>
        </StyledManageProfileContainer>
    )
}

export default ManageProfile
