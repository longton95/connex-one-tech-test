import React from "react";
import { getTime } from "../services/time";
import moment from 'moment'




function LeftPanel() {

	const [serverTim, setData] = React.useState(null);
	let localDate = Date.now()
	let serverTime

	React.useEffect(() => {

		getTime().then(data => setData(data.epoch));
		const interval = setInterval(() => {
			getTime().then(data => setData(data.epoch));
			localDate = Date.now()
		}, 30000)

		return () => clearInterval(interval)

	}, []);

	return (

		<div className='splitScreen'>
			<div style={serverTime ? {} : { display: 'none' }}>
				<h2>Time</h2>
				<p>Server epoch: {serverTime}</p>
				<p>local epoch: {localDate}</p>
				<p>serverTime: {moment(serverTime).format("hh:mm:ss")}</p>
				<p>localtime: {moment(localDate).format("hh:mm:ss")}</p>
				<p>difference: {moment(localDate - serverTime).format("hh:mm:ss")}</p>
			</div>
		</div>
	);
}

export default LeftPanel;