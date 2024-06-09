const { app, BrowserWindow } = require('electron');
const path = require('path');

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadFile('src/index.html');

  // Uncomment the line below to open DevTools by default
  // mainWindow.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

// Set icons for different platforms
const iconPath = {
  win: path.join(__dirname, 'src/Web/icon.ico'), // Windows icon (ICO format)
  mac: path.join(__dirname, 'src/Web/icon.icns'), // macOS icon (ICNS format)
  linux: path.join(__dirname, 'src/Web/icon.png') // Linux icon (PNG format)
};

app.on('ready', () => {
  if (process.platform === 'darwin') {
    app.dock.setIcon(iconPath.mac); // Set icon for macOS dock
    app.setAboutPanelOptions({ applicationIcon: iconPath.mac }); // Set icon for macOS application menu's about panel
  }
});

module.exports = iconPath; // Export icon paths for use in other modules if needed
