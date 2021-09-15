import {Story} from '@storybook/react'
import StepButtons, {StepButtonsProps} from './StepButtons'

export default {
    component: StepButtons,
    title: 'StepButtons/StepButtons'
}

const Template: Story<StepButtonsProps> = (
    args
) => {
    return (
        <>
            <StepButtons {...args}/>
        </>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    actionHandler: {
        previousButton: {
            action: () => {
            }
        },
        nextButton: {
            action: () => {
            }
        },
    }

}
