import TabNavigator, {TabNavigatorPages} from "../../../../UI/TabNavigator/TabNavigator";
import {ChatBubble, Contacts, Gear} from "../../../../UI/Icons/Icons";
import useAppState from "../../../../../store/appState/useAppState";
import {FormattedMessage} from "react-intl";

const LeftPanel = () => {
    const {setCurrentFocusPanel} = useAppState()


    const tabNavigatorScreens: TabNavigatorPages = {
        'Chats': {
            screen: <h1 onClick={() => setCurrentFocusPanel('main')}>CHATS</h1>,
            text: <FormattedMessage id='tabnavigator.tab.chats'/>,
            icon: <ChatBubble/>
        },
        'Contacts': {
            screen: <h1>CONTACTS</h1>,
            text: <FormattedMessage id='tabnavigator.tab.contacts'/>,
            icon: <Contacts/>
        },
        'Settings': {
            screen: <h1>SETTINGS</h1>,
            text: <FormattedMessage id='tabnavigator.tab.settings'/>,
            icon: <Gear/>
        },
    }

    return (
        <TabNavigator screens={tabNavigatorScreens} activeStyles={{
            borderColor: 'rgb(135,206,250)',
            color: 'rgb(135,206,250)'
        }}/>
    )
}

export default LeftPanel
