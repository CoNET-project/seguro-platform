import styled from 'styled-components'
import {GrFormCheckmark, IoIosCheckmark} from "react-icons/all";
import {useEffect, useState} from "react";

export type CheckboxProps = {
    defaultValue: boolean,
    disabled?: boolean,
    onChange?: (checked: boolean) => void
}

type StyledCheckboxProps = {
    disabled?: boolean
}

const HiddenInput = styled.input`
  visibility: hidden;
  width: 0px;
  height: 0px;
  pointer-events: none;
`

const StyledCheckbox = styled.div<StyledCheckboxProps>`
  opacity: ${props => props.disabled ? 0.5 : 1};
  width: 20px;
  height: 20px;
  content: '';
  border-radius: 2.5px;
  border: 1px solid ${props => props.theme.ui.borderColor};
  background-color: ${props => props.disabled ? props.theme.ui.primaryColorWithOpacity : props.theme.ui.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  
  & > svg > polyline {
    stroke: ${props => props.theme.ui.text.textPrimary}
  }
`



const Checkbox = ({ defaultValue, onChange, disabled }: CheckboxProps) => {

    useEffect(() => {
        setIsChecked(defaultValue)
    }, [])

    const [checked, setIsChecked] = useState(false)

    const checkboxClick = () => {
        if (!disabled) {
            if (onChange) {
                onChange(!checked)
            }
            setIsChecked(!checked)
        }
    }

    return (
        <StyledCheckbox onClick={checkboxClick} disabled={disabled}>
            <HiddenInput type='checkbox' checked={checked} onChange={() => {}}/>
            {
                (checked || disabled) && (
                    <GrFormCheckmark size={36}/>
                )
            }
        </StyledCheckbox>
    )
}

export default Checkbox