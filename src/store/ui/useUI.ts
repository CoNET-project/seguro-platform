import { useTypedSelector } from '../store'

const useUI = () => {
    const theme = useTypedSelector(state => state.ui.theme)

    return {
        theme
    }
}

export default useUI
