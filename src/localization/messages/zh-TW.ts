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

    'onboarding.verification.error.generic': 'Seguro 無法驗證您的代碼，請重試!',
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


    'onboarding.setup.create.container': '正在創建帳戶...',
    'onboarding.setup.verify.code': '驗證邀請碼...',
    'onboarding.setup.enter.button': '進入 Seguro',

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
    'button.unlock': '開鎖',

    'unlock.title': '輸入您的 Platform 平台密碼',
    
    'platform.unlock.button.forgot': '忘記密碼了？',
    'platform.dialog.delete.message': '刪除容器是一項永久性操作，您需要使用新的邀請碼創建新密碼',
    'platform.dialog.delete.button.cancel': '取消',
    'platform.dialog.delete.button.confirm': '刪除',

    'keypad.cancel': '取消',
    'keypad.unlock': '解鎖',

    'tabnavigator.tab.chats': '聊天',
    'tabnavigator.tab.contacts': '聯繫',
    'tabnavigator.tab.settings': '設置',

    'drawer.settings': '設置',
    'drawer.updates': '更新',
    'drawer.support': '支持',

    'platform.overlay.unlocking': '解鎖平台...',
    'platform.overlay.createProfile': '創建配置文件...',


    'platform.modal.verification.title': '需要驗證',
    'platform.modal.verification.text': '請輸入您的 36 字符邀請碼以完成設置。',
    'platform.modal.verification.button': "開始驗證",

    'platform.network.status.label': '当前状态：',
    'platform.network.status.low': '低',
    'platform.network.status.medium': '中',
    'platform.network.status.high': '高',

    'platform.network.status.description.low': '您與 Seguro 的連接似乎需要延遲。請檢查您的互聯網連接是否穩定。數據可能比平時下降得更多。',
    'platform.network.status.description.medium': '您與 Seguro 的連接具有中等延遲。您的數據可能會意外丟失或無法發送，請檢查您的互聯網連接。',
    'platform.network.status.description.high': '您與 Seguro 的連接非常好，您應該能夠快速接收和發送數據！',

    'platform.settings.settings': '平台設置',
    'platform.settings.language': '語言(Language)',
    'platform.settings.theme': '主題',
    'platform.settings.theme.light': '淺色',
    'platform.settings.theme.dark': '深色',
    'platform.settings.theme.auto': '自動',
    'platform.settings.passcode': '密碼',
    'platform.settings.passcode.edit': '更改密碼',

    'platform.settings.passcode.title.newPasscode': '新密碼',
    'platform.settings.passcode.title.confirmPasscode': '確認密碼',
    'platform.settings.passcode.button.next': '下一步',
    'platform.settings.passcode.button.back': '返回',

    'platform.settings.general': '一般',
    'platform.settings.myAccount': '我的賬戶',
    'platform.settings.profile': '資料',

    'platform.settings.devices': '設備',

    'platform.settings.devices.contextMenu.edit': '編輯',
    'platform.settings.devices.contextMenu.delete': '刪除',

    'platform.settings.device.delete': '刪除設備',
    'platform.settings.device.delete.confirmMessage': "你確定嗎？",
    'platform.settings.device.delete.confirmSubmessage': "删除个人资料是永久性的!",
    'platform.settings.device.delete.cancelButton': "取消",
    'platform.settings.device.delete.confirmButton': "確認",

    'platform.settings.deviceCodes': '設備代碼',
    'platform.settings.activeCodes': '活動代碼',
    'platform.settings.subscriptionPlan': '訂閱計劃',

    'toaster.action.copyDeviceCode': '複製的設備代碼!',
    'toaster.action.passcodeChange': '密碼已更改!',


    'platform.contextMenu.manage': '管理',
    'platform.contextMenu.delete': '刪除',
    'platform.contextMenu.edit': '編輯',

    'platform.profile.changePicture': '更換圖片',

    // 'globalBar.profile.dropdown.manageProfiles': 'Manage Profiles',
    // 'globalBar.profile.dropdown.addProfile': 'Add Profile',
    //
    // 'platform.manageProfile': 'Manage Profile',
    // 'platform.manageProfile.setAsPrimary': 'Set as primary',
    // 'platform.manageProfile.saveButton': 'Save',
    //
    // 'platform.manageProfiles': 'Manage Profiles',
    // 'platform.manageProfiles.deleteProfile': 'Delete Profile',
    // 'platform.manageProfiles.isPrimaryText': 'Primary profile',
    // 'platform.manageProfiles.isPrimarySubtext': 'Please unset profile as primary before deleting!',
    // 'platform.manageProfiles.deleteProfile.returnButton': 'Return to profiles',
    //
    // 'platform.addProfile.setAsPrimary': 'Set as primary',
    // 'platform.addProfile.createButton': 'Create',

    'globalBar.profile.dropdown.manageProfiles': '管理個人資料',
    'globalBar.profile.dropdown.addProfile': '添加配置文件',
    'globalBar.profile.dropdown.lockPlatform': '鎖定平台',

    'platform.manageProfile': '管理個人資料',
    'platform.manageProfile.setAsPrimary': '設置為主',
    'platform.manageProfile.saveButton': '保存',

    'platform.manageProfiles': '管理個人資料',
    'platform.manageProfiles.deleteProfile': '刪除個人資料',
    'platform.manageProfiles.deleteProfile.confirmationTitle': '你確定嗎？',
    'platform.manageProfiles.deleteProfile.confirmationSubtext': '刪除個人資料是永久性的！',
    'platform.manageProfiles.deleteProfile.cancelButton': '取消',
    'platform.manageProfiles.deleteProfile.confirmButton': '確認',

    'platform.manageProfiles.deleteProfile.onlyProfileError': '你需要至少 1 個關於 Seguro 的個人資料！',
    'platform.manageProfiles.deleteProfile.returnButton': '返回個人資料',

    'platform.addProfile.setAsPrimary': '設置為主',
    'platform.addProfile.createButton': '創建',

	'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet': '錢包充值',
	'tabnavigator.guide.title': '歡迎來到Seguro',
	'globalBar.application.home': 'CoNET平台',
	'globalBar.application.SeguroMessage': 'Seguro聊天'
}

export default zh_CN
