export type Locale = (
    'en-US' |
    'zh-CN' |
    'zh-TW'
)

export type Messages = {
    'main.greeting': string,
    'onboarding.selectLanguage': string,
    'onboarding.setPasscode': string,
    'onboarding.confirmPasscode': string,
    'button.next': string,
    'button.back': string,
    'unlock.title': string,
    'unlock.error': string,
    'unlock.invalid': string,
    'keypad.cancel': string,
    'keypad.unlock': string
}

export type MessagesByLocale = Record<Locale, Messages>
