import React, {Story} from '@storybook/react'
import GlobalBar from "./GlobalBar"

export default {
    component: GlobalBar,
    title: 'Global/GlobalBar'
}

const Template: Story = (
    args
) => {
    return (
        <GlobalBar/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}