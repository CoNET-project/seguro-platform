import {Story} from '@storybook/react'
import Keypad, {KeypadProps} from './Keypad'

export default {
    component: Keypad,
    title: 'New/Keypad/Keypad'
}

const Template: Story<KeypadProps> = (
    args
) => {
    return (
        <Keypad {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    numberKeyOnClick: () => {
    },
    deleteKeyOnClick: () => {
    },
    cancelKeyOnClick: () => {
    },
    unlockKeyOnClick: () => {
    }
}
