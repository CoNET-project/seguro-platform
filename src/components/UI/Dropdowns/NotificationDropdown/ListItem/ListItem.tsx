import styled from "styled-components";
import {Close, CloseCircle} from "../../../Icons/Icons";
import {FaBell} from "react-icons/all";

type ListItemProps = {
    isOpen: boolean
}

const StyledListItemWrapper = styled.div`
  position: relative;

  &:not(:first-child) {
    margin-top: 20px;
  }
`

const StyledListItem = styled.div`
  min-width: 100%;
  width: 100%;
  min-height: 4.5rem;
  // When open should adjust height
  height: 4.5rem;
  background-color: ${props => props.theme.ui.colors.background.elevationTwo};
  border: 1px solid ${props => props.theme.ui.colors.border.light};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  box-shadow: 0 2.5px 5px ${props => props.theme.ui.colors.border.light};
  overflow: hidden;
`;

const StyledNotificationDetails = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  word-break: break-all;
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
  width: 100%;
  // When not open, set this to nowrap, or else set to 'normal'
  white-space: normal;
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
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
  cursor: pointer;
`


const ListItem = ({ isOpen }: ListItemProps) => {

    const getContent = () => {
       // if (isOpen) {
           return 'dkljfhdaskjfhsdkfhcsnfhsasdasdasdasdjrdgskdrhfxgkrdsfhxgkerafgheskuygfuakewgfuseygfdauwyegdaeukygfkuasyegfkuasgFuaygsfg'
       // }
       return 'skldjfhaskjdfhsakdjfh'
    }

    return (
        <StyledListItemWrapper>
            <StyledListItem>
                <StyledNotificationDetails>
                    <StyledNotificationHeader>
                        <FaBell size={12}/>
                        <StyledNotificationTitle>Hello</StyledNotificationTitle>
                    </StyledNotificationHeader>
                    <StyledNotificationText>
                        {getContent()}
                    </StyledNotificationText>
                </StyledNotificationDetails>
            </StyledListItem>
            <StyledClearIcon>
                <CloseCircle/>
            </StyledClearIcon>
        </StyledListItemWrapper>
    )
}

export default ListItem
