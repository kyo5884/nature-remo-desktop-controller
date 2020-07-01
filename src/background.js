'use strict'

/* global __static */

import { protocol } from 'electron'
// import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'

import { menubar } from 'menubar'

import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
// let win

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } },
])

const appearance = () => {
  if (process.platform === 'darwin')
    return {
      transparent: true,
      vibrancy: 'menu',
      backgroundColor: '#00000000',
    }
  else return {}
}

const mb = menubar({
  icon: path.join(
    __static,
    process.platform === 'win32' ? 'icons/icon.ico' : 'icons/16x16.png'
  ),
  index: process.env.WEBPACK_DEV_SERVER_URL,
  browserWindow: {
    ...appearance(),
    width: 320,
    height: 720,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      enableRemoteModule: true,
    },
  },
})
mb.on('ready', async () => {
  console.log('menubar app started')
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
})
mb.on('after-create-window', () => {
  if (isDevelopment) {
    mb.window.openDevTools()
    mb.window.setAlwaysOnTop(true)
  }
})

// function createWindow() {
//   // Create the browser window.
//   win = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       // Use pluginOptions.nodeIntegration, leave this alone
//       // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
//       nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
//     },
//   })

//   if (process.env.WEBPACK_DEV_SERVER_URL) {
//     // Load the url of the dev server if in development mode
//     win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
//     if (!process.env.IS_TEST) win.webContents.openDevTools()
//   } else {
//     createProtocol('app')
//     // Load the index.html when not in development
//     win.loadURL('app://./index.html')
//   }

//   win.on('closed', () => {
//     win = null
//   })
// }

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', data => {
      if (data === 'graceful-exit') {
        mb.app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      mb.app.quit()
    })
  }
}
