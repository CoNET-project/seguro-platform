import styled, {keyframes} from 'styled-components';
import {ReactNode} from "react";
import {Close} from "../../../Icons/Icons";

export type DropdownProps = {
    content: ReactNode,
    closeAction?: () => void
}
const appearKeyframe = keyframes({
    from: {
        opacity: 0
    },
    to: {
        opacity: 1
    }
})

const StyledDropdown = styled.div`
  position: absolute;
  right: 30%;
  padding: 10px 20px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background-color: ${props => props.theme.ui.backgroundColor};
  margin-top: -7.5px;
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  animation: ${appearKeyframe} 150ms ease-in-out;
  color: ${props => props.theme.ui.text.textPrimary}
`

const StyledDropdownHeader = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  margin-bottom: 10px;
`

const StyledDropdownButton = styled.button`
  border: none;
  background-color: transparent;
  height: 100%;
  width: 30px;
`

const Dropdown = ({content, closeAction}: DropdownProps) => {
    return (
        <StyledDropdown>
            {
                closeAction && (
                    <StyledDropdownHeader>
                        <StyledDropdownButton onClick={closeAction}>
                            <Close size={20}/>
                        </StyledDropdownButton>
                    </StyledDropdownHeader>
                )
            }
            {content}
        </StyledDropdown>
    )
}

export default Dropdown;