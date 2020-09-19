/**
 * This file will automatically be loaded by webpack and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

import './index.css';
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import { Monitor, TMonitor } from './Monitor/Monitor'

const App: FunctionComponent = () => {
	// to be retrieved from native API I haven't written
	const FakeMonitorData: TMonitor[] = [
		{
			deviceId: "External Display",
			width: 1920,
			height: 1080,
			scaleFactor: 1
		},
		{
			deviceId: "Macbook 13.5",
			width: 2560,
			height: 1600,
			scaleFactor: 1
		}
	]
	return (
		<div>
			{FakeMonitorData.map(monitorProps => (<Monitor {...monitorProps}/>))}
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById("app"))