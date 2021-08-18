import GlobalBar from './GlobalBar/GlobalBar'
import { FormattedMessage } from 'react-intl'

const MainScreen = () => {
    return (
        <div>
            <GlobalBar />

            <div style={{ padding: 10 }}>
                <FormattedMessage id="main.greeting" />
            </div>
        </div>
    )
}

export default MainScreen
