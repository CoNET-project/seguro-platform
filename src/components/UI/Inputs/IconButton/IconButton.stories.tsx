import { Story } from '@storybook/react'
import IconButton, { IconButtonProps } from './IconButton'
import { MdPersonAdd as AddPersonIcon, MdMenu as MenuIcon, MdDelete as DeleteIcon } from 'react-icons/md'

export default {
    component: IconButton,
    title: 'Inputs/IconButton'
}

const Template: Story<IconButtonProps> = ({
    children,
    ...args
}) => {
    return (
        <IconButton {...args}>
            {children}
        </IconButton>
    )
}

const icons = {
    addPersonIcon: (
        <AddPersonIcon />
    ),
    menuIcon: (
        <MenuIcon />
    ),
    deleteIcon: (
        <DeleteIcon />
    )
}

export const Primary = Template.bind({})

Primary.args = {
    label: 'Icon Button Demonstration',
    size: 'md',
    children: 'addPersonIcon',
    onClick: () => console.log('onClick()')
}

Primary.argTypes = {
    children: {
        options: Object.keys(icons),
        mapping: icons,
        control: {
            type: 'select',
            labels: {
                'addPersonIcon': 'Add Person Icon',
                'menuIcon': 'Menu Icon',
                'deleteIcon': 'Delete Icon'
            }
        }
    }
}
