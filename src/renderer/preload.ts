import { contextBridge, ipcMain, ipcRenderer } from "electron";
import { Rectangle } from "electron/common";
import { API_CHANNELS } from "../common/API_Channels";

const requestSetShape = async (rects: Rectangle[]) => {
	await ipcRenderer.invoke(API_CHANNELS.REQUEST_SET_SHAPE, rects)
}

contextBridge.exposeInMainWorld(
	'testAPI',
	{
		requestSetShape
	}
)