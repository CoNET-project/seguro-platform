import React, {Story} from '@storybook/react'
import Modal, {ModalProps} from "./Modal"

export default {
    component: Modal,
    title: 'Common/Modal'
}

const Template: Story<ModalProps> = (
    args
) => {
    return (
        <Modal {...args}>
            hey
        </Modal>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    closeAction: () => {
    }
}