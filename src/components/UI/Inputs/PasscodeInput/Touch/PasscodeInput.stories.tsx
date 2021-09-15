import {Story} from '@storybook/react'
import PasscodeInput, {PasscodeInputProps} from './PasscodeInput'

export default {
    component: PasscodeInput,
    title: 'PasscodePage/Touch/Input'
}

const Template: Story<PasscodeInputProps> = (
    args
) => {
    return (
        <PasscodeInput {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    value: '',
    error: 'Hello'
}