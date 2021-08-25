import 'modern-normalize'
import { RootDecorator } from './decorators/RootDecorator/RootDecorator'

export const parameters = {
    layout: 'centered',
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/
        }
    }
}

export const decorators = [
    (Story) => {
        return (
            <RootDecorator>
                <Story />
            </RootDecorator>
        )
    }
]
