import WebpackPwaManifest from 'webpack-pwa-manifest'

plugins: [
	new WebpackPwaManifest({
	name: 'CONET Platform',
	short_name: 'CONET',
	description: 'CONET Platform for Web3!',
	background_color: '#ffffff',
	crossorigin: 'CONET Technology INC.', //can be null, use-credentials or anonymous
	icons: [
		{
			src: path.resolve('src/assets/logo/favicon.ico'),
			sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
		},
		{
			src: path.resolve('src/assets/logo/512.png'),
			size: '512x512' // you can also use the specifications pattern
		},
		{
			src: path.resolve('src/assets/logo/512.png'),
			size: '512x512',
			purpose: 'maskable'
		}
	]
	})
]
module.exports = {
	devServer: {
		headers: {
			"Access-Control-Allow-Origin": "*",
			"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
			"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
			"Access-Control-Allow-Credentials": "true"
		},
	}
};