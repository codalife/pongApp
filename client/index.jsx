import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

import Signup from './components/signup.jsx';
import Pong from './components/pong.jsx';

class App extends React.Component {

  render () {
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