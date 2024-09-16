import {Messages} from '../types'

const ja_JP: Messages = {
	'platform.app.browser.search.placeholder': 'サイト名または検索を入力してください',
	'platform.app.browser.tab.newTabName': '新しいタブ',
	
    'main.greeting': 'ようこそ',
	'LaunchScreen.loadFail': 'CoNET プラットフォームを読み込みに失敗しました! クリックしてリロードしてください',
    'onboarding.selectLanguageTitle': '使う言語を選んでください',
    'onboarding.selectLanguageSubtitle': '言語を選択してください。' +
        '言語は後での設定変更ができます.',
    'onboarding.setPasscodeTitle': 'CONETワレットを保護するパスコードを入力してください',
    'onboarding.setPasscodeSubtitle': '6文字以上',
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
    'platform.dialog.delete.message': '削除はCONET Platform内のデータがすべて失われます！',
    'platform.dialog.delete.button.cancel': 'キャンセル',
    'platform.dialog.delete.button.confirm': 'パスコードを削除',

    'keypad.cancel': 'Cancel',
    'keypad.unlock': 'Unlock',

    'tabnavigator.tab.chats': 'Chats',
    'tabnavigator.tab.contacts': 'Contacts',
    'tabnavigator.tab.settings': 'Settings',

    'drawer.settings': 'Settings',
    'drawer.updates': 'Updates',
    'drawer.support': 'Support',

    'platform.overlay.unlocking': 'ワレットのロックを解除',
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
	'platform.ProfileDropdown.faucet.lowBalance': 'CONET残高が不足しています、送金ができません。まずFaucetしてください',

	'platform.ProfileDropdown.send.total': 'Total',
	'platform.ProfileDropdown.faucet.success': 'Request send success!',
	'platform.ProfileDropdown.faucet.error': 'レクエストが失敗しました。毎日は一回しかできません',
	'platform.ProfileDropdown.send.error': 'Network Error, Please try again later.',
	'platform.ProfileDropdown.buy.usdcPrice': 'Estimate price: ',
	'platform.ProfileDropdown.spend': 'Spend',
	'platform.ProfileDropdown.Receive': 'Receive',


	'platform.ProfileDropdown.SI.network.title': 'CoNET "Stealth Internet" Setup',
	'platform.ProfileDropdown.SI.network.loading': 'Loading CoNET Stealth Internet supplier miner nodes list...',
	'platform.ProfileDropdown.SI.network.listError': 'Failed to get CoNET Stealth Internet nodes information, please try again later',

	'tabnavigator.guide.title': 'CONETへようこそ',
    'tabnavigator.guide.createWallet': 'ワレット作成',
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
	'platform.app.seguro.messenger.panels.addContact.firstMessage': 'この連絡先にニックネームを設定することもできます。 カスタムの挨拶を送って、あなたが誰であるかを知らせましょう',

    'launchPage.HeaderArea.title1-1': 'CONET - 新しいインターネット',
    'launchPage.HeaderArea.title1-2': 'プライバシーファースト',
    'launchPage.HeaderArea.title2': `検閲に避けるためにインターネット全体を再構築`,
    'launchPage.HeaderArea.button': 'CONETに加入',
    'launchPage.HeaderArea.secondPart.1': 'CONETは、IPアドレスの代わりにウォレットアドレスを使った検閲耐性のあるデータ交換方法でインターネットに革命',
    'launchPage.HeaderArea.secondPart.2': 'CONETは技術革新でプライバシーを実現',
    'launchPage.HeaderArea.secondPart.3': 'CONETは、豊富な個人情報を含むIPアドレスの代わりにウォレットアドレスを使用して',
    'launchPage.HeaderArea.secondPart.4': '通信を行う',

    'launchPage.FeatureArea1.1': 'デバイスはウォレットアドレスを使って区別',
    'launchPage.FeatureArea1.2': 'CONETブロックチェーンは、IP アドレスやメタデータを使用しない新しいネットワーク層をベースに、完全な匿名性、プライバシー、ユニバーサルアクセスなどをもっています',
    'launchPage.FeatureArea2.1': 'シンプル、明確、効率的',
    'launchPage.FeatureArea2.2': 'ユビキタスな監視、通信フィルタリング、ビッグデータの収集から回避でき、CONETはテクノロジーに決して妥協しません。',
    'launchPage.FeatureArea3.1': '世界首个匿名挖矿的公链项目',

    'platform.home': 'CONET Platform',
    'platform.proxy': 'Web2とWeb3にまたがるデータのハイウェイブリッジ',
    'platform.proxy-1': 'ウォレットアドレスを使ってIPアドレスサーバーにアクセスする',
    'platform.proxy.title': '最もプライベートな高速プロキシ',
    'platform.proxy.FeatureArea.title.1': 'CONETプロキシ、プライバシーVPNマーケットを再定義',
    'platform.proxy.FeatureArea.title.2': ' ',

    'platform.proxy.FeatureArea5.1': '真のプライバシー保護へ',
    'platform.proxy.FeatureArea5.2': 'CONETプロキシテクノロジは、VPNプライバシーの定義を書き換えます。 分散型で断片化された通信により、データはデータの海に完全に隠蔽されます。ウォレットアドレス通信ルーティングのネットワークにより、ユーザーは監視から消えます。',
    'platform.proxy.FeatureArea5.moreDetail': 'もっと詳しく',
	'platform.proxy.issueReport': '問題を報告する',
    'platform.proxy.FeatureArea6.1': 'トラフィックの難読化テクノロジ',
    'platform.proxy.FeatureArea6.2': `CONETプロキシの最大の特徴は、独自なプロトコルを使われていない事`,
    'platform.proxy.FeatureArea7.1': '同時トラフィックのパワー',
    'platform.proxy.FeatureArea7.2': `CONETプロキシは業界初、複数のプロキシサーバーを同時に利用できる通信技術`,
    'platform.proxy.FeatureArea.start': '使い始め',
    'platform.proxy.step1.title': '無料ユーザー',
    'platform.proxy.subscription.user': '購読者',
    'platform.proxy.featureArea8Item.step1': 'ステップ 1: アカウントにチャージする',
    'platform.proxy.featureArea8Item.step1.CONETbalance': 'CONETバランス',
    'platform.proxy.featureArea8Item.step1.transferQuote': 'お見積 1MB/1$CONET',
    'platform.proxy.featureArea8Item.step2': 'ステップ 2: スタート',
    'platform.proxy.featureArea8Item.step2.cant': '残高不足',
    'platform.proxy.featureArea8Item.step2.random': ' ',
    'platform.proxy.featureArea8Item.step3': 'Firefoxをセットアップ',
    'platform.proxy.featureArea8Item.chrome': 'Chromium類ブラウザをセットアップ',
    'platform.proxy.featureArea8Item.chrome.extensions': 'Googleアプリストアからダウンロード',
	'platform.proxy.chrome.detail': 'このラップトップにChrome経由でCONETプロキシを使用します。',
	'platform.proxy.firefox.detail': 'このラップトップにFirefox経由でCONETプロキシを使用します。',

    'platform.proxy.featureArea8Item.minerSetup.title': 'マイニングタイプを選択してください',
    'platform.proxy.featureArea8Item.minerSetup.saas':'SaaS コンピューティングパワーマイニング',
    'platform.proxy.featureArea8Item.minerSetup.bandwidth': '帯域幅マイニング',
	'platform.proxy.setup.allOther': 'その他のプロキシ設定',
	'platform.proxy.setup.iOS': 'iPhone',
	'platform.proxy.setup.iOSOther': '他のiOSデバイスはこのラップトップ経由でプロキシを使用できます',
	'platform.proxy.setup.android': 'Andtoid',
	'platform.proxy.setup.andOther': '他のAndtoidデバイスはこのラップトップ経由でプロキシを使用できます',
	'platform.proxy.setup.macos': 'Mac OS',
	'platform.proxy.setup.macosOther': '他のMacOSデバイスはこのラップトップ経由でプロキシを使用できます',
	'platform.proxy.setup.win': 'Windows',
	'platform.proxy.setup.winOther': '他のWindowsデバイスはこのラップトップ経由でプロキシを使用できます',

    'launchPage.FeatureArea9.title': 'CONETテストネットが正式に開始',
    'platform.joinUS.header.title.1': '余ったコンピューターリソースで',
    'platform.joinUS.header.title.2': 'フェアトレード市場',
    'platform.joinUS.header.detail': 'CONETはLayer Minusプライバシーインフラです',
    'platform.joinUS.header.whatConet': `CONETとは`,
    'launchPage.FeatureArea3.2': 'CONETはパーミッションレス、トラストレスのコミュニティ主導の相互作用を促進する、オープンソースプロジェクトです。ブロックチェーン技術で初めて匿名マイニングが実現しました。 ユーザーはCONETトークンを使用して、ガス料を支払い、報酬の獲得、トークンの委任、ノードの実行、ガバナンス計画への投票を行うことができます。',
    'launchPage.FeatureArea4.1': 'CONETは業界のトップに',
    'launchPage.FeatureArea4.2': `CONETは、VPN、TOR、NYM、dVPNなど、既知のすべてのできない事を実現に`,
    'launchPage.FeatureArea.1': 'CONETはプライバシー保護を完全な再発明です',
    'launchPage.FeatureArea.2': ' ',
    'launchPage.FeatureArea.3': 'オリジナルデザイン',
    'launchPage.FeatureArea5.1': '本当のプライバシー',
    'launchPage.FeatureArea5.2': 'サトシ・ナカモトはウォレット・アドレスでの資産転送を解決し、CONETはウォレット・アドレスでの高速かつ高スループットの情報交換を。CONETはWeb3ビジョンの実現に欠かせないネットワークインフラです',
    'launchPage.FeatureArea6.1': 'シンプルかつ軍事レベルの安全基準',
    'launchPage.FeatureArea6.2': 'CONETプラットフォームは安全なサンドボックスをクライアントで作成し、サンドボックスに出入りするすべてのデータが暗号化されます。ストレージにはデーターを断片化され、暗号化した後で保存。メタデータのない断片は、万の一コンピュータに監視プログラムがあっても機能しない',
    'launchPage.FeatureArea7.1': 'dAPP開発は手軽に',
    'launchPage.FeatureArea7.2': 'PWA技術で出来たCONETプラットフォームは、1つのコードで全デバイスに対応、dAPPの開発に低コストができ、分散型配布システムで、 ストアのレビューメカニズムを解決し、技術革新と投資を保証ができ',

    'platform.joinUS.miner.title': '安全第一のマイニング設計',

	'platform.joinUS.miner.cloudTitle': 'クラウドノード',

    'platform.joinUS.miner.detail': '非信頼を前提に基づいて、ネットワークリソースプロバイダーのセキュリティを配慮した事がCONET設計の最優先事項です。セキュリティサンドボックス内の独立したスペースとIPアドレスのない独自のプライバシーマイナーは、CONETが他の製品の中でも際立っています。',
    'platform.joinUS.miner.Bandwidth': '帯域幅マイニング',
    'platform.joinUS.miner.BandwidthDetail': '余ったネットワーク IP アドレス、帯域幅を共有する事でRewordを獲得します。',
    'platform.joinUS.miner.SaaS': 'CPUパワーマイニング',
    'platform.joinUS.miner.SaaSDetail': '未使用のCPUを共有する事でRewordを獲得します。',
    'platform.joinUS.miner.storage': 'ストレージマイニング',
    'platform.joinUS.miner.storageDetail': '未使用のハードドライブ領域を共有する事でRewordを獲得します。',

	'platform.joinUS.miner.cloud.table.title1': 'シードノード',
	'platform.joinUS.miner.cloud.table.title2': 'スーパーノード',
	'platform.joinUS.miner.cloud.table.item2': '倍率',
	'platform.joinUS.miner.cloud.table.item1': '前売り価格',
	'platform.joinUS.miner.cloud.table.item2-seed': '6X',
	'platform.joinUS.miner.cloud.table.item2-super': '12X',
	'platform.joinUS.miner.cloud.table.item3': '限定数',
	'platform.joinUS.miner.cloud.table.item4': '運用の継続性',
	'platform.joinUS.miner.cloud.table.item5': '保守料金',
	'platform.joinUS.miner.cloud.table.item5-1': '無料',
	'platform.joinUS.miner.cloud.table.item6': 'エアドロップ',
	'platform.joinUS.miner.cloud.table.item7': 'カードサイズWiFi',
	'platform.joinUS.miner.cloud.table.item7-2': '1台',
	'platform.joinUS.miner.cloud.table.item8': '特別な特典',
	'platform.joinUS.miner.cloud.table.item8-2': 'マイニングマシンの利益分配に参加し、Blast L2からの独占的なエアドロップ',

    'platform.joinUS.joinMiner.button': 'CONETマイニングに参加',
    'platform.joinUS.forUser.Title1': 'Web3アプリケーション',//'分散型プライバシーを強化',
    'platform.joinUS.forUser.Title2': 'トラストレスWeb3アプリケーション',
    'platform.joinUS.forUser.detail': 'ユーザー主導の検証モデル、集中式仲介者に依頼せず、エコシステムにおけるセキュリティと信頼が強化されます',

    'platform.joinUS.forDeveloper.Title1': 'CONETインフラを使って',
    'platform.joinUS.forDeveloper.Title2': '分散型アプリの開発',
    'platform.joinUS.forDeveloper.detail': 'dAPPにプライバシー強化機能を自然に持たせる',
    'platform.joinUS.forDeveloper.button': '近日公開',

    'platform.api.daemon.title': 'CONETデーモンが検出されませんでした',
    'platform.api.daemon.detail': 'CONETデーモンを起動、又ダウンロードして起動してください',
	'platform.api.daemon.verLow': '起動したCONETデーモンが古い、クリックして新しいのをダウンロード',
    'platform.api.daemon.mobileNotSupport': '現時点ではデスクトップしか対応していません',
    'platform.api.daemon.testButton': 'テストデーモン',
    'platform.api.daemon.openSource': 'CONETはオープンソースコードです',

	'platform.api.daemon.httpsiteError': 'このアプリは CONET Cross Web2 プロキシをサポートしていません。クリックしてアプリを切り替えてください',
	'platform.api.daemon.switchAPP': '切り替えAPP',

    'platform.miner.header.title': 'ようこそCONET参加者の皆様',
	'platform.miner.header.title.detial': 'なぜあなたの参加がCONETにとても重要な理由',
	'platform.miner.header.title.smartContract': 'CNTP ERC20スマートコントラクト',
	'platform.miner.community.referral.detail': '参加者を紹介してスピードアップ',

    'platform.miner.register.title': 'ノードプロバイダ',
    'platform.miner.register.button': '始めましょう',
    'platform.miner.register.boost': 'ブースト',
    'platform.miner.register.boost.detail': '180日 ? $COENTをロックします',


    'platform.miner.register.MinerAni.reward': '只今受け取っているReward',
    'platform.miner.register.MinerAni.pause': 'マイニングを暫停',
    'platform.miner.register.MinerAni.resume': 'スタート',
    'platform.miner.register.MinerAni.claim': 'Rewardsを請求',
    'platform.miner.register.totalRewards': '獲得Rewards合計',
    'platform.miner.register.pendingRewards': '請求待ちRewards',

    'platform.miner.register.previouslyClaimed': 'カレントRewards',
    'platform.miner.register.MinerAni.stop': 'DePINを中止',
    'platform.miner.register.referrals': 'リファラル',
	'platform.miner.register.referralsList': 'リファラル一覧表',
	'platform.miner.register.referralsEmpty': '只今データがありません',
	'platform.conet.cotp.Symbol': 'CNTP',
	'platform.conet.cotp.name': 'CONETポイント',
	'platform.miner.nwteork.Slashing': 'CONET メイン チェーンはアップグレード中です。完了するまでお待ちください。',

	'platform.miner.community.title': 'コミュニティへのインセンティブ',
	'platform.miner.community.liveness.title': 'アクティブ',
	'platform.miner.community.liveness.detail': 'いつでもどこでもオンラインでアクティブになり、Rewardsを獲得しましょう',
	'platform.miner.community.liveness.sameIPError': 'エラー！IPアドレスが占有されています。後でもう一度お試しください',
	'platform.miner.community.liveness.sameMinerError': 'エラー! 別のインスタンスを実行しています。後でもう一度試してください',
	'platform.miner.community.referral.detail1': `直接推薦`,
	'platform.miner.community.referral.detail1-1': `誰かがあなたの推薦リンクを使用してCONETに参加すると、あなたは紹介された人の収益の20%のボーナスを継続的に受け取ります。`,
	'platform.miner.community.referral.detail2': `二次推薦`,
	'platform.miner.community.referral.detail2-1': `紹介された人がさらに他の人を推薦する場合（二次推薦）、あなたも二次推薦された人の収益の10%のボーナスを継続的に受け取ります。`,
	'platform.miner.community.referral.link': 'あなたの紹介リンク',
	'platform.miner.community.liveness.yourReferrer': 'あなたの推薦者',
	'platform.miner.community.liveness.referrer': '推薦者を入力してください',
	'platform.miner.community.liveness.registerReferrer': 'リファラーを登録',

	'platform.conet.explorer.title': 'CONET エクスプローラー',
	'platform.conet.explorer.lastBlock': 'ラストブロック/アカウント',
	'platform.conet.explorer.nodes': 'CONETノードズ / 現在運行中数',
	'platform.conet.explorer.CNTP': 'CNTP総供給量',
	'platform.conet.explorer.CNTP.mint': '採掘済みCNTP',
	'platform.conet.explorer.CNTP.balance': '残りCNTP',
	'platform.conet.explorer.CNTP.relayNodes': 'CONETネットワークリレーノード'


}

export default ja_JP