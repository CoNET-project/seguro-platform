import {Story} from '@storybook/react'
import ProgressBar, {ProgressBarProps} from "./ProgressBar";

export default {
    component: ProgressBar,
    title: 'Progress/ProgressBar'
}

const Template: Story<ProgressBarProps> = (
    args
) => {
    return (
        <div style={{width: '500px'}}>
            <ProgressBar {...args}/>
        </div>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    progress: 10
}
