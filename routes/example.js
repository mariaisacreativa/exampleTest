const express = require('express');
const { exampleFunction } = require('../controller/example');
const example = express.Router();

example.get('/', exampleFunction);

module.exports = example