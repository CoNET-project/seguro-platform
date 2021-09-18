import {Messages} from '../types'

const en_US: Messages = {
    'main.greeting': 'Hello world!',
    'onboarding.selectLanguageTitle': 'Select your language',
    'onboarding.selectLanguageSubtitle': 'Select your language...',
    'onboarding.setPasscodeTitle': 'Create Passcode',
    'onboarding.setPasscodeSubtitle': 'Enter a minimum 6 character passcode',
    'onboarding.confirmPasscodeTitle': 'Confirm Passcode',

    'onboarding.verificationTitle': 'Verify Account',
    'onboarding.verificationInputLabel': 'Enter your invitation code',
    'onboarding.verificationText':
        'Please enter the invitation code you have received to begin the verification process. ' +
        'This invitation code ensures that the quality of experience you have on the Seguro Platform is the best.',
    'onboarding.verification.connecting': 'Connecting to IMAP...',
    'onboarding.verification.sending': 'Sending verification request...',
    'onboarding.verification.waiting': 'Waiting on verification response...',
    'onboarding.verification.finished': 'Verification complete!',

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

    'onboarding.carousel.title.seguro-platform': 'Seguro Platform',
    'onboarding.carousel.title.no-ip-tracking': 'No IP tracking',
    'onboarding.carousel.title.decentralized': 'Decentralized',
    'onboarding.carousel.title.anonymity': 'Anonymity',
    'onboarding.carousel.content.seguro-platform': 'Seguro solves the problem of data leaks and unsecured information through innovative technology.',
    'onboarding.carousel.content.no-ip-tracking': 'Using innovative email tunnel technology, you can access Seguro from anywhere without worrying about IP tracking or Firewalls.',
    'onboarding.carousel.content.decentralized': 'Seguro runs on a decentralized system, meaning even we don\'t have access to your information.',
    'onboarding.carousel.content.anonymity': 'Be as public or anonymous as you want with Seguro, no personal information required.',

    'passcodeInput.incorrect.error': 'Incorrect passcode, please try again!',
    'passcodeInput.confirm.error': 'Passcode not correct, please try again!',
    'passcodeInput.invalidLength': 'Passcode requires minimum 6 numbers',

    'button.next': 'Next',
    'button.back': 'Back',

    'unlock.title': 'Enter your Seguro passcode',

    'keypad.cancel': 'Cancel',
    'keypad.unlock': 'Unlock'
}

export default en_US
