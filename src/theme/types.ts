import 'styled-components'

export type Theme = 'Auto' | 'Light' | 'Dark'

declare module 'styled-components' {

    export interface DefaultTheme {
        globalBar: {
            backgroundColor: string,
            color: string
        },
        ui: {
            backgroundColor: string,
            backgroundAccent: string,
            borderColor: string,
            primaryColor: string,
            accentColor: string,
            selected: string,
            outline: {
                color: string
            },
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
            text: {
                textPrimary: string,
                textSecondary: string,
                textError: string,
                textDisabled: string,
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
            icon: {
                inactive: string,
                active: string
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
            }
        }
    }
}
