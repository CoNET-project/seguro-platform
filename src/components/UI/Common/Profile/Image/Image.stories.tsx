import {Story} from '@storybook/react'
// @ts-ignore: Unreachable code error
import ProfileImage from '../../../../../assets/examples/profile-example.jpeg'
import Image, {ImageProps} from './Image'
import React from 'react'

export default {
    component: Image,
    title: 'Profile/Image'
}

const Template: Story<ImageProps> = (
    args
) => {
    return (
        <Image {...args}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    src: ProfileImage,
    square: true
}