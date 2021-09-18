import {Story} from '@storybook/react'
import Modal, {ModalProps} from './Modal'
import {Warning} from "../../Icons/Icons";

export default {
    component: Modal,
    title: 'Common/Modal'
}

const Template: Story<ModalProps> = (
    args
) => {
    return (
        <Modal {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    icon: <Warning/>,
    message: 'Your verification code did not go through!',
    modalActions: {
        confirm: {
            action: () => {
            }
        }
    }
}
