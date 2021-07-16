const { createClientServer } = require('./client-server')
const { createWindow } = require('./window')

const isDevelopmentMode = process.env.NODE_ENV === 'development'

;(async () => {
    console.log('booting the application')

    let clientServerPort

    if (isDevelopmentMode) {
        clientServerPort = 3000
        console.log(`client server is on port ${clientServerPort}`)
    }
    else {
        console.log('creating a client server')
        clientServerPort = (await createClientServer()).clientServerPort
    }

    console.log('creating an electron window')
    await createWindow({ clientServerPort })

    console.log('application booted')
})()
