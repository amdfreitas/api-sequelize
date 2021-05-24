const express = require('express');
const consign  = require('consign');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

consign({cwd:'src'})
    .include('db')
    .then('repository')
    .then('controller')
    .then('model')
    .into(app);


module.exports = app;