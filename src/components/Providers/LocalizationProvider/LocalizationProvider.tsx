import ProviderProps from '../ProviderProps'
import { IntlProvider } from 'react-intl'
import { messagesByLocale } from '../../../localization/localization'
import useAppState from '../../../store/appState/useAppState'

const LocalizationProvider = ({
    children
}: ProviderProps) => {
    const { locale } = useAppState()
    const messages = messagesByLocale[locale]
	
    return (
        <IntlProvider
            locale={locale}
            messages={messages}
        >
            <>{ children }</>
        </IntlProvider>
    )
}

export default LocalizationProvider
