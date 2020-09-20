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
			<div className="width">Width: {props.width}</div>
			<div className="height">Height: {props.height}</div>
			<div className="display-id">Height: {props.displayId}</div>
		</div>
	)
}