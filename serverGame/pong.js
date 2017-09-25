class Pong {
	constructor () {
		this.length = 400;
		this.height = 300;
		this.ball = {
			x: 200,
			y: 200
		}
		this.direction = {
			xAxis: Math.floor(Math.random() * 5 + 1),
			yAxis: Math.floor(Math.random() * 5),
		}
	}
	moveBall () {
		const interval = setInterval(() => {
			this.ball = {
				x: this.ball.x + this.direction.xAxis,
				y: this.ball.y + this.direction.yAxis
			}
			if (this.ball.y === 0 || this.ball.y === this.height) {
				this.direction.yAxis = - this.direction.yAxis;
			}
		}, 10);
		return this.ball;

	}
	getPosition() {
		return this.ball();
	}

}

module.exports = Pong;