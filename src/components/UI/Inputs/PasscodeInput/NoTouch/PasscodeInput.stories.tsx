import {Story} from '@storybook/react'
import PasscodeInput from './PasscodeInput'
import {FormattedMessage} from "react-intl";

export default {
    component: PasscodeInput,
    title: 'PasscodePage/NoTouch/Input'
}

const Template: Story = (
    args
) => {
    return (
        <PasscodeInput value='hello' error={<FormattedMessage id='passcodeInput.invalidLength'/>} setValue={e => {
        }}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}