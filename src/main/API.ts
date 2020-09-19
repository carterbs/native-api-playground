import { IpcMainInvokeEvent } from "electron/main"
import { BrowserWindow, ipcMain } from "electron"
import { API_CHANNELS } from "../common/API_Channels";
import { Rectangle } from "electron/common";

// only works on windows and linux. realized it after the fact.
const onSetShapeRequested = (event: IpcMainInvokeEvent, rects: Rectangle[]) => {
	const BW = BrowserWindow.fromWebContents(event.sender);
	BW.setShape(rects);
}
export const listenForAPIRequests = () => {
	ipcMain.handle(API_CHANNELS.REQUEST_SET_SHAPE, onSetShapeRequested);
}
