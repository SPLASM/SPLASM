import React from 'react';

class Login extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  		<div>
  		  <h1>Welcome to Splasm!</h1>
  		  <p>Sign in to view your profile.</p>
	  		<form action="/login" method="post">
	  		  <div>
	  		  	<label>Username:</label>
	  		  	<input type="text" name="username"/>
	  		  </div>
	  		  <div>
	  		    <label>Password:</label>
	  		    <input type="password" name="password"/>
	  		  </div>
	  		  <div>
	  		  	<input type="submit" value="Log In"/>
	  		  </div>
	  		</form>
	  		<h3>New user?</h3>
	  		<form action="/signup" method="get">
	  		  <div>
	  		    <input type="submit" value="Sign Up"/>
	  		  </div>
	  		</form>
  		</div>
  	);
  }
}

export default Login;