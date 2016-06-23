const electron = require('electron');
const {app} = electron;

const {BrowserWindow} = electron;

let win;

function createWindow() {

  win = new BrowserWindow(
    {
      width: 800,
      height: 800,
      //frame: false,
      //transparent: true,
      title: "Mycroft UI v0.0",
      //fullscreen: true
    }
  );

  win.loadURL('file://'+__dirname+'/index.html');
};

app.on('ready', createWindow);
