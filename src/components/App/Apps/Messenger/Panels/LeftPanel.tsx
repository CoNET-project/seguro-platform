import TabNavigator, {TabNavigatorPages} from "../../../../UI/TabNavigator/TabNavigator"
import {ChatBubble, Contacts, Gear} from "../../../../UI/Icons/Icons"
import {FormattedMessage} from "react-intl"
import VerticalTabNavigator from "../../../../UI/VerticalTabNavigator/VerticalTabNavigator"
import ContactsScreen from './LeftPanel/Contacts/Contacts'
import ChatsScreen from './LeftPanel/Chats/Chats'
import SettingsScreen from './LeftPanel/Settings/Settings'
import styled from "styled-components";
import {screenWidth} from "../../../../UI/screenSizes"
import {PageNavigatorProvider} from "../../../../Providers/PageNavigatorProvider"
import AddContact from "./LeftPanel/Contacts/AddContact"
import AddChat from "./LeftPanel/Chats/AddChat"
import DisappearingMessages from "./LeftPanel/Settings/Chats/DisappearingMessages"
import FontSize from "./LeftPanel/Settings/Chats/FontSize"
import Wallpaper from "./LeftPanel/Settings/Chats/Wallpaper"
import Sounds from "./LeftPanel/Settings/Notifications/Sounds"
import ChatHistory from "./LeftPanel/Settings/PrivacySecurity/ChatHistory"
import Status from "./LeftPanel/Settings/PrivacySecurity/Status"
import React from "react"


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
        'Contacts/Add Contact': {
            screen: <AddContact/>,
            isTopLevel: false
        },
        'Settings': {
            screen: <SettingsScreen/>,
            text: <FormattedMessage id='tabnavigator.tab.settings'/>,
            icon: <Gear/>
        },
        'Settings/Disappearing Messages': {
            screen: <DisappearingMessages/>,
            isTopLevel: false
        },
        'Settings/Font Size': {
            screen: <FontSize/>,
            isTopLevel: false
        },
        'Settings/Wallpaper': {
            screen: <Wallpaper/>,
            isTopLevel: false
        },
        'Settings/Sounds': {
            screen: <Sounds/>,
            isTopLevel: false
        },
        'Settings/Chat History': {
            screen: <ChatHistory/>,
            isTopLevel: false
        },
        'Settings/Status': {
            screen: <Status/>,
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
