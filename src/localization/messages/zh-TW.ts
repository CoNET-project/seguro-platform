import {Messages} from '../types'

const zh_CN: Messages = {
    'main.greeting': '你好世界!',
	'LaunchScreen.loadFail': 'CoNET 平台加載失敗！ 請點擊重新加載。',
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


    'onboarding.setup.create.container': '正在創建匿名帳戶...',
    'onboarding.setup.verify.code': '正在創建加密通訊用密匙...',
    'onboarding.setup.enter.button': '進入CoNET 平台',

    'onboarding.carousel.title.seguro-platform': 'CoNET 平台',
    'onboarding.carousel.title.no-ip-tracking': '匿名網絡',
    'onboarding.carousel.title.decentralized': '去中心化',
    'onboarding.carousel.title.anonymity': '匿名',
    'onboarding.carousel.content.seguro-platform': 'Seguro 通過創新技術解決數據洩露和信息不安全的問題',
    'onboarding.carousel.content.no-ip-tracking': '使用創新的電子郵件隧道技術，您可以從任何地方訪問 Seguro，而無需擔心 IP 跟踪或防火牆',
    'onboarding.carousel.content.decentralized': 'CoNET運行在去中心化的基礎設施上，這意味著沒有人可以偷窺您的信息',
    'onboarding.carousel.content.anonymity': '使用CoNET讓您自己来完全控制，您的個人信息',

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
	'platform.profile.walletAddr': '錢包地址',
	'platform.profile.nickName': '設置暱稱',
	'platform.profile.privateKey': '導出私鑰',
	'platform.profile.privateKeyWarning': '警告：切勿洩露此密鑰給任何人。擁有此私鑰，就可以任意支配，賬戶中所有的資產。',

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
    'platform.manageProfile.setAsPrimary': '設置為當前帳戶',
    'platform.manageProfile.saveButton': '保存',

    'platform.manageProfiles': '管理個人資料',
    'platform.manageProfiles.deleteProfile': '刪除個人資料',
    'platform.manageProfiles.deleteProfile.confirmationTitle': '你確定嗎？',
    'platform.manageProfiles.deleteProfile.confirmationSubtext': '刪除個人資料是永久性的！',
    'platform.manageProfiles.deleteProfile.cancelButton': '取消',
    'platform.manageProfiles.deleteProfile.confirmButton': '確認',

    'platform.manageProfiles.deleteProfile.onlyProfileError': '你需要至少 1 個關於 Seguro 的個人資料！',
    'platform.manageProfiles.deleteProfile.returnButton': '返回個人資料',

    'platform.addProfile.setAsPrimary': '設置為當前帳戶',
    'platform.addProfile.createButton': '創建',

	'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet': '水龍頭',
	'platform.ProfileDropdown.CurrentProfileItem.actionSend': '轉帳',
	'platform.ProfileDropdown.CurrentProfileItem.buy': '購買',
	'platform.ProfileDropdown.Tablable.Assets': '加密資產',
	'platform.ProfileDropdown.Tablable.Activity': '歷史記錄',

	'platform.ProfileDropdown.send.receiver': '收款人地址',
	'platform.ProfileDropdown.send.confirm': '確認轉帳',
	'platform.ProfileDropdown.send.amount': '轉帳數量',
	'platform.ProfileDropdown.CoNETCash.amountError': 'CoNETCash只能在10～100USDC之間',

	'platform.ProfileDropdown.history.type.send': '轉出',
	'platform.ProfileDropdown.history.type.receive': '接收',
	'platform.ProfileDropdown.history.gas.total': 'Gas費合計',
	'platform.ProfileDropdown.history.timestamp': '時間戳', 
	'platform.ProfileDropdown.history.sender': '付款人地址',
	'platform.ProfileDropdown.history.CoNETCash.mint': '铸造',

	'platform.ProfileDropdown.send.estimatedGas': '預估轉帳Gas費',
	'platform.ProfileDropdown.send.next': '下一步',
	'platform.ProfileDropdown.send.max': '最大值',
	'platform.ProfileDropdown.send.total': '合計',
	'platform.ProfileDropdown.faucet.limited': '24小時內僅限1次請求。',
	'platform.ProfileDropdown.faucet.success': '已成功發送請求！',
	'platform.ProfileDropdown.faucet.error': 'CoNET已拒絕您的請求，請過24小時後再次發送請求',
	'platform.ProfileDropdown.send.error': '網絡錯誤，請稍後重試',
	'platform.ProfileDropdown.buy.usdcPrice': '預估價格: ',
	'platform.ProfileDropdown.spend': '花費',
	'platform.ProfileDropdown.Receive': '收到',

	'platform.ProfileDropdown.SI.network.title': 'CoNET"隱形互聯網"設定',
	'platform.ProfileDropdown.SI.network.loading': '正在獲得CoNET-SI"隱形互聯網"挖礦節點伺服器信息...',
	'platform.ProfileDropdown.SI.network.listError': '獲取CoNET-SI"隱形互聯網"節點伺服器信息失敗,請稍後再試！',

	'platform.ProfileDropdown.CurrentProfileItem.AnonymousUser': '匿名用戶',
	'tabnavigator.guide.title': '歡迎使用CoNET平台',
	'globalBar.application.home': 'CoNET 平台',
	'globalBar.application.SeguroMessage': 'Seguro 聊天',
	'globalBar.application.AppStore': 'CoNET 應用商店',
	'tabnavigator.appStore.title': '歡迎使用CoNET應用商店',

	'platform.ProfileDropdown.nodelist.title': '正在獲取CoNET-SI節點伺服器列表...',
	'platform.ProfileDropdown.conet_si.nodes.title': '關於CoNET-SI "隱形互聯網"節點伺服器',
	'platform.ProfileDropdown.conet_si.nodes.detail': 'CoNET-SI的節點伺服器由分佈在全球的CoNET-SI礦工組成。 他們向用戶提供網絡設備，以獲得用戶支付的匿名美元穩定幣 CoNETCash 作為收入。 用戶可以購買雲計算存儲和網絡服務',
	'platform.ProfileDropdown.conet_si.nodes.mining': 'CoNET-SI歡迎任何人，提供多餘的電腦設備，作為參與者挖礦，獲取以美金為基準的加密穩定幣回報。請訪問CoNET項目網站以獲取更詳細的信息。',
	'platform.ProfileDropdown.CoNET.website': '點擊這裡訪問CoNET項目網站',
	'platform.ProfileDropdown.nodelist.ipAddress': '節點伺服器IP地址',

	'platform.ProfileDropdown.nodelist.registersRecipientDetail': '請選擇一個節點伺服器，作為您的錢包接收方，以使用CoNET-SI來進行通信',
	'platform.ProfileDropdown.nodelist.registersRecipientTitle': '接收結點設定',
	'platform.ProfileDropdown.nodelist.registersRecipientInfo1': '客戶端將匿名賬號的錢包地址，註冊到CoNET-SI網絡中的一個節點，該錢包地址就可開始接收其他客戶端發送的消息，節點會在客戶端離線時，暫時保留收到的消息，客戶端再次上線時，離線消息會被傳送到客戶端。客戶需要通過CoNETCash-USDC，支付存儲費和出庫費。',
	'platform.ProfileDropdown.nodelist.registersRecipientInfo2': `CoNET-SI 的節點都是中繼節點伺服器。客戶端通過入口節點發送的密文被路由到接收節點伺服器。由於加密只包含收件人註冊的節點地址，因此入口節點伺服器不知道客戶端正在與誰通信。接收節點伺服器接收到的加密消息，只包含收件人地址，不知道消息的發送者是誰。`,
	'platform.ProfileDropdown.nodelist.registersPayment.setupTitile': '支付設定',
	'platform.ProfileDropdown.nodelist.registersPayment.detail1': '請確認支付授權',
	'platform.ProfileDropdown.nodelist.registersPayment.detail2': '最小授權金額為 1 CoNETCash-USDC',
	'platform.ProfileDropdown.nodelist.registersPayment.insufficient_conetcash_balance': 'CoNETCash餘額不足',
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationAmount': '授權金額',
	'platform.ProfileDropdown.nodelist.registersPayment.registersRecipientloading': '正在註冊您通訊錢包地址',
	'platform.ProfileDropdown.nodelist.registersPayment.CoNETCashBalance': 'CoNETCash-USDC 餘額',
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationInformation': '這僅驗證您的CoNETCash是否有效以及您的CoNETCash是否有足夠的可用資金。該交易將在CoNETCash歷史記錄中標記為“保留”。 CoNETCash上的資金將被擱置（待處理交易）。被授權方有權在你授權金額內，扣除你所購買的服務或產品。',
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished1': '登記完畢，其他人可通過地址: ',
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished2': '使用Seguro即時信息，與您進行通訊。您也可通過該地址，在CONET-SI網絡部署您的匿名服務器。',

	'platform.ProfileDropdown.nodelist.CoNET.SI': 'CoNET-SI "隱形互聯網"',
	'platform.ProfileDropdown.nodelist.selectEntryNode': '請選擇一個或多个結點，作為進入CoNET-SI的入口',
	'platform.ProfileDropdown.nodelist.entryNodeTitle': `入口結點設定`,
	'platform.ProfileDropdown.nodelist.entryNodeditail': 'CoNET-SI入口結點是，用戶設備通過互聯網，無IP地址，隱身連結到CoNET-SI網絡的橋樑。',
	'platform.ProfileDropdown.conet_si.nodes.maxConfirm': '確認(已達最大值)',

	'platform.ProfileDropdown.nodelist.country': '結點所在地',
	'platform.ProfileDropdown.nodelist.registersDate': '上線日期',
	'platform.ProfileDropdown.nodelist.keep': '連續服務時間 分鐘',
	
	'platform.ProfileDropdown.nodelist.storagePrice': '存儲 USDC 1GB/月',
	'platform.ProfileDropdown.nodelist.outboundPrice': '網絡 USDC 1GB',

	'platform.ProfileDropdown.nodelist.about': 'CoNET-SI为用户提供零元数据的私密互联网通信',
	'platform.ProfileDropdown.nodelist.about1':'傳統互聯網傳輸的數據包，包含發送方和接收方的IP地址和未經加密的內容。',
	'platform.ProfileDropdown.nodelist.about2': 'CoNET-IS 與 Internet 完全不同，它不使用具有包含個人信息和地理位置的豐富元數據的 IP 地址。 雙方使用一次性錢包地址作為保持通信匿名的一種方式。 CoNET-SI 的數據包不包含發件人地址，內容必須加密，才會被認可傳輸並送達收件人錢包地址。',

	'platform.country.de': '德國',
	'platform.country.us': '美國',
	'platform.country.gb': '英國',
	'platform.country.es': '西班牙',

	'platform.app.seguro.messenger.panels.addContact.info': '您可以在下方通過他們的錢包地址添加聯繫人',
	'platform.app.seguro.messenger.panels.addContact.firstMessage': 'Additionally, you may set a nickname for this contact. Send them a custom greeting to let them know who you are!'
}

export default zh_CN
