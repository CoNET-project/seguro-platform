import styled from 'styled-components'
import {NetworkStrength} from "../../../../store/appState/appStateReducer"
import React from 'react'

const StyledNetworkIcon = styled.div`
  min-height: 20px;
  min-width: 20px;
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2px;
  justify-content: center;
  position: relative;
`

const StyledNetworkIconUpper = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

type StyledNetworkIconBarProps = {
    show: boolean,
    strength: number
}

const StyledNetworkIconBar = styled.div<StyledNetworkIconBarProps>`
  min-width: 12%;
  max-width: 20%;
  width: 100%;
  min-height: 5px;
  content: '';
  background-color: ${props => props.show ? props.theme.ui.colors.text.primary : props.theme.ui.colors.background.elevationOne};
  transition: background-color 100ms ease-in-out, opacity 100ms ease-in-out, border 100ms ease-in-out;
  border: 1px solid ${props => props.theme.ui.colors.text.primary};


  &:first-of-type {
    height: 15%;
  }

  &:nth-of-type(2n) {
    height: 35%;
  }

  &:nth-of-type(3n) {
    height: 55%;
  }

  &:last-of-type {
    height: 75%;
  }

  &:not(:last-of-type) {
    margin-right: 1px;
  }
`

export type NetworkIconProps = {
    strength: NetworkStrength
}

const NetworkIcon = ({strength}: NetworkIconProps) => {
    return (
        <StyledNetworkIcon>
            <StyledNetworkIconUpper>
                {
                    [0, 1, 2, 3].map((number, idx) => {
                        return (
                            <StyledNetworkIconBar show={strength >= number} key={`networkBar${idx}`}
                                                  strength={strength}/>
                        )
                    })
                }
            </StyledNetworkIconUpper>
        </StyledNetworkIcon>
    )
}

export default NetworkIcon
