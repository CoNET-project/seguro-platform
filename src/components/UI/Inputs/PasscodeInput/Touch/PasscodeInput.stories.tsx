import {Story} from '@storybook/react'
import PasscodeInput from './PasscodeInput'

export default {
    component: PasscodeInput,
    title: 'PasscodePage/Input'
}

const Template: Story = (
    args
) => {
    return (
        <PasscodeInput value='hello' error={undefined}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}