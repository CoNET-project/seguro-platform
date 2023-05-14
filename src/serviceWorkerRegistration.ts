import logger from './utilities/logger'

const isLocalhost = Boolean (
	window.location.hostname === 'localhost' ||
		// [::1] is the IPv6 localhost address.
		window.location.hostname === '[::1]' ||
		// 127.0.0.0/8 are considered localhost for IPv4.
		window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
)

const registerValidSW = (swUrl: string) => {
	navigator.serviceWorker
		.register(swUrl)
		.then((registration) => {
			registration.onupdatefound = () => {
				const installingWorker = registration.installing
				if (installingWorker == null) {
					return logger (`registerValidSW registration.onupdatefound registration.installin == null`)
				}
				installingWorker.onstatechange = () => {
					if (installingWorker.state === 'installed') {
						logger (`registerValidSW registration.onupdatefound installingWorker.state === 'installed'`)
						if (navigator.serviceWorker.controller) {
							// At this point, the updated precached content has been fetched,
							// but the previous service worker will still serve the older
							// content until all client tabs are closed.
							return logger (
								'New content is available and will be used when all ' +
								'tabs for this page are closed. See https://cra.link/PWA.'
							)
						}
						// At this point, everything has been precached.
						// It's the perfect time to display a
						// "Content is cached for offline use." message.
						logger ('Content is cached for offline use.')
						
					}
				}
			}
		})
		.catch((error) => {
			console.error('Error during service worker registration:', error)
		})
}

const checkValidServiceWorker = (swUrl: string) => {
	// Check if the service worker can be found. If it can't reload the page.
	fetch(swUrl, {
		headers: { 'Service-Worker': 'script' },
	})
	.then((response) => {
		// Ensure service worker exists, and that we really are getting a JS file.
		const contentType = response.headers.get('content-type')
		if (
			response.status === 404 ||
			(contentType != null && contentType.indexOf('javascript') === -1)
		) {
			// No service worker found. Probably a different app. Reload the page.
			logger (`############### No service worker found. Probably a different app. Reload the page.`)
			return navigator.serviceWorker.ready.then((registration) => {
				registration.unregister().then(() => {
					window.location.reload()
				})
			})
		}
			// Service worker found. Proceed as normal.
		logger (`############### Service worker found. Proceed as normal registerValidSW(${swUrl}).`)
		registerValidSW(swUrl)
		
	})
	.catch(() => {
		console.log('No internet connection found. App is running in offline mode.');
	})
}

export const register = () => {
	
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {

		const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href)

		if (publicUrl.origin !== window.location.origin) {
			// Our service worker won't work if PUBLIC_URL is on a different origin
			// from what our page is served on. This might happen if a CDN is used to
			// serve assets; see https://github.com/facebook/create-react-app/issues/2374
			return logger(`publicUrl.origin [${publicUrl.origin}] !== window.location.origin [${window.location.origin}] SERVICE CAN'T STARTUP!`)
		}
		logger(`process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator TRUE`)

		return window.addEventListener('load', () => {
			const swUrl = `${process.env.PUBLIC_URL}/sw.js`

			if (isLocalhost) {
				// This is running on localhost. Let's check if a service worker still exists or not.
				logger (`sw isLocalhost doing checkValidServiceWorker()`)
				checkValidServiceWorker(swUrl)

				// Add some additional logging to localhost, pointing developers to the
				// service worker/PWA documentation.


				return navigator.serviceWorker.ready.then(() => {
					logger (`sw isLocalhost doing checkValidServiceWorker(${swUrl})`)
				})
			}
			// Is not localhost. Just register service worker
			registerValidSW(swUrl)
			
		})

		
	}
	logger(`process.env.NODE_ENV === 'production' [${process.env.NODE_ENV === 'production'}] && 'serviceWorker' in navigator [${'serviceWorker' in navigator}] `)
}
