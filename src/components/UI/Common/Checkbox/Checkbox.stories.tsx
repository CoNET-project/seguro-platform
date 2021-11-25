import {Story} from '@storybook/react'
import Checkbox, {CheckboxProps} from './Checkbox'

export default {
    component: Checkbox,
    title: 'Inputs/Checkbox'
}

const Template: Story<CheckboxProps> = (
    args
) => {
    return (
        <Checkbox {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    defaultValue: false,
    disabled: true
}
