import React from 'react';
import CourseListItem from './CourseListItem.jsx';

class Courses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseView: false
    };
  }

  toggleCoursesView() {
    this.setState({
      courseView: !this.state.courseView
    });
  }

  render() {
    let courselist = '';
    if (this.state.courseView) {
      courselist = (<ul className="courselist col-xs-12 text-center">
        {this.props.allCourses.map((course, index) => {
          return <li key={index}>{course.name}</li>
        })}
      </ul>);
      // only display courses that have not already been added
    }

    return (<div>
      <button onClick={this.toggleCoursesView.bind(this)} className="btn btn-default col-xs-12">Add course</button>
      {courselist}
      <ul style={{listStyle: 'none'}}>
        {this.props.user.courses.map((course, index) => {
          return <CourseListItem course={course} key={index}/>
        })}
      </ul>
    </div>);
  }
}





export default Courses;
