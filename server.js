'use strict';

const net = require('net');
const superagent = require('superagent');

const express = require('express');
const bodyParser = require('body-parser');

const twitterApiHost = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

var PORT = process.env.PORT || 3000;

var app = express();

app.use(bodyParser());

app.post('/user-timeline', bodyParser.json(), (req, res) => {
    let user = req.body.userName;
    var timeline;
    superagent.get(twitterApiHost)
    .query({screen_name: user})
    .end((err, res) => {
        try {
            timeline = res.body+{name: user};
            return timeline; 
        } catch (err) {
            throw err;
        }
    });
    res.send(timeline);
    console.log("sent the data");
});

const server = app.listen(PORT, (err) => {
    err ? 
    console.log("Errored: "+err) :
    console.log("server started to listen at port: "+PORT);
});