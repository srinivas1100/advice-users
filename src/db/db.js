const mongoose = require("mongoose");

const mongoURL = process.env.MONGO_URL;

const connection = mongoose.connect(mongoURL, {});

module.exports = connection;
