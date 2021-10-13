import {Story} from '@storybook/react'
import AlertDialog, {AlertDialogProps} from './AlertDialog'
import {Warning} from "../../Icons/Icons";

export default {
    component: AlertDialog,
    title: 'Common/Modal'
}

const Template: Story<AlertDialogProps> = (
    args
) => {
    return (
        <AlertDialog {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    icon: <Warning/>,
    message: 'Your verification code did not go through!',
    dialogActions: {
        confirm: {
            action: () => {
            }
        }
    }
}
