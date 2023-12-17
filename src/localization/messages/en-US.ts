import {Messages} from '../types'

const en_US: Messages = {

	'platform.app.browser.search.placeholder': 'Search or entry website name',
	'platform.app.browser.tab.newTabName': 'New Tab',

    'main.greeting': 'Hello world!',
	'LaunchScreen.loadFail': 'CoNET Platform Loading Failed! Click to reload please.',
    'onboarding.selectLanguageTitle': 'Select your language',
    'onboarding.selectLanguageSubtitle': 'Please select your language for Seguro Platform. ' +
        'You will be able to change this later in settings.',
    'onboarding.setPasscodeTitle': 'Create Passcode to Protect your CONET Wallet',
    'onboarding.setPasscodeSubtitle': 'Minimum 6 character',
    'onboarding.confirmPasscodeTitle': 'Confirm Passcode',

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
    'onboarding.verification.error.authError': 'Please update your CoNET Platform software!',

    'onboarding.verification.modal.button.retry': 'Retry',
    'onboarding.verification.modal.button.update': 'Update',
    'onboarding.verification.modal.button.newCode': 'Enter new verification code',

    'onboarding.setup.create.container': 'Creating anonymous profile...',
    'onboarding.setup.verify.code': 'Initializing encryption keys...',
    'onboarding.setup.enter.button': 'Enter CoNET Platform',

    'onboarding.carousel.title.seguro-platform': 'CoNET Platform',
    'onboarding.carousel.title.no-ip-tracking': 'Anonymous Network',
    'onboarding.carousel.title.decentralized': 'Decentralized',
    'onboarding.carousel.title.anonymity': 'Anonymity',
    'onboarding.carousel.content.seguro-platform': 'CoNET solves the problem of data leaks and unsecured information through innovative technology.',
    'onboarding.carousel.content.no-ip-tracking': 'You can enter CoNET from anywhere without worrying about IP tracking or Firewalls.',
    'onboarding.carousel.content.decentralized': 'CoNET runs on a decentralized system, meaning nobody can access to your information.',
    'onboarding.carousel.content.anonymity': 'You can full control of your personal information with CoNET.',

    'passcodeInput.incorrect.error': 'Incorrect passcode, please try again!',
    'passcodeInput.confirm.error': 'Passcode not correct!',
    'passcodeInput.invalidLength': 'Passcode requires minimum 6 numbers',

    'button.next': 'Next',
    'button.back': 'Back',
    'button.unlock': 'Unlock',

    'unlock.title': 'Enter your CoNET Platform passcode',

    'platform.unlock.button.forgot': 'Forgot your passcode?',
    'platform.dialog.delete.message': 'Deleting your container is a permanent action, all your data in CoNET Platform will be lost..',
    'platform.dialog.delete.button.cancel': 'Cancel',
    'platform.dialog.delete.button.confirm': 'Delete',

    'keypad.cancel': 'Cancel',
    'keypad.unlock': 'Unlock',

    'tabnavigator.tab.chats': 'Chats',
    'tabnavigator.tab.contacts': 'Contacts',
    'tabnavigator.tab.settings': 'Settings',

    'drawer.settings': 'Settings',
    'drawer.updates': 'Updates',
    'drawer.support': 'Support',

    'platform.overlay.unlocking': 'Unlocking CONET Wallet',
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
	'platform.ProfileDropdown.faucet.error': 'CONET did not accept your request. Every once in a day.',
	'platform.ProfileDropdown.send.error': 'Network Error, Please try again later.',
	'platform.ProfileDropdown.buy.usdcPrice': 'Estimate price: ',
	'platform.ProfileDropdown.spend': 'Spend',
	'platform.ProfileDropdown.Receive': 'Receive',


	'platform.ProfileDropdown.SI.network.title': 'CoNET "Stealth Internet" Setup',
	'platform.ProfileDropdown.SI.network.loading': 'Loading CoNET Stealth Internet supplier miner nodes list...',
	'platform.ProfileDropdown.SI.network.listError': 'Failed to get CoNET Stealth Internet nodes information, please try again later',

	'tabnavigator.guide.title': 'Welcome to CONET',
    'tabnavigator.guide.createWallet': 'Create Wallet',
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
	'platform.ProfileDropdown.nodelist.registersPayment.insufficient_conetcash_balance': 'Insufficient CoNETCash balance',
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


	'platform.ProfileDropdown.nodelist.about': 'The CONET "Stealth Internet" provide user zero metadata privacy internet communication.',
	'platform.ProfileDropdown.nodelist.about1': 'The data packets transmitted on the Internet contain the IP addresses and unencrypted content of the sender and the recipient.',
	'platform.ProfileDropdown.nodelist.about2': `The CONET-IS is completely different from the Internet, it does not use IP addresses which has rich metadata containing personal information and geographic location. The two parties use a one-time wallet address as a means of keeping the communication anonymous. The data in packets of CoNET-SI does not contain sender address. The package content in CoNET-SI must be encrypted to be identified, transmitted and delivered to receiver's wallet address.`,

	'platform.ProfileDropdown.CoNET.website': 'Click here to visit CONET Project website.',

	'platform.country.de': 'Germany',
	'platform.country.us': 'United States',
	'platform.country.gb': 'United Kingdom',
	'platform.country.es': 'Spain',

	'globalBar.application.AppStore': 'CONET APP Store',

	'tabnavigator.appStore.title': 'Welcome to CONET App Store',

	'platform.app.seguro.messenger.panels.addContact.info': 'You can add a contact by their wallet address below.',
	'platform.app.seguro.messenger.panels.addContact.firstMessage': 'Additionally, you may set a nickname for this contact. Send them a custom greeting to let them know who you are!',

    'launchPage.HeaderArea.title1-1': 'CONET - COMPLETE PRIVACY FOR',
    'launchPage.HeaderArea.title1-2': 'THE NEW INTERNET',
    'launchPage.HeaderArea.title2': `WE rebuilt the entire internet to be censorship resistant`,
    'launchPage.HeaderArea.button': 'Join CONET',
    'launchPage.HeaderArea.secondPart.1': 'CoNET has reinvented the Internet by coming up with a censorship-resistant method of data  exchange using wallet addresses instead of IP addresses.',
    'launchPage.HeaderArea.secondPart.2': 'Censorship Resistant',
    'launchPage.HeaderArea.secondPart.3': 'CONET has reinvented the Internet by coming up with a censorship-resistant method of data',
    'launchPage.HeaderArea.secondPart.4': 'exchange using wallet addresses instead of IP addresses.',
    
    'launchPage.FeatureArea1.1': 'USE WALLET ADDRESSES INSTEAD OF IP ADDRESSES',
    'launchPage.FeatureArea1.2': 'The CONET blockchain represents a brand new network layer for the Internet that does not use IP addresses or contain any metadata. This is the only routing method that enables total anonymity, privacy, and universal access.',
    'launchPage.FeatureArea2.1': 'EASY FOR USERS TO UNDERSTAND AND USE',
    'launchPage.FeatureArea2.2': 'CONET helps users avoid ubiquitous surveillance, communication filters, and big data collection, all without creating technical barriers. The interface is intuitive and aesthetically pleasing, removing any trade-offs of previous solutions.',
    'launchPage.FeatureArea3.1': 'GOOD BEHAVIOR INCENTIVIZED BY TOKEN USAGE',
    'launchPage.FeatureArea3.2': 'On the CoNET blockchain, users are able to pay gas, earn rewards, delegate tokens, run nodes, and vote on governance initiatives with the CoNET token. The quality of service is decided by users and service providers themselves, and CoNET is no longer involved.',

    'launchPage.FeatureArea4.1': 'CONET Surpasses Everything Else Out There',
    'launchPage.FeatureArea4.2': `This is a solution that can do something that TOR, NYM, dVPN, and all other solutions you’ve heard of cannot.`,

    'launchPage.FeatureArea5.1': 'TRUE PRIVACY',
    'launchPage.FeatureArea5.2': 'Privacy from government and corporate surveillance is becoming increasingly important to users. By replacing cumbersome Web2 communication protocols with an innovative Web3 protocol, true privacy becomes possible.',

    'platform.proxy.FeatureArea5.moreDetail': 'More Information',
	'platform.proxy.issueReport': 'Report Issue',
    'launchPage.FeatureArea6.1': 'SIMPLE USER ADOPTION',
    'launchPage.FeatureArea6.2': 'Onboarding is easy since the platform runs in various browsers. There’s no need to install any app to get the benefit of CoNET. All incoming and outgoing data will still be encrypted, making user history invisible.',

    'launchPage.FeatureArea7.1': 'EASY DEVELOPMENT',
    'launchPage.FeatureArea7.2': 'CoNET has a built-in development package that allows developers to build apps for Web3. The single code base and universal device capability streamline development for non-Web3 coders.',

    'launchPage.FeatureArea.1': 'CONET is A Ground-Up Revamp of the',
    'launchPage.FeatureArea.2': 'Entire Privacy Market',
    'launchPage.FeatureArea.3': 'CONET’s Unique Design',

    'platform.home': 'CONET Platform',
    'platform.proxy': 'The Data Highway Bridge Spanning Web2 and Web3',
    'platform.proxy-1': 'Help user visit IP address server with wallet address',
    'platform.proxy.title': 'THE FAST & PRIVACY PROXY',
    'platform.proxy.FeatureArea.title.1': 'CONET is A Ground-Up Revamp of the',
    'platform.proxy.FeatureArea.title.2': 'Entire Privacy VPN Market',
    'platform.proxy.FeatureArea5.1': 'TRUE PRIVACY',
    'platform.proxy.FeatureArea5.2': 'CONET-Proxy rewrites the definition of VPN privacy. Fragmented communication allows data to be perfectly hidden in the data ocean. Using wallet address network to make customers completely anonymous to decentralized VPN service providers',
    'platform.proxy.FeatureArea6.1': 'Traffic Obfuscation',
    'platform.proxy.FeatureArea6.2': `The biggest feature of CONET's data communication is that it has no special protocol and focuses on hiding data traffic.`,
    'platform.proxy.FeatureArea7.1': 'Parallel multi-channel',
    'platform.proxy.FeatureArea7.2': `CONET proxy is the first in the industry that can use multiple proxy servers concurrent communication technology at the same time`,
    'platform.proxy.FeatureArea.start': 'Ready To Start',
    'platform.proxy.step1.title': 'Free User',
    'platform.proxy.subscription.user': 'Subscription',
    'platform.proxy.featureArea8Item.step1': 'Step 1 Wallet recharge',
    'platform.proxy.featureArea8Item.step1.CONETbalance': 'CONET balance',
    'platform.proxy.featureArea8Item.step1.transferQuote': 'Billed by traffic, 1MB/1$CONET',
    'platform.proxy.featureArea8Item.step2': 'Step 2 start to use',
    'platform.proxy.featureArea8Item.step2.cant': 'Insufficient balance',
    'platform.proxy.featureArea8Item.step2.random': '',//'Multiple selections will use randomly by fragmented data packets',
    'platform.proxy.featureArea8Item.step3': 'Setup FireFox',
    'platform.proxy.featureArea8Item.chrome': 'Setup Chromium',
    'platform.proxy.featureArea8Item.chrome.extensions': 'Download from Chrome Store',
	'platform.proxy.chrome.detail': 'Uses CONET proxy through Chrome in this laptop.',
	'platform.proxy.firefox.detail': 'Uses CONET proxy through Firefox in this laptop.',

    'platform.proxy.featureArea8Item.minerSetup.title': 'Select Option',
    'platform.proxy.featureArea8Item.minerSetup.saas':'SaaS',
    'platform.proxy.featureArea8Item.minerSetup.bandwidth': 'Bandwidth',
	'platform.proxy.setup.allOther': 'Other Setup',
	'platform.proxy.setup.iOS': 'iOS',
	'platform.proxy.setup.iOSOther': 'Other iOS devices can use the proxy through this computer',
	'platform.proxy.setup.android': 'Android',
	'platform.proxy.setup.andOther': 'Other Android devices can use the proxy through this computer',
	'platform.proxy.setup.macos': 'Mac OS',
	'platform.proxy.setup.macosOther': 'Other Mac OS devices can use the proxy through this computer',
	'platform.proxy.setup.win': 'Windows',
	'platform.proxy.setup.winOther': 'Other Windows devices can use the proxy through this computer',


    'platform.joinUS.miner.title': 'Safety-first mining design',
	'platform.joinUS.miner.cloudTitle': 'Cloud nodes',
    'platform.joinUS.miner.detail': `CONET is a trustless, permissionless, decentralized network. maximizing the security for resource providers is the top priority of CONET network design, an independent space in the security sandbox and the miner without IP address are CONETs technical advantages that stand out among the others.`,
    'launchPage.FeatureArea9.title': 'CONET testnet is live',
    'platform.joinUS.header.title.1': 'DePIN Idle Computer Resources',
    'platform.joinUS.header.title.2': 'Fair Free Market',
    'platform.joinUS.header.detail': 'CONET is a infrastructure for privacy in layer minus',
    'platform.joinUS.header.whatConet': `What's CONET`,
    'platform.joinUS.miner.Bandwidth': 'Bandwidth',
    'platform.joinUS.miner.BandwidthDetail': 'Get rewards by sharing IP Address, unused network bandwidth resources.',
    'platform.joinUS.miner.SaaS': 'SaaS',
    'platform.joinUS.miner.SaaSDetail': 'Get rewards by sharing your computer CPU power resources.',
    'platform.joinUS.miner.storage': 'Storage',
    'platform.joinUS.miner.storageDetail': 'Get rewards by sharing your hard disk storage resources.',
	'platform.joinUS.miner.cloud.table.title1': 'Seed Node',
	'platform.joinUS.miner.cloud.table.title2': 'Super Node',
	'platform.joinUS.miner.cloud.table.item2': 'Ratio',
	'platform.joinUS.miner.cloud.table.item2-seed': '6X',
	'platform.joinUS.miner.cloud.table.item2-super': '12X',
	'platform.joinUS.miner.cloud.table.item1': 'Pre-sale Price',
	'platform.joinUS.miner.cloud.table.item3': 'Limited Quantity',
	'platform.joinUS.miner.cloud.table.item4': 'Operational Continuity',
	'platform.joinUS.miner.cloud.table.item5': 'Maintenance Fee',
	'platform.joinUS.miner.cloud.table.item5-1': 'Free',
	'platform.joinUS.miner.cloud.table.item6': 'Airdrop',

    'platform.joinUS.joinMiner.button': 'Join Miner Now',

    'platform.joinUS.forUser.Title1': 'Web3 Application',
    'platform.joinUS.forUser.Title2': 'Open Trustless Web3 Application',
    'platform.joinUS.forUser.detail': 'User-driven validation model eliminates the need for centralized intermediaries, enhancing security and trust in the ecosystem',

    'platform.joinUS.forDeveloper.Title1': 'Web3 dAPP Development',
    'platform.joinUS.forDeveloper.Title2': 'with CONET',
    'platform.joinUS.forDeveloper.detail': 'dAPP has naturally privacy-enhancing features',
    'platform.joinUS.forDeveloper.button': 'Coming Soon',

    'platform.api.daemon.title': 'No CONET Daemon Activity Detected',
    'platform.api.daemon.detail': 'Please start CONET Daemon, or download and start it',
	'platform.api.daemon.verLow': 'Your CONET Daemon is out of date. Please download the latest.',
    'platform.api.daemon.mobileNotSupport': 'Currently only support with desktop computers',
    'platform.api.daemon.testButton': 'test daemon',
    'platform.api.daemon.openSource': 'CONET is Open Source',
	'platform.api.daemon.httpsiteError': 'This APP does not support CONET cross-Web2 proxy, please click to switch APP',
	'platform.api.daemon.switchAPP': 'Switch APP',

    'platform.miner.header.title': 'Welcome to CONET DePIN',
	'platform.miner.header.title.detial': 'Why CONET needs your participation',
	'platform.miner.header.title.smartContract': 'CNTP ERC20 Smart Contract ',

    'platform.miner.register.title': 'Node Provider',
    'platform.miner.register.button': 'Start Earning',
    'platform.miner.register.boost': 'Boost',
    'platform.miner.register.boost.detail': 'Staking ? $CONET with 90 days locked',

    'platform.miner.register.MinerAni.reward': 'Rewards currently received',
    'platform.miner.register.MinerAni.pause': 'Pause',
    'platform.miner.register.MinerAni.resume': 'Start',
    'platform.miner.register.MinerAni.claim': 'Claim reward',
    'platform.miner.register.totalRewards': 'Lifetime Rewards',
    'platform.miner.register.pendingRewards': 'Pending Rewards',
    'platform.miner.register.previouslyClaimed': `Current Rewards`,
    'platform.miner.register.MinerAni.stop': 'Stop DePIN',
	'platform.conet.cotp.Symbol': 'CNTP',
	'platform.conet.cotp.name': 'CONET Reward Point',
    'platform.miner.register.referrals': 'Referrals',
	'platform.miner.community.referral.detail': 'Get accelerated by referring participants',

	'platform.miner.community.title': 'Incentives for Community',
	'platform.miner.community.liveness.title': 'Liveness',
	'platform.miner.community.liveness.detail': 'Follow and be active online anytime, anywhere to get rewards',
	'platform.miner.community.liveness.sameIPError': 'Error! Your IP address has been occupied, please try again later.',
	'platform.miner.community.liveness.sameMinerError': 'Error! You are running another instance, please try again later.'



    
}

export default en_US
