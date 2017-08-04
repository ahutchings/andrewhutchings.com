const path = require('path');
const express = require('express');

const app = express();
app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
