import {Story} from '@storybook/react'
import Panel, {PanelProps} from './Panel'

export default {
    component: Panel,
    title: 'Common/Panel'
}

const Template: Story<PanelProps> = (
    args
) => {
    return (
        <Panel>
            <h1>hello</h1>
        </Panel>
    )
}

export const Primary = Template.bind({})

Primary.args = {}