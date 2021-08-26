import 'styled-components'

export type Theme = 'Auto' | 'Light' | 'Dark'

declare module 'styled-components' {

    export interface DefaultTheme {
        globalBar: {
            backgroundColor: string,
            color: string
        },
        ui: {
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
            }
        }
    }
}