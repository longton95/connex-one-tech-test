import React from "react";
import { getTime } from "../services/time";
import moment from 'moment'

// var diff


function LeftPanel() {

	const [localDate, setlocalDate] = React.useState(null);
	const [serverTime, setserverTime] = React.useState(null);



	React.useEffect(() => {
		setlocalDate(Date.now());
		getTime().then(data => setserverTime(data.epoch));

		setInterval(() => {
			setlocalDate(Date.now());
		}, 1000)

		getTime().then(data => setserverTime(data.epoch));
		const interval = setInterval(() => {
			getTime().then(data => setserverTime(data.epoch));
		}, 30000)

		return () => clearInterval(interval)

	}, []);

	return (
		<div className='splitScreen'>
			<div>
				<h2>Time</h2>
				<p>Server epoch: {serverTime}</p>
				<p>local epoch: {localDate}</p>
				<p>serverTime: {moment(serverTime).format("hh:mm:ss")}</p>
				<p>localtime: {moment(localDate).format("hh:mm:ss")}</p>
				<p>difference: {moment.utc(moment(moment(localDate), "DD/MM/YYYY HH:mm:ss").diff(moment(moment(serverTime), "DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")}</p>
			</div>
		</div>
	);
}

export default LeftPanel;