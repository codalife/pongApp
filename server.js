
var express = require('express');
var path = require('path');
var app = require('express')();
// var passport = require('passport');
var bodyParser = require('body-parser')
// var local = require('./localStategy');
var port = process.env.PORT || 3000;

// var models = require('./db');
var game = require('./game');
// var twilio = require('./twilio');

// var User = models.User;

// app.post('/invite', bodyParser.json(), twilio);
// app.use(express.session({ secret: 'your secret key' }));
// app.use(passport.initialize());
// app.use(passport.session());

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/public/signup.html');
})

// app.post('/signup', bodyParser.urlencoded({ extended: false }), (req, res) => {
// 	console.log(req.body)
// 	const user = new User(req.body);

// 	user.save().then(() => res.redirect('/game'));
// })

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login'})
// );



app.use('/static', express.static(path.join(__dirname, '/client/dist/')));
app.use('/logic', express.static(path.join(__dirname, 'public')));

app.get('/play', game);
app.get('/getStat', game);

app.get('/game', (req, res) => {
	res.sendFile(__dirname + '/public/index.html')
});

app.listen(port);