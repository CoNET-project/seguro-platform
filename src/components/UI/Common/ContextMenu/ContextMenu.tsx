import styled from "styled-components";
import {ReactNode} from "react";

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

export type ContextMenuActions = {
    text: ReactNode | string,
    action: () => void
}

type ContextMenuProps = {
    buttons: Array<ContextMenuActions>
}

const ContextMenu = ({buttons}: ContextMenuProps) => {
    return (
        <StyledDropdown>
            {buttons.map((button, idx) => (
                <StyledDropdownItem onClick={button.action} key={idx}>
                    <StyledDropdownText>
                        {button.text}
                    </StyledDropdownText>
                </StyledDropdownItem>
            ))}
        </StyledDropdown>
    )
}

export default ContextMenu
