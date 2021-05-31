import React from "react";
import { getMetrics } from "../services/metrics";

function RightPanel() {
	const [data, setData] = React.useState(null);

	React.useEffect(() => {

		getMetrics().then(data => setData(data));
		const interval = setInterval(() => {
			getMetrics().then(data => setData(data));
		}, 30000)

		return () => clearInterval(interval)

	}, []);

	return (

		<div className='splitScreen'>
			<h2>Metrics</h2>
			<pre>
				<code className='scroll-view'>{!data ? "Loading..." : data}</code>
			</pre>
		</div>
	);
}

export default RightPanel;