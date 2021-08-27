import { Story } from '@storybook/react'
import Button, { ButtonProps } from './Button'

export default {
    component: Button,
    title: 'Inputs/Button'
}

const Template: Story<ButtonProps> = (
    args
) => {
    return (
        <Button {...args} children={args.children}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    children: 'Click Me',
    onClick: () => console.log('onClick()')
}
