// var http = require('http');
var express = require('express');
// var socketClusterServer = require('socketcluster-server');
var path = require('path');
var app = require('express')();
var game = require('./game')

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/play', game);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.listen(3000);