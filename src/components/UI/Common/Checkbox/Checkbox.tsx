import styled from 'styled-components'
import {GrFormCheckmark} from "react-icons/gr"
import React from "react"

export type CheckboxProps = {
    defaultValue: boolean,
    disabled?: boolean,
    onChange?: (checked: boolean) => void
}

type StyledCheckboxProps = {
    disabled?: boolean,
    checked: boolean
}
const HiddenInput = styled.input`
	visibility: hidden;
	width: 0;
	height: 0;
	pointer-events: none;
`

const StyledCheckbox = styled.div<StyledCheckboxProps>`
	transition: background-color 50ms ease-in-out;
	opacity: ${props => props.disabled ? 0.5 : 1};
	width: 20px;
	height: 20px;
	content: '';
	border-radius: 2.5px;
	border: 1px solid ${props => props.theme.ui.colors.border.light};
	background-color: ${props => props.disabled ?
			props.theme.ui.colors.primary :
			props.checked ?
					props.theme.ui.colors.primary :
					props.theme.ui.colors.background.foundation};
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	cursor: pointer;

	& > svg > polyline {
		stroke: white
	}
`

const Checkbox = ({defaultValue, onChange, disabled}: CheckboxProps) => {
	

    React.useEffect(() => {
        setIsChecked(defaultValue)
    }, [])

    const [checked, setIsChecked] = React.useState(false)

    const checkboxClick = () => {
        if (!disabled) {
            if (onChange) {
                onChange(!checked)
            }
            setIsChecked(!checked)
        }
    }

    return (
        <StyledCheckbox onClick={checkboxClick} disabled={disabled} checked={checked}>
            <HiddenInput type='checkbox' checked={checked} onChange={() => {
            }}/>
            {
                (checked || disabled) && (
                    <GrFormCheckmark size={36}/>
                )
            }
        </StyledCheckbox>
    )
}

export default Checkbox
