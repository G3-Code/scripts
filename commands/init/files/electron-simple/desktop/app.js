'use strict'

/**
 * Dependencies
 */

const electron = require('electron')

/**
 * Constants
 */

const desktop_app = electron.app
const BrowserWindow = electron.BrowserWindow
const title = "Electron Simple"

/**
 * Protect main_window from garbage collection.
 */

let main_window = null

/**
 * Define function to create window.
 */

function create_window() {
  const { width, height } = electron.screen.getPrimaryDisplay().workAreaSize

  let main_window = new BrowserWindow({
    title: title,
    width: width / 2,
    height: height,
    webPreferences: {
      nodeIntegration: true
    }
  })

  main_window.loadURL(`file://${__dirname}/../client/dist/index.html`)
}

/**
 * Mount handler for Electron 'ready' event.
 */

desktop_app.on("ready", create_window)
