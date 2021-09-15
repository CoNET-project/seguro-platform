import styled from 'styled-components';
import {ReactNode} from "react";

type IconProps = {
    component: ReactNode
}

const StyledIcon = styled.div`
  color: ${props => props.theme.ui.text.textPrimary}
`

const Icon = (props: IconProps) => {
    return (
        <StyledIcon>
            {props.component}
        </StyledIcon>
    )
}

export default Icon