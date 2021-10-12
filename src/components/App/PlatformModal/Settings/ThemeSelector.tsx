import styled from "styled-components";
import useAppState from "../../../../store/appState/useAppState";
import {Theme} from "../../../../theme/types";

const StyledThemeSelector = styled.form`
  display: flex;
  align-items: center;
`

const StyledThemeItem = styled.div`
  &:not(:last-child) {
    margin-right: 25px;
  }
`

const StyledThemeLabel = styled.label`
  margin-left: 5px;
`

const ThemeSelector = () => {
    const appState = useAppState()

    const changeTheme = (theme: Theme) => {
        appState.setTheme(theme)
    }

    return (
        <StyledThemeSelector>
            <StyledThemeItem>
                <input type="radio" name='theme' onChange={() => changeTheme('Light')}
                       checked={appState.theme === 'Light'}/>
                <StyledThemeLabel>Light</StyledThemeLabel>
            </StyledThemeItem>
            <StyledThemeItem>
                <input type="radio" name='theme' onChange={() => changeTheme('Dark')}
                       checked={appState.theme === 'Dark'}/>
                <StyledThemeLabel>Dark</StyledThemeLabel>
            </StyledThemeItem>
            <StyledThemeItem>
                <input type="radio" name='theme' onChange={() => changeTheme('Auto')}
                       checked={appState.theme === 'Auto'}/>
                <StyledThemeLabel>Auto</StyledThemeLabel>
            </StyledThemeItem>
        </StyledThemeSelector>
    )
}

export default ThemeSelector