import {Messages} from '../types'

const zh_CN: Messages = {
    'main.greeting': '你好世界!',
	'LaunchScreen.loadFail': 'CoNET 平台加載失敗！ 請點擊重新加載。',
    'onboarding.selectLanguageTitle': '选择您的语言',
    'onboarding.selectLanguageSubtitle': '选择您的语言...',
    'onboarding.setPasscodeTitle': '设置密码',
    'onboarding.setPasscodeSubtitle': '输入最少 6 个字符的密码',
    'onboarding.confirmPasscodeTitle': '确认密码',

    'onboarding.verificationTitle': '验证邀请码',
    'onboarding.verificationInputLabel': '输入您的邀请码',
    'onboarding.verificationText': '请输入您收到的邀请码以开始验证过程。 此邀请码确保您在 Seguro 平台上的体验质量是最好的',
    'onboarding.verification.connecting': '正在链接IMAP...',
    'onboarding.verification.sending': '正在向 Seguro 发送验证请求...',
    'onboarding.verification.waiting': '等待 Seguro 的验证响应...',
    'onboarding.verification.finished': '验证完成!',

    'onboarding.verification.error.generic': 'Seguro 无法验证您的代码，请重试!',
    'onboarding.verification.error.incorrect': '您的验证码有误，请重试！',
    'onboarding.verification.error.internet': 'Seguro 无法连接到互联网 请再试一次！',
    'onboarding.verification.error.stripe': 'Seguro 无法连接到 STRIPE 请再试一次！',
    'onboarding.verification.error.email': 'Seguro 无法连接到电子邮件服务器，请重试！',
    'onboarding.verification.error.localserver': 'Seguro 无法连接到本地服务器，请重启 Seguro！',
    'onboarding.verification.error.timeout': 'Seguro 等待超时，请重试！',
    'onboarding.verification.error.authError': '请更新您的 Seguro 软件！',

    'onboarding.verification.modal.button.retry': '重试',
    'onboarding.verification.modal.button.update': '更新 Seguro',
    'onboarding.verification.modal.button.newCode': '输入新的验证码',

    'onboarding.setup.create.container': '正在创建帐户...',
    'onboarding.setup.verify.code': '验证邀请码...',
    'onboarding.setup.enter.button': '进入 Seguro',

    'onboarding.carousel.title.seguro-platform': 'CoNET 平台',
    'onboarding.carousel.title.no-ip-tracking': '无 IP 跟踪',
    'onboarding.carousel.title.decentralized': '去中心化',
    'onboarding.carousel.title.anonymity': '匿名',
    'onboarding.carousel.content.seguro-platform': 'Seguro 通过创新技术解决数据泄露和信息不安全的问题',
    'onboarding.carousel.content.no-ip-tracking': '使用创新的电子邮件隧道技术，您可以从任何地方访问 Seguro，而无需担心 IP 跟踪或防火墙',
    'onboarding.carousel.content.decentralized': 'Seguro 在分散系统上运行，这意味着即使我们也无法访问您的信息',
    'onboarding.carousel.content.anonymity': '使用 Seguro 随心所欲地公开或匿名，无需个人信息',

    'passcodeInput.incorrect.error': '密码错误，请再试一次',
    'passcodeInput.confirm.error': '密码不对，请再输入一次',
    'passcodeInput.invalidLength': '密码最少需要6位数',

    'button.next': '下一步',
    'button.back': '退一步',
    'button.unlock': '开锁',

    'unlock.title': '输入您的 CoNET 平台密码',
    
    'platform.unlock.button.forgot': '忘记密码了？',
    'platform.dialog.delete.message': '删除您的容器是不同的操作，需要使用新的邀请码创建新密码',
    'platform.dialog.delete.button.cancel': '取消',
    'platform.dialog.delete.button.confirm': '删除',

    'keypad.cancel': '取消',
    'keypad.unlock': '解锁',

    'tabnavigator.tab.chats': '聊天',
    'tabnavigator.tab.contacts': '联系',
    'tabnavigator.tab.settings': '设置',

    'drawer.settings': '设置',
    'drawer.updates': '更新',
    'drawer.support': '支持',

    'platform.overlay.unlocking': '解锁平台...',
    'platform.overlay.createProfile': '创建配置文件...',

    'platform.modal.verification.title': '需要验证',
    'platform.modal.verification.text': '请输入您的 36 字符邀请码以完成设置。',
    'platform.modal.verification.button': "开始验证",

    'platform.network.status.label': '当前状态：',
    'platform.network.status.low': '低',
    'platform.network.status.medium': '中',
    'platform.network.status.high': '高',

    'platform.network.status.description.low': '您与 Seguro 的连接似乎具有很高的延迟。请检查您的互联网连接是否稳定。数据可能比平时下降得更多。',
    'platform.network.status.description.medium': '您与 Seguro 的连接具有中等延迟。您的数据可能偶尔会丢失或无法发送，请检查您的互联网连接。',
    'platform.network.status.description.high': '您与 Seguro 的连接非常好，您应该能够快速接收和发送数据！',

    'platform.settings.settings': '平台设置',
    'platform.settings.language': '语言(Language)',
    'platform.settings.theme': '主题',
    'platform.settings.theme.light': '浅色',
    'platform.settings.theme.dark': '深色',
    'platform.settings.theme.auto': '自动',
    'platform.settings.passcode': '密码',
    'platform.settings.passcode.edit': '更改密码',

    'platform.settings.passcode.title.newPasscode': '新密码',
    'platform.settings.passcode.title.confirmPasscode': '确认密码',
    'platform.settings.passcode.button.next': '下一步',
    'platform.settings.passcode.button.back': '返回',

    'platform.settings.general': '一般',
    'platform.settings.myAccount': '我的账户',
    'platform.settings.profile': '资料',

    'platform.settings.devices': '设备',

    'platform.settings.devices.contextMenu.edit': '编辑',
    'platform.settings.devices.contextMenu.delete': '删除',

    'platform.settings.device.delete': '删除设备',
    'platform.settings.device.delete.confirmMessage': "你确定吗？",
    'platform.settings.device.delete.confirmSubmessage': "删除设备是永久操作",
    'platform.settings.device.delete.cancelButton': "取消",
    'platform.settings.device.delete.confirmButton': "确认",

    'platform.settings.deviceCodes': '设备代码',
    'platform.settings.activeCodes': '活动代码',
    'platform.settings.subscriptionPlan': '订阅计划',

    'toaster.action.copyDeviceCode': '复制的设备代码!',
    'toaster.action.passcodeChange': '密码已更改!',

    'platform.contextMenu.manage': '管理',
    'platform.contextMenu.delete': '删除',
    'platform.contextMenu.edit': '编辑',

    'platform.profile.changePicture': '更换图片',
	'platform.profile.walletAddr': '钱包地址',
	'platform.profile.nickName': '设置昵称',
	'platform.profile.privateKey': '导出私钥',
	'platform.profile.privateKeyWarning': '警告：切勿泄露此密钥给任何人。拥有此私钥，就可以任意支配，账户中所有的资产。',

    'globalBar.profile.dropdown.manageProfiles': '管理个人资料',
    'globalBar.profile.dropdown.addProfile': '添加配置文件',
    'globalBar.profile.dropdown.lockPlatform': '锁定平台',

    'platform.manageProfile': '管理个人资料',
    'platform.manageProfile.setAsPrimary': '设置为当前账户',
    'platform.manageProfile.saveButton': '保存',

    'platform.manageProfiles': '管理个人资料',
    'platform.manageProfiles.deleteProfile': '删除个人资料',
    'platform.manageProfiles.deleteProfile.confirmationTitle': '你确定吗？',
    'platform.manageProfiles.deleteProfile.confirmationSubtext': '删除个人资料是永久性的!',
    'platform.manageProfiles.deleteProfile.cancelButton': '取消',
    'platform.manageProfiles.deleteProfile.confirmButton': '确认',



    'platform.manageProfiles.deleteProfile.onlyProfileError': '你需要至少 1 个关于 Seguro 的个人资料！',
    'platform.manageProfiles.deleteProfile.returnButton': '返回个人资料',

    'platform.addProfile.setAsPrimary': '设置为主',
    'platform.addProfile.createButton': '创建',

	'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet': '水龙头',
	'platform.ProfileDropdown.CurrentProfileItem.actionSend': '转账',
	'platform.ProfileDropdown.CurrentProfileItem.buy': '购买',
	'platform.ProfileDropdown.Tablable.Assets': '加密资产',
	'platform.ProfileDropdown.Tablable.Activity': '历史记录',

	'platform.ProfileDropdown.send.receiver': '收款人地址',
	'platform.ProfileDropdown.send.amount': '转账数量',
	'platform.ProfileDropdown.history.sender': '付款人地址',
	'platform.ProfileDropdown.CoNETCash.amountError': 'CoNETCash只能在10～100USDC之间',

	'platform.ProfileDropdown.history.type.send': '转出',
	'platform.ProfileDropdown.history.type.receive': '接收',
	'platform.ProfileDropdown.history.gas.total': 'Gas费合计',
	'platform.ProfileDropdown.history.timestamp': '时间戳', 
	'platform.ProfileDropdown.history.CoNETCash.mint': '鑄造',

	'platform.ProfileDropdown.send.confirm': '确认转账',
	'platform.ProfileDropdown.send.next': '下一步',
	'platform.ProfileDropdown.send.max': '最大值',
	'platform.ProfileDropdown.send.estimatedGas': '预估转账Gas费',
	'platform.ProfileDropdown.send.total': '合计',
	'platform.ProfileDropdown.faucet.limited': '24小时内仅限1次请求。',
	'platform.ProfileDropdown.faucet.success': '已成功发送请求！',
	'platform.ProfileDropdown.faucet.error': 'CoNET已拒绝您的请求，请过24小时后再次发送请求',
	'platform.ProfileDropdown.send.error': '网络错误，请稍后重试',
	'platform.ProfileDropdown.buy.usdcPrice': '预估价格: ',
	'platform.ProfileDropdown.spend': '花费',
	'platform.ProfileDropdown.Receive': '收到',

	'platform.ProfileDropdown.SI.network.title': 'CoNET-SI"隐形互联网"设定',
	'platform.ProfileDropdown.SI.network.loading': '正在获得CoNET-SI"隐形互联网"挖矿节点信息....',
	'platform.ProfileDropdown.SI.network.listError': '获取CoNET-SI"隐形互联网"节点信息失败,请稍后再试！',

	'platform.ProfileDropdown.CurrentProfileItem.AnonymousUser': '匿名用户',

	'tabnavigator.guide.title': '欢迎使用CoNET平台 ',
	'globalBar.application.home': 'CoNET 平台',
	'globalBar.application.SeguroMessage': 'Seguro 聊天',
	'globalBar.application.AppStore': 'CoNET 应用商店',

	'platform.ProfileDropdown.nodelist.title': '正在获取CoNET-SI节点列表...',
	'platform.ProfileDropdown.conet_si.nodes.title': '关于CoNET-SI "隐形互联网"节点',
	'platform.ProfileDropdown.conet_si.nodes.maxConfirm': '确认(已达最大值)',
	'platform.ProfileDropdown.conet_si.nodes.detail': 'CoNET-SI的节点由分布在全球的CoNET-SI矿工组成。 他们向用户提供网络设备，以获得用户支付的匿名美元稳定币 CoNETCash 作为收入。 用户可以购买云计算存储和网络服务。',
	'platform.ProfileDropdown.conet_si.nodes.mining': 'CoNET-SI欢迎任何人，提供多余的电脑设备，作为参与者挖矿，获取以美金为基准的加密稳定币的回报。请访问CoNET项目网站以获取更详细的信息。',
	'platform.ProfileDropdown.CoNET.website': '点击这里访问CoNET项目网站',

	'platform.ProfileDropdown.nodelist.registersRecipientTitle': '接收节点设定',
	'platform.ProfileDropdown.nodelist.registersRecipientDetail': '请选择一个节点，作为您的钱包接收方，以使用CoNET-SI来进行通信',
	'platform.ProfileDropdown.nodelist.registersRecipientInfo1': '客户端将匿名账号的钱包地址，注册到CoNET-SI网络中的一个节点，该钱包地址就可开始接收其他客户端发送的信息，节点会在客户端离线时，暂时保留收到的信息，客户端再次上线时，离线信息会被传送到客户端。客户需要通过CoNETCash-USDC支付存储费和网络传输费。',
	'platform.ProfileDropdown.nodelist.registersRecipientInfo2': `CoNET-SI 的节点都是中继节点。客户端通过入口节点发送的密文被路由到接收节点。由于加密只包含收件人注册的节点地址，因此入口节点不知道客户端正在与谁通信。接收节点接收到的加密消息，只包含收件人地址，不知道消息的发送者是谁。`,
	'platform.ProfileDropdown.nodelist.registersPayment.setupTitile': '支付设定',
	'platform.ProfileDropdown.nodelist.registersPayment.detail1': '请确认支付授权',
	'platform.ProfileDropdown.nodelist.registersPayment.detail2': '最小授权金额为 1 CoNETCash-USDC',
	'platform.ProfileDropdown.nodelist.registersPayment.CoNETCashBalance': 'CoNETCash-USDC 余额',
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationAmount': '授权金额',
	'platform.ProfileDropdown.nodelist.registersPayment.registersRecipientloading': '正在注册您的通讯钱包地址',
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationInformation': '这仅验证您的CoNETCash是否有效以及您的CoNETCash是否有足够的可用资金。该交易将在CoNETCash历史记录中标记为“保留”。CoNETCash上的资金将被搁置（待处理交易）。被授权方有权在你授权金额内，扣除你所购买的服务或产品。',
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished1': '已登记完毕，其他人可通过地址:',
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished2': '使用Seguro即時信息与您通讯。您也可通过该地址，在CONET-SI网络部署您的匿名服务器。',

	'platform.ProfileDropdown.nodelist.selectEntryNode': '请选择一个或多个结点，作为进入CoNET-SI的入口',
	'platform.ProfileDropdown.nodelist.entryNodeditail': 'CoNET-SI入口结点是，用户设备通过互联网，无IP地址，隐身连接到CoNET-SI网络的桥梁。',
	'platform.ProfileDropdown.nodelist.entryNodeTitle': `入口节点设定`,
	'platform.ProfileDropdown.nodelist.country': '节点所在地',
	'platform.ProfileDropdown.nodelist.ipAddress': '节点IP地址',
	'platform.ProfileDropdown.nodelist.registersDate': '上线日期',
	'platform.ProfileDropdown.nodelist.keep': '持续服務 分钟',
	'platform.ProfileDropdown.nodelist.outboundPrice': '网络 USDC 1GB',
	'platform.ProfileDropdown.nodelist.storagePrice': '存储 USDC 1GB/月',

	'platform.ProfileDropdown.nodelist.CoNET.SI': 'CoNET-SI "隐形互联网"',
	'platform.ProfileDropdown.nodelist.about': 'CoNET-SI为用户提供零元数据的私密互联网通信',
	'platform.ProfileDropdown.nodelist.about1':'传统互联网传输的数据包，包含发送方和接收方的IP地址和未经加密的内容。',
	'platform.ProfileDropdown.nodelist.about2': 'CoNET-IS 与 Internet 完全不同，它不使用具有包含个人信息和地理位置的丰富元数据的IP地址。通讯双方使用一次性钱包地址，作为保持通信匿名的一种方式。 CoNET-SI的数据包不包含发件人地址，内容必须加密，才会被传输并送达收件人钱包地址。',

	'platform.country.de': '德国',
	'platform.country.us': '美国',
	'platform.country.gb': '英国',
	'platform.country.es': '西班牙',

	'tabnavigator.appStore.title': '欢迎來到CoNET应用商店'
}

export default zh_CN
