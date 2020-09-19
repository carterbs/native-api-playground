import { contextBridge, ipcMain, ipcRenderer } from "electron";
import { Rectangle } from "electron/common";
import { API_CHANNELS } from "../common/API_Channels";

const requestSetShape = async (rects: Rectangle[]) => {
	return await ipcRenderer.invoke(API_CHANNELS.REQUEST_SET_SHAPE, rects)
}

const getMonitorInfo = async () => {
	return await ipcRenderer.invoke(API_CHANNELS.REQUEST_MONITOR_INFO);
}
contextBridge.exposeInMainWorld(
	'testAPI',
	{
		requestSetShape,
		getMonitorInfo
	}
)