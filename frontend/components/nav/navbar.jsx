import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import $ from 'jquery';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { formType: "", username: "", password: "" };
    this.update = this.update.bind(this);
    this.logout = this.logout.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSignup = this.setSignup.bind(this);
    this.whereToSearch = this.whereToSearch.bind(this);
    this.splash = this.splash.bind(this);
    this.userThumbnail = this.userThumbnail.bind(this);
    this.openModal = this.openModal.bind(this);
  }

  componentDidMount() {
    let $modal = $('#modal');
    let $sessionForm = $('#session-form');
    $modal.click(() => {
      $modal.hide();
      $sessionForm.hide();
      this.props.emptyErrors();
    });
    let $navbar = $('.navbar#splash');
    if ($navbar) { $navbar.splashHeaderFollow(); }
  }

  componentDidUpdate() {
    let $navbar = $('.navbar#splash');
    if ($navbar) { $navbar.splashHeaderFollow(); }
  }

  update(fields) {
    this.setState(fields);
  }

  openModal() {
    let $modal = $('#modal');
    let $sessionForm = $('#session-form');
    this.setState({ username: "", password: "" });
    $modal.click(() => {
      $modal.hide();
      $sessionForm.hide();
      this.props.emptyErrors();
    });
    $modal.show();
    $sessionForm.removeClass('animated fadeInDown');
    $sessionForm.show();
    $sessionForm.addClass('animated fadeInDown');
  }

  logout() {
    this.props.logout();
    this.goHome();
  }

  goHome() {
    this.props.router.push("/");
  }

  goSearch() {
    this.props.router.push("/search");
  }

  setLogin(e) {
    this.setState({ formType: "login"});
    this.openModal();
  }

  setSignup(e) {
    this.setState({ formType: "signup"});
    this.openModal();
  }

  splash() {
    let splash = this.props.splash === true ? "splash" : "";
    return splash;
  }

  splashLogo() {
    if (this.props.splash === true) {
      return (
        <img src="https://res.cloudinary.com/dsvkuc936/image/upload/v1473015421/parklender_assets/white-logo-transparent.png"
          className="logo" />
      );
    } else {
      return (
        <img src="https://res.cloudinary.com/dsvkuc936/image/upload/v1473014664/parklender_assets/color-logo.png"
          className="logo" />
      );
    }
  }

  whereToSearch() {
    if (this.props.whereTo === true) {
      return (
        <ul className="nav navbar-nav" id={this.splash()}>
          <li>
            <img className="nav-looking-glass"
              src="https://res.cloudinary.com/dsvkuc936/image/upload/v1473034351/parklender_assets/looking-glass.png" />
          </li>
          <li>
            <input type="text"
              id="autocomplete-search-field"
              className="nav-where-to-input"
              placeholder="Where to?"
              onSubmit={ this.goSearch } />
          </li>
        </ul>
      );
    }
  }

  userThumbnail() {
    if (this.props.currentUser.photo) {
      return this.props.currentUser.photo.thumbnail;
    }
    return "https://res.cloudinary.com/dsvkuc936/image/upload/c_scale,w_47/v1473185243/parklender_assets/default-pic.png";
  }

  sessionLinks() {
    if (this.props.currentUser) {
      return(
        <ul className="nav navbar-nav navbar-right" id={this.splash()}>
          <li>
            <a href={`/users`}>Become a Host</a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" className="text-center"
              data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="true">
              <img src={this.userThumbnail()}
                className="navbar-profile-photo pull-right"/>
              <span className="pull-right"
                id={this.splash()}>{this.props.currentUser.username}</span>
            </a>

            <ul className="dropdown-menu">
              <li><a href="#">Your Bookings</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Your Listings</a></li>
              <li role="separator" className="divider"></li>
              <li><a onClick={this.logout}>Logout</a></li>
            </ul>
          </li>
        </ul>
      );
    } else {
      return (
        <div>
          <ul className="nav navbar-nav navbar-right">
            <li><a onClick={this.setLogin} className="text-center" id={this.splash()}>Log In</a></li>
            <li><a onClick={this.setSignup} className="text-center" id={this.splash()}>Sign Up</a></li>
          </ul>

          <div id="session-form">
            <SessionFormContainer formType={this.state.formType}
              update={this.update} username={this.state.username}
              password={this.state.password}/>
          </div>
        </div>
      );
    }
  }

  render() {

    return (
      <nav className="navbar navbar-default navbar-fixed-top" id={this.splash()}>
        <div className="navbar-collapse collapse">
          <div className="navbar-header pull-left">
            <div className="navbar-brand">
              <a onClick={ this.goHome }>
                { this.splashLogo() }
              </a>
            </div>
          </div>
          { this.whereToSearch() }
          { this.sessionLinks() }
        </div>
        <div id="modal"></div>
      </nav>
    );
  }
}

export default withRouter(NavBar);

$.fn.splashHeaderFollow = function () {
    let $this = this,
        $window = $(window);

    // listen for scroll
    $window.scroll(function (e) {

        // grabs window's scroll position
        let scroll = $window.scrollTop();
        if (scroll <= 400) {
          $this.removeClass('show');
        } else {
          $this.addClass('show');
        }
    });
};

// <li><a href="#">Account Settings</a></li>
// <li role="separator" className="divider"></li>
