/**
 * 		npx create-react-app @conet-project/conet-platform --template cra-template-pwa-typescript
 */


declare const self: ServiceWorkerGlobalScope
import {v4} from 'uuid'
import {Buffer} from 'buffer'
import { inspect } from 'util'
type WorkerCommand =
	'urlProxy'
	
type IWorker_command = {
	cmd: WorkerCommand
	data: any[]
	uuid: string
	err?: string
}


const logger = (...argv: any ) => {
    const date = new Date ()
    const dateStrang = `%c [Seguro-worker INFO ${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }:${ date.getMilliseconds ()}]`
	
    return console.log ( dateStrang, 'color: #dcde56',  ...argv)
}

const err_response_network_err = () => new Response('',{ status: 599, statusText: "NetworkConnectTimeoutError!" })
const err_response_404 = () => new Response('',{ status: 404, statusText: "File Not Found!" })

interface clientPool {
	clientId: {
		resultingClientId: string
		clientId: string
	}
	siteOrigin: URL
}

interface workPromise {
	cmd: IWorker_command
	uuid: string
	_promise: (value: IWorker_command | PromiseLike<IWorker_command>) => void
}

interface urlData {
	href: string
	port: number
	method: string
	json: string
}
const siteMatch = /webpack\.config\.js|robots\.txt|service-worker\.js(\..*)?|service-worker.jsrobots\.txt|manifest\.json|logo\d{3}\.png|index\.html|encrypt\.js|asset\-manifest\.json|(^\/s|^s)tatic\/|favicon\.ico$|sw\.js|encrypt\.js$|utilities\/(Pouchdb|seguroSetup|Buffer|openpgp|UuidV4|Pouchdb|PouchdbFind|PouchdbMemory|scrypt|async|forge.all|jszip|utilities|web3|generatePassword|storage|seguroSetup])\.(min\.)?(js|js\.map)$/i
const backGroundPool: workPromise[] = []

const listenChannel = new BroadcastChannel('toServiceWroker')
listenChannel.addEventListener('message', e => {
	const cmd: IWorker_command = JSON.parse(e.data)
	switch (cmd.cmd) {
		case 'urlProxy': {
			const index = backGroundPool.findIndex( n => {
				return (n.cmd.uuid == cmd.uuid)
			})
			if (index < 0) {
				return logger (`Service Worker ERROR listenChannel [toServiceWroker] got unknow UUID message!`, cmd)
			}
			const jobQueue = backGroundPool[index]
			return jobQueue._promise (cmd)
		}
		default: {
			logger (`Service Worker ERROR listenChannel [toServiceWroker] got unknow message!`, cmd)
		}
	}
})
const clientDomainPool: clientPool[] = []
class ConetWorker {
	
	private channel = new BroadcastChannel('toMainWroker')

	private sendUrlToWorker: (urlData: urlData, headers: Object) => Promise<IWorker_command> = (url, headers) => {
		return new Promise ( resolve => {
			const cmd: IWorker_command = {
				cmd: 'urlProxy',
				uuid: v4(),
				data: [url, headers]
			}
			this.channel.postMessage(JSON.stringify(cmd))
			backGroundPool.push ({
				_promise: resolve,
				cmd,
				uuid: cmd.uuid
			})
		})
	}

	/**
	 * 			https://github.githubassets.com:8888/assets/chunk-ui_packages_webauthn-get-element_webauthn-get-element_ts-1afa9dfc8ee5.js
	 */
	
	private startRouter = () => {
		
		self.addEventListener( "fetch", async event => {
			let clientId = {
				resultingClientId: event.resultingClientId,
				clientId: event.clientId
			}
			
			const accessHref = event.request.url
			let reqUrl = accessHref.split('_/CoNET_proxyUrl/')[1]
			// const reqUrl = accessURL.searchParams.get ('CoNET_proxyUrl')
			
			// if (!reqUrl && !accessURL.search && siteMatch.test(accessURL.href) ) {
			// 	return logger (`*************************  [${ accessURL }]  Matched CoNET system skip Fetch ************************ ` )
			// }

			// if (event.clientId) {
			// 	clientId = event.clientId
			// 	logger (`clientId = event.clientId [${clientId}]`)
			// } else if (event.resultingClientId) {
			// 	clientId = event.resultingClientId
			// 	logger (`clientId = event.resultingClientId [${clientId}]`)
			// } else {
			// 	return logger (`************************* Event has no any ID! SKIP Fetch ************************ `)
			// }

			// let _index = -1
			
			
			// _index = clientDomainPool.findIndex (n => n.clientId === clientId )

			// if ( _index > -1) {
			// 	const _remoteUrl = clientDomainPool[_index].siteOrigin
			// 	/**
			// 	 * 			Start with absolute PATH
			// 	 */
				
			// 	remoteUrl =  new URL(_remoteUrl.origin + accessURL.pathname + accessURL.search)
			// 	logger (`************************* Start with absolute PATH `)
			// 	logger (remoteUrl)
			// 	logger (`************************* Start with absolute PATH `)

			// } else {
			// 	if (!reqUrl) {
			// 		logger (`************************* none reqUrl Errror !************************ `)
			// 		logger (clientDomainPool)
			// 		logger (accessURL)
			// 		return logger (`************************* none reqUrl Errror !************************ `)
			// 	}
			// 	remoteUrl = new URL (reqUrl)
			// 	/**
			// 	 * 			New Site Access
			// 	 */
			// 	logger (` clientId [${clientId}] ***************************** New Site Access ******************************`)
			// 	logger (remoteUrl.href)
			// 	logger (` clientId [${clientId}] ***************************** New Site Access ******************************`)
				
				
				
			// 	const site = {
			// 		clientId,
			// 		siteOrigin: remoteUrl
			// 	}
			// 	if ( _index > -1 ) {
			// 		clientDomainPool.splice(_index, 1)
			// 	}
				
			// 	clientDomainPool.push (site)
			// }
			let siteOrigin: URL

			if (!reqUrl) {
				const accessHrefUrl = new URL (accessHref)
				if (accessHrefUrl.hostname === location.host || !/openpgp\.online\/post$/.test(accessHref)) {
					if (siteMatch.test(accessHref)) {
						return logger (`*************************  [${ accessHref }]  Matched CoNET core system skip ************************ `)
					}
					const index = clientDomainPool.findIndex (n => n.clientId.resultingClientId === event.clientId )
					if (index < 0 ) {
						logger (`*************************  [${ accessHref }] Can't fing origin from clientDomainPool ************************ `)
						logger (clientId)
						return logger (`*************************  [${ accessHref }]  Can't fing origin from clientDomainPool ************************ `)
					}
					const remote = clientDomainPool[index]
					reqUrl = accessHref.replace ( location.origin, remote.siteOrigin.origin )
					siteOrigin = new URL (reqUrl)
				} else {
					return logger (`*************************  [${ accessHref }] CoNET-SI access skip! ************************ `)
				}
				
			} else {
				siteOrigin =  new URL (reqUrl)
				clientDomainPool.push ({clientId, siteOrigin})
			}

			return event.respondWith(( async () => {
				const cacheStore = await caches.match(event.request)
					if (cacheStore) {
						return cacheStore
					}
					const urlData: urlData = {
						href: reqUrl,
						method: event.request.method,
						//	@ts-ignore
						port: siteOrigin.port || /^http\:$/.test(siteOrigin.protocol) ? 80 : 443,
						json: ''
					}
					logger (`*********** clientId start Proxy *********************`)
					logger (urlData)
					logger (clientId)
					logger (`*********** clientId  start Proxy *********************`)
					const headers = event.request.headers
					const result: { [key: string]: string } = {}
					headers.forEach((v,k) => {
						result[k] = v
					})
					
					
					if ( urlData.method !== 'GET') {
						logger (`urlData.method !== GET`, urlData.method )
						if ( event.request?.body ) {
							urlData.json = await event.request.clone().text()
							logger (`event.request.clone().json()\n`, urlData.json)
						}
					}

					const cmd = await this.sendUrlToWorker(urlData, result)

					if (cmd.err) {
						return err_response_network_err()
					}
					const responseHeaders: { [key: string]: string } = cmd.data[1]
					logger (urlData)
					logger (cmd)


					const bb =cmd.data[0]
			
					const _body = Buffer.from(bb,'base64')
					const textBody = /text|javascript|css/i.test(responseHeaders['content-type'])
					// if (textBody) {
					// 	logger (bb)
					// }
					const body = new Blob(textBody ? [bb]: [_body], {type: responseHeaders['content-type']})

					const { status, statusText } = cmd.data[2]
					
					// logger (`status [${status}], statusText [${statusText}]`)
					
					
					return (new Response ( body, {
						status,
						statusText,
						headers: {...responseHeaders }
					}))
					
			})())
		})
	}

	constructor () {
		this.startRouter ()
	}
}

export default ConetWorker