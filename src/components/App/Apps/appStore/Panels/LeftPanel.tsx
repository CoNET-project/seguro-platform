import TabNavigator, {TabNavigatorPages} from "../../../../UI/TabNavigator/TabNavigator";
import {FormattedMessage} from "react-intl";
import VerticalTabNavigator from "../../../../UI/VerticalTabNavigator/VerticalTabNavigator";
import SettingsScreen from './LeftPanel/Settings/Settings'
import styled from "styled-components";
import {screenWidth} from "../../../../UI/screenSizes";
import {PageNavigatorProvider} from "../../../../Providers/PageNavigatorProvider";


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
        'AppStore': {
            screen: <SettingsScreen/>,
            text: <FormattedMessage id='tabnavigator.appStore.title'/>
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
