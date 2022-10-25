import React from '@storybook/react'
import HeaderBar, {HeaderBarProps} from "./HeaderBar"
// @ts-ignore: Unreachable code error
import ExampleProfile from '../../../../assets/examples/profile-example.jpeg'
import ProfileImage from '../Profile/Image/Image'
import styled from 'styled-components'
import {BsThreeDotsVertical} from "react-icons/bs"



export default {
    component: HeaderBar,
    title: 'Header/Bar'
}

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`

const Container = styled.div`
	max-width: 40rem;
	width: 40rem;
`

const Template: React.Story<HeaderBarProps> = (
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