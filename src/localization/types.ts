export type Locale = (
    'en-US' |
    'zh-CN' |
    'zh-TW'
    )

export type Messages = {
    'main.greeting': string,
    'onboarding.selectLanguageTitle': string,
    'onboarding.selectLanguageSubtitle': string,
    'onboarding.setPasscodeTitle': string,
    'onboarding.setPasscodeSubtitle': string,
    'onboarding.confirmPasscodeTitle': string,

    'onboarding.verificationTitle': string,
    'onboarding.verificationInputLabel': string,
    'onboarding.verificationText': string,
    'onboarding.verification.connecting': string,
    'onboarding.verification.sending': string,
    'onboarding.verification.waiting': string,
    'onboarding.verification.finished': string,

    'onboarding.verification.error.incorrect': string,
    'onboarding.verification.error.internet': string,
    'onboarding.verification.error.stripe': string,
    'onboarding.verification.error.email': string,
    'onboarding.verification.error.localserver': string,
    'onboarding.verification.error.timeout': string,
    'onboarding.verification.error.authError': string,

    'onboarding.verification.modal.button.retry': string,
    'onboarding.verification.modal.button.update': string,
    'onboarding.verification.modal.button.newCode': string

    'onboarding.carousel.title.seguro-platform': string,
    'onboarding.carousel.title.no-ip-tracking': string,
    'onboarding.carousel.title.decentralized': string,
    'onboarding.carousel.title.anonymity': string,
    'onboarding.carousel.content.seguro-platform': string,
    'onboarding.carousel.content.no-ip-tracking': string,
    'onboarding.carousel.content.decentralized': string,
    'onboarding.carousel.content.anonymity': string,

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
