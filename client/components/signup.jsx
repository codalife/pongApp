import React from 'react';

export default class Signup extends React.Component {

	render() {
		return (
				<form action="/signup" method="post">
				    <div>
				        <label>Username:</label>
				        <input type="text" name="username"/>
				    </div>
				    <div>
				        <label>Password:</label>
				        <input type="password" name="password"/>
				    </div>
				    <div>
				        <input type="submit" value="Sign Up"/>
				    </div>
				</form>
			)
	}
}