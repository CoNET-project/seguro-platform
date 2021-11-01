import styled from 'styled-components';
import ExampleProfile from '../../../../assets/examples/profile-example.jpeg'
import ProfileImage from '../../Common/Profile/Image/Image'
import {Grid3X3, Plug, SettingGear, Update} from "../../Icons/Icons";
import {screenWidth, sizes} from "../../screenSizes";
import {LogoIcon} from "../../Logo/Logo";
import ProfileDropdown, {Profiles} from "../../Dropdowns/ProfileDropdown/ProfileDropdown";
import useAppState from "../../../../store/appState/useAppState";
import {TippyDropdown} from "../../Tippy/Tippy";
import AppsDropdown from "../../Dropdowns/AppsDropdown/AppsDropdown";

const StyledGlobalBar = styled.div`
  height: calc(50px + env(safe-area-inset-top));
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.ui.border.color};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.ui.backgroundColor};
  padding: calc(env(safe-area-inset-top)) 10px 0 10px;

  @media (${screenWidth.mediumWidth}) {
    padding: calc(env(safe-area-inset-top)) 20px 0 20px;
  }
`

const StyledBarSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  content: '';
`

const StyledBarSectionFullWidth = styled(StyledBarSection)`
  width: 100%;
`

const StyledBarSectionOptional = styled.div`
  display: none;
  @media (${screenWidth.mediumWidth}) {
    display: flex;
    align-items: center;
  }
`

const StyledGlobalButton = styled.button`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  position: relative;
`

const StyledGlobalItem = styled.div`
  height: 48px;
  width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  position: relative;
`

const GlobalBar = () => {
    const {
        hasUpdateAvailable,
        setIsDrawerOpen,
        isDrawerOpen,
        windowInnerSize: {width},
        setIsModalOpen
    } = useAppState()

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


    return (
        <StyledGlobalBar>
            <StyledBarSectionFullWidth>
                <StyledGlobalButton onClick={() => setIsDrawerOpen(!isDrawerOpen)} disabled={width >= sizes.medium}>
                    <LogoIcon size={24}/>
                </StyledGlobalButton>
            </StyledBarSectionFullWidth>
            <StyledBarSectionFullWidth/>
            <StyledBarSection>
                <StyledGlobalButton>
                    <Plug size={18}/>
                </StyledGlobalButton>

                <StyledBarSectionOptional>
                    <StyledGlobalButton onClick={() => setIsModalOpen('settings')}>
                        <SettingGear size={18}/>
                    </StyledGlobalButton>


                    <TippyDropdown
                        content={<AppsDropdown/>}
                        interactive={true}
                        verticalOffset={-5}
                        horizontalOffset={-110}
                    >
                        <StyledGlobalItem>
                            <Grid3X3 size={18}/>
                        </StyledGlobalItem>
                    </TippyDropdown>

                </StyledBarSectionOptional>


                <TippyDropdown
                    content={<ProfileDropdown profiles={exampleProfiles}/>}
                    interactive={true}
                    verticalOffset={-5}
                    horizontalOffset={-110}
                >
                    <StyledGlobalItem>
                        <ProfileImage src={ExampleProfile} size='sm'/>
                    </StyledGlobalItem>
                </TippyDropdown>


                {
                    hasUpdateAvailable && (
                        <StyledGlobalButton onClick={() => {
                        }}>
                            <Update size='sm'/>
                        </StyledGlobalButton>
                    )
                }
            </StyledBarSection>
        </StyledGlobalBar>
    )
}

export default GlobalBar
