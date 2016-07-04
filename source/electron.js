const electron = require('electron');
const {app} = electron;

const {BrowserWindow} = electron;

let win;

global.sharedObject = {args: process.argv}

function createWindow() {

  var windowConfig = {};

  if (process.argv[2] === 'mirror') {
    windowConfig.title = "Magic Mycroft Mirror";
    windowConfig.fullscreen = true;
    windowConfig.kiosk = true;
  } else {
    //windowConfig.frame = false;
    windowConfig.width = 500;
    windowConfig.height = 700;
    windowConfig.title = "Mycroft UI v0.0";
  }


  win = new BrowserWindow( windowConfig );

  win.loadURL('file://'+__dirname+'/index.html');

};

app.on('ready', createWindow);
