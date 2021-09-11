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
        input: {
            color: '#fff',
            border: '#fff',
            placeholderColor: '#838383'
        },
        icon: {
            invalid: '#838383',
            valid: '#00D100'
        },
        progress: {
            bar: {
                incomplete: 'rgba(0, 0, 0, 0.2)',
                complete: 'rgba(40, 98, 188, 1)',
                separator: 'rgba(255, 255, 255, 0.1)'
            },
            dot: {
                incomplete: 'rgba(0, 0, 0, 0.2)',
                complete: '#fff',
            }
        }
    }
}

export default dark
