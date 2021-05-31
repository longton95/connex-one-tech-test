const express = require('express');
const promMid = require('express-prometheus-middleware');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use( (req, res, next) => {

	const auth = { token: 'mysecrettoken' } // should not be done this way but I am following the spec in the time provided

	if (!req.headers.authorization) {
		return res.status(403).json({ error: 'No token sent!' });
	}
	
	const receivedToken = req.headers.authorization.split(' ')[1] || ''

	if (receivedToken === auth.token) {
		next();
	} else {
		return res.status(403).json({ error: 'Auth token not valid' });
	}
});

app.use(promMid({
	metricsPath: '/metrics',
	collectDefaultMetrics: true,
	requestDurationBuckets: [0.1, 0.5, 1, 1.5],
	requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
	responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

app.get('/time', (req, res) => {
	res.json({ epoch: Date.now()});
});

app.use('/api', indexRouter);

module.exports = app;
