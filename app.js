const express = require('express');
const cors = require('cors');
const db = require('./db/index');
// const { SECRET_KEY } = require('./config');

const contactRoutes = require('./contactMailer');
const usersRoutes = require('./routes/users');
const bucketlistRoutes = require('./routes/bucketlist');
const discussionRoutes = require('./routes/discussion');
const authRoutes = require('./routes/auth');

const morgan = require('morgan');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));

app.use('/:id/contact', contactRoutes);
app.use('/:id/signup', usersRoutes);
app.use('/:id/login', authRoutes);
app.use('/bucket-list', bucketlistRoutes);
app.use('/discussion', discussionRoutes);

app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	console.error(err.stack);
	console.log(req)

	return res.json({
		status: err.status,
		message: err.message,
	});
});

module.exports = app;
