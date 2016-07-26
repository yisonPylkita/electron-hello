const electron = require('electron');
const App = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

App.on('ready', () => {
  win = new BrowserWindow({width: 800, height: 600, title: "Hello"});
  win.loadURL(`file://${__dirname}/index.html`);
  // win.webContents.openWebTools();
  win.on('closed', () => {
    win = null;
  });
});

App.on('window-all-closed', () => {
  App.quit();
});
