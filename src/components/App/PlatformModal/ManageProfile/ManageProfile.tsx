import styled from "styled-components";
import HeaderBar from "../../../UI/Common/HeaderBar/HeaderBar";
import useAppState from "../../../../store/appState/useAppState";

const StyledManageProfileContent = styled.div`
  min-width: 30rem;
`

const CustomizedHeaderBar = styled(HeaderBar)`
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`

const ManageProfile = () => {
    const {setIsModalOpen} = useAppState()
    return (
        <StyledManageProfileContent>
            <CustomizedHeaderBar headerContent={{title: 'Manage Profile'}}
                                 closeAction={{
                                     action: () => {
                                         return setIsModalOpen(null)
                                     },
                                     alignRight: true,
                                     alwaysVisible: true
                                 }}/>
        </StyledManageProfileContent>
    )
}

export default ManageProfile
