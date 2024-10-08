const { app, BrowserWindow, globalShortcut } = require("electron");
const path = require("node:path");
let win: any = null;

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      webSecurity: false,
    },
  });
  win.loadFile("../index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

//在ready事件里
app.on("ready", async () => {
  globalShortcut.register("CommandOrControl+Shift+i", function () {
    win.webContents.openDevTools();
  });
  createWindow();
});

const gotTheLock = app.requestSingleInstanceLock();
if (!gotTheLock) {
  // 已经有一个实例在运行，退出当前实例
  app.quit();
} else {
  // 监听第二个实例被运行时
  app.on("second-instance", () => {
    // 当有第二个实例被运行时，激活之前的实例并将焦点置于其窗口
    if (win) {
      if (win.isMinimized()) win.restore();
      win.focus();
    }
  });
}
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'