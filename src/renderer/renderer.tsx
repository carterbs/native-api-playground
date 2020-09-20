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
import React, { FunctionComponent, SetStateAction, Dispatch } from 'react';
import ReactDOM from 'react-dom';
import { Monitor } from './Monitor/Monitor'
const retrieveMonitorInfo = async (setFakeMonitorData:Dispatch<SetStateAction<[]>>) => {
	const monitorInfo = await (window as any).testAPI.getMonitorInfo();

	setFakeMonitorData(monitorInfo.map(JSON.parse));
}
const App: FunctionComponent = () => {
	// to be retrieved from native API I haven't written
	const [shouldRetrieveMonitorInfo, setShouldRetrieveMonitorInfo] = React.useState(false);
	const [fakeMonitorData, setFakeMonitorData] = React.useState([]);
	React.useEffect(() => {
		retrieveMonitorInfo(setFakeMonitorData);
	}, [shouldRetrieveMonitorInfo]);
	
	return (
		<div>
			{shouldRetrieveMonitorInfo && fakeMonitorData.map(monitorProps => (<Monitor {...monitorProps}/>))}
			{!shouldRetrieveMonitorInfo && <div className="info-retriever" onClick={() => setShouldRetrieveMonitorInfo(true)}>Click to retrieve monitor info from native module</div>}
		</div>
	)
}

ReactDOM.render(<App/>, document.getElementById("app"))