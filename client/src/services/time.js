const headers = { 'Content-Type': 'application/json', 'Authorization': 'token mysecrettoken' }

export function getTime() {
	return fetch("/time", { headers })
		.then(data => data.json())
}