import {Story} from '@storybook/react'
import Button, {ButtonProps} from './Button'

export default {
    component: Button,
    title: 'Inputs/Button'
}

const Template: Story<ButtonProps> = (
    args
) => {
    return (
        <Button {...args}>
            hello
        </Button>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    onClick: () => console.log('onClick()')
}
