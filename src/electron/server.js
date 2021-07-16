const express = require('express')
const path = require('path')

const staticFilePath = path.join(__dirname, '../assets/client')

const createClientServer = () => {
    return new Promise((resolve) => {
        const app = express()
        app.use(express.static(staticFilePath))

        const listen = ({
            port,
            attemptsLeft = 10
        }) => {
            console.log(`attempting to listen on port ${port}`)

            const server = app.listen(port, () => {
                console.log(`listening on port ${port}`)

                resolve({
                    clientServerPort: port
                })
            })

            server.on('error', (error) => {
                if (error.code !== 'EADDRINUSE') {
                    console.error('something went wrong')
                    process.exit(1)
                }
                console.error(`port ${port} is in use`)

                if (attemptsLeft === 0) {
                    console.error(`no attempts left`)
                    process.exit(1)
                }

                listen({
                    port: port + 1,
                    attemptsLeft: attemptsLeft - 1
                })
            })
        }

        listen({
            port: 10000
        })
    })
}

module.exports = {
    createClientServer
}
