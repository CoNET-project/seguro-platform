import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
    globalBar: {
        backgroundColor: '#fff',
        color: '#000'
    },
    ui: {
        outline: {
            color: '#4D90FE'
        },
        storybook: {
            canvasDecorator: {
                backgroundColor: '#fff',
                color: '#000',
                controls: {
                    backgroundColor: '#E6E6E6'
                }
            }
        },
        iconButton: {
            color: '#000',
            invertedColor: '#fff'
        }
    }
}

export default light
