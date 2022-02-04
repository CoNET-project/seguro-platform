import styled from "styled-components";
import HeaderBar from "../../../../../UI/Common/HeaderBar/HeaderBar";
import {usePageNavigator} from "../../../../../../contexts/pageNavigator/PageNavigatorContext";
import {AddContact, CreateChat} from "../../../../../UI/Icons/Icons";
import {ReactNode} from "react";

const StyledHeaderBar = styled(HeaderBar)`
  font-weight: bolder;

  * > p {
    font-size: calc(${props => props.theme.ui.fontSizes.narrow.sm} + 2px)
  }
`

const StyledHeaderButton = styled.button`
  padding: 5px;
  border: none;
  background-color: transparent;
  color: ${props => props.theme.ui.colors.text.secondary};
`

type Icons = {
    [id: string]: ReactNode
}

const Header = () => {
    const {state} = usePageNavigator()

    const icons: Icons = {
        'Chats': <CreateChat size={18}/>,
        'Contacts': <AddContact size={18}/>
    }

    return (
        <StyledHeaderBar
            headerContent={{
                title: state.current[0]
            }}
            headerComponents={{
                headerRight: [
                    <StyledHeaderButton>
                        {icons[state.current[0]]}
                    </StyledHeaderButton>
                ]
            }}
        />
    )
}

export default Header