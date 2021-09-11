import {Story} from '@storybook/react'
import ProgressDots, {ProgressDotsProps} from './ProgressDots'

export default {
    component: ProgressDots,
    title: 'Progress/ProgressDots'
}

const Template: Story<ProgressDotsProps> = (
    args
) => {
    return (
        <ProgressDots {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    current: 0,
    numberOfDots: 4
}
