import {Story} from '@storybook/react'
import ProgressBar, {ProgressBarProps} from "./ProgressBar"
import styled from 'styled-components'
import React from 'react'

export default {
    component: ProgressBar,
    title: 'Progress/ProgressBar'
}

const StyledDiv = styled.div``
const Template: Story<ProgressBarProps> = (
    args
) => {
    return (
        <StyledDiv style={{width: '500px'}}>
            <ProgressBar {...args}/>
        </StyledDiv>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    progress: 10
}
