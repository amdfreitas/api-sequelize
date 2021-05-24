const express = require('express');
const consign  = require('consign');
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

consign({cwd:'src'})
    .include('db')
    .then('repository')
    .then('controller')
    .then('model')
    .then('routa')
    .into(app);


module.exports = app;