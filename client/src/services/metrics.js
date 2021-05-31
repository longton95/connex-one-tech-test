const headers = { 'Content-Type': 'application/json', 'Authorization': 'token mysecrettoken' }

export function getMetrics() {
	return fetch("/metrics", { headers })
		.then(data => data.text())
}