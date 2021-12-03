import {Story} from '@storybook/react'
import ProgressNumberSteps, {ProgressNumberStepsProps} from './ProgressNumberSteps'

export default {
    component: ProgressNumberSteps,
    title: 'Progress/ProgressNumberSteps'
}

const Template: Story<ProgressNumberStepsProps> = (
    args
) => {
    return (
        <ProgressNumberSteps {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    currentActiveStep: 3,
    steps: 5
}