import { ReactNode } from 'react'
import RootProvider from '../../../src/components/Providers/RootProvider'
import CanvasDecorator from '../CanvasDecorator/CanvasDecorator'

type RootDecoratorProps = {
    children: ReactNode
}

export const RootDecorator = ({
    children
}: RootDecoratorProps) => {
    return (
        <RootProvider>
            <CanvasDecorator>
                {children}
            </CanvasDecorator>
        </RootProvider>
    )
}
