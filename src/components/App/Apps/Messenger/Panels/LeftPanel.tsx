import TabNavigator, {TabNavigatorPages} from "../../../../UI/TabNavigator/TabNavigator";
import {ChatBubble, Contacts, Gear} from "../../../../UI/Icons/Icons";
import {FormattedMessage} from "react-intl";
import VerticalTabNavigator from "../../../../UI/VerticalTabNavigator/VerticalTabNavigator";
import ContactsScreen from './LeftPanel/Contacts/Contacts'
import ChatsScreen from './LeftPanel/Chats/Chats'
import SettingsScreen from './LeftPanel/Settings/Settings'
import styled from "styled-components";
import {screenWidth} from "../../../../UI/screenSizes";
import {PageNavigatorProvider} from "../../../../Providers/PageNavigatorProvider";
import AddContact from "./LeftPanel/Contacts/AddContact";
import AddChat from "./LeftPanel/Chats/AddChat";

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
    const navigatorScreens: TabNavigatorPages = {
        'Chats': {
            screen: <ChatsScreen/>,
            text: <FormattedMessage id='tabnavigator.tab.chats'/>,
            icon: <ChatBubble/>
        },
        'Chats/Add Chat': {
            screen: <AddChat/>,
            isTopLevel: false
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
        'Contacts/Add Contact': {
            screen: <AddContact/>,
            isTopLevel: false
        }
    }

    return (
        <PageNavigatorProvider existingPages={Object.keys(navigatorScreens)}>
            <CustomVerticalTabNavigator screens={navigatorScreens}/>
            <CustomTabNavigator screens={navigatorScreens} activeStyles={{
                borderColor: 'rgb(135,206,250)',
                color: 'rgb(135,206,250)'
            }}/>
        </PageNavigatorProvider>
    )
}

export default LeftPanel
