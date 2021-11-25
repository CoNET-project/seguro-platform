import {DefaultTheme} from 'styled-components'
import {fonts} from "./fonts";

const light: DefaultTheme = {
    globalBar: {
        backgroundColor: '#fff',
        color: '#000'
    },
    ui: {
        colors: {
            primary: '#477EAD',
            secondary: '#396FC0',
            dangerous: '#DF4759',
            text: {
                primary: '#343434',
                secondary: '#636569',
                error: '#FF5B5D',
                disabled: '#C2C2C2',
                inverted: '#FFF'
            },
            background: {
                foundation: '#F8F8F8',
                elevationOne: '#fff',
                elevationTwo: '#fff',
            },
            border: {
                light: 'rgba(0,0,0,0.1)',
                medium: 'rgba(0,0,0,0.5)',
                heavy: 'rgba(0,0,0,1)'
            },
            icon: {
                active: '#343434',
                inactive: '#C2C2C2'
            },
            hover: 'rgba(0, 0, 0, 0.1)'
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
        input: {
            color: '#333332',
            border: '#333332',
            placeholderColor: '#dcdcdc'
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
        },
        fontSizes: fonts
    }
}

export default light
