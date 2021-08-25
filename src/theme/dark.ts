import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
    globalBar: {
        backgroundColor: '#000',
        color: '#fff'
    },
    ui: {
        outline: {
            color: '#4D90FE'
        },
        storybook: {
            canvasDecorator: {
                backgroundColor: '#201D3C',
                color: '#fff',
                controls: {
                    backgroundColor: '#3A3756'
                }
            }
        },
        iconButton: {
            color: '#fff',
            invertedColor: '#000'
        }
    }
}

export default dark
