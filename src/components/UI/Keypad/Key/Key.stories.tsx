import {Story} from '@storybook/react'
import Key, {KeyProps} from './Key'

export default {
    component: Key,
    title: 'New/Keypad/Key'
}

const Template: Story<KeyProps> = (
    args
) => {
    return (
        <Key {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    number: 2,
    alphabet: 'ABC'
}
