// const url = require('url');
const Game = require('./serverGame/pong')

const instancesOfPong = [];

module.exports = (req, res, next) => {
	if (req.url === '/play') {
		const game = new Game();
		instancesOfPong.push(game);
		game.moveBall();

		res.send('game created');
	} else if (req.url === '/getStat') {
		// console.log(instancesOfPong[0])
		res.send(instancesOfPong[0].getPosition());
	}
}