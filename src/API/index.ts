
import {v4} from 'uuid'
import {logger} from '../components/App/logger'
import useAppState from "../store/appState/useAppState"

type WorkerCommandErrorType = 'NOT_READY'|'INVALID_DATA'|
'NO_UUID'|'INVALID_COMMAND'|'OPENPGP_RUNNING_ERROR'|
'PouchDB_ERROR'|'GENERATE_PASSCODE_ERROR'|'FAILURE'|'COUNTDOWN'

type WorkerCommandType = 'READY'|'encrypt_TestPasscode'|'getCONETBalance'|'getRegiestNodes'|
'encrypt_createPasscode'|'encrypt_lock'|'encrypt_deletePasscode'|'storePreferences'|
'newProfile'|'storeProfile'|'invitation'|'WORKER_MESSAGE'|
'isAddress'|'getFaucet'|'syncAsset'|'sendAsset'|'getUSDCPrice'|
'buyUSDC'|'mintCoNETCash'|'getSINodes'|'getRecipientCoNETCashAddress'|
'getUserProfile'|'sendMessage'|'setRegion'

export type WorkerCallStatus = 'SUCCESS' | 'NOT_READY' | 'UNKNOWN_COMMAND' |
'TIME_OUT' | 'SYSTEM_ERROR'
export type PasscodeStatus = 'LOCKED' | 'UNLOCKED' | 'NOT_SET'
export type ColorTheme = 'LIGHT' | 'DARK'
export type Language = 'en-CA' | 'fr-CA' | 'ja-JP' | 'zh-CN' | 'zh-TW'
export type secondVerificationValume = '1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'
export type SeguroNetworkStatus = WorkerCallStatus | 
'TIMEOUT_EMAIL_SERVER' | 'TIMEOUT_SEGURO_NETWORK' |
'NO_INTERNET' | 'CONNECTING_ACCESS_POINT' |
'CONNECTING_SEGURO_NETWORK'|'INIT'|'NOT_STRIPE'|
'LOCAL_SERVER_ERROR'|'INVITATION_CODE_ERROR'|
'SEGURO_ERROR'|'UNKNOW_ERROR'|'SEGURO_DATA_FORMAT_ERROR'

/*eslint-disable */
export interface profile {
    bio: string
    nickname: string
    keyID?: string
    tags: string[]
    alias: string
    isPrimary: boolean
    profileImg: string
}

export type passcodeUnlockStatus = 
    [status: 'FAILURE' | 'COUNTDOWN' | WorkerCallStatus, payload?: ContainerData]

export type SINodesSortby = 'CUSTOMER_REVIEW'|'TOTAL_ONLINE_TIME'|
	'STORAGE_PRICE_LOW'|'STORAGE_PRICE_HIGH'|'OUTBOUND_PRICE_HIGH'|'OUTBOUND_PRICE_LOW'
	
export type SINodesRegion = 'USA'|'UK'|'ES'|'DE'

export interface ContainerData {
    method: {
        testPasscode?: (
            passcode: string,
            progressCallback: ( progressInteger: string, progressFractional: string ) => void
        ) => Promise <passcodeUnlockStatus>
        createPasscode?: (
            passcode: string,
            progressCallback: ( progressInteger: string, progressFractional: string ) => void
        ) => Promise <[WorkerCallStatus, ContainerData?]>
        deletePasscode?: () => Promise <[WorkerCallStatus, ContainerData?]>
        lock?: () => Promise <[WorkerCallStatus, ContainerData?]>
        storePreferences?: () => Promise <[WorkerCallStatus, ContainerData?]>
        newProfile?: (profile: profile) => Promise<StartWorkerResolve>
        storeProfile?: () => Promise<StartWorkerResolve>
		isAddress?: (address: string) => Promise <StartWorkerResolve>
		getFaucet?: (address: string) => Promise <StartWorkerResolve>
		syncAsset?: () => Promise<StartWorkerResolve>
		sendAsset?: (sendAddr: string, total: number, toAddr: string, asset: string ) => Promise<StartWorkerResolve>
		getUSDCPrice?: () => Promise<StartWorkerResolve>
		buyUSDC?: (conetVal: number, keyID: string) => Promise<StartWorkerResolve>
		mintCoNETCash?: (usdcVal: number, keyID: string ) => Promise<StartWorkerResolve>
		getSINodes?: (sortby: SINodesSortby, region: SINodesRegion) => Promise < StartWorkerResolve >
		getRecipientCoNETCashAddress?: (amount: number, callback: any) => Promise<StartWorkerResolve>
		getUserProfile?: (keyID: string) => Promise<StartWorkerResolve>
		sendMessage?: (keyAddress: string, message: string ) => Promise<StartWorkerResolve>
		listening?: (data: any) => void
    }
    status: PasscodeStatus
    data: any
    preferences: any
}

export interface WorkerCommand {
    cmd: WorkerCommandType
    data?: any
    uuid: string
    err?: WorkerCommandErrorType
}

export type regionType = {
    us: boolean,
    uk: boolean,
    ge: boolean,
    sp: boolean,
    fr: boolean
}

export type CreatePasscodeResolve = 
    [status: WorkerCallStatus, updateProgress?: ( percentage: number ) => void ]

export type StartWorkerResolve = [WorkerCallStatus, ContainerData?]
type StartWorkerResolveForAPI = [WorkerCallStatus, any []]

const channelWrokerListenName = 'toMainWroker'


export const postUrl: (url: string, data: string, post?: boolean) => Promise<any> = (url, data, post = true) => {
    return new Promise( async (resolve, reject )=> {
        const timeout = 1000
        const controller = new AbortController()
        const id = setTimeout(() => controller.abort(), timeout)
        let status:null|boolean  = null

        const opt: RequestInit = {
            method: post ? "POST" : 'GET',
            headers: {
                Accept: "text/event-stream",
                "Content-Type": 'application/json;charset=UTF-8'
            },
            cache: 'no-store',
            referrerPolicy: 'no-referrer',
            signal: controller.signal
        }
        if (post) {
            opt.body = data
        }
        await fetch (url, opt)
        .then ( async res => {
            
            if (!res.ok) {
                console.log (`postUrl return resolve (false) res.status = [${res.status}]`)
                return res.status
            }
            
            status = true
            let returnData = res.text.length ? await res.text(): ''
            if (res.headers.get('content-type')?.includes('application/json')) {
                returnData = await res.json()
            
                if (!returnData) {
                    return true
                }
            }
            
            console.log (`postUrl status = [${res.status}] returnData = `, returnData)
            console.log (`postUrl return JSON data`, returnData)
            return returnData
            
        })
        .then(_data => {
            return resolve (_data)
        })
        .catch ((ex) => {
            return resolve (status)
        })

        clearTimeout(id)
    })
}


export const postPasscode: (passcode: string) => Promise<null|boolean|WorkerCommand> = async (passcode) => {
    return await postUrl(`http://localhost:3001/loginRequest`, JSON.stringify({data:passcode}))
}

export const testLocalServer = async () => {
    const ver = '0.0.6'
    const result = await postUrl(`http://localhost:3001/ver`, '', false)
    if (result) {
        if (result.ver === ver) {
            return true
        }
        return false
    }
    console.log (`[${!result}]`)
    console.log (result? 'result true ': 'result false')
    return null
}

const postMessage = (cmd: WorkerCommand, resolve:  (value: StartWorkerResolveForAPI | PromiseLike<StartWorkerResolveForAPI>) => void) => {
    
    const channel = new BroadcastChannel(channelWrokerListenName)
    const listenChannel = new BroadcastChannel(cmd.uuid)

    const kk = (e: any) => {
        listeningChannel(e.data, cmd.uuid, resolve)
    }

    const listeningChannel = (data: any, uuid: string, resolve:  (value: StartWorkerResolveForAPI | PromiseLike<StartWorkerResolveForAPI>) => void) => {
        let cmd: WorkerCommand
        
        try{
            cmd = JSON.parse(data)
        } catch (ex) {
            //  'searchPage.tsx', 'checkLinkedUrl ifram is NULL' 
            return logger ('class CONET_Platfrom_API', `listeningChannel JSON.parse(data) Error`)
        }

        listenChannel.close()

        if (cmd.err) {
            return resolve(['SYSTEM_ERROR', cmd.data])
        }
        
        return resolve(['SUCCESS', cmd.data])
    }
    
    listenChannel.addEventListener('message', kk)
    channel.postMessage(JSON.stringify(cmd))
    channel.close()
}

export const faucet: () => Promise < StartWorkerResolveForAPI > = () => {
    return new Promise( resolve => {
        const cmd: WorkerCommand = {
            cmd: 'getFaucet',
            data: [],
            uuid: v4()
        }
        return postMessage (cmd, resolve)
    })
}

export const getCONETBalance: () => Promise < StartWorkerResolveForAPI > = () => {
    return new Promise( resolve => {
        const cmd: WorkerCommand = {
            cmd: 'getCONETBalance',
            uuid: v4()
        }
        return postMessage (cmd, resolve)
    })
}

export const setRegion: (region: regionType) => Promise < StartWorkerResolveForAPI > = (region: regionType) => {
    return new Promise( resolve => {
        const cmd: WorkerCommand = {
            cmd: 'setRegion',
            uuid: v4(),
            data: [region]
        }
        return postMessage (cmd, resolve)
    })
}

export const getRegiestNodes : () => Promise < StartWorkerResolveForAPI > = () => {
    return new Promise( resolve => {
        const cmd: WorkerCommand = {
            cmd: 'getRegiestNodes',
            uuid: v4(),
            data: []
        }
        return postMessage (cmd, resolve)
    })
}

export const createPasscode : (passcord: string, local: string) => Promise < StartWorkerResolveForAPI > = (passcord: string, local: string) => {
    return new Promise( resolve => {
        
        const cmd: WorkerCommand = {
            cmd: 'encrypt_createPasscode',
            uuid: v4(),
            data: [passcord, local]
        }
        return postMessage (cmd, resolve)
    })
}

export const encrypt_deletePasscode : () => Promise < StartWorkerResolveForAPI > = () => {
    return new Promise( resolve => {
        
        const cmd: WorkerCommand = {
            cmd: 'encrypt_deletePasscode',
            uuid: v4(),
            data: []
        }
        return postMessage (cmd, resolve)
    })
}


export const checkLocaldemond: () => Promise < StartWorkerResolveForAPI > = () => {
    return new Promise(resolve => {

    })
}



