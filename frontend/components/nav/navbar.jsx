import React from 'react';
import { withRouter, hashHistory } from 'react-router';
import Modal from 'react-modal';
import ModalStyle from '../../util/modal_style.js';
import SessionFormContainer from '../session_form/session_form_container';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modalOpen: false, formType: "" };
    this.logout = this.logout.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goSearch = this.goSearch.bind(this);
    this.setLogin = this.setLogin.bind(this);
    this.setSignup = this.setSignup.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.whereToSearch = this.whereToSearch.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.closeModal();
  }

  logout() {
    this.props.logout();
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

  openModal(e) {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false, formType: "" });
  }

  whereToSearch() {
    if (this.props.whereTo === true) {
      return (
        <ul className="nav navbar-nav">
          <li>
            <input type="text" id="autocomplete-search-field"
              placeholder="Where to?" onSubmit={ this.goSearch } />
          </li>
        </ul>
      );
    }
  }

  sessionLinks() {
    if (this.props.currentUser) {
      return(
        <ul className="nav navbar-nav navbar-right">
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" className="text-center"
              data-toggle="dropdown" role="button" aria-haspopup="true"
              aria-expanded="true">
              <img src={this.props.currentUser.photo.thumbnail}
                className="navbar-profile-photo pull-right"/>
              <a className="pull-right">{this.props.currentUser.username}</a>
            </a>

            <ul className="dropdown-menu">
              <li><a href="#">Your Bookings</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Your Listings</a></li>
              <li role="separator" className="divider"></li>
              <li><a href="#">Account Settings</a></li>
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
            <li><a onClick={this.setLogin} className="text-center">Log In</a></li>
            <li><a onClick={this.setSignup} className="text-center">Sign Up</a></li>
          </ul>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            style={ModalStyle}>
              <SessionFormContainer
                formType={this.state.formType}
                closeModal={this.closeModal} />
          </Modal>
        </div>
      );
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container">

          <div className="navbar-header pull-left">
            <div className="navbar-brand">
              <a onClick={ this.goHome }>ParkLender</a>
            </div>
          </div>


          { this.whereToSearch() }

          { this.sessionLinks() }

        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
