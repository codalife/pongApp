
var express = require('express');
var path = require('path');
var app = require('express')();
var passport = require('passport');

var models = require('./db');
var game = require('./game');


// app.use(express.session({ secret: 'your secret key' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/signup', (req, res) => {
	res.sendFile(__dirname + '/public/signup.html');
})

app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login',
                                   failureFlash: true })
);



app.use('/static', express.static(path.join(__dirname, '/client/dist/')));
app.use('/logic', express.static(path.join(__dirname, 'public')));

app.get('/play', game);
app.get('/getStat', game);

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
});

app.listen(3000);