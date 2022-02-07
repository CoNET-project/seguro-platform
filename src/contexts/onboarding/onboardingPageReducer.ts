import logger from "../../utilities/logger/logger";
import {OnboardingActions} from "./onboardingActions";
import {SeguroNetworkStatus} from "@conet-project/seguro-worker-lib/build/workerBridge";

export type PageIds = 'language' | 'setPasscode' | 'confirmPasscode' | 'verification' | 'settingUp'

type AnimateDirection = -1 | 1

type CurrentPage = [PageIds, AnimateDirection]

export type VerificationStates = SeguroNetworkStatus | 'FAILURE' | null

export type State = {
    currentPage: CurrentPage,
    existingPages: Array<PageIds>,
    onboardingPageData: {
        passcode: string,
        confirmPasscode: string,
        verificationCode?: string,
        verificationCodeError?: boolean,
        verificationStatus?: VerificationStates
    }
}

export const onboardingPageReducer = (state: State, action: OnboardingActions): State => {
    const getPage = (direction: 'next' | 'previous'): State => {
        const [currentPageId] = state.currentPage
        const pageIndex = state.existingPages.indexOf(currentPageId)
        if (direction === 'next') {
            if (pageIndex === state.existingPages.length - 1) {
                return state
            }
            const nextPageId = state.existingPages[pageIndex + 1]
            return {
                ...state,
                currentPage: [nextPageId, 1]
            }
        }
        if (direction === 'previous') {
            if (pageIndex === 0) {
                return state
            }
            const previousPageId = state.existingPages[pageIndex - 1]
            return {
                ...state,
                currentPage: [previousPageId, -1]
            }
        }
        return state;
    }

    switch (action.type) {
        case 'nextPage':
            return getPage('next')
        case 'previousPage':
            return getPage('previous')
        case 'navigateToPage':
            const [currentPageId] = state.currentPage
            const newPage = action.payload?.pageId || currentPageId
            logger.log('onboardingPageReducer.ts', 'onboardingPageReducer navigateToPage:', newPage)
            const direction = state.existingPages.indexOf(currentPageId) < state.existingPages.indexOf(newPage) ? 1 : -1
            return {
                ...state,
                currentPage: [newPage, direction]
            }
        case 'setPasscode':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    passcode: action.payload
                }
            }
        case 'setConfirmPasscode':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    confirmPasscode: action.payload
                }
            }
        case 'setVerificationCode':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    verificationCode: action.payload
                }
            }
        case 'setVerificationCodeError':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    verificationCodeError: action.payload
                }
            }
        case 'setVerificationStatus':
            return {
                ...state,
                onboardingPageData: {
                    ...state.onboardingPageData,
                    verificationStatus: action.payload
                }
            }
        default:
            return state;
    }
}