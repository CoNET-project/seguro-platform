import {MessagesByLocale} from './types'
import en_US from './messages/en-US'
import zh_CN from './messages/zh-CN'
import zh_TW from './messages/zh-TW'
import ja_JP from './messages/ja_JP'

export const messagesByLocale: MessagesByLocale = {
    'en-US': en_US,
    'zh-CN': zh_CN,
    'zh-TW': zh_TW,
	'ja-JP': ja_JP
}

export const getLocaleGuess = (
    string: String
) => {
    string = string.toLowerCase()

    if (string.startsWith('en')) {
        return 'en-US'
    }
    if (string.startsWith('zh')) {
        if (string === 'zh-TW') {
            return 'zh-TW'
        }
        return 'zh-CN'
    }
	if (string.startsWith('ja')) {
		return 'ja-JP'
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
