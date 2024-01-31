const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

mongoose.connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("connected.....!"))
  .catch((err) => console.log(err));








module.exports = mongoose;