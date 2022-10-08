import React, {Story} from '@storybook/react'
import StepButton, {StepButtonProps} from './StepButton'
import {ChevronLeft, ChevronRight} from "../../Icons/Icons";

export default {
    component: StepButton,
    title: 'StepButtons/StepButton'
}

const RightTemplate: Story<StepButtonProps> = (
    args
) => {
    return (
        <>
            <StepButton {...args}/>
        </>
    )
}

export const RightButton = RightTemplate.bind({})

RightButton.args = {
    text: 'Next',
    iconRight: <ChevronRight/>
}
