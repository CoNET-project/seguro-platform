const { app, BrowserWindow } = require('electron')

const isDevelopmentMode = process.env.NODE_ENV === 'development'

const createWindow = async ({
    clientServerPort
}) => {
    await app.whenReady()

    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        show: false
    })

    const mobileWindow = new BrowserWindow({
        width: 320,
        height: 640,
        show: false,
        // resizable: false
    })

    const clientServerUrl = `http://localhost:${clientServerPort}`

    try {
        console.log(`loading client index from ${clientServerUrl}`)
        await window.loadURL(clientServerUrl)
        if (isDevelopmentMode) {
            window.webContents.openDevTools()
            await mobileWindow.loadURL(clientServerUrl)
            mobileWindow.webContents.openDevTools()
        }
    } catch {
        console.error('failed to load client index')
        process.exit(1)
    }

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit()
        }
    })

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow({
                clientServerPort
            })
        }
    })

    window.maximize()
    window.show()

    if (isDevelopmentMode) {
        mobileWindow.show()
    }
}

module.exports = {
    createWindow
}
