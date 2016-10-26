
import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import SessionFormContainer from '../session_form/session_form_container';
import IMAGES from '../../util/images';
import $ from 'jquery';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: "",
      username: "",
      password: "",
      confirm: "",
      email: "",
      fname: "",
      lname: "",
      center: {},
      zoom: 13
    };
    this.update = this.update.bind(this);
    this.logout = this.logout.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.goListing = this.goListing.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSignup = this.setSignup.bind(this);
    this.whereToSearch = this.whereToSearch.bind(this);
    this.splash = this.splash.bind(this);
    this.userThumbnail = this.userThumbnail.bind(this);
    this.openModal = this.openModal.bind(this);
    this.sendMap = this.sendMap.bind(this);
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
    this.setState({ username: "", password: "", confirm: "",
      email: "", fname: "", lname: "" });
    $modal.click(() => {
      $modal.hide();
      $sessionForm.hide();
      this.props.emptyErrors();
    });
    $modal.show();
    $sessionForm.removeClass('animated fadeIn');
    $sessionForm.show();
    $sessionForm.addClass('animated fadeIn');
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

  sendMap(center, zoom) {
    this.setState({ center: center, zoom: zoom });
    this.props.updateMap(this.state.center, this.state.zoom);
    this.props.router.push("/search");
  }

  goListing() {
    this.props.router.push("/listings/new");
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
        <img src={IMAGES.whiteLogo}
          className="logo" />
      );
    } else {
      return (
        <img src={IMAGES.colorLogo}
          className="logo" />
      );
    }
  }

  whereToSearch() {
    if (this.props.whereTo) {
      return (
        <ul className="nav navbar-nav" id={this.splash()}>
          <li>
            <img className="nav-looking-glass"
              src={IMAGES.lookingGlass} />
          </li>
          <li>
            <input type="text" spellcheck="false"
              id="autocomplete-search-field"
              className="nav-where-to-input"
              placeholder="Where to?"
              onSubmit={ this.goSearch } />
          </li>
        </ul>
      );
    } else {
      return(
        <ul className="nav navbar-nav" id={this.splash()}>
          <li className="host-link">
            <a id={this.splash()} onClick={this.goSearch}>Search</a>
          </li>
        </ul>
      );
    }
  }

  userThumbnail() {
    if (this.props.currentUser.photo) {
      return this.props.currentUser.photo.thumbnail;
    }
    return IMAGES.defaultUserPhoto;
  }

  sessionLinks() {
    if (this.props.currentUser) {

      return(
        <ul className="nav navbar-nav navbar-right" id={this.splash()}>
          <li className="host-link">
            <a id={this.splash()} onClick={this.goListing}>Host a Spot</a>
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
              <li><a href="#/settings">Account Settings</a></li>
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
            <li><a
              onClick={this.setLogin} className="text-center"
              id={this.splash()}>Log In</a></li>
            <li><a onClick={this.setSignup} className="text-center"
              id={this.splash()}>Sign Up</a></li>
          </ul>

          <div id="session-form">
            <SessionFormContainer
              formType={this.state.formType}
              update={this.update}
              username={this.state.username}
              password={this.state.password}
              confirm={this.state.confirm}
              email={this.state.email}
              fname={this.state.fname}
              lname={this.state.lname}
              />
          </div>
        </div>
      );
    }
  }

  render() {

    return (
      <nav className="navbar navbar-default navbar-fixed-top"
        id={this.splash()}>
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
