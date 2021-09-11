import {Story} from '@storybook/react'
import ProgressSteps, {ProgressStepsProps} from './ProgressSteps'

export default {
    component: ProgressSteps,
    title: 'Progress/ProgressSteps'
}

const Template: Story<ProgressStepsProps> = (
    args: ProgressStepsProps
) => {
    return (
        <ProgressSteps {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    numberOfSteps: 5,
    currentStage: 1
}
