import {DefaultTheme} from 'styled-components'

const dark: DefaultTheme = {
    globalBar: {
        backgroundColor: '#000',
        color: '#fff'
    },
    ui: {
        backgroundColor: '#3c3c3c',
        backgroundAccent: '#393939',
        backgroundAccentWithOpacity: 'rgba(57, 57, 57, 0.95)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        primaryColor: '#396FC0',
        primaryColorWithOpacity: 'rgba(57, 111, 192, 0.75)',
        accentColor: '#477EAD',
        dangerousColor: '#df4759',
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
            textSecondary: '#757575',
            textError: '#fff',
            textDisabled: '#C2C2C2',
            invertedColor: '#343434'
        },
        border: {
            color: 'rgba(200, 200, 200, 0.2)',
            inverted: 'rgba(150, 150, 150, 0.2)',
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
