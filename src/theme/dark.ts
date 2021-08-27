import { DefaultTheme } from 'styled-components'

const dark: DefaultTheme = {
    globalBar: {
        backgroundColor: '#000',
        color: '#fff'
    },
    ui: {
        backgroundColor: '#404040',
        textColor: '#fff',
        outline: {
            color: '#4D90FE'
        },
        storybook: {
            canvasDecorator: {
                backgroundColor: '#404040',
                color: '#fff',
                controls: {
                    backgroundColor: '#404040'
                }
            }
        },
        iconButton: {
            color: '#fff',
            invertedColor: '#000'
        },
        keypadKey: {
            numberColor: '#fff',
            alphabetColor: '#fff',
            basicColor: '#fff'
        },
        passcodeInput: {
            color: '#fff',
            border: '#fff'
        }
    }
}

export default dark
