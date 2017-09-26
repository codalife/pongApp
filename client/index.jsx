import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.ball = document.getElementById('ball');
    this.state = {
    	player: 1,
    	gameStatus: 'hold',
    	style: {
	    	top: '200px',
	    	left: '200px'
    	}
    }
    this.play = this.play.bind(this);
    this.getStatus = this.getStatus.bind(this);
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
	axios.get('/getStat')
		.then(response => {
			const coord = response.data;
			this.setState({
				style: {
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

  render () {
    return (<div>
      <h1>Hello React</h1>
      <button onClick={this.play}>Start</button>
      <div id='playground'>
      	<div id='ball' style={this.state.style}/>
      </div>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));