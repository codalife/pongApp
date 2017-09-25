const Game = require('./serverGame/pong')

const g = new Game();
g.moveBall();

const instancesOfPong = {};

module.exports = (req, res, next) => {
	res.send(g.moveBall());
}