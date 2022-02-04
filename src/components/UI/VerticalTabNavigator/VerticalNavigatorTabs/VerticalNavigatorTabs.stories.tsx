import {Story} from '@storybook/react'
import VerticalNavigatorTabs from "./VerticalNavigatorTabs";


export default {
    component: VerticalNavigatorTabs,
    title: 'TabNavigator/VerticalTabs'
}

const Template: Story<any> = (
    args
) => {
    return (
        <VerticalNavigatorTabs {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}