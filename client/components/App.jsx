import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';
import Splash from './Splash.jsx';
import Profile from './profile/Profile.jsx';
import Courses from './courses/Courses.jsx';
import Social from './social/Social.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: { id: null, name: '', courses: [], interests: [], picture: '', createdAt: '' },
      courses: [],
      redirect: false,
      edit: false
    };
  }

  componentWillReceiveProps(nextProps) {
    this.fetchUser.call(this, nextProps.match.params.username);
    this.setState({
      edit: nextProps.location.pathname.startsWith('/profile/')
    });
  }

  componentDidMount() {
    this.fetchUser.call(this, this.props.match.params.username);
    this.fetchAllCourses.call(this);
    this.setState({
      edit: this.props.location.pathname.startsWith('/profile/')
    });
  }

  fetchAllCourses() {
    $.ajax({
      url: `./api/courses`,
      type: 'GET',
      success: (res) => {
        this.setState({
          courses: JSON.parse(res)
        });
      },
      error: () => {
        console.log('error adding course');
      }
    });
  }

  addCourse(courseName) {
    $.ajax({
      url: `./api/courses/${courseName}`,
      type: 'POST',
      success: (res) => {
        let parsedRes = JSON.parse(res);
        this.setState({
          activeUser: parsedRes[0]
        });
      },
      error: () => {
        console.log('error adding course');
      }
    });
  }

  fetchUser(username) {
    $.ajax({
      url:`./api/${username}`,
      type: 'GET',
      success: (res) => {
        let parsedRes = JSON.parse(res);
        if (parsedRes.length === 0) {
          this.setState({
            redirect: true
          });
        } else {
          this.setState({
            activeUser: parsedRes[0],
            redirect: false
          });
        }
      },
      error: () => {
        console.log('error fetching user from database')
      }
    });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to='/notfound'/>
    }

    let edit = '';
    if(this.state.edit) {
      edit = 'Can edit this profile! Whoop! REPLACE THIS VALUE WITH EDIT BUTTON COMPONENT, THEN PUT {edit} ANYWHERE IN THE APP DOM COMPONENT BELOW. (If you need to render the edit button inside of profile, pass down the state property "edit" as a prop to that component and render the edit button conditionally based on that prop -- in the same way as done here)';
    }

    return (
      <div className="container col-xs-12">
        {edit}
        <div className="col-sm-3 col-xs-12">
          <Profile user={this.state.activeUser} edit={this.state.edit}/>
        </div>
        <div id="social" className="col-sm-6 col-xs-12">
          <Courses user={this.state.activeUser} allCourses={this.state.courses} addCourse={this.addCourse.bind(this)}/>
        </div>
        <div className="col-sm-3 col-xs-12">
          <Social user={this.state.activeUser}/>
        </div>
      </div>
    );
  }
}

export default App;
