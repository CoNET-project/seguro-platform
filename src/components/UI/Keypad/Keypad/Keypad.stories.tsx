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
        <Keypad clickActionHandlers={args.keypadClickHandlers}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    keypadClickHandlers: {
    numberKeyOnClick: () => {},
    deleteKeyOnClick: () => {},
    cancelKeyOnClick: () => {},
    unlockKeyOnClick: () => {}
    }
}