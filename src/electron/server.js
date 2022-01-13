const express = require('express')
const path = require('path')
const seguroGateway = require('@conet-project/seguro-gateway')
// const getPort = require('get-port')

const staticFilePath = path.join(__dirname, '../../build')

const isDevelopmentMode = process.env.NODE_ENV === 'development'

const createClientServer = () => {
    return new Promise(async resolve => {
        const app = express()
        app.use(express.static(staticFilePath))

        const port = 3000
        console.log(`attempting to listen on port ${port}`)

        if (isDevelopmentMode) {
            const server = app.listen(
                port,
                'localhost',
                () => {
                    console.log(`listening on port ${port}`)
                    console.log('created client server')

                    resolve({
                        clientServerPort: port
                    })
            })

            server.on('error', (error) => {
                if (error.code !== 'EADDRINUSE') {
                    console.error('something went wrong')
                }
                console.error(`port ${port} is in use`)

                process.exit(1)
            })
        } else {
            seguroGateway.launchSeguroGateway(port, '')
        }

        resolve({
            clientServerPort: port
        })
    })
}

module.exports = {
    createClientServer
}
