import {Story} from '@storybook/react'
import styled from 'styled-components'
import {TippyDropdown} from "./Tippy"
import React from 'react'

export default {
    component: TippyDropdown,
    title: 'Tippy/TippyDropdown'
}

const StyledTippyWrapper = styled.div`
`

const TippyContent = () => {
    return (
        <StyledTippyWrapper>
            TIPPY CONTENT!


        </StyledTippyWrapper>
    )
}

const Template: Story = (
    args
) => {
    return (
        <TippyDropdown content={<TippyContent/>} interactive={true} verticalOffset={10}>
            <button>hey</button>
        </TippyDropdown>
    )
}

export const Primary = Template.bind({})

Primary.args = {}
