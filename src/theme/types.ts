import 'styled-components'
import {FontSizes} from "./fonts";

export type Theme = 'Auto' | 'Light' | 'Dark'

export type Colors = {
    primary: string,
    secondary: string,
    dangerous: string,
    text: {
        primary: string,
        secondary: string,
        error: string,
        disabled: string,
        inverted: string
    },
    background: {
        foundation: string,
        elevationOne: string,
        elevationTwo: string,
    },
    border: {
        light: string,
        medium: string,
        heavy: string
    },
    icon: {
        active: string,
        inactive: string
    },
    hover: string,
    globalBar: {
        background: string,
        color: string
    },
}

declare module 'styled-components' {

    export interface DefaultTheme {
        ui: {
            storybook: {
                canvasDecorator: {
                    backgroundColor: string,
                    color: string,
                    controls: {
                        backgroundColor: string
                    }
                }
            },
            iconButton: {
                color: string,
                invertedColor: string
            },
            keypadKey: {
                numberColor: string,
                alphabetColor: string,
                basicColor: string
            },
            input: {
                color: string,
                border: string,
                placeholderColor: string
            },
            progress: {
                bar: {
                    incomplete: string,
                    complete: string,
                    separator: string
                },
                dot: {
                    incomplete: string,
                    complete: string
                }
            },
            fontSizes: FontSizes,
            colors: Colors
        }
    }
}
