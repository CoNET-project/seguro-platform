export type Locale = (
    'en-US' |
    'zh-CN'
)

export type Messages = {
    'main.greeting': string,
    'unlock.title': string,
    'keypad.cancel': string,
    'keypad.unlock': string
}

export type MessagesByLocale = Record<Locale, Messages>
