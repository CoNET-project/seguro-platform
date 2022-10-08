import React, {Story} from '@storybook/react'
import styled from 'styled-components'
import SearchBar from "./SearchBar"

export default {
    component: SearchBar,
    title: 'Search/Bar'
}

const Container = styled.div`
  width: 250px;
`

const Template: Story = (
    args
) => {
    return (
        <Container>
            <SearchBar/>
        </Container>

    )
}

export const Primary = Template.bind({})

Primary.args = {}