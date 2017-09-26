// Twilio Credentials
var credentials = require('./secrets/twilio');
var accountSid = credentials.sid;
var authToken = credentials.token;

//require the Twilio module and create a REST client
var client = require('twilio')(accountSid, authToken);

const Twilio = (req, res) => {
	console.log(req.body)
	client.messages.create({
	    to: req.body.number,
	    from: "+14243756408 ",
	    body: req.body.text,
	}, function(err, message) {
		if (err) {
			return res.send('Couldn\'t send text');
		}
	    console.log(message.sid);
	    res.send('Successfully sent text');
	});
}

module.exports = Twilio;