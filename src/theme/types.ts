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
            backgroundAccentWithOpacity: string,
            borderColor: string,
            primaryColor: string,
            primaryColorWithOpacity: string,
            accentColor: string,
            dangerousColor: string,
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
            border: {
                color: string,
                inverted: string,
            },
            fontSizes: {
                narrow: {
                    xsm: string,
                    sm: string,
                    md: string,
                    lg: string,
                    xl: string
                },
                medium: {
                    sm: string,
                    md: string,
                    lg: string,
                    xl: string
                },
                wide: {
                    sm: string,
                    md: string,
                    lg: string,
                    xl: string
                }
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
