import styled from "styled-components";
import MotionWrapper from "../../../../UI/Motion/MotionWrapper";
import {pageTransitionVariants} from "../../../../UI/Motion/Variants/Variants";

type DeleteProfileProps = {
    custom: number
}


const StyledDeleteProfile = styled.div`
  min-height: 30rem;
  background-color: ${props => props.theme.ui.backgroundColor};
`

const DeleteProfile = ({custom}: DeleteProfileProps) => {
    return (
        <MotionWrapper runInitialAnimation={true} custom={custom} name="Manage Profile"
                       variants={pageTransitionVariants}>
            <StyledDeleteProfile>DELETE PROFILE</StyledDeleteProfile>
        </MotionWrapper>
    )
}

export default DeleteProfile