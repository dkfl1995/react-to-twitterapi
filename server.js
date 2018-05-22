'use strict';

const net = require('net');
const superagent = require('superagent');
const cors = require('cors');
const path = require('path');

const express = require('express');
const route = express.Router();
const bodyParser = require('body-parser');

var OAuth = require('oauth');

const twitterApiHost = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(path.join(__dirname+'/dist')));

app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://<YOUR-APP-NAME>.herokuapp.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
app.use(bodyParser());
app.use(route);

var parser = bodyParser.json({type: 'application/json'});

//.... then in your controller or whatever
var oauth = new OAuth.OAuth( 'https://api.twitter.com/oauth/request_token', 
                            'https://api.twitter.com/oauth/access_token', 
                            '36hcYBBDBCwvdNsTmrqTuFohn', 
                            'BVkqVsrAfGBqg98nCVOfrb5d0u2F61ldDnb80IoEtJMk5VUNZA',
                            '1.0A', 
                            null, 
                            'HMAC-SHA1' );

route.post('/user-timeline', parser, (req, res) => {
    let {user} = req.body;
    console.log(user);
    var timeline;
    oauth.get( 'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=' + user + '&count=20',  
    '3237301180-fLwe60C3azqTJR6KUL6oiiWvnT6mtNHb5fMvixQ', 
    '53XFtrFH3JuKJdyJt9jkdwRidmJpDWrk70rIBWfPn3eBJ', 
    function (e, data, result){
            var json;
            if (e) console.error(e);
            data ? json = JSON.parse(data) : console.log('No data'); 
            console.log(json);
            res.send(json);
    });
});

route.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/dist/index.html'));
});

const server = app.listen(PORT, (err) => {
    err ? 
    console.log("Errored: "+err) :
    console.log("server started to listen at port: "+PORT);
});