import styled from "styled-components"
import {FormattedMessage} from "react-intl"
import useAppState from "../../../../store/appState/useAppState"
import React from 'react'

const StyledNetworkDropdown = styled.div`
  width: 100%;
  height: 100%;
  min-width: 10rem;
  max-width: 15rem;
  max-height: 30rem;
  padding: 15px;
`

const StyledNetworkLabel = styled.p`
  font-weight: 700;
  color: ${props => props.theme.ui.colors.text.primary};
  font-size: calc(${props => props.theme.ui.fontSizes.narrow.md} - 1.5px)
`

const StyledNetworkStatus = styled.span`
  margin-left: 5px;
  opacity: 0.6;
`

const StyledNetworkDescription = styled.p`
  margin-top: 5px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
`

const NetworkDropdown = () => {

    const {networkStrength} = useAppState()

    const getStatusText = () => {
        switch (networkStrength) {
            case 1:
                return <FormattedMessage id='platform.network.status.low'/>
            case 2:
                return <FormattedMessage id='platform.network.status.medium'/>
            case 3:
                return <FormattedMessage id='platform.network.status.high'/>
            default:
        }
    }

    const getStatusDescription = () => {
        switch (networkStrength) {
            case 1:
                return <FormattedMessage id='platform.network.status.description.low'/>
            case 2:
                return <FormattedMessage id='platform.network.status.description.medium'/>
            case 3:
                return <FormattedMessage id='platform.network.status.description.high'/>
            default:
        }
    }


    return (
        <StyledNetworkDropdown>
            <StyledNetworkLabel>
                <FormattedMessage id='platform.network.status.label'/>
                <StyledNetworkStatus>{getStatusText()}</StyledNetworkStatus>
            </StyledNetworkLabel>
            <StyledNetworkDescription>
                {getStatusDescription()}
            </StyledNetworkDescription>
        </StyledNetworkDropdown>
    )
}

export default NetworkDropdown