export type Locale = (
    'en-US' |
    'zh-CN' |
    'zh-TW' |
	'ja-JP'
    )

export type Messages = {
    'main.greeting': string
	'LaunchScreen.loadFail': string
    'onboarding.selectLanguageTitle': string
    'onboarding.selectLanguageSubtitle': string
    'onboarding.setPasscodeTitle': string
    'onboarding.setPasscodeSubtitle': string
    'onboarding.confirmPasscodeTitle': string

    'onboarding.verificationTitle': string
    'onboarding.verificationInputLabel': string
    'onboarding.verificationText': string
    'onboarding.verification.connecting': string
    'onboarding.verification.sending': string
    'onboarding.verification.waiting': string
    'onboarding.verification.finished': string

    'onboarding.verification.error.generic': string
    'onboarding.verification.error.incorrect': string
    'onboarding.verification.error.internet': string
    'onboarding.verification.error.stripe': string
    'onboarding.verification.error.email': string
    'onboarding.verification.error.localserver': string
    'onboarding.verification.error.timeout': string
    'onboarding.verification.error.authError': string

    'onboarding.verification.modal.button.retry': string
    'onboarding.verification.modal.button.update': string
    'onboarding.verification.modal.button.newCode': string

    'onboarding.setup.create.container': string
    'onboarding.setup.verify.code': string
    'onboarding.setup.enter.button': string

    'onboarding.carousel.title.seguro-platform': string
    'onboarding.carousel.title.no-ip-tracking': string
    'onboarding.carousel.title.decentralized': string
    'onboarding.carousel.title.anonymity': string
    'onboarding.carousel.content.seguro-platform': string
    'onboarding.carousel.content.no-ip-tracking': string
    'onboarding.carousel.content.decentralized': string
    'onboarding.carousel.content.anonymity': string

    'passcodeInput.incorrect.error': string
    'passcodeInput.confirm.error': string
    'passcodeInput.invalidLength': string

    'button.next': string
    'button.back': string
    'button.unlock': string

    'unlock.title': string

    'keypad.cancel': string
    'keypad.unlock': string

    'platform.unlock.button.forgot': string
    'platform.dialog.delete.message': string
    'platform.dialog.delete.button.cancel': string
    'platform.dialog.delete.button.confirm': string

    'tabnavigator.tab.chats': string
    'tabnavigator.tab.contacts': string
    'tabnavigator.tab.settings': string

    'drawer.settings': string
    'drawer.updates': string
    'drawer.support': string

    'platform.overlay.unlocking': string
    'platform.overlay.createProfile': string

    'platform.modal.verification.title': string
    'platform.modal.verification.text': string
    'platform.modal.verification.button': string

    'platform.network.status.label': string
    'platform.network.status.low': string
    'platform.network.status.medium': string
    'platform.network.status.high': string

    'platform.network.status.description.low': string
    'platform.network.status.description.medium': string
    'platform.network.status.description.high': string

    'platform.settings.settings': string
    'platform.settings.language': string
    'platform.settings.theme': string
    'platform.settings.theme.light': string
    'platform.settings.theme.dark': string
    'platform.settings.theme.auto': string
    'platform.settings.passcode': string
    'platform.settings.passcode.edit': string

    'platform.settings.passcode.title.newPasscode': string
    'platform.settings.passcode.title.confirmPasscode': string
    'platform.settings.passcode.button.next': string
    'platform.settings.passcode.button.back': string

    'platform.settings.general': string
    'platform.settings.myAccount': string
    'platform.settings.profile': string

    'platform.settings.devices': string

    'platform.settings.devices.contextMenu.edit': string
    'platform.settings.devices.contextMenu.delete': string

    'platform.settings.device.delete': string
    'platform.settings.device.delete.confirmMessage': string
    'platform.settings.device.delete.confirmSubmessage': string
    'platform.settings.device.delete.cancelButton': string
    'platform.settings.device.delete.confirmButton': string

    'platform.settings.deviceCodes': string
    'platform.settings.activeCodes': string
    'platform.settings.subscriptionPlan': string

    'toaster.action.copyDeviceCode': string
    'toaster.action.passcodeChange': string

    'platform.contextMenu.manage': string
    'platform.contextMenu.delete': string
    'platform.contextMenu.edit': string

    'platform.profile.changePicture': string
	'platform.profile.walletAddr': string,
	'platform.profile.nickName': string,
	'platform.profile.privateKey': string,
	'platform.profile.privateKeyWarning': string,

    'globalBar.profile.dropdown.manageProfiles': string
    'globalBar.profile.dropdown.addProfile': string
    'globalBar.profile.dropdown.lockPlatform': string

	'globalBar.application.home': string
	'globalBar.application.AppStore': string
	'globalBar.application.SeguroMessage': string
	

    'platform.manageProfile': string,
    'platform.manageProfile.setAsPrimary': string
    'platform.manageProfile.saveButton': string

    'platform.manageProfiles': string
    'platform.manageProfiles.deleteProfile': string
    'platform.manageProfiles.deleteProfile.confirmationTitle': string
    'platform.manageProfiles.deleteProfile.confirmationSubtext': string
    'platform.manageProfiles.deleteProfile.cancelButton': string
    'platform.manageProfiles.deleteProfile.confirmButton': string

    'platform.manageProfiles.deleteProfile.onlyProfileError': string
    'platform.manageProfiles.deleteProfile.returnButton': string

    'platform.addProfile.setAsPrimary': string
    'platform.addProfile.createButton': string
	'platform.ProfileDropdown.send.confirm': string,
	'platform.ProfileDropdown.send.next': string,

	'platform.ProfileDropdown.CurrentProfileItem.actionFondWallet': string
	'platform.ProfileDropdown.CurrentProfileItem.actionSend': string
	'platform.ProfileDropdown.CurrentProfileItem.buy': string
	'platform.ProfileDropdown.send.receiver': string
	'platform.ProfileDropdown.send.max': string
	'platform.ProfileDropdown.send.total': string
	'platform.ProfileDropdown.buy.usdcPrice': string
	'platform.ProfileDropdown.spend': string
	'platform.ProfileDropdown.Receive': string
	'platform.ProfileDropdown.faucet.limited': string
	'platform.ProfileDropdown.SI.network.title': string
	'platform.ProfileDropdown.SI.network.listError': string
	'platform.ProfileDropdown.SI.network.loading': string
	'platform.ProfileDropdown.faucet.success': string
	'platform.ProfileDropdown.faucet.error': string
	'platform.ProfileDropdown.send.error': string
	'platform.ProfileDropdown.send.amount': string
	'platform.ProfileDropdown.CoNETCash.amountError': string

	'platform.ProfileDropdown.history.type.send': string
	'platform.ProfileDropdown.history.type.receive': string
	'platform.ProfileDropdown.history.gas.total': string
	'platform.ProfileDropdown.history.timestamp': string
	'platform.ProfileDropdown.history.sender': string
	'platform.ProfileDropdown.history.CoNETCash.mint': string

	'platform.ProfileDropdown.send.estimatedGas': string
	'platform.ProfileDropdown.Tablable.Assets': string
	'platform.ProfileDropdown.Tablable.Activity': string

	'platform.ProfileDropdown.nodelist.title': string
	'platform.ProfileDropdown.conet_si.nodes.title': string
	'platform.ProfileDropdown.conet_si.nodes.detail': string
	'platform.ProfileDropdown.conet_si.nodes.mining': string
	'platform.ProfileDropdown.conet_si.nodes.maxConfirm': string
	'platform.ProfileDropdown.CoNET.website': string
	

	'platform.ProfileDropdown.nodelist.selectEntryNode': string
	'platform.ProfileDropdown.nodelist.entryNodeTitle': string
	'platform.ProfileDropdown.nodelist.entryNodeditail': string
	'platform.ProfileDropdown.nodelist.registersRecipientDetail': string
	'platform.ProfileDropdown.nodelist.registersRecipientInfo1': string
	'platform.ProfileDropdown.nodelist.registersRecipientInfo2': string
	'platform.ProfileDropdown.nodelist.registersRecipientTitle': string
	'platform.ProfileDropdown.nodelist.registersPayment.setupTitile': string
	'platform.ProfileDropdown.nodelist.registersPayment.detail1': string
	'platform.ProfileDropdown.nodelist.registersPayment.detail2': string
	'platform.ProfileDropdown.nodelist.registersPayment.insufficient_conetcash_balance': string
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationAmount': string
	'platform.ProfileDropdown.nodelist.registersPayment.authorizationInformation': string
	'platform.ProfileDropdown.nodelist.registersPayment.CoNETCashBalance': string
	'platform.ProfileDropdown.nodelist.registersPayment.registersRecipientloading': string
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished1': string
	'platform.ProfileDropdown.nodelist.registersPayment.registersfinished2': string

	'platform.ProfileDropdown.nodelist.CoNET.SI': string
	'platform.ProfileDropdown.nodelist.registersDate': string
	'platform.ProfileDropdown.nodelist.keep': string
	'platform.ProfileDropdown.nodelist.storagePrice': string
	'platform.ProfileDropdown.nodelist.outboundPrice': string
	'platform.ProfileDropdown.nodelist.country': string
	'platform.ProfileDropdown.nodelist.ipAddress': string

	'platform.ProfileDropdown.nodelist.about': string
	'platform.ProfileDropdown.nodelist.about1': string
	'platform.ProfileDropdown.nodelist.about2': string


	'platform.app.seguro.messenger.panels.addContact.info': string
	'platform.app.seguro.messenger.panels.addContact.firstMessage': string

	'platform.app.browser.search.placeholder': string
	'platform.app.browser.tab.newTabName': string

	'platform.country.de': string
	'platform.country.us': string
	'platform.country.gb': string
	'platform.country.es': string

	'platform.ProfileDropdown.CurrentProfileItem.AnonymousUser': string

	'tabnavigator.guide.title': string

	'tabnavigator.appStore.title': string
}

export type MessagesByLocale = Record<Locale, Messages>
