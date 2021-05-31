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

app.use(promMid({
	metricsPath: '/metrics',
	collectDefaultMetrics: true,
	requestDurationBuckets: [0.1, 0.5, 1, 1.5],
	requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
	responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
}));

app.use('/api', indexRouter);

module.exports = app;
