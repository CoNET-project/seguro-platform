import styled from "styled-components"
import useAppState from "../../../../store/appState/useAppState"
import {Theme} from "../../../../theme/types"
import {FormattedMessage} from "react-intl"
import {savePreferences} from "../../../../services/workerService/workerService"
import React from 'react'

const StyledThemeSelector = styled.form`
  display: flex;
  align-items: center;
`

const StyledThemeItem = styled.div`
  &:not(:last-child) {
    margin-right: 15px;
  }
`

const StyledThemeLabel = styled.label`
  margin-left: 5px;
`

const ThemeSelector = () => {
    const appState = useAppState()

    const changeTheme = (theme: Theme) => {
        savePreferences({
            theme: theme
        }).then(() => {
            appState.setTheme(theme)
        })
    }

    return (
        <StyledThemeSelector>
            <StyledThemeItem>
                <input type="radio" name='theme' onChange={() => changeTheme('Light')}
                       checked={appState.theme === 'Light'}/>
                <StyledThemeLabel><FormattedMessage id='platform.settings.theme.light'/></StyledThemeLabel>
            </StyledThemeItem>
            <StyledThemeItem>
                <input type="radio" name='theme' onChange={() => changeTheme('Dark')}
                       checked={appState.theme === 'Dark'}/>
                <StyledThemeLabel><FormattedMessage id='platform.settings.theme.dark'/></StyledThemeLabel>
            </StyledThemeItem>
            <StyledThemeItem>
                <input type="radio" name='theme' onChange={() => changeTheme('Auto')}
                       checked={appState.theme === 'Auto'}/>
                <StyledThemeLabel><FormattedMessage id='platform.settings.theme.auto'/></StyledThemeLabel>
            </StyledThemeItem>
        </StyledThemeSelector>
    )
}

export default ThemeSelector