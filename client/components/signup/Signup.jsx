import React from 'react';

class Signup extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  		<div>
  		  <h1>Welcome to Splasm!</h1>
  		  <p>You must have an account to use our site.</p>
  		  <p>Enter a username and password to get started.</p>
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
      </div>
  	);
  }
}

export default Signup;

