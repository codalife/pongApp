const url = require('url');
const Game = require('./serverGame/pong');

const instancesOfPong = [];

module.exports = (req, res, next) => {
	const parsedUrl = url.parse(req.url);

	if (parsedUrl.pathname === '/play') {
		const game = new Game();
		instancesOfPong.push(game);
		game.moveBall();

		res.send('game created');
	} else if (parsedUrl.pathname === '/getStat') {

		const paddle = {};

		parsedUrl.query.split('&').forEach(param => {
			let o = param.split('=');
			paddle[o[0]] = parseInt(o[1].slice(0, -2));
		})
		res.send(instancesOfPong[0].getPosition());
	}
}