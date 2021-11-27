import styled from "styled-components";
import {Close, CloseCircle} from "../../../Icons/Icons";
import {FaBell} from "react-icons/all";

const StyledListItem = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 4.5rem;
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 15px;
  position: relative;
  box-shadow: 0 2.5px 5px ${props => props.theme.ui.colors.border.light};

  &:not(:first-child) {
    margin-top: 20px;
  }
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
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -11px;
  right: -11px;
  font-size: 22px;
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
            <StyledClearIcon>
                <CloseCircle/>
            </StyledClearIcon>
        </StyledListItem>
    )
}

export default ListItem
