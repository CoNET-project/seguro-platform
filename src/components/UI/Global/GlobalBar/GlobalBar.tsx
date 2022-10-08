import styled from 'styled-components'
import ProfileImage from '../../Common/Profile/Image/Image'
import {Grid3X3, NotificationBell, SettingGear, Update} from "../../Icons/Icons"
import {screenWidth, sizes} from "../../screenSizes"
import {LogoIcon} from "../../Logo/Logo"
import ProfileDropdown from "../../Dropdowns/ProfileDropdown/ProfileDropdown"
import useAppState from "../../../../store/appState/useAppState"
import {TippyDropdown} from "../../Tippy/Tippy"
import AppsDropdown from "../../Dropdowns/AppsDropdown/AppsDropdown"
import React, {useEffect, useState} from "react"
import NotificationDropdown from "../../Dropdowns/NotificationDropdown/NotificationDropdown"

const StyledGlobalBar = styled.div`
  height: calc(50px + env(safe-area-inset-top));
  width: 100%;
  border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.ui.colors.globalBar.background};
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
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 10px;
  position: relative;
  border-radius: 5px;
  margin: 10px 0;
  transition: background-color 100ms ease-in-out;

  &:hover {
    background-color: ${props => props.theme.ui.colors.hover};
  }
`

const StyledGlobalButton_NoHover = styled(StyledGlobalButton)`
  &:hover {
    background-color: initial;
  }
`

const StyledGlobalItem = styled(StyledGlobalButton)`
`

const StyledNotificationDot = styled.div`
  height: 12.5px;
  width: 12.5px;
  content: '';
  background-color: ${props => props.theme.ui.colors.dangerous};
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.ui.colors.background.foundation}
`

type Dropdowns = 'applications' | 'profiles' | 'notifications' | 'network' | null

const GlobalBar = () => {
    const {
        hasUpdateAvailable,
        networkStrength,
        setIsDrawerOpen,
        isDrawerOpen,
        setIsShowOverlay,
        windowInnerSize: {width},
        activeProfile,
        setIsModalOpen,
        hasNotification
    } = useAppState()

    const [currentDropdown, setCurrentDropdown] = useState<Dropdowns>(null)

    useEffect(() => {
        if (currentDropdown) {
            setIsShowOverlay(true)
        } else {
            setIsShowOverlay(false)
        }
    }, [currentDropdown])

    const setDropdownToggle = (dropdown: Dropdowns) => {
        if (currentDropdown === dropdown) {
            return setCurrentDropdown(null)
        }
        return setCurrentDropdown(dropdown)
    }

    const closeDropdown = () => {
        setCurrentDropdown(null)
    }


    return (
        <StyledGlobalBar>
            <StyledBarSectionFullWidth>
                <StyledGlobalButton_NoHover onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                                            disabled={width >= sizes.medium}>
                    <LogoIcon size={24} color="white"/>
                </StyledGlobalButton_NoHover>
            </StyledBarSectionFullWidth>
            <StyledBarSectionFullWidth/>
            <StyledBarSection>
                {/*<TippyDropdown*/}
                {/*    content={<NetworkDropdown/>}*/}
                {/*    verticalOffset={2}*/}
                {/*    visible={currentDropdown === 'network'}*/}
                {/*    onClickOutside={closeDropdown}*/}
                {/*>*/}
                {/*    <StyledGlobalItem onClick={() => setDropdownToggle('network')}>*/}
                {/*        <NetworkIcon strength={networkStrength}/>*/}
                {/*    </StyledGlobalItem>*/}
                {/*</TippyDropdown>*/}

                <StyledBarSectionOptional>

                    <TippyDropdown
                        content={<NotificationDropdown/>}
                        verticalOffset={2}
                        visible={currentDropdown === 'notifications'}
                        onClickOutside={closeDropdown}
                    >
                        <StyledGlobalItem onClick={() => setDropdownToggle('notifications')}>
                            <NotificationBell size={20} color="white"/>
                            {
                                hasNotification && (
                                    <StyledNotificationDot/>
                                )
                            }
                        </StyledGlobalItem>
                    </TippyDropdown>


                    <StyledGlobalButton onClick={() => {
                        setCurrentDropdown(null)
                        setIsModalOpen('settings')
                    }}>
                        <SettingGear size={18} color="white"/>
                    </StyledGlobalButton>

                    <TippyDropdown
                        content={<AppsDropdown closeDropdown={closeDropdown}/>}
                        verticalOffset={2}
                        visible={currentDropdown === 'applications'}
                        onClickOutside={closeDropdown}
                    >
                        <StyledGlobalItem onClick={() => setDropdownToggle('applications')}>
                            <Grid3X3 size={18} color="white"/>
                        </StyledGlobalItem>
                    </TippyDropdown>

                </StyledBarSectionOptional>


                <TippyDropdown
                    content={<ProfileDropdown closeDropdown={closeDropdown}/>}
                    verticalOffset={2}
                    visible={currentDropdown === 'profiles'}
                    onClickOutside={closeDropdown}
                >
                    <StyledGlobalItem onClick={() => setDropdownToggle('profiles')}>
                        <ProfileImage src={activeProfile?.profileImg} size='sm'/>
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
