import styled from "styled-components";
import {Close} from "../../../Icons/Icons";
import {FaBell} from "react-icons/all";

const StyledListItem = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 4.5rem;
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border-bottom: 1px solid ${props => props.theme.ui.colors.border.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
`;

const StyledNotificationDetails = styled.div`
  height: 100%;
`

const StyledNotificationHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`

const StyledNotificationTitle = styled.p`
  color: ${props => props.theme.ui.colors.text.primary};
  font-weight: bolder;
  margin-left: 5px;
  font-size: ${props => props.theme.ui.fontSizes.narrow.sm}
`

const StyledNotificationText = styled(StyledNotificationTitle)`
  font-weight: normal;
  margin: 0;
`

const StyledClearIcon = styled.div`
  background-color: rgba(0, 0, 0, 0.15);
  padding: 2.5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`


const ListItem = () => {
    return (
        <StyledListItem>
            <StyledNotificationDetails>
                <StyledNotificationHeader>
                    <FaBell size={12}/>
                    <StyledNotificationTitle>Hello</StyledNotificationTitle>
                </StyledNotificationHeader>
                <StyledNotificationText>
                    Lorem ipsum, or lipsum as it is sometimes known.
                </StyledNotificationText>
            </StyledNotificationDetails>
            {/*<StyledClearIcon>*/}
            {/*    <Close/>*/}
            {/*</StyledClearIcon>*/}
        </StyledListItem>
    )
}

export default ListItem
