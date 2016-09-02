import React from 'react';
import { withRouter, hashHistory } from 'react-router';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { whereTo: false };
    this.locationHash= window.location.hash;
    this.logout = this.logout.bind(this);
    this.renderLogin = this.renderLogin.bind(this);
    this.renderSignUp = this.renderSignUp.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.whereTo = this.whereTo.bind(this);
  }

  sessionLinks() {
    if (this.props.currentUser) {
      return(
        <div>
          <button onClick={ this.logout }>Logout</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={ this.renderLogin }>Log In</button>
          <button onClick={ this.renderSignUp }>Sign Up</button>
        </div>
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

  whereTo() {
    if (this.locationHash.includes("search")) {
      return <input
        type="text"
        id="autocomplete-search-field"
        placeholder="Where to?" />;
    }
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-logo" onClick={ this.goHome }>
          LOGO
        </div>

        <div className="nav-links left">
          <button onClick={ this.goSearch }>Search</button>
        </div>

        <div className="nav-links right">
          { this.sessionLinks() }
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
