export type Locale = (
    'en-US' |
    'zh-CN'
)

export type Messages = {
    'main.greeting': string
}

export type MessagesByLocale = Record<Locale, Messages>
