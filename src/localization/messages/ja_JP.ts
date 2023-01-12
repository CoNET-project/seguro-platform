import {Messages} from '../types'

const ja_JP: Messages = {
    'main.greeting': 'ようこそ',
	'LaunchScreen.loadFail': 'CoNET プラットフォームを読み込みに失敗しました! クリックしてリロードしてください',
    'onboarding.selectLanguageTitle': '使う言語を選んでください',
    'onboarding.selectLanguageSubtitle': '言語を選択してください。' +
        '言語は後での設定変更ができます.',
    'onboarding.setPasscodeTitle': 'パスコードを作成',
    'onboarding.setPasscodeSubtitle': '6文字以上のパスコードを入力してください',
    'onboarding.confirmPasscodeTitle': 'パスコードの確認',

    'onboarding.verificationTitle': 'Verify Account',
    'onboarding.verificationInputLabel': 'Enter your invitation code',
    'onboarding.verificationText':
        'Please enter the invitation code you have received to begin the verification process.',
    'onboarding.verification.connecting': 'Connecting to IMAP...',
    'onboarding.verification.sending': 'Sending verification request...',
    'onboarding.verification.waiting': 'Waiting on verification response...',
    'onboarding.verification.finished': 'Verification complete!',

    'onboarding.verification.error.generic': 'Seguro was unable to verify your code, please try again!',
    'onboarding.verification.error.incorrect': 'Your verification code is incorrect, please try again!',
    'onboarding.verification.error.internet': 'Seguro cannot connect to internet. Please try again!',
    'onboarding.verification.error.stripe': 'Seguro cannot connect to STRIPE. Please try again!',
    'onboarding.verification.error.email': 'Seguro cannot connect to email servers, please try again!',
    'onboarding.verification.error.localserver': 'Seguro cannot connect to local server, please restart Seguro!',
    'onboarding.verification.error.timeout': 'Seguro timed out waiting for response, please try again!',
    'onboarding.verification.error.authError': 'CoNET プラットフォームソフトウェアを更新してください。',

    'onboarding.verification.modal.button.retry': 'リトライ',
    'onboarding.verification.modal.button.update': 'アップデート',
    'onboarding.verification.modal.button.newCode': 'Enter new verification code',

    'onboarding.setup.create.container': '匿名アカウントを作成しています...',
    'onboarding.setup.verify.code': '暗号化通信用鍵の初期化...',
    'onboarding.setup.enter.button': 'CoNETプラットフォームに入ります',

    'onboarding.carousel.title.seguro-platform': 'CoNETプラットフォーム',
    'onboarding.carousel.title.no-ip-tracking': '匿名ネットワーク',
    'onboarding.carousel.title.decentralized': 'ブロックチェーンベースの分散型ネットワーク',
    'onboarding.carousel.title.anonymity': '匿名',
    'onboarding.carousel.content.seguro-platform': 'CoNETプラットフォームは、革新的な技術でデータ侵害と情報のセキュリティに対処します',
    'onboarding.carousel.content.no-ip-tracking': '革新的なIPアドレスのない暗号化通信インフラを使用して、データの追跡やファイアウォールからブロックする心配がなく、どこからもCoNETネットワークにアクセスできます。',
    'onboarding.carousel.content.decentralized': 'CoNETは分散型インフラで実行されるため、誰もあなたの情報を盗撮することはできません',
    'onboarding.carousel.content.anonymity': 'CoNETにより、あなたの個人情報をご自分で完全にコントロールができます',

    'passcodeInput.incorrect.error': 'パスコードが正しくありません。もう一度お試しください。',
    'passcodeInput.confirm.error': 'パスコードが正しくありません',
    'passcodeInput.invalidLength': 'パスコードには最低6つの数字が必要です',

    'button.next': '次へ',
    'button.back': '戻る',
    'button.unlock': 'アンロック',

    'unlock.title': 'パスコードを入力してください',

    'platform.unlock.button.forgot': 'パスコードをお忘れですか？',
    'platform.dialog.delete.message': '削除はCoNET Platform 内のすべてのデータが失われます。',
    'platform.dialog.delete.button.cancel': 'キャンセル',
    'platform.dialog.delete.button.confirm': 'Delete',

    'keypad.cancel': 'Cancel',
    'keypad.unlock': 'Unlock',

    'tabnavigator.tab.chats': 'Chats',
    'tabnavigator.tab.contacts': 'Contacts',
    'tabnavigator.tab.settings': 'Settings',

    'drawer.settings': 'Settings',
    'drawer.updates': 'Updates',
    'drawer.support': 'Support',

    'platform.overlay.unlocking': 'Unlocking platform...',
    'platform.overlay.createProfile': 'Creating profile...',

    'platform.modal.verification.title': 'Verification Required',
    'platform.modal.verification.text': 'Please enter your 36 character invitation code to complete your setup.',
    'platform.modal.verification.button': "Verify",

    'platform.network.status.label': 'Current Status:',
    'platform.network.status.low': 'Low',
    'platform.network.status.medium': 'Medium',
    'platform.network.status.high': 'High',

    'platform.network.status.description.low': 'Your connection to Seguro appears to have high latency. Please check your internet connection is stable. Data may drop more than usual.',
    'platform.network.status.description.medium': 'Your connection to Seguro has medium latency. Your data might be occasionally dropped or have trouble sending, please check your internet connection.',
    'platform.network.status.description.high': 'Your connection to Seguro is very good, you should be able to receive and send data fast!',

    'platform.settings.settings': 'Platform Settings',
    'platform.settings.language': 'Language(語言)',
    'platform.settings.theme': 'Theme',
    'platform.settings.theme.light': 'Light',
    'platform.settings.theme.dark': 'Dark',
    'platform.settings.theme.auto': 'Auto',
    'platform.settings.passcode': 'Passcode',
    'platform.settings.passcode.edit': 'Edit',

    'platform.settings.passcode.title.newPasscode': 'New passcode',
    'platform.settings.passcode.title.confirmPasscode': 'Confirm passcode',
    'platform.settings.passcode.button.next': 'Next',
    'platform.settings.passcode.button.back': 'Back',

    'platform.settings.general': 'General',
    'platform.settings.myAccount': 'My Account',
    'platform.settings.profile': 'Profiles',

    'platform.settings.devices': 'Devices',

    'platform.settings.devices.contextMenu.edit': 'Edit',
    'platform.settings.devices.contextMenu.delete': 'Delete',

    'platform.settings.device.delete': 'Delete Device',
    'platform.settings.device.delete.confirmMessage': "Are you sure?",
    'platform.settings.device.delete.confirmSubmessage': "Deleting a device is a permanent action!",
    'platform.settings.device.delete.cancelButton': "Cancel",
    'platform.settings.device.delete.confirmButton': "Confirm",

    'platform.settings.deviceCodes': 'Device Codes',
    'platform.settings.activeCodes': 'Active Codes',
    'platform.settings.subscriptionPlan': 'Subscription Plan',

    'toaster.action.copyDeviceCode': 'Copied device code!',
    'toaster.action.passcodeChange': 'Passcode changed!',

    'platform.contextMenu.manage': 'Manage',
    'platform.contextMenu.delete': 'Delete',
    'platform.contextMenu.edit': 'Edit',

    'platform.profile.changePicture': 'Change Picture',
	'platform.profile.walletAddr': 'Wallet Address',
	'platform.profile.nickName': 'Nikename',
	'platform.profile.privateKey': 'Export Private key',
	'platform.profile.privateKeyWarning': 'Warning: Never disclose this key. Anyone with your private keys can steal any assets held in your account.',


    'globalBar.profile.dropdown.manageProfiles': 'Manage Profiles',
    'globalBar.profile.dropdown.addProfile': 'Add Profile',
    'globalBar.profile.dropdown.lockPlatform': 'Lock Platform',
	

    'platform.manageProfile': 'Manage Profile',
    'platform.manageProfile.setAsPrimary': 'Set as primary',
    'platform.manageProfile.saveButton': 'Save',

    'platform.manageProfiles': 'Manage Profiles',
    'platform.manageProfiles.deleteProfile': 'Delete Profile',
    'platform.manageProfiles.deleteProfile.confirmationTitle': 'Are you sure?',
    'platform.manageProfiles.deleteProfile.confirmationSubtext': 'Deleting a profile is a permanent action!',
    'platform.manageProfiles.deleteProfile.cancelButton': 'Cancel',
    'platform.manageProfiles.deleteProfile.confirmButton': 'Confirm',


    'platform.manageProfiles.deleteProfile.onlyProfileError': 'You need at least 1 profile on Seguro!',
    'platform.manageProfiles.deleteProfile.returnButton': 'Return to profiles',

    'platform.addProfile.setAsPrimary': 'Set as primary',
    'platform.addProfile.createButton': 'Create',

	'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet': 'Faucet',
	'platform.ProfileDropdown.CurrentProfileItem.AnonymousUser': 'Anonymous User',
	'platform.ProfileDropdown.CurrentProfileItem.actionSend': 'Send',
	'platform.ProfileDropdown.CurrentProfileItem.buy': 'Buy',
	'platform.ProfileDropdown.Tablable.Assets': 'Assets',
	'platform.ProfileDropdown.Tablable.Activity': 'Activity',

	'platform.ProfileDropdown.send.receiver': 'Receiver Address',
	'platform.ProfileDropdown.send.confirm': 'Confirm send',
	'platform.ProfileDropdown.send.next': 'Next',
	'platform.ProfileDropdown.faucet.limited': 'Drops are limited to1 request in 24 hours.',
	'platform.ProfileDropdown.send.max': 'Max',
	'platform.ProfileDropdown.send.estimatedGas': 'Estimated gas fee',
	'platform.ProfileDropdown.send.amount': 'Amount',
	'platform.ProfileDropdown.CoNETCash.amountError': 'CoNETCash value can only be between 10 and 100 USDC',

	'platform.ProfileDropdown.history.type.send': 'Send',
	'platform.ProfileDropdown.history.type.receive': 'Receive',
	'platform.ProfileDropdown.history.gas.total': 'Total gas fee',
	'platform.ProfileDropdown.history.timestamp': 'Timestamp',
	'platform.ProfileDropdown.history.sender': 'Sender Address',
	'platform.ProfileDropdown.history.CoNETCash.mint': 'Mint',

	'platform.ProfileDropdown.send.total': 'Total',
	'platform.ProfileDropdown.faucet.success': 'Request send success!',
	'platform.ProfileDropdown.faucet.error': 'CoNET did not accept your request. Please send the request again after 24 hours.',
	'platform.ProfileDropdown.send.error': 'Network Error, Please try again later.',
	'platform.ProfileDropdown.buy.usdcPrice': 'Estimate price: ',
	'platform.ProfileDropdown.spend': 'Spend',
	'platform.ProfileDropdown.Receive': 'Receive',


	'platform.ProfileDropdown.SI.network.title': 'CoNET "Stealth Internet" Setup',
	'platform.ProfileDropdown.SI.network.loading': 'Loading CoNET Stealth Internet supplier miner nodes list...',
	'platform.ProfileDropdown.SI.network.listError': 'Failed to get CoNET Stealth Internet nodes information, please try again later',

	'tabnavigator.guide.title': 'Welcome to CoNET Platform',
	'globalBar.application.SeguroMessage': 'Seguro Messenger',
	'globalBar.application.home': 'CoNET Platform',

	'platform.ProfileDropdown.nodelist.title': 'Obtaining CoNET-SI node list...',
	'platform.ProfileDropdown.conet_si.nodes.title': 'About CoNET-SI node',
	'platform.ProfileDropdown.conet_si.nodes.maxConfirm': 'Confirm(reached the maximum)',
	'platform.ProfileDropdown.conet_si.nodes.detail': 'The nodes of CoNET-SI are composed of CoNET-SI miners distributed around the world. They provide network equipment to users to obtain the anonymous US dollar stablecoin CoNETCash paid by users as income. Users can purchase cloud computing storage and network service.',
	'platform.ProfileDropdown.conet_si.nodes.mining': 'CoNET-SI welcomes anyone who provides redundant computer equipment to mine as a participant to earn encrypted stable currency returns based on US dollars. Please visit the CoNET project website for more detailed information',

	'platform.ProfileDropdown.nodelist.registersRecipientTitle': 'Setup Recipient Node',
	'platform.ProfileDropdown.nodelist.registersRecipientDetail': 'Select a node as your wallet recipients for use CoNET-SI communication',
	'platform.ProfileDropdown.nodelist.registersRecipientInfo1': 'The client registers its anonymous profile wallet address to a node in the CoNET-SI network, and the wallet address may receive the message which sent by other clients, and the node will keep the message received when the client is offline. Offline message will be sent to the client when the client goes online again. Client need to pay by CoNETCash-USDC for storage and outbound fee.',
	'platform.ProfileDropdown.nodelist.registersRecipientInfo2': `The nodes of CoNET-SI are all relay nodes. The encrypted text sent by the client through the entry node is routed to the recipient node. Since the encrypted lettermark only contains the node address of the recipient's registered, the entry node does not know who the client is communicating with. The received encrypted message only contains the recipient address in recipient node, and node does not know who the sender of the message is.`,
	'platform.ProfileDropdown.nodelist.registersPayment.setupTitile': 'Payment setup',
	'platform.ProfileDropdown.nodelist.registersPayment.detail1': 'Please confirm the payment authorization.',
	'platform.ProfileDropdown.nodelist.registersPayment.detail2': 'The minimum amount is 1 CoNETCash-USDC.',
	'platform.ProfileDropdown.nodelist.registersPayment.insufficient_conetcash_balance': 'CoNETCashは残高が不足しています',
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationAmount': 'Authorization Amount',
	'platform.ProfileDropdown.nodelist.registersPayment.CoNETCashBalance': 'CoNETCash-USDC Balance',
	'platform.ProfileDropdown.nodelist.registersPayment.registersRecipientloading': 'Registering recipient your communication wallet address.',
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationInformation': 'This only verifies your CoNETCash is valid and that there are enough funds available in your CoNETCash. The transaction will be marked as "Hold" in CoNETCash History. The funds on the CoNETCash will be placed on hold (pending transaction). The authorized party has the right to deduct the service or product you purchased from your authorized amount.',
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished1': 'Registration is complete, others can communicate via Seguro Messagure with you through the address: ',
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished2': ' and you can also deploy your anonymous server in the CONET-SI network through this address.',


	'platform.ProfileDropdown.nodelist.CoNET.SI': 'CoNET-SI "Stealth Internet"',
	'platform.ProfileDropdown.nodelist.country': 'Node Location',
	'platform.ProfileDropdown.nodelist.ipAddress': 'IP Address',
	'platform.ProfileDropdown.nodelist.selectEntryNode': 'Select one or more node as entry to CoNET-SI',
	'platform.ProfileDropdown.nodelist.entryNodeTitle': `Setup Entry Node`,
	'platform.ProfileDropdown.nodelist.registersDate': 'Launch date',
	'platform.ProfileDropdown.nodelist.entryNodeditail': 'The CoNET-SI entry node is a bridge for user equipment to connect to the CoNET-SI network through the Internet without IP addresses.',
	'platform.ProfileDropdown.nodelist.keep': 'Lasting time/mins',
	'platform.ProfileDropdown.nodelist.storagePrice': 'Storgae USDC 1GB/mo',
	'platform.ProfileDropdown.nodelist.outboundPrice': 'Network USDC 1GB',


	'platform.ProfileDropdown.nodelist.about': 'The CoNET "Stealth Internet" provide user zero metadata privacy internet communication.',
	'platform.ProfileDropdown.nodelist.about1': 'The data packets transmitted on the Internet contain the IP addresses and unencrypted content of the sender and the recipient.',
	'platform.ProfileDropdown.nodelist.about2': `The CoNET-IS is completely different from the Internet, it does not use IP addresses which has rich metadata containing personal information and geographic location. The two parties use a one-time wallet address as a means of keeping the communication anonymous. The data in packets of CoNET-SI does not contain sender address. The package content in CoNET-SI must be encrypted to be identified, transmitted and delivered to receiver's wallet address.`,

	'platform.ProfileDropdown.CoNET.website': 'Click here to visit CoNET Project website.',

	'platform.country.de': 'Germany',
	'platform.country.us': 'United States',
	'platform.country.gb': 'United Kingdom',
	'platform.country.es': 'Spain',

	'globalBar.application.AppStore': 'CoNET APP Store',

	'tabnavigator.appStore.title': 'Welcome to CoNET App Store',


	'platform.app.seguro.messenger.panels.addContact.info': 'ウォレットアドレスで連絡先を追加できます',
	'platform.app.seguro.messenger.panels.addContact.firstMessage': 'Additionally, you may set a nickname for this contact. Send them a custom greeting to let them know who you are!'
}

export default ja_JP