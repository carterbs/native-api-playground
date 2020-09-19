import { FunctionComponent } from "react"
import React from 'react';
import "./Monitor.css"
export type TMonitor = {
	deviceId: string,
	width: number,
	height: number,
	scaleFactor: number
}
const MONITOR_CLASS_NAME = "monitor";
export const Monitor: FunctionComponent<TMonitor> = (props)=> {
	return (
		<div className={MONITOR_CLASS_NAME}>
			{JSON.stringify(props, null, 4)}
		</div>
	)
}