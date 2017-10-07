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
    return (<header>
      <nav className="navbar navbar-default main-nav">
        <div className="container-fluid">
          { !this.props.user
            ? <ul className="nav navbar-nav navbar-right action-list">
              <li className="action">
                <Link to="/signup">
                  <span className="glyphicon glyphicon-user"></span> Sign Up
                </Link>
              </li>
              <li className="action">
                <Link to="/login">
                  <span className="glyphicon glyphicon-log-in"></span> Login
                </Link>
              </li>
            </ul>
            : <ul className="nav navbar-nav navbar-right action-list">
              <li><Link to={'/profile/users/' +
                this.props.user}>Profile</Link></li>
              <li>
                <Link to="" onClick={this.logout}>
                  <span className="glyphicon glyphicon-log-out"></span> Logout
                </Link>
              </li>
            </ul>
          }
          <div className="navbar-header">
            <a href="/" className="navbar-brand">NodeBook</a>
          </div>
        </div>
      </nav>
      <nav classname="navbar navbar-default second-nav">
        <ul className="nav navbar-nav navbar-right">
          <li>
            <input list="users" name="user" value={this.state.userVal} onChange={this.changeUserVal.bind(this)}/>
            <datalist id="users">
              {this.state.usersList.map((username, index) => {
                return (<option key={index} value={username}/>);
              })}
            </datalist>
          </li>
          <li>
            <Link replace to={'/search/users/' + this.state.userVal}><button>Search</button></Link>
          </li>
        </ul>
      </nav>
    </header>);
  }
}

export default Nav;
