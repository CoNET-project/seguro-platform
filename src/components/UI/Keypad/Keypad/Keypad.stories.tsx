import { Story } from '@storybook/react'
import Keypad from './Keypad'

export default {
    component: Keypad,
    title: 'Keypad/Keypad'
}

const Template: Story = (
    args
) => {
    return (
        <Keypad/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}