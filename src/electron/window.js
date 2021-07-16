const { app, BrowserWindow } = require('electron')

const createWindow = async ({
    clientServerPort
}) => {
    await app.whenReady()

    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        show: false
    })

    const clientServerUrl = `http://localhost:${clientServerPort}`

    try {
        console.log(`loading client index from ${clientServerUrl}`)
        await window.loadURL(clientServerUrl)
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
}

module.exports = {
    createWindow
}
