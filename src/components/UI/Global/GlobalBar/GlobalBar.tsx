import styled from 'styled-components';
import ExampleProfile from '../../../../assets/examples/profile-example.jpeg'
import ProfileImage from '../../Common/Profile/Image/Image'
import {Grid3X3, Plug, SettingGear, Update} from "../../Icons/Icons";
import {randomColor} from "../../../../utilities/utilities";
import {screenWidth} from "../../screenSizes";
import {LogoIcon, LogoImage, LogoText} from "../../Logo/Logo";
import AppsDropdown from "../../Dropdowns/AppsDropdown/AppsDropdown";
import ProfileDropdown, {ProfileData} from "../../Dropdowns/ProfileDropdown/ProfileDropdown";
import {useState} from "react";
import useAppState from "../../../../store/appState/useAppState";

const StyledGlobalBar = styled.div`
  height: calc(60px + env(safe-area-inset-top));
  width: 100vw;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.ui.backgroundColor};
  padding: calc(env(safe-area-inset-top)) 15px 0 15px;
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

const StyledGlobalButtonWrapper = styled.div`
  position: relative;
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

const GlobalBar = () => {

    const {hasUpdateAvailable, setIsDrawerOpen, isDrawerOpen} = useAppState()

    const [currentDropdown, setDropdown] = useState<'apps' | 'profile' | ''>('')

    const exampleProfile: ProfileData = {
        imageSrc: ExampleProfile,
        keyid: '75DDC3C4A499F1A1',
        name: 'Jessica K'
    }


    const dropdownAppear = (dropdown: 'apps' | 'profile' | '') => {
        if (currentDropdown === dropdown) {
            return setDropdown('')
        }
        return setDropdown(dropdown)
    }


    return (
        <StyledGlobalBar>
            <StyledBarSectionFullWidth>
                <StyledGlobalButton onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                    <LogoIcon size={24}/>
                </StyledGlobalButton>
            </StyledBarSectionFullWidth>
            <StyledBarSectionFullWidth/>
            <StyledBarSection>
                <StyledGlobalButton>
                    <Plug size={18}/>
                </StyledGlobalButton>

                <StyledBarSectionOptional>
                    <StyledGlobalButtonWrapper>
                        <StyledGlobalButton>
                            <SettingGear size={18}/>
                        </StyledGlobalButton>
                    </StyledGlobalButtonWrapper>

                    <StyledGlobalButtonWrapper>
                        <StyledGlobalButton onClick={() => dropdownAppear('apps')}>
                            <Grid3X3 size={18}/>
                        </StyledGlobalButton>
                        {
                            currentDropdown === 'apps' && (
                                <AppsDropdown/>
                            )
                        }
                    </StyledGlobalButtonWrapper>
                </StyledBarSectionOptional>

                <StyledGlobalButtonWrapper>
                    <StyledGlobalButton onClick={() => dropdownAppear('profile')}>
                        <ProfileImage src={ExampleProfile} size='sm'/>
                    </StyledGlobalButton>
                    {
                        currentDropdown === 'profile' && (
                            <ProfileDropdown closeAction={() => dropdownAppear('')} profileData={exampleProfile}/>
                        )
                    }
                </StyledGlobalButtonWrapper>

                {
                    hasUpdateAvailable && (
                        <StyledGlobalButtonWrapper>
                            <StyledGlobalButton onClick={() => {
                            }}>
                                <Update size='sm'/>
                            </StyledGlobalButton>
                        </StyledGlobalButtonWrapper>
                    )
                }
            </StyledBarSection>
        </StyledGlobalBar>
    )
}

export default GlobalBar