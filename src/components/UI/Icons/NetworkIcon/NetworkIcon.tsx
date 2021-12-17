import styled from 'styled-components'
import {AiOutlineExclamation} from "react-icons/all";

const StyledNetworkIcon = styled.div`
  min-height: 20px;
  min-width: 20px;
  width: 100%;
  height: 100%;
  content: '';
  display: flex;
  flex-direction: column;
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
  min-width: 1px;
  max-width: 20%;
  width: 100%;
  min-height: 5px;
  content: '';
  background-color: ${props => props.show ? props.theme.ui.colors.text.secondary : props.theme.ui.colors.background.foundation};
  opacity: ${props => props.show ? 1 : 0.5};
  transition: background-color 100ms ease-in-out, opacity 100ms ease-in-out, border 100ms ease-in-out;
  border: 2px solid ${props => props.strength < 2 ? props.theme.ui.colors.dangerous : props.theme.ui.colors.text.secondary};
  border-radius: 5px;
  margin: 0 2px;


  &:first-of-type {
    height: 20%;
    background-color: ${props => props.strength < 2 && props.theme.ui.colors.dangerous};
  }

  &:nth-of-type(2n) {
    height: 35%;
  }

  &:nth-of-type(3n) {
    height: 50%;
  }

  &:nth-of-type(4n) {
    height: 65%;
  }

  &:last-of-type {
    height: 80%;
  }
`

export type NetworkIconProps = {
    strength: 1 | 2 | 3
}

const NetworkIcon = ({strength}: NetworkIconProps) => {
    return (
        <StyledNetworkIcon>
            <StyledNetworkIconUpper>
                {
                    [1, 1.5, 2, 2.5, 3].map((number, idx) => {
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
