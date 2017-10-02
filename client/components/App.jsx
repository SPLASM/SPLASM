import React from 'react';
import Profile from './profile/profile.js';
import Courses from './courses/courses.js';
import Social from './social/social.js';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container col-md-10 col-md-offset-1">
        <div className="col-md-3">
          <Profile />
        </div>
        <div id="social" className="col-md-6">
          <Social />
        </div>
        <div className="col-md-3">
          <Courses />
        </div>
      </div>
    );
  }
}

export default App;
