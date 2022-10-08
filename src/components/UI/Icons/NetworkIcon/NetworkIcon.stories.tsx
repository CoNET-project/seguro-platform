import React, {Story} from '@storybook/react'
import styled from 'styled-components'
import NetworkIcon, {NetworkIconProps} from "./NetworkIcon"

export default {
    component: NetworkIcon,
    title: 'Icons/NetworkIcon'
}

const Wrapper = styled.div`
  width: 70px;
  height: 70px;
`

const Template: Story<NetworkIconProps> = (
    args
) => {
    return (
        <Wrapper>
            <NetworkIcon {...args}/>
        </Wrapper>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    strength: 1
}
