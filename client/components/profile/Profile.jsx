import React from 'react';


class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let coursesComplete = this.props.user.courses.reduce((tot, course) => {
      return course.status === '100%' ? tot + 1 : tot;
    }, 0);

    return (<div style={{wordWrap: 'break-word'}}>
      <img src={this.props.user.picture} className="col-sm-12 col-sm-offset-0 col-xs-10 col-xs-offset-1"/>
      <div className="col-xs-12">
        <h3>{this.props.user.name}</h3>
        <div className="profileItem">
          Member since: {[this.props.user.createdAt.slice(5, 10), this.props.user.createdAt.slice(0, 4)].join('-')}
        </div>
        {/* <div className="profileItem">
          Interests: {this.props.user.interests.join(', ')}
        </div> */}
        <div className="profileItem">
          Courses complete: {coursesComplete}
        </div>
      </div>
    </div>)
  }
}


export default Profile;
