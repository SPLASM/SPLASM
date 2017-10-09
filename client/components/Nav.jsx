import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import icon from '../images/nodebook_small_white.png';

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
    return (
      <header>
        <nav className="main-nav navbar navbar-default">
          <div className="container-fluid col-lg-8 col-lg-offset-2">
            <div className="navbar-header">
              <a href="/" className="navbar-brand"><img src={icon}/></a>
              <a href="/" className="navbar-brand brand-text">nodebook</a>
            </div>
            <form className="navbar-form navbar-left">
              <div className="input-group">
                <input list="users" name="user" value={this.state.userVal} onChange={this.changeUserVal.bind(this)} type="text" className="form-control" placeholder="Traverse profiles"/>
                <div className="input-group-btn">
                  <Link replace to={'/search/users/' + this.state.userVal}>
                    <button className="btn btn-default" type="submit">
                      <i className="glyphicon glyphicon-search"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </form>
            { !this.props.user
              ? <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to="/signup">
                    <span className="glyphicon glyphicon-user"></span> Sign Up
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span className="glyphicon glyphicon-log-in"></span> Login
                  </Link>
                </li>
              </ul>
              : <ul className="nav navbar-nav navbar-right">
                <li>
                  <Link to={'/profile/users/' + this.props.user}>
                    <span className="glyphicon glyphicon-tree-deciduous"></span>  Profile
                  </Link>
                </li>
                <li>
                  <Link to="" onClick={this.logout}>
                    <span className="glyphicon glyphicon-log-out"></span> Logout
                  </Link>
                </li>
              </ul>
            }
          </div>
        </nav>
        <datalist id="users">
          {this.state.usersList.map((username, index) => {
            return (<option key={index} value={username}/>);
          })}
        </datalist>
      </header>
    );
  }
}

export default Nav;
