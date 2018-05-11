import { isIPv4 } from 'net';

'use strict';

const express = require('express');
const bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser());

app.post('');

const server = app.listen(PORT, (err) => {
    err ? 
    console.log("Errored: "+err) : 
    console.log("server started to listen at port: "+server.address(isIPv4()).address+":"+PORT);
});