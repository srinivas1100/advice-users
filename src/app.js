const express = require('express');

require("dotenv").config();
require('./db/db');

const userRouter = require('./users/user_router')

const app = express();

app.use(express.json());

app.use('/v1', userRouter);

module.exports = app;