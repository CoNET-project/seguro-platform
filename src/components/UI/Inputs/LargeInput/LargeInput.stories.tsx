import {Story} from '@storybook/react'
import LargeInput from './LargeInput'
import {FormattedMessage} from "react-intl";

export default {
    component: LargeInput,
    title: 'Inputs/LargeInput'
}

const Template: Story = (
    args
) => {
    return (
        <LargeInput value='hello' error={<FormattedMessage id='passcodeInput.invalidLength'/>} setValue={e => {
        }}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {}