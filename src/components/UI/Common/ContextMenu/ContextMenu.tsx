import styled from "styled-components"
import React, {ReactNode} from "react"


export type ContextMenuActions = {
    text: ReactNode | string,
    action: () => void
}

type ContextMenuProps = {
    buttons: Array<ContextMenuActions>
}
const StyledDropdown = styled.div`
	min-width: 100px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	background-color: ${props => props.theme.ui.colors.background.elevationTwo};
`

const StyledDropdownItem = styled.button`
	background-color: transparent;
	border: none;
	width: 100%;
	text-align: left;
	padding: 10px 15px;

	&:not(:last-of-type) {
		border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
	}
`

const StyledDropdownText = styled.p`
	font-size: ${props => props.theme.ui.fontSizes.narrow.sm};
	color: ${props => props.theme.ui.colors.text.primary}
`
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
