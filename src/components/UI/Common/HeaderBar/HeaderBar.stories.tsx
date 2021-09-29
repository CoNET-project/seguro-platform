import {Story} from '@storybook/react'
import HeaderBar, {HeaderBarProps} from "./HeaderBar";
import ExampleProfile from '../../../../assets/examples/profile-example.jpeg'
import ProfileImage from '../Profile/Image/Image'
import styled from 'styled-components'
import {BsThreeDotsVertical} from "react-icons/all";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  max-width: 40rem;
  width: 40rem;
`

export default {
    component: HeaderBar,
    title: 'Header/Bar'
}

const Template: Story<HeaderBarProps> = (
    args
) => {
    return (
        <Wrapper>
            <Container>
                <HeaderBar {...args}/>
            </Container>
        </Wrapper>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    headerContent: {
        title: 'John Wick',
        subtitle: '4E1F799AA4FF2279'
    },
    headerComponents: {
        headerLeft: [
            <ProfileImage src={ExampleProfile} size={32}/>
        ],
        headerRight: [
            <BsThreeDotsVertical size={24}/>
        ]
    },
    closeAction: {
        action: () => {
        }
    }
}