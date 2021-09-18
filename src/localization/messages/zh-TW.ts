import {Messages} from '../types'

const zh_CN: Messages = {
    'main.greeting': '你好世界!',
    'onboarding.selectLanguageTitle': '選擇您的語言',
    'onboarding.selectLanguageSubtitle': '選擇您的語言...',
    'onboarding.setPasscodeTitle': '設定密碼',
    'onboarding.setPasscodeSubtitle': '輸入最少 6 個字符的密碼',
    'onboarding.confirmPasscodeTitle': '確認密碼',

    'onboarding.verificationTitle': '驗證邀請碼',
    'onboarding.verificationInputLabel': '輸入您的邀請碼',
    'onboarding.verificationText': '請輸入您收到的邀請碼以開始驗證過程。 此邀請碼可確保您在 Seguro 平台上的體驗質量是最好的',
    'onboarding.verification.connecting': '正在連結 IMAP...',
    'onboarding.verification.sending': '正在向 Seguro 發送驗證請求...',
    'onboarding.verification.waiting': '等待 Seguro 的驗證響應...',
    'onboarding.verification.finished': '驗證完成!',

    'onboarding.verification.error.incorrect': '您的驗證碼有誤，請重試！',
    'onboarding.verification.error.internet': 'Seguro 無法連接到互聯網 請再試一次！',
    'onboarding.verification.error.stripe': 'Seguro 無法連接到 STRIPE 請再試一次！',
    'onboarding.verification.error.email': 'Seguro 無法連接到電子郵件服務器，請重試！',
    'onboarding.verification.error.localserver': 'Seguro 無法連接到本地服務器，請重啟 Seguro！',
    'onboarding.verification.error.timeout': 'Seguro 等待響應超時，請重試！',
    'onboarding.verification.error.authError': '請更新您的 Seguro 軟件！',

    'onboarding.verification.modal.button.retry': '重試',
    'onboarding.verification.modal.button.update': '更新 Seguro',
    'onboarding.verification.modal.button.newCode': '輸入新的驗證碼',

    'onboarding.carousel.title.seguro-platform': 'Seguro 平台',
    'onboarding.carousel.title.no-ip-tracking': '無 IP 追踪',
    'onboarding.carousel.title.decentralized': '去中心化',
    'onboarding.carousel.title.anonymity': '匿名',
    'onboarding.carousel.content.seguro-platform': 'Seguro 通過創新技術解決數據洩露和信息不安全的問題',
    'onboarding.carousel.content.no-ip-tracking': '使用創新的電子郵件隧道技術，您可以從任何地方訪問 Seguro，而無需擔心 IP 跟踪或防火牆',
    'onboarding.carousel.content.decentralized': 'Seguro 在分散系統上運行，這意味著即使我們也無法訪問您的信息',
    'onboarding.carousel.content.anonymity': '使用 Seguro 隨心所欲地公開或匿名，無需個人信息',

    'passcodeInput.incorrect.error': '密碼錯誤，請再試一次',
    'passcodeInput.confirm.error': '密碼不對，請再輸入一次',
    'passcodeInput.invalidLength': '密碼最少需要6位數',

    'button.next': '下一步',
    'button.back': '退一步',

    'unlock.title': '輸入您的 Seguro 密碼',

    'keypad.cancel': '取消',
    'keypad.unlock': '解鎖'
}

export default zh_CN