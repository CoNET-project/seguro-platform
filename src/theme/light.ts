import {DefaultTheme} from 'styled-components'

const light: DefaultTheme = {
    globalBar: {
        backgroundColor: '#fff',
        color: '#000'
    },
    ui: {
        backgroundColor: '#F2F2F2',
        backgroundAccent: '#FEFEFE',
        primaryColor: '#193258',
        accentColor: '#477EAD',
        selected: '#50A2E9',
        outline: {
            color: '#4D90FE'
        },
        storybook: {
            canvasDecorator: {
                backgroundColor: '#EFEFEF',
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
        text: {
            textPrimary: '#343434',
            textSecondary: '#636569',
            textError: '#FF5B5D',
            textDisabled: '#C2C2C2',
            invertedColor: '#fff'
        },
        input: {
            color: '#333332',
            border: '#333332',
            placeholderColor: '#dcdcdc'
        },
        icon: {
            inactive: '#C2C2C2',
            active: '#343434'
        },
        progress: {
            bar: {
                incomplete: 'rgba(0, 0, 0, 0.15)',
                complete: '#00e500',
                separator: 'rgba(0, 0, 0, 0.1)'
            },
            dot: {
                incomplete: 'rgba(0, 0, 0, 0.15)',
                complete: '#4d4d4c',
            }
        }
    }
}

export default light
