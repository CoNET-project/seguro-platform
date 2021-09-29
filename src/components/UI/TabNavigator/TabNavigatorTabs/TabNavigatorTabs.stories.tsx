import {Story} from '@storybook/react'
import TabNavigatorTabs, {TabNavigatorTabsProps} from './TabNavigatorTabs'
import {TabNavigatorPages} from "../TabNavigator";

export default {
    component: TabNavigatorTabs,
    title: 'TabNavigator/BottomTabs'
}

const Template: Story<TabNavigatorTabsProps> = (
    args
) => {
    return (
        <TabNavigatorTabs {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    screens: {
        'Chats': {
            screen: <h1>CHATS</h1>
        },
        'Contacts': {
            screen: <h1>CONTACTS</h1>
        },
        'Settings': {
            screen: <h1>SETTINGS</h1>
        },
    }
}