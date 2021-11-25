import {DefaultTheme} from 'styled-components'
import {fonts} from "./fonts";

const dark: DefaultTheme = {
    globalBar: {
        backgroundColor: '#000',
        color: '#fff'
    },
    ui: {
        colors: {
            primary: '#396FC0',
            secondary: '#477EAD',
            dangerous: '#DF4759',
            text: {
                primary: '#FFF',
                secondary: '#636569',
                error: '#FF5B5D',
                disabled: '#C2C2C2',
                inverted: '#343434'
            },
            background: {
                foundation: '#1D1E24',
                elevationOne: '#23262B',
                elevationTwo: '#383b40',
            },
            border: {
                light: 'rgba(255, 255, 255, 0.1)',
                medium: 'rgba(255, 255, 255, 0.5)',
                heavy: 'rgba(255, 255, 255, 1)'
            },
            icon: {
                active: '#FFF',
                inactive: '#6E6E6E'
            },
            hover: 'rgba(200,200,200,0.1)'
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
        },
        fontSizes: fonts
    }
}

export default dark
