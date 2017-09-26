import React from 'react';

export default class Pong extends React.Component {
  constructor(props) {
    super(props);
    this.ball = document.getElementById('ball');
    this.state = {
    	player: 1,
    	gameStatus: 'hold',
    	ballStyle: {
	    	top: '200px',
	    	left: '200px'
    	},
    	paddleStyle: {
    		top: '50px',
    		left: '20px'
    	}
    }
    this.play = this.play.bind(this);
    this.getStatus = this.getStatus.bind(this);
    this.movePaddle = this.movePaddle.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this.movePaddle);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.movePaddle);
  }

  play () {
	axios.get('/play')
		.then(response => {
			this.getStatus();
		})
		.catch(function (error) {
			console.log(error);
		});
  }

  getStatus() {
  	const top = this.state.paddleStyle.top;
  	const left = this.state.paddleStyle.left;
	axios.get('/getStat', {params: {
		top: top,
		left: left
	}})
		.then(response => {
			const coord = response.data;
			this.setState({
				ballStyle: {
					top: coord.y + 'px',
					left: coord.x + 'px'
				}
			})
			setTimeout(() => {
				this.getStatus();
			}, 10)
		})
		.catch(function (error) {
			console.log(error);
		});
  }

  movePaddle(e) {
	const newTop = parseInt(this.state.paddleStyle.top.slice(0, -2));

  	if (e.key === 'ArrowUp') {
  		this.setState({
  			paddleStyle: {
  				top: newTop - 30 + 'px',
  				left: this.state.paddleStyle.left
  			}
  		})
  	} else if (e.key === 'ArrowDown') {
  		this.setState({
  			paddleStyle: {
  				top: newTop + 30 + 'px',
  				left: this.state.paddleStyle.left
  			}
  		})
  	}
  }
  render() {
  	return (
	<div>
	  <button onClick={this.play}>Start</button>
      <div id='playground'>
      	<div id='ball' style={this.state.ballStyle} />
      	<div id='player1' style={this.state.paddleStyle} />
      </div>
    </div>
	)
  }
}