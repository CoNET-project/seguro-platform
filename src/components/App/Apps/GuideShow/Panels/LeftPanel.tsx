import TabNavigator, {TabNavigatorPages} from "../../../../UI/TabNavigator/TabNavigator"
import {ChatBubble, Contacts, Gear, CloseIcon} from "../../../../UI/Icons/Icons"
import {FormattedMessage} from "react-intl";
import VerticalTabNavigator from "../../../../UI/VerticalTabNavigator/VerticalTabNavigator"
import SettingsScreen from './LeftPanel/Settings/Settings'
import styled from "styled-components"
import {screenWidth} from "../../../../UI/screenSizes"
import {PageNavigatorProvider} from "../../../../Providers/PageNavigatorProvider"


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
        'Guide/Guide': {
            screen: <SettingsScreen/>,
            text: <FormattedMessage id='tabnavigator.guide.title'/>
        }
    }

    return (
        <PageNavigatorProvider existingPages={Object.keys(navigatorScreens)}>
            <CustomVerticalTabNavigator screens={navigatorScreens}/>
            <CustomTabNavigator screens={navigatorScreens} />
        </PageNavigatorProvider>
    )
}

export default LeftPanel
