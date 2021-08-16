import 'styled-components';

declare module 'styled-components' {

    export interface DefaultTheme {
        globalBar: {
            backgroundColor: string,
            color: string
        }
    }
}
