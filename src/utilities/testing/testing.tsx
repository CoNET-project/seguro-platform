import { ReactElement } from 'react'
import { render } from '@testing-library/react'
import RootProvider from '../../components/Providers/RootProvider'
import ProviderProps from '../../components/Providers/ProviderProps'

const renderWithProviders = (
    ui: ReactElement,
    options?: any
) => {
    return render(ui, {
        wrapper: ({
            children
        }: ProviderProps) => {
            return (
                <RootProvider>
                    {children}
                </RootProvider>
            )
        },
        ...options
    })
}

export * from '@testing-library/react'

export { renderWithProviders as render }
