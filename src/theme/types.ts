import 'styled-components';

export type Theme = 'Auto' | 'Light' | 'Dark'

declare module 'styled-components' {

    export interface DefaultTheme {
        globalBar: {
            backgroundColor: string,
            color: string
        }
    }
}
