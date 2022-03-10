import styled from "styled-components";
import Header from "../Header";
import ListItem from "../../../../../../UI/Common/ListItem/ListItem";
import {ChevronRight} from "../../../../../../UI/Icons/Icons";
import {usePageNavigator} from "../../../../../../../contexts/pageNavigator/PageNavigatorContext";
import {pageNavigator} from "../../../../../../../contexts/pageNavigator/pageNavigatorActions";

const StyledSettings = styled.div`
  height: 100%;
  width: 100%;
  content: '';
`

const StyledSettingsContent = styled.div`
  height: calc(100% - 50px);
  width: 100%;
  content: '';
`

const CustomListItem = styled(ListItem)`
  border-bottom: ${props => props.isSectionSeparator ? `1px solid ${props.theme.ui.colors.border.light}` : 'unset'}
`


const Settings = () => {
    const {dispatch} = usePageNavigator()

    const navigateToPage = (pageId: string) => {
        dispatch(pageNavigator.navigateToPage(pageId))
    }

    return (
        <StyledSettings>
            <Header/>
            <StyledSettingsContent>
                <CustomListItem isSectionSeparator={true} itemHeader={{title: "Privacy & Security"}}/>
                <CustomListItem itemLeft={<p>Chat History</p>} itemRight={<ChevronRight/>}
                                onClick={() => navigateToPage('Settings/Chat History')}/>
                <CustomListItem itemLeft={<p>Status</p>} itemRight={<ChevronRight/>}
                                onClick={() => navigateToPage('Settings/Status')}/>
                <CustomListItem isSectionSeparator={true} itemHeader={{title: "Chats"}}/>
                <CustomListItem itemLeft={<p>Wallpaper</p>} itemRight={<ChevronRight/>}
                                onClick={() => navigateToPage('Settings/Wallpaper')}/>
                <CustomListItem itemLeft={<p>Font Size</p>} itemRight={<ChevronRight/>}
                                onClick={() => navigateToPage('Settings/Font Size')}/>
                <CustomListItem itemLeft={<p>Disappearing Messages</p>} itemRight={<ChevronRight/>}
                                onClick={() => navigateToPage('Settings/Disappearing Messages')}/>
                <CustomListItem isSectionSeparator={true} itemHeader={{title: "Notifications"}}/>
                <CustomListItem itemLeft={<p>Sounds</p>} itemRight={<ChevronRight/>}
                                onClick={() => navigateToPage('Settings/Sounds')}/>
            </StyledSettingsContent>
        </StyledSettings>
    )
}

export default Settings