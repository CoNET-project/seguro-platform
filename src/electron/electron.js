const { createClientServer } = require('./server')
const { createWindow } = require('./window')

const isDevelopmentMode = process.env.NODE_ENV === 'development'

;(async () => {
    console.log('application booting')

    let clientServerPort = 3000

    if (isDevelopmentMode) {
        console.log(`connecting to client dev server on port ${clientServerPort}`)
    }
    else {
        console.log('creating client server')
        clientServerPort = (await createClientServer()).clientServerPort
    }

    console.log('creating electron window')
    await createWindow({ clientServerPort })
    console.log('created electron window')

    console.log('application booted')
})()
