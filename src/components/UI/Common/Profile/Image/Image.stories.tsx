import {Story} from '@storybook/react'
import ProfileImage from '../../../../../assets/examples/profile-example.jpeg'
import Image, {ImageProps} from './Image'

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