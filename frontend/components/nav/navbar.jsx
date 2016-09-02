import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goSearch = this.goSearch.bind(this);
  }

  sessionLinks() {
    if (this.props.currentUser) {
      return(
        <ul>
          <li>
            <a href="#"><img src={this.props.currentUser.photo.thumbnail}
              className="nav-bar-profile-photo"/></a>
            <ul className="profile-dropdown-list">
              <li><a href="#">Your Bookings</a></li>
              <li><a href="#">Your Listings</a></li>
              <li><a href="#">Account Settings</a></li>
              <li><a href="#" onClick={this.logout}>Logout</a></li>
            </ul>
          </li>
          <button onClick={ this.logout }>Logout</button>
        </ul>
      );
    } else {
      return (
        <ul>
          <a onClick={ this.renderLogin }>Log In</a>
          <a onClick={ this.renderSignUp }>Sign Up</a>
        </ul>
      );
    }
  }

  logout() {
    this.props.logout();
    this.props.router.push("/");
  }

  goHome() {
    this.props.router.push("/");
  }

  goSearch() {
    this.props.router.push("/search");
  }

  renderLogin() {
    this.props.router.push("/login");
  }

  renderSignUp() {
    this.props.router.push("/signup");
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-logo" onClick={ this.goHome }>
          LOGO
        </div>

        <div className="nav-links left">
          <a onClick={ this.goSearch }>Search</a>
        </div>

        <div className="nav-links right">
          { this.sessionLinks() }
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
