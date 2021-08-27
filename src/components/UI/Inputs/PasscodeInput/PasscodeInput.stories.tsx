import { Story } from '@storybook/react'
import PasscodeInput from './PasscodeInput'

export default {
    component: PasscodeInput,
    title: 'Passcode/Input'
}

const Template: Story = (
    args
) => {
    return (
        <PasscodeInput value='hello' error={true}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}