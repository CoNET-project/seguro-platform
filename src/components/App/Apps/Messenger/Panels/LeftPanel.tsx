import TabNavigator, {TabNavigatorPages} from "../../../../UI/TabNavigator/TabNavigator";
import {ChatBubble, Contacts, Gear} from "../../../../UI/Icons/Icons";
import useAppState from "../../../../../store/appState/useAppState";
import {FormattedMessage} from "react-intl";
import VerticalTabNavigator from "../../../../UI/VerticalTabNavigator/VerticalTabNavigator";
import ContactsScreen from './LeftPanel/Contacts'
import ChatsScreen from './LeftPanel/Chats'
import SettingsScreen from './LeftPanel/Settings'
import styled from "styled-components";
import {screenWidth} from "../../../../UI/screenSizes";

const CustomVerticalTabNavigator = styled(VerticalTabNavigator)`
  display: none;
  @media (${screenWidth.mediumWidth}) {
    display: flex;
  }
`

const CustomTabNavigator = styled(TabNavigator)`
  @media (${screenWidth.mediumWidth}) {
    display: none;
  }
`

const LeftPanel = () => {
    const {setCurrentFocusPanel} = useAppState()

    const navigatorScreens: TabNavigatorPages = {
        'Chats': {
            screen: <ChatsScreen/>,
            text: <FormattedMessage id='tabnavigator.tab.chats'/>,
            icon: <ChatBubble/>
        },
        'Contacts': {
            screen: <ContactsScreen/>,
            text: <FormattedMessage id='tabnavigator.tab.contacts'/>,
            icon: <Contacts/>
        },
        'Settings': {
            screen: <SettingsScreen/>,
            text: <FormattedMessage id='tabnavigator.tab.settings'/>,
            icon: <Gear/>
        },
    }

    return (
        <>
            <CustomVerticalTabNavigator screens={navigatorScreens}/>
            <CustomTabNavigator screens={navigatorScreens} activeStyles={{
                borderColor: 'rgb(135,206,250)',
                color: 'rgb(135,206,250)'
            }}/>
        </>
    )
}

export default LeftPanel
