import { Story } from '@storybook/react'
import Key, {KeyProps} from './Key'

export default {
    component: Key,
    title: 'Keypad/Key'
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
    number: 1,
    alphabet: 'ABC',
    onClick: () => console.log('onClick()')
}