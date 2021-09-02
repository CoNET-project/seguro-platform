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
    'passcodeInput.incorrect.error': string,
    'passcodeInput.confirm.error': string,
    'passcodeInput.invalidLength': string,
    'button.next': string,
    'button.back': string,
    'unlock.title': string,
    'keypad.cancel': string,
    'keypad.unlock': string
}

export type MessagesByLocale = Record<Locale, Messages>
