import React from 'react';
import { Router, Route } from 'react-router-dom';
import Splash from './Splash.jsx';
import Profile from './profile/Profile.jsx';
import Courses from './courses/Courses.jsx';
import Social from './social/Social.jsx';
import $ from 'jquery';

let dummyUser = {
  name: 'Fred',
  courses: [{
    name: 'Intro to JS: Drawing & Animation',
    url: 'https://www.khanacademy.org/computing/computer-programming/programming',
    parent: 'Computer programming',
    status: '50%'
  },
  {
    name: 'Drawing with Code',
    url: 'https://www.khanacademy.org/computing/hour-of-code/hour-of-code-tutorial',
    parent: 'Hour of Code',
    status: '25%'
  }],
  interests: ['javascript', 'coding', 'pizza', 'artificial intelligence'],
  picture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
  createdAt: '2017-10-02 20:45:02'
};
let dummyCourses = [{
    name: 'Intro to JS: Drawing & Animation',
    url: 'https://www.khanacademy.org/computing/computer-programming/programming',
    parent: 'Computer programming',
    status: '50%'
  },
  {
    name: 'Drawing with Code',
    url: 'https://www.khanacademy.org/computing/hour-of-code/hour-of-code-tutorial',
    parent: 'Hour of Code',
    status: '25%'
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: dummyUser,
      courses: dummyCourses
    };
  }

  componentDidMount() {
    this.fetchUser.call(this, this.props.match.params.username);
  }

  fetchUser(username) {
    $.ajax({
      url:`./api/${username}`,
      type: 'GET',
      success: (res) => {
        this.setState({
          activeUser: JSON.parse(res)[0]
        });
      },
      error: () => {
        console.log('error fetching user from database')
      }
    })
  }

  render() {
    return (
      <div className="container col-xs-12">
        <div className="col-sm-3 col-xs-12">
          <Profile user={this.state.activeUser}/>
        </div>
        <div id="social" className="col-sm-6 col-xs-12">
          <Courses user={this.state.activeUser} allCourses={this.state.courses}/>
        </div>
        <div className="col-sm-3 col-xs-12">
          <Social user={this.state.activeUser}/>
        </div>
      </div>
    );
  }
}

export default App;
