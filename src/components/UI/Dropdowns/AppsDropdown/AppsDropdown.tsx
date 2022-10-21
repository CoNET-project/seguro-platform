import styled, {useTheme} from 'styled-components'
import {FaAppStoreIos, FaCcApplePay, FaWhatsapp } from "react-icons/fa"
import {SeguroLogoIcon} from '../../Logo/Seguro'
import {LogoIcon} from '../../Logo/Logo'
import {FormattedMessage} from "react-intl"
import React, {useEffect, useState} from 'react'


type AppsDropdownProps = {
    closeDropdown: (app:string) => void
}

const StyledAppsDropdown = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 15px;
	padding: 10px 15px;
	border-radius: 10px;
	background-color: ${props => props.theme.ui.colors.background.elevationOne};
	min-width: 10rem;
`

const StyledAppItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 80px;
	height: 80px;
	border-radius: 5px;
	padding: 5px 5px;
	cursor: pointer;
	color: ${props => props.theme.ui.colors.secondary};
	&:hover {
		background-color: ${props => props.theme.ui.colors.secondary};
		color: #fff;
	};
`

const StyledAppIcon = styled.div`
`

const StyledAppName = styled.p`
  text-align: center;
  font-size: 13px;
`

const AppsDropdown = ({closeDropdown}: AppsDropdownProps) => {
	const theme = useTheme()

    return (
        <StyledAppsDropdown>
            <StyledAppItem onClick={() => {
				closeDropdown('showGuide')
			}}>
                <StyledAppIcon>
                    <LogoIcon size={24} />
                </StyledAppIcon>
                <StyledAppName>
                    <FormattedMessage id = 'globalBar.application.home'/>
                </StyledAppName>
            </StyledAppItem>

			<StyledAppItem onClick={() => {
				closeDropdown('showAppStore')
			}}>
                <StyledAppIcon>
                    <FaAppStoreIos size={24} />
                </StyledAppIcon>
                <StyledAppName>
                    <FormattedMessage id = 'globalBar.application.AppStore'/>
                </StyledAppName>
            </StyledAppItem>

            <StyledAppItem onClick={() => {
				closeDropdown('Seguro Messanger')
			}}>
                <StyledAppIcon>
                    <SeguroLogoIcon size={24} color={theme.ui.colors.primary}/>
                </StyledAppIcon>
                <StyledAppName>
					<FormattedMessage id = 'globalBar.application.SeguroMessage'/>
                </StyledAppName>
            </StyledAppItem>

        </StyledAppsDropdown>
    )
}

export default AppsDropdown
