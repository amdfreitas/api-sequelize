const express = require('express');
const consign  = require('consign');
const app = express();
const tipserializar = require('./src/util/serializador');

app.use(express.urlencoded({ extended: true}));
app.use(express.json());


app.use((req,res,next) => {

        let formatHeader = req.header('Accept');

       if(formatHeader === '*/*'){
            formatHeader = 'application/json'
       }
        if(tipserializar().tipSerielizador.indexOf(formatHeader) === -1){
            res.status(406);
            res.end();
            return;
        }

        res.setHeader('Content-Type',formatHeader);

        return next();
    
    });  

    consign({cwd:'src'})
            .include('db')
            .then('util')
            .then('repository')
            .then('controller')
            .then('model')
            .then('routa')
            .into(app);


module.exports = app;