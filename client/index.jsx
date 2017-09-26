import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Signup from './components/signup.jsx';
import Pong from './components/pong.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }

  render () {
    let Child
    switch (this.state.route) {
      case '/login': Child = About; break;
      case '/game': Child = Pong; break;
      default:      Child = Signup;
    }
    return (
      <div>
        {this.props.children}
      </div>)
  }
}

ReactDOM.render((
      <Router history={hashHistory} >
        <Route path='/' component={App} >
          <IndexRoute component={Pong} />
        </Route>
      </Router>), document.getElementById('app'));