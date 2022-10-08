import React, {Story} from '@storybook/react'
import Card, {CardProps} from './Card'
import styled from "styled-components"
import {FormattedMessage} from "react-intl"

const StyledContainer = styled.div`
  min-width: 20rem;
`

export default {
    component: Card,
    title: 'Layout/Card'
}

const Template: Story<CardProps> = (
    args
) => {
    return (
        <StyledContainer>
            <Card {...args}/>
        </StyledContainer>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    contentTitle: 'Seguro Platform',
    contentComponent: (
        <FormattedMessage id='onboarding.verificationText'/>
    )
}
