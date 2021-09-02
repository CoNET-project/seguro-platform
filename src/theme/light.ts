import { DefaultTheme } from 'styled-components'

const light: DefaultTheme = {
    globalBar: {
        backgroundColor: '#fff',
        color: '#000'
    },
    ui: {
        backgroundColor: '#fff',
        textColor: '#333332',
        selected: '#50A2E9',
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
            color: '#333332',
            invertedColor: '#fff'
        },
        keypadKey: {
            numberColor: '#333332',
            alphabetColor: 'rgba(0,0,0,0.5)',
            basicColor: '#333332'
        },
        passcodeInput: {
            color: '#333332',
            border: '#333332'
        }
    }
}

export default light
