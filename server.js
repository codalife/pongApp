var http = require('http');
var express = require('express');
var socketClusterServer = require('socketcluster-server');
var path = require('path');
var app = require('express')();

app.use('/static', express.static(path.join(__dirname, 'public')));

var httpServer = http.createServer();

// Attach express to our httpServer
httpServer.on('request', app);

// Attach socketcluster-server to our httpServer
var scServer = socketClusterServer.attach(httpServer);

app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

scServer.on('connection', function (socket) {
  // ... Handle new socket connections here
  console.log('connected');
});

httpServer.listen(3000);