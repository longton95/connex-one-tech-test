import{ createProxyMiddleware } from 'http-proxy-middleware';

module.exports = (app) => {
	app.use(
		'/time',
		createProxyMiddleware({
			target: 'http://backend:3001',
			changeOrigin: true,
		})
	);
	app.use(
		'/metrics',
		createProxyMiddleware({
			target: 'http://backend:3001',
			changeOrigin: true,
		})
	);
};