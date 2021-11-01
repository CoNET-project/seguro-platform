import {DefaultTheme} from 'styled-components'

const light: DefaultTheme = {
    globalBar: {
        backgroundColor: '#fff',
        color: '#000'
    },
    ui: {
        backgroundColor: '#FEFEFE',
        backgroundAccent: '#F2F2F2',
        backgroundAccentWithOpacity: 'rgba(242, 242, 242, 0.95)',
        borderColor: 'rgba(0,0,0,0.1)',
        primaryColor: '#477EAD',
        accentColor: '#396FC0',
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
        border: {
            color: 'rgba(150, 150, 150, 0.2)',
            inverted: 'rgba(200, 200, 200, 0.2)',
        },
        fontSizes: {
            narrow: {
                xsm: '11px',
                sm: '13px',
                md: '16px',
                lg: '19px',
                xl: '22px'
            },
            medium: {
                sm: '14px',
                md: '17px',
                lg: '20px',
                xl: '23px'
            },
            wide: {
                sm: '14px',
                md: '17px',
                lg: '20px',
                xl: '23px'
            },
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
