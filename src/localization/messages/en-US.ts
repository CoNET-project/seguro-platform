import {Messages} from '../types'

const en_US: Messages = {
    'main.greeting': 'Hello world!',
    'onboarding.selectLanguageTitle': 'Select your language',
    'onboarding.selectLanguageSubtitle': 'Please select your language for Seguro Platform. ' +
        'You will be able to change this later in settings.',
    'onboarding.setPasscodeTitle': 'Create Passcode',
    'onboarding.setPasscodeSubtitle': 'Enter a minimum 6 character passcode',
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
    'onboarding.verification.error.authError': 'Please update your Seguro software!',

    'onboarding.verification.modal.button.retry': 'Retry',
    'onboarding.verification.modal.button.update': 'Update',
    'onboarding.verification.modal.button.newCode': 'Enter new verification code',

    'onboarding.setup.create.container': 'Creating container...',
    'onboarding.setup.verify.code': 'Verifying invitation code...',
    'onboarding.setup.enter.button': 'Enter Seguro',

    'onboarding.carousel.title.seguro-platform': 'CoNET Platform',
    'onboarding.carousel.title.no-ip-tracking': 'No IP tracking',
    'onboarding.carousel.title.decentralized': 'Decentralized',
    'onboarding.carousel.title.anonymity': 'Anonymity',
    'onboarding.carousel.content.seguro-platform': 'Seguro solves the problem of data leaks and unsecured information through innovative technology.',
    'onboarding.carousel.content.no-ip-tracking': 'You can access Seguro from anywhere without worrying about IP tracking or Firewalls.',
    'onboarding.carousel.content.decentralized': 'Seguro runs on a decentralized system, meaning even we don\'t have access to your information.',
    'onboarding.carousel.content.anonymity': 'Be as public or anonymous as you want with Seguro, no personal information required.',

    'passcodeInput.incorrect.error': 'Incorrect passcode, please try again!',
    'passcodeInput.confirm.error': 'Passcode not correct, please try again!',
    'passcodeInput.invalidLength': 'Passcode requires minimum 6 numbers',

    'button.next': 'Next',
    'button.back': 'Back',
    'button.unlock': 'Unlock',

    'unlock.title': 'Enter your CoNET Platform passcode',

    'platform.unlock.button.forgot': 'Forgot your passcode?',
    'platform.dialog.delete.message': 'Deleting your container is a permanent action, you will need to create a new passcode with a new invitation code.',
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

	'tabnavigator.guide.title': 'Welcome to CoNET Platform',
	'globalBar.application.SeguroMessage': 'Seguro Messenger',
	'globalBar.application.home': 'CoNET Platform',

	'globalBar.application.AppStore': 'CoNET APP Store',

	'tabnavigator.appStore.title': 'Welcome to CoNET App Store'

}

export default en_US
