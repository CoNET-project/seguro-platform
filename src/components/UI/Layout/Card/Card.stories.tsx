import {Story} from '@storybook/react'
import Card, {CardProps} from './Card'
import SecurityLock from '../../../../assets/security-lock.svg'
import {FormattedMessage} from "react-intl";
import styled from "styled-components";

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
    visual: SecurityLock,
    contentTitle: 'Seguro Platform',
    contentComponent: (
        <FormattedMessage id='onboarding.verificationText'/>
    )
}

