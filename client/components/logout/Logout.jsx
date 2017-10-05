import React from 'react';

class Logout extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
  	return (
  		<div>
  		  <h1>See you next time!</h1>
	  		<form action="/logout" method="get">
	  		  <div>
	  		    <input type="submit" value="Log Out"/>
	  		  </div>
	  		</form>
  		</div>
  	);
  }
}

export default Logout;