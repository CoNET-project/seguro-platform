import {Story} from '@storybook/react'
import Drawer from "./Drawer";

export default {
    component: Drawer,
    title: 'Mobile/Drawer'
}

const Template: Story = (
    args
) => {
    return (
        <Drawer/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}