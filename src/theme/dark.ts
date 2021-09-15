import {DefaultTheme} from 'styled-components'

const dark: DefaultTheme = {
    globalBar: {
        backgroundColor: '#000',
        color: '#fff'
    },
    ui: {
        backgroundColor: '#3c3c3c',
        backgroundAccent: '#393939',
        primaryColor: '#396FC0',
        accentColor: '#477EAD',
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
        text: {
            textPrimary: '#fff',
            textSecondary: '#FAFAFA',
            textError: '#fff',
            textDisabled: '#C2C2C2',
            invertedColor: '#343434'
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
            active: '#fff',
            inactive: '#6e6e6e'
        },
        progress: {
            bar: {
                incomplete: 'rgba(0, 0, 0, 0.2)',
                complete: '#00e500',
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
