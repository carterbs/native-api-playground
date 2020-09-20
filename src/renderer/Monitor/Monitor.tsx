import { FunctionComponent } from "react"
import React from 'react';
import "./Monitor.css"
export type TMonitor = {
	displayId: string,
	width: number,
	height: number
}
const MONITOR_CLASS_NAME = "monitor";
export const Monitor: FunctionComponent<TMonitor> = (props)=> {
	return (
		<div className={MONITOR_CLASS_NAME}>
			<div className="resolution">
				Resolution: {props.width} x {props.height}
			</div> 
			<div className="display-id">Display Id: {props.displayId}</div>
		</div>
	)
}