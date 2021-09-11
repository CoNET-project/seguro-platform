import {Story} from '@storybook/react'
import Input from './Input'
import {FormattedMessage} from "react-intl";

export default {
    component: Input,
    title: 'Inputs/Input'
}

const Template: Story = (
    args
) => {
    return (
        <Input value='hello' error={<FormattedMessage id='passcodeInput.invalidLength'/>} setValue={e => {
        }}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}