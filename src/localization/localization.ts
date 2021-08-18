import { MessagesByLocale } from './types'
import en_US from './messages/en-US'
import zh_CN from './messages/zh-CN'

export const messagesByLocale: MessagesByLocale = {
    'en-US': en_US,
    'zh-CN': zh_CN
}

export const getLocaleGuess = (
    string: String
) => {
    if (string.startsWith('en')) {
        return 'en-US'
    }
    if (string.startsWith('zh')) {
        return 'zh-CN'
    }
}

export const getPreferredLocale = (
    languages: Readonly<string[]> = navigator.languages
) => {
    for (let i = 0; i < languages.length; i++) {
        const language = languages[i]
        const localeGuess = getLocaleGuess(language)

        if (localeGuess) {
            return localeGuess
        }
    }

    return 'en-US'
}
