import { BrowserWindow, ipcMain } from "electron"
import { API_CHANNELS } from "../common/API_Channels";
import NativeAPI from '../../native/build/Release/native-native.node'

const onGetMonitorInfoRequested = (event) => {
	return NativeAPI.getMonitorInfo();
}

// only works on windows and linux. realized it after the fact.
const onSetShapeRequested = (event, rects) => {
	const BW = BrowserWindow.fromWebContents(event.sender);
	BW.setShape(rects);
}
export const listenForAPIRequests = () => {
	ipcMain.handle(API_CHANNELS.REQUEST_SET_SHAPE, onSetShapeRequested);
	ipcMain.handle(API_CHANNELS.REQUEST_MONITOR_INFO, onGetMonitorInfoRequested);
}
