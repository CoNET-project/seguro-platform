import React, {Story} from '@storybook/react'
import LanguageSelect from "./LanguageSelect"

export default {
    component: LanguageSelect,
    title: 'LanguageSelect/Select'
}

const Template: Story = (
    args
) => {
    return (
        <LanguageSelect languages={args.languages} selectLocale={() => {
        }} selectedLocale={'zh-CN'}/>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    languages: [
        {
            name: '简体中文',
            englishName: 'Simplified Chinese',
            locale: ''
        },
        {
            name: 'Español',
            englishName: 'Spanish',
            locale: ''
        },
        {
            name: 'Français',
            englishName: 'French',
            locale: ''
        },
        {
            name: 'Italiano',
            englishName: 'Italian',
            locale: ''
        },
        {
            name: 'Polski',
            englishName: 'Polish',
            locale: ''
        },
        {
            name: '日本',
            englishName: 'Japanese',
            locale: ''
        },
        {
            name: 'Svenska',
            englishName: 'Swedish',
            locale: ''
        },
        {
            name: 'Suomi',
            englishName: 'Finish',
            locale: ''
        },
        {
            name: 'Nederlands',
            englishName: 'Dutch',
            locale: ''
        }
    ]
}