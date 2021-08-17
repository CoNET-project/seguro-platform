import ProviderProps from './ProviderProps'
import StoreProvider from './StoreProvider/StoreProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'

const RootProvider = ({
    children
}: ProviderProps) => {
    return (
        <StoreProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
        </StoreProvider>
    )
}

export default RootProvider
