import {DefaultTheme} from 'styled-components'

const dark: DefaultTheme = {
    globalBar: {
        backgroundColor: '#000',
        color: '#fff'
    },
    ui: {
        backgroundColor: '#404040',
        backgroundAccent: '#393939',
        textColor: '#fff',
        selected: '#50A2E9',
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
