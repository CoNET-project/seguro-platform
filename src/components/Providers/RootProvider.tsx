import ProviderProps from './ProviderProps'
import StoreProvider from './StoreProvider/StoreProvider'
import ThemeProvider from './ThemeProvider/ThemeProvider'
import LocalizationProvider from './LocalizationProvider/LocalizationProvider'

const RootProvider = ({
    children
}: ProviderProps) => {
    return (
        <StoreProvider>
            <ThemeProvider>
                <LocalizationProvider>
                    {children}
                </LocalizationProvider>
            </ThemeProvider>
        </StoreProvider>
    )
}

export default RootProvider
