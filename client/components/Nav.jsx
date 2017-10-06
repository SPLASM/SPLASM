import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usersList: [],
      userVal: '',
      found: false,
      editable: false
    };
    console.log(this.props);
  }

  componentDidMount() {
    $.ajax({
      url: './api/users',
      type: 'GET',
      success: (res) => {
        this.setState({
          usersList: JSON.parse(res).map(obj => (obj.name))
        });
      },
      error: () => {
        console.log('error fetching users from database');
      }
    });
  }

  changeUserVal(event) {
    this.setState({
      userVal: event.target.value
    });
  }

  logout() {
    $.ajax({
      url: '/logout',
      success: res => {
        console.log('You are now logged out.');
        window.location.reload();
      },
      error: err => console.error(err)
    });
  }

  render() {
    return (<header className="col-xs-12">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand">NodeBook</a>
          </div>
          { !this.props.user
            ? <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='/signup'>
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li>
                <Link to='/login'>
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
            : <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to='' onClick={this.logout}>
                  <span className="glyphicon glyphicon-log-out"></span> Logout
                </Link>
              </li>
            </ul>
          }
          <ul className="nav navbar-nav navbar-right">
            <li><Link to={'/profile/users/' + this.props.user}>Profile</Link></li>
          </ul>
        </div>
      </nav>
    </header>);
  }
}

export default Nav;

// <ul className="nav navbar-nav navbar-right">
//   <li><Link to='/'>Home</Link></li>
//   <li><Link to={'/profile/users/' + this.props.user}>Profile</Link></li>
//   <li>
//     <form action="/logout" method="get">
//       <div>
//         <input type="submit" value="Logout"/>
//       </div>
//     </form>
//   </li>
//   <li>
//     <input list="users" name="user" value={this.state.userVal} onChange={this.changeUserVal.bind(this)}/>
//     <datalist id="users">
//       {this.state.usersList.map((username, index) => {
//         return (<option key={index} value={username}/>);
//       })}
//     </datalist>
//   </li>
//   <li>
//     <Link replace to={'/search/users/' + this.state.userVal}><button>Search</button></Link>
//   </li>
// </ul>
