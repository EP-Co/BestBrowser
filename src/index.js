import {
	app,
	BrowserWindow
} from 'electron';
import { type } from 'os';

if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
	app.quit();
}

let mainWindow;
// Change to "windows" for Windows style, change to "mac" for MacOS style.
const version = "linux"

const createWindow = () => {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 600,
	});

	mainWindow.loadURL(`file://${__dirname}/templates/${type}.html`);

	mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {
		mainWindow = null;
	});
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});